import React from "react";
import Image from "next/image";
import type { MenuItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

export interface MenuItemCardProps {
  item: MenuItem;
  className?: string;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, className }) => {
  const hasImage = Boolean(item.image);

  return (
    <article
      className={`group relative flex flex-col justify-between h-full bg-white rounded-xs border border-charcoal/10 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/25 hover:shadow-md motion-reduce:hover:transform-none motion-reduce:transition-none ${
        className ?? ""
      }`}
    >
      <div>
        {/* Optional Image Header */}
        {hasImage && item.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xs bg-cream-soft border-b border-charcoal/10">
            <Image
              src={item.image}
              alt={`${item.name} handcrafted sandwich at Trans Am Cafe`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
            />
            {item.featured && (
              <div className="absolute top-2.5 left-2.5">
                <Badge variant="orange" size="sm">
                  Chef Highlight
                </Badge>
              </div>
            )}
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Header Row: Title and Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display font-bold text-lg sm:text-xl text-charcoal group-hover:text-teal transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="font-mono text-base font-bold text-burnt-orange-dark shrink-0">
              {formatPrice(item.price)}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer Tags & Category */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex flex-wrap items-center justify-between gap-2 border-t border-charcoal/5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-subtle">
          {item.category}
        </span>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant={
                  tag === "signature" || tag === "popular"
                    ? "orange"
                    : tag === "vegetarian" || tag === "vegan"
                    ? "sage"
                    : "teal"
                }
                size="sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItemCard;
