"use client";

import type { ReactNode } from "react";
import { EcommerceProvider } from "@/lib/ecommerce";

export default function Providers({ children }: { children: ReactNode }) {
  return <EcommerceProvider>{children}</EcommerceProvider>;
}
