import { headers } from "next/headers";

export type Direction = "ltr" | "rtl";

/**
 * Detects whether the current request should render right-to-left.
 *
 * The UI locale type does not include Arabic — Arabic content only ships via
 * SEO seed polls. But we still want the page chrome (margins, scroll, flex
 * directions, etc.) to flip when an Arabic-preferring user lands on the site,
 * so we sniff `Accept-Language` directly here.
 */
export function getDirection(): Direction {
  const al = headers().get("accept-language") || "";
  if (/^\s*ar\b/i.test(al)) return "rtl";
  return "ltr";
}
