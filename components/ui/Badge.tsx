import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "blue" | "subtle";
  className?: string;
}

export function Badge({ children, variant = "subtle", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold tracking-wide",
        variant === "orange" && "bg-orange/10 text-orange",
        variant === "blue" && "bg-blue-pale text-blue",
        variant === "subtle" && "bg-surface text-muted border border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
