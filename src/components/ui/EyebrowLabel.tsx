import React from "react";
import { cx } from "@/lib/utils";

export interface EyebrowLabelProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  variant?: "teal" | "orange" | "sage" | "charcoal" | "cream";
  withDash?: boolean;
}

export const EyebrowLabel: React.FC<EyebrowLabelProps> = ({
  as: Component = "span",
  variant = "teal",
  withDash = false,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    teal: "text-teal",
    orange: "text-burnt-orange",
    sage: "text-sage",
    charcoal: "text-charcoal-muted",
    cream: "text-cream/80",
  };

  return (
    <Component
      className={cx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {withDash && <span className="inline-block h-px w-4 bg-current opacity-60" />}
      <span>{children}</span>
    </Component>
  );
};

export default EyebrowLabel;
