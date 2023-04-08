self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache-name').then(function(cache) {
      return cache.addAll([
        // Add the URLs of the assets you want to cache here
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  // Perform any necessary clean-up tasks here
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
