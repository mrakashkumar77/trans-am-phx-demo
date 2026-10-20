"use client";

import React, { useEffect, useRef } from "react";
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-focus close button on modal open and handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    // Small delay to ensure modal element is in DOM
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

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
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-description"
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
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2.5 rounded-xs text-charcoal hover:text-teal hover:bg-charcoal/5 focus-visible:outline-2 focus-visible:outline-teal transition-colors cursor-pointer"
            aria-label="Close image lightbox (Escape)"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-charcoal flex items-center justify-center overflow-hidden">
          <Image
            src={item.image}
            alt={`${item.title} — ${item.category} visual display at Trans Am Cafe`}
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
              className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2.5 rounded-xs bg-charcoal/70 text-cream hover:bg-charcoal hover:text-burnt-orange focus-visible:outline-2 focus-visible:outline-cream backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2.5 rounded-xs bg-charcoal/70 text-cream hover:bg-charcoal hover:text-burnt-orange focus-visible:outline-2 focus-visible:outline-cream backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-5 sm:p-6 bg-white border-t border-charcoal/10">
          <h3 id="lightbox-title" className="font-display font-bold text-xl sm:text-2xl text-teal mb-1">
            {item.title}
          </h3>
          <p id="lightbox-description" className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
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
