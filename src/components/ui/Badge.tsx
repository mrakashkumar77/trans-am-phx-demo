import React from "react";
import { cx } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "teal" | "orange" | "sage" | "charcoal" | "cream" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "teal",
  size = "md",
  ...props
}) => {
  // Editorial tag: crisp subtle rounding, clear typography
  const baseStyles =
    "inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider rounded-xs transition-colors";

  const variantStyles = {
    teal: "bg-teal/10 text-teal border border-teal/25",
    orange: "bg-burnt-orange/10 text-burnt-orange border border-burnt-orange/30",
    sage: "bg-sage/25 text-charcoal border border-sage/40",
    charcoal: "bg-charcoal text-cream border border-charcoal",
    cream: "bg-cream text-charcoal border border-charcoal/20",
    outline: "bg-transparent text-charcoal-muted border border-charcoal/20",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={cx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
