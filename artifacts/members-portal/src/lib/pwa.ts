// PWA bootstrapping: injects manifest + apple-touch-icon links using the
// runtime base path, and registers the service worker.

const BASE = import.meta.env.BASE_URL; // ends with "/"

export function setupPwa() {
  // Manifest link
  const manifest = document.createElement("link");
  manifest.rel = "manifest";
  manifest.href = `${BASE}manifest.webmanifest`;
  document.head.appendChild(manifest);

  // Apple touch icon
  const apple = document.createElement("link");
  apple.rel = "apple-touch-icon";
  apple.setAttribute("sizes", "180x180");
  apple.href = `${BASE}icons/cc-apple-touch-icon.png`;
  document.head.appendChild(apple);

  // Service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(`${BASE}sw.js`, { scope: BASE })
        .catch((err) => {
          console.error("Service worker registration failed:", err);
        });
    });
  }
}

export function isStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // iOS Safari
    (navigator as unknown as { standalone?: boolean }).standalone === true
  );
}
