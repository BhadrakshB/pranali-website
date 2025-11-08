"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageOverlayProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationClass?: string;
}

export default function ImageOverlay({
  src,
  alt,
  width,
  height,
  className = "",
  animationClass = "",
}: ImageOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={animationClass}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} cursor-pointer`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
