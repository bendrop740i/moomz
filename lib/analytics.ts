"use client";
import { track } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

export function trackEvent(event: string, props?: Props) {
  try {
    track(event, props);
  } catch {
    // analytics never blocks UX
  }
}
