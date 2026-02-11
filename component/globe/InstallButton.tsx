"use client";

import { Button } from "@/component/ui/button";
import { useState } from "react";

export default function CopyInstall({
  command = "npm i cobe motion",
  className = "",
}: {
  command?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    } catch {
      // fallback for older browsers
    }

    try {
      const ta = document.createElement("textarea");
      ta.value = command;
      // keep off-screen
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Copy failed — please select the text and copy manually.");
      console.error("copy failed", err);
    }
  };

  return (
    <div className="flex w-full flex-col justify-start space-y-2 sm:space-y-3">
      <p className="text-sm font-medium text-slate-700 sm:text-base">
        Copy to your terminal
      </p>
      <div
        className={`flex w-full flex-col items-stretch gap-2 rounded-lg border border-slate-700/50 bg-slate-900 px-3 py-3 shadow-lg sm:flex-row sm:items-center sm:px-4 ${className}`}
      >
        <span
          className="flex-1 py-2 font-mono text-xs break-all text-slate-200 select-all sm:py-0 sm:text-sm sm:break-normal"
          aria-label={`Install command: ${command}`}
          title="Click the button to copy the command"
        >
          {command}
        </span>

        <Button
          type="button"
          onClick={handleCopy}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:from-blue-700 hover:to-cyan-700 sm:w-auto"
          aria-pressed={copied}
          aria-label="Copy install command"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
