import React from "react";
import { cx } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "narrow" | "sm" | "md" | "lg" | "xl" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  size = "lg",
  className,
  children,
  ...props
}) => {
  const sizeStyles = {
    narrow: "max-w-2xl",
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[85rem]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
