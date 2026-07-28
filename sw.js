// 资源缓存 Service Worker：首次访问后，图片/脚本/样式走本地缓存，二次加载秒开。
// 换了资源想强制刷新时，把 CACHE 版本号 +1 即可。
const CACHE = 'ziyuanwei-v1';
const CORE = ['./', './index.html', './script.js', './style.css'];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {})));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return; // 只接管同源资源

    // cache-first + 后台更新（stale-while-revalidate）：命中即秒开
    e.respondWith(
        caches.open(CACHE).then((cache) =>
            cache.match(req).then((hit) => {
                const fetchAndPut = fetch(req)
                    .then((res) => {
                        if (res && res.ok) cache.put(req, res.clone());
                        return res;
                    })
                    .catch(() => hit);
                return hit || fetchAndPut;
            })
        )
    );
});
