import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { Family } from "@/lib/auth";

const PURPLE = "#982FF7";

interface Announcement {
  id: string;
  title: string;
  body: string;
  posted_by: string;
  created_at: string;
}

interface Comment {
  id: string;
  announcement_id: string;
  family_id: string;
  comment_text: string;
  is_gabby_reply: boolean;
  created_at: string;
  families?: { family_name: string };
}

export function AnnouncementBoard({ family }: { family: Family }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [draft, setDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  async function loadAnnouncements() {
    const { data } = await supabase
      .from("announcements")
      .select("*")
      .order("created_at", { ascending: false });
    setAnnouncements(data ?? []);
    setLoading(false);
  }

  async function loadComments(announcementId: string) {
    const { data } = await supabase
      .from("announcement_comments")
      .select("*, families(family_name)")
      .eq("announcement_id", announcementId)
      .order("created_at", { ascending: true });
    setComments((prev) => ({ ...prev, [announcementId]: data ?? [] }));
  }

  async function toggleExpand(id: string) {
    if (expanded === id) {
      setExpanded(null);
      return;
    }
    setExpanded(id);
    if (!comments[id]) await loadComments(id);
  }

  async function submitComment(announcementId: string) {
    if (!draft.trim()) return;
    setSubmitting(true);
    await supabase.from("announcement_comments").insert({
      announcement_id: announcementId,
      family_id: family.id,
      comment_text: draft.trim(),
    });
    setDraft("");
    await loadComments(announcementId);
    setSubmitting(false);
  }

  if (loading) return null;

  if (announcements.length === 0) {
    return (
      <div className="py-12 text-center rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.02)" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", fontFamily: "'Oswald', sans-serif" }}>
          No announcements yet - check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {announcements.map((post) => {
        const isOpen = expanded === post.id;
        const postComments = comments[post.id] ?? [];

        return (
          <div
            key={post.id}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            {/* Post header */}
            <button
              onClick={() => toggleExpand(post.id)}
              className="w-full text-left p-5"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold" style={{ color: "#FF2D78" }}>
                  {post.posted_by}
                </span>
                <span
                  className="text-xs uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{ backgroundColor: "rgba(255,45,120,0.15)", color: "#FF2D78", fontSize: "0.6rem" }}
                >
                  Gabby
                </span>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="font-bold text-sm mb-1" style={{ color: "#fff" }}>{post.title}</p>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                {isOpen ? post.body : `${post.body.slice(0, 120)}${post.body.length > 120 ? "..." : ""}`}
              </p>
              <p className="mt-2 text-xs" style={{ color: PURPLE }}>
                {isOpen ? "Close ↑" : `${postComments.length > 0 ? `${postComments.length} comment${postComments.length > 1 ? "s" : ""} · ` : ""}Reply ↓`}
              </p>
            </button>

            {/* Expanded comments */}
            {isOpen && (
              <div
                className="px-5 pb-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex flex-col gap-3 my-4">
                  {postComments.map((c) => (
                    <div key={c.id} className="p-3 rounded-lg"
                      style={{ backgroundColor: c.is_gabby_reply ? "rgba(255,45,120,0.06)" : "rgba(255,255,255,0.03)", border: c.is_gabby_reply ? "1px solid rgba(255,45,120,0.2)" : "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold" style={{ color: c.is_gabby_reply ? "#FF2D78" : "#fff" }}>
                          {c.is_gabby_reply ? "Gabby Cole" : (c.families?.family_name ?? "Member")}
                        </span>
                        {c.is_gabby_reply && (
                          <span className="text-xs uppercase tracking-wider px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: "rgba(255,45,120,0.15)", color: "#FF2D78", fontSize: "0.55rem" }}>
                            Gabby
                          </span>
                        )}
                        <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>
                          {new Date(c.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{c.comment_text}</p>
                    </div>
                  ))}
                </div>

                {/* Comment input */}
                <div className="flex flex-col gap-2">
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Leave a comment or question..."
                    rows={2}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff",
                      padding: "0.65rem 0.875rem",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.9rem",
                      resize: "none",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  <button
                    onClick={() => submitComment(post.id)}
                    disabled={submitting || !draft.trim()}
                    style={{
                      alignSelf: "flex-end",
                      backgroundColor: PURPLE,
                      color: "#fff",
                      border: "none",
                      padding: "0.5rem 1.25rem",
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      cursor: submitting ? "not-allowed" : "pointer",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? "Posting..." : "Post Comment"}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
