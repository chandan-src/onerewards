import { clsx, type classnameValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: classnameValue[]) {
  return twMerge(clsx(inputs))
}
