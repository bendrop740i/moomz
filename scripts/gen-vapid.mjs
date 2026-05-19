// One-shot VAPID keypair generator. Run once, paste the values into Vercel env:
//   NEXT_PUBLIC_VAPID_PUBLIC_KEY  (public — exposed to the browser, fine)
//   VAPID_PRIVATE_KEY             (server-only — used to sign push payloads)
//
//   node scripts/gen-vapid.mjs
//
// Prints the keys + a ready-to-paste block. Do NOT commit the private key.

import webpush from "web-push";

const keys = webpush.generateVAPIDKeys();

console.log("NEXT_PUBLIC_VAPID_PUBLIC_KEY =", keys.publicKey);
console.log("VAPID_PRIVATE_KEY            =", keys.privateKey);
console.log();
console.log("--- .env.local additions ---");
console.log(`NEXT_PUBLIC_VAPID_PUBLIC_KEY=${keys.publicKey}`);
console.log(`VAPID_PRIVATE_KEY=${keys.privateKey}`);
console.log(`VAPID_SUBJECT=mailto:bendrop740i@gmail.com`);
