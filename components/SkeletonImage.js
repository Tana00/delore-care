"use client";

import { useState } from "react";
import Image from "next/image";

const SkeletonImage = ({ className, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative ${props.width ? `w-[${props.width}px]` : "w-full"} ${
        props.height ? `h-[${props.height}px]` : "h-full"
      } ${props.hide}`}
    >
      {/* Skeleton overlay */}
      {!loaded && (
        <div
          className={`${className} absolute inset-0 shimmer rounded-2xl md:rounded-none z-0`}
        />
      )}

      {/* Image */}
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default SkeletonImage;

export const SkeletonHeroImage = ({ className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-[#e6ecf2] overflow-hidden rounded-2xl z-0">
          <div className="w-full h-full animate-[shimmerLight_1.5s_infinite] bg-gradient-to-r from-[#e6ecf2] via-[#f4f7fa] to-[#e6ecf2] bg-[length:200%_100%]" />
        </div>
      )}
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const SkeletonAboutUsImage = ({ ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Shimmer loader with fade-out */}
      <div
        className={`absolute inset-0 bg-[#e6ecf2] overflow-hidden rounded-2xl z-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full h-full animate-[shimmerLight_1.5s_infinite] bg-gradient-to-r from-[#e6ecf2] via-[#f4f7fa] to-[#e6ecf2] bg-[length:200%_100%]" />
      </div>

      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        width={500}
        height={500}
        className={`w-full h-full rounded-2xl fade-in`}
        objectFit="cover"
        placeholder="blur"
      />
    </div>
  );
};
