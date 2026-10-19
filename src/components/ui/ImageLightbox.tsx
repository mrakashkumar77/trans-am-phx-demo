"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface ImageLightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  // Handle keyboard interaction (Escape to close, Arrows to navigate)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} image preview`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 sm:p-6 lg:p-10 transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Content Container */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-cream rounded-xs border border-charcoal/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-charcoal/10 bg-cream-surface">
          <div className="flex items-center gap-2">
            <Badge variant="teal" size="sm">
              {item.category}
            </Badge>
            {item.mediumOrTheme && (
              <span className="text-xs font-mono text-charcoal-muted hidden sm:inline-block">
                · {item.mediumOrTheme}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center p-1.5 rounded-xs text-charcoal hover:text-teal hover:bg-charcoal/5 focus-visible:outline-2 focus-visible:outline-teal transition-colors"
            aria-label="Close image lightbox (Escape)"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-charcoal flex items-center justify-center overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain"
            priority
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xs bg-charcoal/60 text-cream hover:bg-charcoal hover:text-burnt-orange focus-visible:outline-2 focus-visible:outline-teal backdrop-blur-xs transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xs bg-charcoal/60 text-cream hover:bg-charcoal hover:text-burnt-orange focus-visible:outline-2 focus-visible:outline-teal backdrop-blur-xs transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-5 sm:p-6 bg-white border-t border-charcoal/10">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-teal mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            {item.description}
          </p>
          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-charcoal-subtle pt-2 border-t border-charcoal/5">
            <span>TRANS AM CAFE · GALLERY EXHIBITION</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
