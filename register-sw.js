if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://raw.githubusercontent.com/USERNAME/REPO/main/service-worker.js')
    .then(function (reg) {
      console.log('Service worker registered.', reg);
    }).catch(function (err) {
      console.log('Service worker registration failed:', err);
    });
}
