// 自注销 Service Worker：清空所有缓存并注销自身，页面直接走网络，避免旧缓存导致看不到最新改动。
// （之前的缓存策略在没起本地服务器时会一直吐旧版本，这里改为彻底关闭缓存。）

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil((async () => {
        // 1) 删除本 SW 创建过的所有缓存
        try {
            const keys = await caches.keys();
            await Promise.all(keys.map((k) => caches.delete(k)));
        } catch (_) {}
        // 2) 注销自身
        try { await self.registration.unregister(); } catch (_) {}
        // 3) 让当前受控页面重新加载一次，从服务器拿最新代码
        try {
            const clients = await self.clients.matchAll({ type: 'window' });
            clients.forEach((c) => c.navigate(c.url));
        } catch (_) {}
    })());
});

// 不拦截任何请求：所有资源直接走网络。
