'use client';

import React, { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Sprout } from 'lucide-react';
import heroRoasteryImg from '@/assets/images/hero_saber_roastery_1795363214450.jpg';
import saltedAlmondsImg from '@/assets/images/product_salted_almonds_1795363214458.jpg';
import roastedPistachiosImg from '@/assets/images/product_roasted_pistachios_1795363214680.jpg';
import driedFigsImg from '@/assets/images/product_sun_dried_figs_1795363214201.jpg';
import artisanalNougatImg from '@/assets/images/product_artisanal_nougat_1795363214587.jpg';
import cardamomCoffeeImg from '@/assets/images/product_cardamom_coffee_1795363214134.jpg';

const IMAGE_MAP: Record<string, StaticImageData> = {
  '/images/hero_saber_roastery_1795363214450.jpg': heroRoasteryImg,
  '/images/product_salted_almonds_1795363214458.jpg': saltedAlmondsImg,
  '/images/product_roasted_pistachios_1795363214680.jpg': roastedPistachiosImg,
  '/images/product_sun_dried_figs_1795363214201.jpg': driedFigsImg,
  '/images/product_artisanal_nougat_1795363214587.jpg': artisanalNougatImg,
  '/images/product_cardamom_coffee_1795363214134.jpg': cardamomCoffeeImg,
};

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  label?: string;
  sizes?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  priority = false,
  label,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);
  const staticAsset = IMAGE_MAP[src];

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFE8DA] dark:bg-[#30241C] text-[#695A4C] dark:text-[#BCAA95] p-6 text-center ${className}`}
      >
        <Sprout className="mb-2 h-7 w-7 opacity-75" aria-hidden="true" />
        <span className="text-xs font-medium">{label || alt}</span>
      </div>
    );
  }

  if (staticAsset) {
    return (
      <Image
        src={staticAsset}
        alt={alt}
        referrerPolicy="no-referrer"
        priority={priority}
        placeholder="blur"
        sizes={sizes}
        onError={() => setFailed(true)}
        className={className}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
