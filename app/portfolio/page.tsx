import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import PortfolioGallery from "./PortfolioGallery";

const portfolioPath = path.join(process.cwd(), "public", "portfolio");
const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

function getPortfolio() {
  if (!fs.existsSync(portfolioPath)) return [];

  return fs
    .readdirSync(portfolioPath, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((category) => {
      const categoryPath = path.join(portfolioPath, category.name);

      const images = fs
        .readdirSync(categoryPath)
        .filter((file) =>
          imageExtensions.includes(path.extname(file).toLowerCase())
        )
        .map((file) => ({
          name: file,
          src: `/portfolio/${category.name}/${file}`,
        }));

      return {
        name: category.name,
        images,
      };
    })
    .filter((category) => category.images.length > 0);
}

export default function Portfolio() {
  const categories = getPortfolio();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-8 py-8 text-white md:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_32%)]" />

      <div className="relative z-10">
        <nav className="mb-20 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-[0.38em] text-sky-300">
            ZORELLIUM
          </Link>

          <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
            ← Home
          </Link>
        </nav>

        <section className="mb-14 max-w-3xl animate-[fadeUp_0.8s_ease-out]">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-sky-300">
            Portfolio
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Selected works
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-slate-300">
            Art, animation, characters and visual experiments.
          </p>
        </section>

        <PortfolioGallery categories={categories} />
      </div>
    </main>
  );
}