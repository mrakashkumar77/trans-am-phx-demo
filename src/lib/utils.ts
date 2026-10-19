// ─────────────────────────────────────────────
//  Trans Am Cafe — Utility Functions
// ─────────────────────────────────────────────

/**
 * Formats a price number as a USD currency string.
 * e.g., 14.5 → "$14.50"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Creates a cx (class names) helper — a lightweight alternative to clsx.
 * Accepts strings, undefined, null, and false values; filters falsy ones out.
 */
export function cx(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Convenient alias for cx
 */
export const cn = cx;

