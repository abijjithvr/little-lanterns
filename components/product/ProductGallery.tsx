"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ photos, name }: { photos: string[]; name: string }) {
  const [selectedImage, setSelectedImage] = useState(photos[0]);

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-[var(--brown)]/10 bg-white/70 p-3 shadow-[0_14px_24px_rgba(107,79,59,0.1)]">
        <Image src={selectedImage} alt={name} width={900} height={900} unoptimized className="aspect-square w-full rounded-2xl object-cover" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {photos.map((photo) => (
          <button
            key={photo}
            type="button"
            onClick={() => setSelectedImage(photo)}
            className={`overflow-hidden rounded-xl border p-1 transition ${
              selectedImage === photo ? "border-[var(--gold)]" : "border-[var(--brown)]/10"
            }`}
          >
            <Image src={photo} alt={`${name} thumbnail`} width={900} height={900} unoptimized className="aspect-square w-full rounded-lg object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
