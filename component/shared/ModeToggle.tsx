"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-10 text-white cursor-pointer items-center justify-center"
    >
      <MoonIcon
        size={40}
        className="scale-100 rotate-0 transition-all duration-200 dark:scale-0 dark:rotate-90"
      />
      <SunIcon
        size={40}
        className="absolute scale-0 rotate-90 transition-all duration-200 dark:scale-100 dark:rotate-0"
      />
    </button>
  );
};
