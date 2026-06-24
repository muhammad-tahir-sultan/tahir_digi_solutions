"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type ScriptBoxProps = {
  children: string;
  subject?: string;
};

export function ScriptBox({ children, subject }: ScriptBoxProps) {
  const [copied, setCopied] = useState(false);

  const copyText = subject ? `${subject}\n\n${children}` : children;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="script-wrap">
      <pre className="script-box">{children}</pre>
      <button
        type="button"
        className={cn("copy-btn no-print", copied && "copy-btn--copied")}
        onClick={handleCopy}
        aria-label={copied ? "Copied!" : "Copy to clipboard"}
        title={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  );
}
