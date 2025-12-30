"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderText?: string;
  priority?: boolean;
  fill?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className = "",
  placeholderText,
  priority = false,
  fill = false,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // If no src provided or error loading, show placeholder
  if (!src || hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-400 ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
        <span className="text-sm text-center px-4">
          {placeholderText || alt}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        priority={priority}
      />
    </div>
  );
}

