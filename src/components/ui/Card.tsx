import React from "react";
import { cx } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "cream" | "dark" | "outlined";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "surface",
      hoverEffect = true,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      // Clean white card on warm cream canvas
      surface: "bg-white border border-charcoal/10 text-charcoal shadow-[0_2px_8px_rgba(32,35,33,0.04)]",
      // Tonal cream card
      cream: "bg-cream-surface border border-charcoal/15 text-charcoal",
      // Deep dark card for high contrast feature callouts
      dark: "bg-charcoal border border-charcoal text-cream shadow-md",
      // Minimalist outlined frame
      outlined: "bg-transparent border border-charcoal/20 text-charcoal",
    };

    return (
      <div
        ref={ref}
        className={cx(
          "rounded-sm p-6 sm:p-8 transition-all duration-200",
          variantStyles[variant],
          hoverEffect
            ? "hover:-translate-y-1 hover:border-charcoal/30 hover:shadow-[0_8px_20px_rgba(32,35,33,0.08)]"
            : "",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cx("mb-4 flex flex-col gap-2", className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={cx(
      "font-display text-xl sm:text-2xl font-bold tracking-tight text-inherit",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, children, ...props }) => (
  <p className={cx("text-sm text-charcoal-muted", className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cx("text-sm leading-relaxed text-inherit", className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cx(
      "mt-6 flex items-center justify-between pt-4 border-t border-charcoal/10 text-xs",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;
