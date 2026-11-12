import Image from "next/image";
import { cn } from "@/lib/utils";

export const BRAND_NAME = "Motoaid CRM";

export function BrandLogo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt={BRAND_NAME}
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  );
}
