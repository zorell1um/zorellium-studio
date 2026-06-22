"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Category = {
  name: string;
  images: {
    name: string;
    src: string;
  }[];
};

export default function PortfolioGallery({
  categories,
}: {
  categories: Category[];
}) {
  const [openedImage, setOpenedImage] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenedImage(null);
        setZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="space-y-16">
        {categories.map((category) => (
          <section
  key={category.name}
  style={{ animation: "fadeUp 0.8s ease-out both" }}
>
            <h2 className="mb-6 text-3xl font-bold">{category.name}</h2>

            <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
              {category.images.map((image, index) => (
                <button
                    key={image.src}
                onClick={() => {
                    setOpenedImage(image.src);
                    setZoomed(false);
                }}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] text-left backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
                style={{ animation: `fadeUp 0.8s ease-out ${index * 0.06}s both` }}
                    >
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-5 transition duration-300 group-hover:translate-y-0">
                    <p className="truncate text-sm text-slate-200">
                      {image.name}
                    </p>
                    <p className="mt-1 text-xs text-sky-300">Click to view</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {openedImage && (
    <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur"
    onClick={() => {
      setOpenedImage(null);
      setZoomed(false);
    }}
  >
    <button
      className="absolute right-6 top-6 z-50 rounded-full border border-white/20 px-4 py-2 text-white transition hover:bg-white/10"
      onClick={(event) => {
        event.stopPropagation();
        setOpenedImage(null);
        setZoomed(false);
      }}
    >
      Close
    </button>

    <img
      src={openedImage}
      alt="Opened artwork"
      onClick={(event) => {
        event.stopPropagation();
        setZoomed((value) => !value);
      }}
      className={`max-h-[88vh] max-w-[92vw] rounded-2xl object-contain transition duration-300 ${
        zoomed
          ? "scale-150 cursor-zoom-out"
          : "scale-100 cursor-zoom-in"
      }`}
    />
  </div>
)}
    </>
  );
}