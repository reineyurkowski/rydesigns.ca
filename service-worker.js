// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('my-cache-name').then(function(cache) {
//       return cache.addAll([
//         // Add the URLs of the assets you want to cache here
//       ]);
//     })
//   );
// });

// self.addEventListener('activate', function(event) {
//   // Perform any necessary clean-up tasks here
// });

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // Registration failed
      console.log('ServiceWorker registration failed: ', err);
    });
  });
} else {
  console.log('Service workers are not supported.');
}

