import { Router, type IRouter } from "express";

const router: IRouter = Router();

const INSTAGRAM_API = "https://graph.instagram.com";

router.get("/instagram/reels", async (_req, res) => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    res.status(503).json({
      error: "Instagram access token not configured. Set the INSTAGRAM_ACCESS_TOKEN environment variable.",
    });
    return;
  }

  try {
    const fields = "id,media_type,media_product_type,thumbnail_url,permalink,timestamp,caption";
    const url = `${INSTAGRAM_API}/me/media?fields=${fields}&limit=20&access_token=${token}`;

    const response = await fetch(url);
    const data = await response.json() as {
      data?: Array<{
        id: string;
        media_type: string;
        media_product_type?: string;
        thumbnail_url?: string;
        permalink: string;
        timestamp: string;
        caption?: string;
      }>;
      error?: { message: string; code: number };
    };

    if (data.error) {
      res.status(400).json({ error: data.error.message });
      return;
    }

    const reels = (data.data ?? [])
      .filter(
        (item) =>
          item.media_type === "VIDEO" &&
          (item.media_product_type === "REELS" || item.media_product_type === undefined)
      )
      .slice(0, 9)
      .map((item) => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url ?? null,
        permalink: item.permalink,
        timestamp: item.timestamp,
        caption: item.caption ?? null,
      }));

    res.json({ reels });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Instagram reels." });
  }
});

export default router;
