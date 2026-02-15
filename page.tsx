"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { VideoModal } from "@/components/VideoModal";

function uniqueTags(items: Project[]) {
  const s = new Set<string>();
  items.forEach((p) => p.tags.forEach((t) => s.add(t)));
  return ["All", ...Array.from(s).sort()];
}

export default function Page() {
  const [activeTag, setActiveTag] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);

  const tags = useMemo(() => uniqueTags(projects), []);
  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="min-h-dvh">
      <header className="mx-auto max-w-6xl px-5 pt-10 pb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Meghan Kulkarni
            </h1>
            <p className="mt-2 text-zinc-300">
              Long- & short-form content creator · Video editor · Videographer
            </p>
          </div>

          <nav className="flex gap-4 text-sm text-zinc-300">
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>

        <div id="work" className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => {
            const active = t === activeTag;
            return (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={[
                  "rounded-full border px-3 py-1 text-sm transition",
                  active
                    ? "border-zinc-200 bg-zinc-200 text-zinc-950"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600",
                ].join(" ")}
                style={
                  activeTag === t && t !== "All"
                    ? {
                        background:
                          "linear-gradient(90deg, rgb(var(--accent-blue) / 0.95), rgb(var(--accent-pink) / 0.95))",
                        color: "black",
                        borderColor: "transparent",
                      }
                    : undefined
                }
              >
                {t}
              </button>
            );
          })}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16">
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
                onClick={() => setOpen(p)}
                className="group text-left overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600"
              >
                <div className="aspect-video bg-zinc-900 overflow-hidden">
                  <img
                    src={p.thumbUrl}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium leading-snug">{p.title}</h3>
                    {p.year ? <span className="text-sm text-zinc-400">{p.year}</span> : null}
                  </div>

                  <div className="mt-2 text-sm text-zinc-400">
                    {[p.role, p.client].filter(Boolean).join(" · ")}
                  </div>

                  {p.highlight ? (
                    <div className="mt-3 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-200">
                      {p.highlight}
                    </div>
                  ) : null}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-800 px-2 py-0.5 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <section id="about" className="mt-14 max-w-2xl">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 text-zinc-300">
            Hi! I’m Megs! I’m a creative based in East London, who brings strong communication skills,
            collaboration and creative energy to every project!
          </p>
          <p className="mt-3 text-zinc-300">
            I am obsessed with pop culture, travelling and music! If you ever need to find me, I’ll most
            likely be in the gym or on a dog walk...
          </p>
        </section>

        <section id="contact" className="mt-10 max-w-2xl">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-3 flex flex-col gap-2 text-zinc-300">
            <div>
              Email:{" "}
              <a className="underline hover:text-white" href="mailto:meghankulkarni@hotmail.com">
                meghankulkarni@hotmail.com
              </a>
            </div>
            <div>
              Instagram:{" "}
              <a
                className="underline hover:text-white"
                href="https://instagram.com/megskulkarni"
                target="_blank"
                rel="noreferrer"
              >
                @megskulkarni
              </a>
            </div>
            <div className="text-sm text-zinc-500">
              Want to add a YouTube or Vimeo link? Edit <span className="text-zinc-300">src/app/page.tsx</span>.
            </div>
          </div>
        </section>
      </main>

      <VideoModal project={open} onClose={() => setOpen(null)} />
    </div>
  );
}
