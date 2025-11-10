// === sw.js ===
// Service Worker untuk Push Notification
self.addEventListener("push", function(event) {
  const data = event.data.json();
  const title = data.title || "Notifikasi Tagihan";
  const options = {
    body: data.body || "Ada pembaruan data tagihan siswa.",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    badge: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow("https://alamat-blogger-kamu.blogspot.com"));
});
