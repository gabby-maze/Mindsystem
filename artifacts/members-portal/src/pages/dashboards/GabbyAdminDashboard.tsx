import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { Trash2, Send, MessageSquare } from "lucide-react";

const PINK = "#FF2D78";

interface Announcement {
  id: string;
  title: string;
  body: string;
  posted_by: string;
  created_at: string;
}

interface PendingComment {
  id: string;
  announcement_id: string;
  family_id: string;
  comment_text: string;
  created_at: string;
  families?: { family_name: string };
  announcements?: { title: string };
}

export default function GabbyAdminDashboard() {
  const [tab, setTab] = useState<"post" | "replies">("post");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [pending, setPending] = useState<PendingComment[]>([]);
  const [replies, setReplies] = useState<Record<string, string>>({});
  const [sending, setSending] = useState<string | null>(null);

  useEffect(() => {
    loadAnnouncements();
    loadPending();
  }, []);

  async function loadAnnouncements() {
    const { data } = await supabase.from("announcements").select("*").order("created_at", { ascending: false });
    setAnnouncements(data ?? []);
  }

  async function loadPending() {
    const { data } = await supabase
      .from("announcement_comments")
      .select("*, families(family_name), announcements(title)")
      .eq("is_gabby_reply", false)
      .order("created_at", { ascending: false });
    setPending(data ?? []);
  }

  async function postAnnouncement() {
    if (!title.trim() || !body.trim()) return;
    setPosting(true);
    await supabase.from("announcements").insert({ title: title.trim(), body: body.trim() });
    setTitle("");
    setBody("");
    await loadAnnouncements();
    setPosting(false);
  }

  async function deleteAnnouncement(id: string) {
    if (!confirm("Delete this announcement?")) return;
    await supabase.from("announcements").delete().eq("id", id);
    await loadAnnouncements();
  }

  async function sendReply(commentId: string, announcementId: string) {
    const replyText = replies[commentId];
    if (!replyText?.trim()) return;
    setSending(commentId);
    await supabase.from("announcement_comments").insert({
      announcement_id: announcementId,
      family_id: null,
      comment_text: replyText.trim(),
      is_gabby_reply: true,
    });
    setReplies((prev) => ({ ...prev, [commentId]: "" }));
    await loadPending();
    setSending(null);
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div style={{ width: 36, height: 3, backgroundColor: PINK }} />
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.8rem" }}>Gabby Admin</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {[{ id: "post", label: "Post Announcement" }, { id: "replies", label: `Manage Replies ${pending.length > 0 ? `(${pending.length})` : ""}` }].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as "post" | "replies")}
              style={{
                backgroundColor: tab === t.id ? PINK : "rgba(255,255,255,0.07)",
                color: tab === t.id ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none",
                padding: "0.65rem 1.5rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Post Announcement Tab */}
        {tab === "post" && (
          <div>
            <div className="flex flex-col gap-4 mb-8">
              <div>
                <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Announcement title..."
                  style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "0.75rem 1rem", fontFamily: "'Oswald', sans-serif", fontSize: "1rem", outline: "none" }}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Body</label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Write your announcement..."
                  rows={6}
                  style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "0.75rem 1rem", fontFamily: "'Oswald', sans-serif", fontSize: "1rem", outline: "none", resize: "vertical" }}
                />
              </div>
              <button
                onClick={postAnnouncement}
                disabled={posting || !title.trim() || !body.trim()}
                className="flex items-center gap-2 self-start"
                style={{ backgroundColor: PINK, color: "#fff", border: "none", padding: "0.875rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", cursor: posting ? "not-allowed" : "pointer", opacity: posting ? 0.7 : 1 }}
              >
                <Send size={14} /> {posting ? "Posting..." : "Post →"}
              </button>
            </div>

            {/* Recent posts */}
            <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Recent Posts</h2>
            <div className="flex flex-col gap-3">
              {announcements.map((a) => (
                <div key={a.id} className="flex items-start gap-4 p-4 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex-1">
                    <p className="font-bold text-sm mb-1" style={{ color: "#fff" }}>{a.title}</p>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                      {new Date(a.created_at).toLocaleDateString()} · {a.body.slice(0, 80)}{a.body.length > 80 ? "..." : ""}
                    </p>
                  </div>
                  <button onClick={() => deleteAnnouncement(a.id)}
                    style={{ background: "none", border: "none", color: "rgba(255,45,120,0.5)", cursor: "pointer", padding: 4 }}>
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
              {announcements.length === 0 && (
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>No announcements yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Manage Replies Tab */}
        {tab === "replies" && (
          <div>
            {pending.length === 0 && (
              <div className="py-12 text-center rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <MessageSquare size={24} className="mx-auto mb-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>No member comments waiting for a reply.</p>
              </div>
            )}
            <div className="flex flex-col gap-5">
              {pending.map((c) => (
                <div key={c.id} className="p-5 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Re: {c.announcements?.title ?? "Unknown post"}
                  </p>
                  <p className="font-bold text-sm mb-1" style={{ color: "#fff" }}>{c.families?.family_name ?? "Member"}</p>
                  <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{c.comment_text}</p>
                  <textarea
                    value={replies[c.id] ?? ""}
                    onChange={(e) => setReplies((prev) => ({ ...prev, [c.id]: e.target.value }))}
                    placeholder="Type your reply..."
                    rows={2}
                    style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "0.65rem 0.875rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", outline: "none", resize: "none", marginBottom: "0.75rem" }}
                  />
                  <button
                    onClick={() => sendReply(c.id, c.announcement_id)}
                    disabled={sending === c.id || !replies[c.id]?.trim()}
                    className="flex items-center gap-2"
                    style={{ backgroundColor: PINK, color: "#fff", border: "none", padding: "0.55rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: sending === c.id ? "not-allowed" : "pointer", opacity: sending === c.id ? 0.7 : 1 }}
                  >
                    <Send size={12} /> {sending === c.id ? "Sending..." : "Send Reply"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
