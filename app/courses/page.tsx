import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_32%)]" />

      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-8 md:px-20">
        <nav className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.38em] text-sky-300"
          >
            ZORELLIUM
          </Link>

          <Link
            href="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            ← Home
          </Link>
        </nav>

        <section className="flex min-h-[70vh] flex-col justify-center animate-[fadeUp_0.8s_ease-out]">
  <div className="max-w-4xl">
    <p className="mb-4 text-sm uppercase tracking-[0.45em] text-sky-300">
      Courses
    </p>

    <h1 className="text-5xl font-black md:text-7xl">
      Coming Soon
    </h1>

    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
      Educational content, guides and learning materials are currently
      in development.
    </p>
  </div>

  <div className="mt-12 max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
    <h2 className="mb-6 text-2xl font-bold">
      Planned Topics
    </h2>

    <div className="grid gap-4 text-slate-300 sm:grid-cols-2">
      <p>• Digital Art</p>
      <p>• Programming</p>
      <p>• Animation</p>
      <p>• VTubing</p>
      <p>• Character Design</p>
      <p>• Content Creation</p>
    </div>
  </div>

  <p className="mt-8 text-slate-500">
    Follow my Telegram channel for updates.
  </p>
</section>
      </div>
    </main>
  );
}