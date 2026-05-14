import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const cottonCandyBackground =
  "linear-gradient(45deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)";

export type CottonCandyGradientProps = {
  className?: string;
  children?: ReactNode;
};

/** Variante “cotton candy sky” del segundo snippet (demo). */
export function CottonCandyGradient({
  className,
  children,
}: CottonCandyGradientProps) {
  return (
    <div className={cn("relative min-h-screen w-full", className)}>
      <div
        className="absolute inset-0 z-0"
        style={{ background: cottonCandyBackground }}
        aria-hidden
      />
      {children != null ? (
        <div className="relative z-10">{children}</div>
      ) : null}
    </div>
  );
}

export default function CottonCandyGradientDemo() {
  return <CottonCandyGradient />;
}
