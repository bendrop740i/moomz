import { cookies } from "next/headers";

export function readSlugHistory(cookieName: string): string[] {
  const raw = cookies().get(cookieName)?.value;
  if (!raw) return [];
  return raw.split(",").filter(Boolean);
}
