import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Portfolio",
    text: "Art, animation, characters and visual experiments.",
    href: "/portfolio",
  },
  {
    title: "Commissions",
    text: "Orders, prices, status and future queue.",
    href: "/commissions",
  },
  {
    title: "Courses",
    text: "Lessons, guides and learning materials.",
    href: "/courses",
  },
  {
    title: "Links",
    text: "Socials, products, streams and contacts.",
    href: "/links",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.28),transparent_34%),radial-gradient(circle_at_78%_35%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_55%_90%,rgba(14,165,233,0.18),transparent_38%)] animate-[floatBg_12s_ease-in-out_infinite]" />

      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <nav className="relative z-20 flex items-center justify-between px-8 py-7 md:px-20">
        <Link href="/" className="text-sm font-bold tracking-[0.38em] text-sky-300">
          ZORELLIUM
        </Link>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link className="transition hover:text-white" href="/portfolio">Portfolio</Link>
          <Link className="transition hover:text-white" href="/commissions">Commissions</Link>
          <Link className="transition hover:text-white" href="/courses">Courses</Link>
          <Link className="transition hover:text-white" href="/links">Links</Link>
        </div>
      </nav>

      <section className="relative z-10 grid min-h-[calc(100vh-88px)] items-center gap-12 px-8 pb-16 md:grid-cols-[1.05fr_0.95fr] md:px-20">
        <div className="animate-[fadeUp_0.9s_ease-out]">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-sky-300">
            Zorellium Studio
          </p>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl">
            Zorellium
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            Artist • Developer • VTuber
            <br />
            Cute digital worlds, characters, code and chaos.
          </p>

          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {cards.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:bg-sky-300/10"
                style={{ animation: `fadeUp 0.8s ease-out ${index * 0.08}s both` }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <span className="text-sky-300 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[520px] items-center justify-center md:flex">
          <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-400/25 blur-[110px] animate-[pulseGlow_4s_ease-in-out_infinite]" />
          <div className="absolute h-[340px] w-[340px] rounded-full bg-fuchsia-400/15 blur-[90px]" />

          <div className="relative z-10 rounded-[36px] border border-sky-300/20 bg-white/[0.04] p-4 shadow-[0_0_90px_rgba(56,189,248,0.35)] backdrop-blur animate-[float_5s_ease-in-out_infinite]">
            <Image
              src="/zore4.png"
              alt="Zorellium"
              width={420}
              height={420}
              priority
              className="h-[420px] w-[420px] rounded-[26px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}