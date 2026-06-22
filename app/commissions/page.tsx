"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SmoothScrollButton from "@/components/SmoothScrollButton";

const prices = [
  {
    type: "Headshot",
    sketch: "100 ₽ / $2",
    line: "200 ₽ / $4",
    sketchImage: "/prices/head-sketch.png",
    lineImage: "/prices/head-line2.png",
  },
  {
    type: "Halfbody",
    sketch: "150 ₽ / $3",
    line: "300 ₽ / $6",
    sketchImage: "/prices/half-sketch.png",
    lineImage: "/prices/half-line2.png",
  },
  {
    type: "Fullbody",
    sketch: "200 ₽ / $4",
    line: "400 ₽ / $8",
    sketchImage: "/prices/full-sketch.png",
    lineImage: "/prices/full-line2.png",
  },
];

const extraCategories = [
  {
    title: "Ultra Render",
    price: "from 500 ₽ / $10",
    image: "/prices/ultra-render.png",
    description: "Experimental high-detail rendering with lighting and effects.",
  },
  {
    title: "Animation",
    price: "500 ₽ / $10 per second",
    image: "/prices/animation.gif",
    description:
      "Custom frame-by-frame animation, usually 4–12 FPS depending on complexity.",
  },
  {
    title: "Reference Sheet",
    price: "from 1200 ₽ / $20",
    image: "/prices/ref-sheet.png",
    description: "Character concept and reference sheet with 2–5 poses.",
  },
];

export default function Commissions() {
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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openImage = (image: string) => {
    setOpenedImage(image);
    setZoomed(false);
  };

  const imageCard = (
    image: string,
    title: string,
    price: string,
    style: string,
    unoptimized = false
  ) => (
    <button
      type="button"
      onClick={() => openImage(image)}
      className={`w-full overflow-hidden rounded-2xl text-left transition hover:scale-[1.02] ${style}`}
    >
      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        unoptimized={unoptimized}
        className="aspect-square w-full object-cover"
      />

      <div className="p-4">
        <p className="text-sm opacity-80">{title}</p>
        <p className="mt-1 text-2xl font-bold text-white">{price}</p>
      </div>
    </button>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_32%)]" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-8 md:px-20">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-[0.38em] text-sky-300">
            ZORELLIUM
          </Link>

          <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
            ← Home
          </Link>
        </nav>

        <section className="mb-16 animate-[fadeUp_0.8s_ease-out]">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-sky-300">
            Commissions
          </p>

          <h1 className="text-5xl font-black md:text-7xl">Art Commissions</h1>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-300">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            OPEN
          </div>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Character art, furry art, NSFW art, animation and custom projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://t.me/zorell1um"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-sky-200"
            >
              Order on Telegram
            </a>

            <SmoothScrollButton
              targetId="prices"
              className="rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:border-sky-300 hover:bg-white/10"
            >
              View Prices
            </SmoothScrollButton>
          </div>
        </section>

        <section id="prices" className="mb-16 scroll-mt-24">
          <h2 className="mb-6 text-3xl font-bold">Price List</h2>

          <div className="grid gap-5 lg:grid-cols-3">
            {prices.map((item, index) => (
              <article
                key={item.type}
                className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
                style={{ animation: `fadeUp 0.8s ease-out ${index * 0.08}s both` }}
              >
                <div className="mb-5 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.35),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
                    {item.type}
                  </p>
                </div>

                <div className="space-y-5">
                  {imageCard(
                    item.sketchImage,
                    "Sketch",
                    item.sketch,
                    "border border-white/10 bg-black/20 text-slate-400"
                  )}

                  {imageCard(
                    item.lineImage,
                    "Lineart",
                    item.line,
                    "border border-sky-300/20 bg-sky-300/10 text-sky-200"
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Extra Categories</h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {extraCategories.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => openImage(item.image)}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] text-left backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
                style={{ animation: `fadeUp 0.8s ease-out ${index * 0.08}s both` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={600}
                  unoptimized={item.image.endsWith(".gif")}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="text-sky-300">{item.price}</span>
                  </div>

                  <p className="text-slate-400">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Queue</h2>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sky-300">
              🚧 Planned Feature
            </div>

            <h3 className="mb-4 text-2xl font-bold">Automatic Queue System</h3>

            <p className="max-w-3xl text-slate-300">
              A future update will allow clients to submit commissions directly
              through the website. Orders will automatically appear in the queue
              and update their progress status.
            </p>

            <p className="mt-4 text-slate-500">
              For now, please contact me through Telegram.
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <h2 className="mb-4 text-3xl font-bold">Additional Info</h2>

          <div className="space-y-3 text-slate-300">
            <p>• Additional character: +50%</p>
            <p>• Additional pose: +50%</p>
            <p>• Background: Free</p>
            <p>• Animation price is calculated per second.</p>
            <p>• NSFW: Available</p>
            <p>• Guro: Available</p>
          </div>
        </section>
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
            alt="Opened commission example"
            onClick={(event) => {
              event.stopPropagation();
              setZoomed((value) => !value);
            }}
            className={`max-h-[88vh] max-w-[92vw] rounded-2xl object-contain transition duration-300 ${
              zoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
          />
        </div>
      )}
    </main>
  );
}