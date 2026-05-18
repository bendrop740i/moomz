"use client";

import { useEffect } from "react";
import { markPollSeen } from "./actions";

export default function MarkSeenIfOwner({
  slug,
  voteCount,
}: {
  slug: string;
  voteCount: number;
}) {
  useEffect(() => {
    const raw =
      typeof document !== "undefined"
        ? document.cookie.match(/(?:^|;\s*)moomz_created_slugs=([^;]+)/)?.[1]
        : null;
    if (!raw) return;
    const list = decodeURIComponent(raw).split(",");
    if (!list.includes(slug)) return;
    markPollSeen(slug, voteCount).catch(() => {});
  }, [slug, voteCount]);
  return null;
}
