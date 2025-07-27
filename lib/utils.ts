// lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // or "tailwind-merge" if using that instead

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
