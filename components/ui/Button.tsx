"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "blue";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-dark shadow-[0_2px_12px_rgba(245,93,0,0.3)] hover:shadow-[0_4px_24px_rgba(245,93,0,0.4)]",
  secondary:
    "bg-transparent text-ink border border-border hover:border-ink hover:bg-surface",
  ghost: "bg-transparent text-muted hover:text-ink",
  blue: "bg-blue text-white hover:bg-blue-mid shadow-[0_2px_12px_rgba(27,58,107,0.25)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, href, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
