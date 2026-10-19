import React from "react";
import Link from "next/link";
import { cx } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    // Editorial aesthetic: clean, architectural corners (not excessive pill shapes)
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal rounded-sm";

    const variantStyles = {
      // Primary: Deep Teal anchor with Warm Cream text
      primary:
        "bg-teal text-cream hover:bg-teal-light hover:-translate-y-0.5 shadow-sm active:translate-y-0",
      // Secondary: Burnt Orange accent with White text
      secondary:
        "bg-burnt-orange text-white hover:bg-burnt-orange-dark hover:-translate-y-0.5 shadow-sm active:translate-y-0",
      // Outline: Thin border with Deep Teal typography
      outline:
        "border border-teal text-teal bg-transparent hover:bg-teal hover:text-cream hover:-translate-y-0.5 active:translate-y-0",
      // Outline Dark: For dark charcoal / teal container backgrounds
      "outline-dark":
        "border border-cream/40 text-cream bg-transparent hover:bg-cream hover:text-teal hover:-translate-y-0.5 active:translate-y-0",
      // Ghost: Minimal text button with subtle hover tone
      ghost:
        "text-charcoal hover:bg-charcoal/5 hover:text-teal active:bg-charcoal/10",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 uppercase tracking-wider font-semibold",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClassName = cx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? "w-full" : "",
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
