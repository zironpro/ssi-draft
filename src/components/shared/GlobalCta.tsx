"use client";

import { usePathname } from "next/navigation";
import { Cta } from "./cta";

export function GlobalCta() {
  const pathname = usePathname();
  
  // Don't show CTA on the quote or contact pages since they are already conversion pages
  if (pathname === '/quote' || pathname === '/contact') {
    return null;
  }

  return <Cta />;
}
