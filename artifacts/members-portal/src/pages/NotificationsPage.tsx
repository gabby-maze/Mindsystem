import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { Bell, ExternalLink } from "lucide-react";

const PURPLE = "#982FF7";

export default function NotificationsPage() {
  const { family } = useAuth();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!family) return;
    loadNotifications();
  }, [family]);

  async function loadNotifications() {
    if (!family) return;
    const { data } = await supabase
      .from("notifications")
      .select("*, notification_reads(*)")
      .or(`tier.eq.${family.tier},tier.is.null`)
      .order("created_at", { ascending: false })
      .limit(20);
    setNotifications(data ?? []);
    setLoading(false);

    // Mark all as read
    if (data && data.length > 0) {
      const unread = data.filter((n: any) => n.notification_reads.length === 0);
      if (unread.length > 0) {
        await supabase.from("notification_reads").upsert(
          unread.map((n: any) => ({ family_id: family.id, notification_id: n.id })),
          { onConflict: "family_id,notification_id" }
        );
      }
    }
  }

  if (!family) return null;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center gap-3 mb-10">
          <Bell size={20} style={{ color: PURPLE }} />
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            Notifications
          </h1>
        </div>

        {loading ? (
          <p style={{ color: "rgba(255,255,255,0.4)" }}>Loading...</p>
        ) : notifications.length === 0 ? (
          <div
            className="rounded-lg p-10 text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Bell size={32} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.2)" }} />
            <p style={{ color: "rgba(255,255,255,0.4)" }}>No notifications yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {notifications.map((n: any) => {
              const isUnread = n.notification_reads.length === 0;
              return (
                <div
                  key={n.id}
                  className="rounded-lg p-5"
                  style={{
                    backgroundColor: isUnread ? "rgba(152,47,247,0.06)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isUnread ? "rgba(152,47,247,0.25)" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: isUnread ? "#fff" : "rgba(255,255,255,0.6)" }}>
                      {n.title}
                    </h3>
                    {isUnread && (
                      <span className="shrink-0 w-2 h-2 rounded-full mt-1" style={{ backgroundColor: PURPLE }} />
                    )}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{n.message}</p>
                  {n.link && (
                    <a
                      href={n.link}
                      className="inline-flex items-center gap-1 mt-3 text-xs uppercase tracking-wider"
                      style={{ color: PURPLE, textDecoration: "none" }}
                    >
                      View <ExternalLink size={11} />
                    </a>
                  )}
                  <p className="mt-2" style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)" }}>
                    {new Date(n.created_at).toLocaleDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
