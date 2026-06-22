import Link from "next/link";

const mainLinks = [
  {
    name: "Telegram Channel",
    handle: "@zorellium",
    url: "https://t.me/zorellium",
  },
  {
    name: "Direct Messages",
    handle: "@zorell1um",
    url: "https://t.me/zorell1um",
  },
];

const sections = [
  {
    title: "Support",
    description: "Support my projects, art and content.",
    links: [
      ["Hipolink", "https://hipolink.me/zorellium"],
      ["Boosty", "https://boosty.to/zorellium"],
      ["Patreon", "https://patreon.com/zorellium"],
    ],
  },
  {
    title: "Video & Streaming",
    description: "Videos, streams, updates and community.",
    links: [
      ["YouTube", "https://youtube.com"],
      ["Twitch", "https://twitch.tv/zorellium"],
      ["TikTok", "https://tiktok.com/@zorellium"],
      ["Instagram", "https://instagram.com/zorellium"],
    ],
  },
  {
    title: "Art & Portfolio",
    description: "Artwork, commissions, portfolios and creative projects.",
    links: [
      ["DeviantArt", "https://deviantart.com/zorellium"],
      ["X", "https://x.com/zorellium"],
      ["Instagram", "https://instagram.com/zorellium"],
      ["ArtStation", "https://artstation.com/zorellium"],
      ["Bluesky", "https://bsky.app/profile/zorellium.bsky.social"],
      ["Pinterest", "https://pinterest.com/zorellium"],
      ["Cara", "https://cara.app/zorellium"],
      ["FurAffinity", "https://www.furaffinity.net/user/zorellium"],
      ["e621", "https://e621.net/users/zorellium"],
      ["Behance", "https://behance.net/zorellium"],
      ["Kwork", "https://kwork.ru/user/zorellium"],
    ],
  },
  {
    title: "Development",
    description: "Programming, open-source projects and coding challenges.",
    links: [
      ["GitHub", "https://github.com/zorell1um"],
      ["Codewars", "https://www.codewars.com/users/zorellium"],
      ["LeetCode", "https://leetcode.com/u/zorellium"],
      ["Codeforces", "https://codeforces.com/profile/zorellium"],
    ],
  },
];

export default function LinksPage() {
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

        <section className="mb-14 animate-[fadeUp_0.8s_ease-out]">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-sky-300">
            Links
          </p>

          <h1 className="text-5xl font-black md:text-7xl">Find Me Online</h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Art • Video • Development • VTubing
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {mainLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-sky-200"
              >
                {item.name} {item.handle}
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <section
              key={section.title}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              style={{
                animation: `fadeUp 0.8s ease-out ${sectionIndex * 0.08}s both`,
              }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold">{section.title}</h2>
                <p className="mt-2 text-slate-400">{section.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.links.map(([name, url]) => (
                  <a
                    key={`${section.title}-${name}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:-translate-y-1 hover:border-sky-300/60 hover:bg-sky-300/10 hover:shadow-[0_0_35px_rgba(56,189,248,0.16)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-bold">{name}</span>
                      <span className="text-sky-300 transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}