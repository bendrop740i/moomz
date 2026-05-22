// One-shot Web Push env setup.
//   node scripts/setup-push-env.mjs
//
// Generates a VAPID keypair, fetches the Supabase service-role key via the
// Management API (PAT from .secrets.txt), and writes all four env vars to
// .env.development.local, .env.production.local and .secrets.txt.
//
// Secrets are written to files only — never printed. Re-running is a no-op if
// the keys are already present. After running, paste the four vars from
// .secrets.txt into the Vercel project env (production) and redeploy.

import webpush from "web-push";
import { readFileSync, appendFileSync, existsSync } from "fs";

const PROJECT_REF = "tpncpfatthgssttzrchu";
const SUBJECT = "mailto:bendrop740i@gmail.com";
const TARGET_FILES = [".env.development.local", ".env.production.local", ".secrets.txt"];

function alreadyConfigured() {
  for (const f of TARGET_FILES) {
    if (existsSync(f) && readFileSync(f, "utf8").includes("NEXT_PUBLIC_VAPID_PUBLIC_KEY=")) {
      return true;
    }
  }
  return false;
}

if (alreadyConfigured()) {
  console.log("VAPID keys already present in an env file — nothing to do.");
  process.exit(0);
}

const vapid = webpush.generateVAPIDKeys();

// --- service-role key via the Supabase Management API -----------------------
let serviceRole = "";
try {
  const secrets = existsSync(".secrets.txt") ? readFileSync(".secrets.txt", "utf8") : "";
  const pat = (secrets.match(/sbp_[A-Za-z0-9]+/) || [])[0];
  if (pat) {
    const res = await fetch(
      `https://api.supabase.com/v1/projects/${PROJECT_REF}/api-keys?reveal=true`,
      { headers: { Authorization: `Bearer ${pat}` } },
    );
    if (res.ok) {
      const keys = await res.json();
      const sr = Array.isArray(keys)
        ? keys.find((k) => (k.name || k.type || "").includes("service_role"))
        : null;
      serviceRole = sr?.api_key || sr?.secret || "";
    } else {
      console.log("Management API returned", res.status, "- service-role key not fetched.");
    }
  }
} catch (e) {
  console.log("Could not fetch service-role key:", e.message);
}

const block = `

# --- Web Push (added ${new Date().toISOString().slice(0, 10)}) ---
NEXT_PUBLIC_VAPID_PUBLIC_KEY=${vapid.publicKey}
VAPID_PRIVATE_KEY=${vapid.privateKey}
VAPID_SUBJECT=${SUBJECT}
${
  serviceRole
    ? `SUPABASE_SERVICE_ROLE_KEY=${serviceRole}`
    : "# SUPABASE_SERVICE_ROLE_KEY=  <-- get it from Supabase dashboard > Settings > API"
}
`;

for (const f of TARGET_FILES) {
  if (existsSync(f)) appendFileSync(f, block);
}

console.log("VAPID public key :", vapid.publicKey);
console.log("Service-role key :", serviceRole ? "fetched ✓" : "NOT fetched — add manually");
console.log("Written to       :", TARGET_FILES.filter((f) => existsSync(f)).join(", "));
