"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 bg-black/75 p-4 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 px-4 py-3">
              <div className="min-w-0">
                <div className="truncate font-medium">{project.title}</div>
                <div className="mt-1 text-sm text-zinc-400">
                  {[project.role, project.client, project.year].filter(Boolean).join(" · ")}
                </div>
                {project.highlight ? (
                  <div className="mt-2 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-200">
                    {project.highlight}
                  </div>
                ) : null}
              </div>

              <button
                onClick={onClose}
                className="shrink-0 rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-200 hover:border-zinc-600 hover:text-white"
                aria-label="Close video"
              >
                Close
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                src={project.embedUrl}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
