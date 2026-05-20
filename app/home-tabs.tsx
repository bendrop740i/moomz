"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Tab = { id: string; label: string; emoji?: string };

type HomeTabsProps = {
  tabs: Tab[];
  children: React.ReactNode;
};

export default function HomeTabs({ tabs, children }: HomeTabsProps) {
  const [activeId, setActiveId] = useState<string>(tabs[0]?.id ?? "");
  const [underline, setUnderline] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Hydrate from sessionStorage on mount.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("moomz_home_tab");
      if (saved && tabs.some((t) => t.id === saved)) {
        setActiveId(saved);
      }
    } catch {
      // sessionStorage may be unavailable (private mode, etc.)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist + broadcast whenever activeId changes.
  useEffect(() => {
    if (!activeId) return;
    try {
      sessionStorage.setItem("moomz_home_tab", activeId);
    } catch {
      // ignore
    }
    try {
      window.dispatchEvent(
        new CustomEvent("moomz:hometab", { detail: activeId })
      );
    } catch {
      // ignore
    }
  }, [activeId]);

  // Measure the active tab's button to position the underline.
  const measure = () => {
    const container = containerRef.current;
    const btn = buttonRefs.current[activeId];
    if (!container || !btn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setUnderline({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, tabs.length]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  return (
    <div className="sticky top-0 z-20 backdrop-blur-md bg-[#0b0613]/80 border-b border-white/5 py-2 -mx-5 px-5">
      <div ref={containerRef} className="relative flex items-center gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                buttonRefs.current[tab.id] = el;
              }}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={
                "relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors " +
                (isActive
                  ? "bg-white/10 border border-white/15 text-white"
                  : "border border-transparent text-white/50 hover:text-white/80")
              }
            >
              {tab.emoji ? <span aria-hidden>{tab.emoji}</span> : null}
              <span>{tab.label}</span>
            </button>
          );
        })}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-2 h-[2px] bg-pink-500 rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${underline.left}px`,
            width: `${underline.width}px`,
          }}
        />
      </div>
      <div
        key={activeId}
        className="mt-3 animate-[fade-up_200ms_ease-out_both]"
      >
        {children}
      </div>
    </div>
  );
}
