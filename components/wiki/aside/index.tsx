"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "cards.jpg",
    alt: "Famous painting of card players",
  },
  {
    src: "dice.png",
    alt: "A set of dice",
  },
  {
    src: "random.png",
    alt: "Random number generation illustration",
  },
];

const Aside = () => {
  const [enlargedIdx, setEnlargedIdx] = useState<number | null>(null);
  const [isHoveredIdx, setIsHoveredIdx] = useState<number | null>(null);

  return (
    <>
      {/*Note that Image component is a built in nextJs component that ensuring the src is grabbing from the public folder
        Functions exactly the same as <img> component */}
      <aside className="right-0 h-full w-80 bg-white p-4 flex flex-col gap-4 z-20">
        <h3 className="aside-title">Images (Click to enlarge)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              className="img-thumb"
              height={200}
              width={200}
              onClick={() => setEnlargedIdx(idx)}
              onMouseEnter={() => setIsHoveredIdx(idx)}
              onMouseLeave={() => setIsHoveredIdx(null)}
              style={{
                cursor: "pointer",
                border: isHoveredIdx === idx ? "3px solid #3182ce" : "3px solid transparent",
                borderRadius: 8,
                transition: "border 0.3s",
              }}
            />
          ))}
        </div>
      </aside>
      {enlargedIdx !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setEnlargedIdx(null)}>
          <div
            className="relative bg-gray-300 rounded shadow-xl p-4"
            style={{ maxWidth: 900, maxHeight: "120vh" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-1 text-gray-700 text-2xl font-bold hover:text-red-500"
              onClick={() => setEnlargedIdx(null)}
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={images[enlargedIdx].src}
              alt={images[enlargedIdx].alt}
              width={800}
              height={600}
              className="max-w-full max-h-[70vh] rounded"
            />
            <div className="enlarged-img-caption">{images[enlargedIdx].alt}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Aside;
