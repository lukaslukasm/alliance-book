import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyMuted({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
}
