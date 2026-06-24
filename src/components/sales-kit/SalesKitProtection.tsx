"use client";

import { useEffect } from "react";

export function SalesKitProtection() {
  useEffect(() => {
    const blockContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const blockShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const ctrl = event.ctrlKey || event.metaKey;
      const shift = event.shiftKey;

      if (key === "f12") {
        event.preventDefault();
        return;
      }

      if (!ctrl) return;

      if (key === "u" || key === "s") {
        event.preventDefault();
        return;
      }

      if (shift && (key === "i" || key === "j" || key === "c")) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockShortcuts);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockShortcuts);
    };
  }, []);

  return null;
}
