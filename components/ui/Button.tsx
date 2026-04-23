"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[var(--color-signal)] text-white shadow-[0_18px_40px_rgba(236,107,44,0.22)] hover:bg-[var(--color-signal-strong)]",
  secondary:
    "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-blue)] hover:bg-[var(--color-panel-soft)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-panel-soft)]",
  dark:
    "border border-[color:rgba(255,255,255,0.14)] bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-soft)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      href,
      size = "md",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) => {
    const isExternalLink =
      typeof href === "string" &&
      (href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:"));

    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-signal)] focus-visible:ring-offset-2",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (href && isExternalLink) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }

    if (href) {
      return (
        <Link className={classes} href={href}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} type={type} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
