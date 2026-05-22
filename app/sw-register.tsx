"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    let reg: ServiceWorkerRegistration | null = null;

    const register = async () => {
      try {
        reg = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          // Don't let HTTP cache pin the SW — always check the network on update.
          updateViaCache: "none",
        });
      } catch {
        // ignore
      }
    };

    const triggerUpdate = () => {
      if (reg) reg.update().catch(() => {});
    };

    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
    }

    // Refresh the SW when the tab regains focus — catches new builds quickly.
    // `focus` alone is enough; `visibilitychange` also fires on every tab
    // switch / phone unlock, which just churned the SW for no benefit.
    window.addEventListener("focus", triggerUpdate);

    return () => {
      window.removeEventListener("focus", triggerUpdate);
    };
  }, []);

  return null;
}
