import { useEffect, useState } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";

interface Reel {
  id: string;
  thumbnailUrl: string | null;
  permalink: string;
  timestamp: string;
  caption: string | null;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export function InstagramReels() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "unconfigured" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_BASE}/api/instagram/reels`, { signal: controller.signal })
      .then((r) => r.json())
      .then((data: { reels?: Reel[]; error?: string }) => {
        if (data.error?.toLowerCase().includes("not configured")) {
          setStatus("unconfigured");
        } else if (data.reels) {
          setReels(data.reels);
          setStatus(data.reels.length > 0 ? "ready" : "unconfigured");
        } else {
          setStatus("error");
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Instagram className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">
              Latest Reels
            </h2>
          </div>
          <a
            href="https://www.instagram.com/gabbycole_maze"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary hover:text-primary/80 transition-colors"
            aria-label="Follow @gabbycole_maze on Instagram"
          >
            @gabbycole_maze
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Loading */}
        {status === "loading" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3" aria-busy="true" aria-label="Loading reels">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[9/16] bg-card animate-pulse rounded-none" aria-hidden="true" />
            ))}
          </div>
        )}

        {/* Reels grid */}
        {status === "ready" && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            role="list"
            aria-label="Instagram Reels"
          >
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                className="group relative aspect-[9/16] overflow-hidden bg-card border border-border/40 hover:border-primary/50 transition-all block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={reel.caption ? `Instagram Reel: ${reel.caption.slice(0, 80)}` : "Instagram Reel"}
              >
                {reel.thumbnailUrl ? (
                  <img
                    src={reel.thumbnailUrl}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-muted-foreground/30" aria-hidden="true" />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Caption preview */}
                {reel.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <p className="text-white text-xs leading-snug line-clamp-2 font-light">
                      {reel.caption}
                    </p>
                  </div>
                )}
              </a>
            ))}
          </div>
        )}

        {/* Not configured — shown only to site owner; invisible to visitors */}
        {status === "unconfigured" && (
          <div className="border border-dashed border-border/50 p-10 text-center">
            <Instagram className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" aria-hidden="true" />
            <p className="text-muted-foreground text-sm mb-1 font-medium">Instagram feed not connected yet</p>
            <p className="text-muted-foreground/60 text-xs">
              Set the <code className="bg-card px-1 py-0.5 rounded text-xs">INSTAGRAM_ACCESS_TOKEN</code> environment variable on the API server to activate this section.
            </p>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="text-center py-10">
            <p className="text-muted-foreground/60 text-sm">Could not load reels right now.</p>
          </div>
        )}

        {/* Follow CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/gabbycole_maze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs font-bold tracking-widest uppercase min-h-[44px]"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
