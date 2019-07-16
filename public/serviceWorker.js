const cacheName = 'scribblenyc-cache';
const staticAssets = []

self.addEventListener('install', e => {
    // console.log('Service worker installed!');
    self.skipWaiting();
});
self.addEventListener('activate', e => {
    // console.log('Service worker activated!');
});
self.addEventListener('fetch', e => {
    // console.log('Service worker attempted to fetch resources!');
});