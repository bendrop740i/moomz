"use client";

import { useState, type ReactNode } from "react";
import { useT } from "@/app/locale-context";

export default function ProfileTabs({
  pollsCount,
  askCount,
  polls,
  ask,
}: {
  pollsCount: number;
  askCount: number;
  polls: ReactNode;
  ask: ReactNode;
}) {
  const t = useT();
  const [tab, setTab] = useState<"polls" | "ask">(askCount > 0 ? "ask" : "polls");

  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-1 flex gap-1 text-sm font-semibold">
        <TabBtn active={tab === "polls"} onClick={() => setTab("polls")}>
          {t("ask.tab.polls")}
          <span className="ml-1.5 text-[10px] text-white/40">{pollsCount}</span>
        </TabBtn>
        <TabBtn active={tab === "ask"} onClick={() => setTab("ask")}>
          {t("ask.tab.ask")}
          {askCount > 0 && (
            <span className="ml-1.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-pink-500 text-white text-[10px] font-bold">
              {askCount}
            </span>
          )}
        </TabBtn>
      </div>
      <div className={tab === "polls" ? "block" : "hidden"}>{polls}</div>
      <div className={tab === "ask" ? "block" : "hidden"}>{ask}</div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-xl py-2.5 transition flex items-center justify-center gap-1 ${
        active
          ? "bg-gradient-to-r from-pink-500/30 to-purple-500/30 border border-pink-400/30 text-white"
          : "text-white/50 hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}
