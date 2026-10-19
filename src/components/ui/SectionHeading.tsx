import React from "react";
import { cx } from "@/lib/utils";
import { EyebrowLabel } from "./EyebrowLabel";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  eyebrowVariant?: "teal" | "orange" | "sage" | "charcoal" | "cream";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  withRule?: boolean;
  ruleVariant?: "teal" | "orange" | "cream" | "none";
  theme?: "light" | "dark";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = "teal",
  title,
  subtitle,
  align = "center",
  withRule = true,
  ruleVariant = "teal",
  theme = "light",
  className,
  ...props
}) => {
  const isDark = theme === "dark";

  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const ruleAlignment = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  const ruleStyles = {
    teal: "bg-teal",
    orange: "bg-burnt-orange",
    cream: "bg-cream",
    none: "hidden",
  };

  return (
    <div
      className={cx("flex flex-col mb-12 sm:mb-16", alignmentStyles[align], className)}
      {...props}
    >
      {eyebrow && (
        <div className="mb-3">
          <EyebrowLabel
            variant={isDark ? "cream" : eyebrowVariant}
            withDash
          >
            {eyebrow}
          </EyebrowLabel>
        </div>
      )}

      <h2
        className={cx(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]",
          isDark ? "text-cream" : "text-charcoal"
        )}
      >
        {title}
      </h2>

      {withRule && ruleVariant !== "none" && (
        <div
          className={cx(
            "my-4 h-0.5 w-12 transition-all",
            ruleStyles[ruleVariant],
            ruleAlignment[align]
          )}
        />
      )}

      {subtitle && (
        <p
          className={cx(
            "max-w-2xl text-base sm:text-lg leading-relaxed mt-2",
            isDark ? "text-cream/80" : "text-charcoal-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
