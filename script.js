// ==================== 1. 基于截图还原的目录结构数据 ====================
const PAGE_DIRECTORY = {
    'NA': [
        { value: 'dev_0', text: 'A1.1.1 NA - 开屏' },
        { value: 'dev_1', text: 'A1.1.1.1 NA - 品牌开屏模板' },
        { value: 'dev_2', text: 'A1.1.2 NA - 首页弹窗' },
        { value: 'na_home', text: '【SS级】A1.1.3 NA - 13.14首页顶部沉浸banner' },
        { value: 'na_feed', text: '【SS级】A1.1.4 NA - 首页feed 10出1' },
        { value: 'na_mypage', text: '【S级】A1.1.5 NA - 我的页面banner' },
        { value: 'dev_4', text: 'A1.1.6 NA - 首页角标+飘条' },
        { value: 'dev_5', text: 'A1.1.7 NA - 我的弹窗' },
        { value: 'dev_6', text: 'A1.1.9 NA - 会员频道下拉2楼' },
        { value: 'dev_7', text: 'A1.1.10 NA - 共享页角标' },
        { value: 'dev_8', text: 'A1.1.11 NA - 视频/音频/共享页右上角标' },
        { value: 'dev_9', text: 'A1.1.12 NA - 等级福利商品图' },
        { value: 'dev_10', text: 'A1.1.13 NA - 搜索框icon' },
        { value: 'dev_11', text: 'A1.1.15 NA - 会员频道大卡' },
        { value: 'dev_12', text: 'A1.1.16 NA - 我的空间/简单扫描banner/金币兑换banner' },
        { value: 'dev_13', text: 'A1.1.17 NA - 活动中心' },
        { value: 'dev_14', text: 'A1.1.18 NA - 共享点对点' },
        { value: 'dev_15', text: 'A1.1.19 NA - 共享点对点icon (push)' },
        { value: 'dev_16', text: 'A1.1.20 NA - 网盘商城feed流长banner' },
        { value: 'dev_17', text: 'A1.1.21 NA - 商城feed流宽banner' },
        { value: 'dev_18', text: 'A1.1.23 NA - 支付结果页推荐banner' },
        { value: 'dev_19', text: 'A1.1.24 NA - 付费引导皮肤' },
        { value: 'dev_20', text: 'A1.1.25 NA - 动因收银台皮肤' },
        { value: 'dev_21', text: 'A1.1.26 NA - 收银台优惠券弹窗' },
        { value: 'dev_22', text: 'A1.1.27 NA - 会员卡运营位规范' },
        { value: 'dev_23', text: 'A1.1.28 NA - 商业化团队空间运营入口' },
        { value: 'dev_24', text: 'A1.1.29 NA - 简单打印首页banner' },
        { value: 'dev_25', text: 'A1.1.30 NA - 会员福利商品图' },
        { value: 'dev_26', text: 'A1.1.31 NA - 收银台运营位banner' },
        { value: 'dev_27', text: 'A1.1.32 NA - 我的页背景皮肤配置规范' },
        { value: 'dev_28', text: 'A1.1.32 NA - 首页push' }
    ],
    'PC': [
        { value: 'pc_link', text: 'A1.2.1 PC - 首页文字链' },
        { value: 'pc_tray', text: 'A1.2.2 PC - 右下角托盘' }
    ],
    'Web': [
        { value: 'web_link', text: 'A1.3.1 Web - 文字链' },
        { value: 'web_popup', text: 'A1.3.2 Web - 弹窗' }
    ],
    'Wap': [
        { value: 'wap_link', text: 'A1.4.1 Wap - 有效外链页' }
    ],
    'Mac': [
        { value: 'mac_link', text: 'A1.5.1 Mac - 首页文字链' }
    ],
    'ipd': [
        { value: 'ipd_dev', text: 'A1.6 ipd端配置项' }
    ]
};

const TEXT_LIMITS = { homeLine1: 6, homeLine2: 4, capsule: 3, myPageTitle: 9, myPageSubtitle: 8 };
const config = {
    baseUI: 'assets/home-light.png', baseUIDark: 'assets/home-dark.png',
    
    topHomePageUI: 'assets/top-of-the-home-page.png',
    homeMainBanner: 'assets/home-page-main-banner.png',
    
    topBannerTitleImg: 'assets/top-banner-w.png',

    myPageBg: 'assets/my-page.jpg', myPageX: -6, myPageY: 1621,
    banner2Svg: 'assets/banner2.svg', bannerX: 90, bannerY: 120,
    feedBg: 'assets/home-feed.jpg', feedBanner: 'assets/home-feed-banner.png', feedBannerX: 587, feedBannerY: 1336,
    feedExampleImage: 'assets/feed-image.png',
    colors: { blue: 'assets/blue.svg', green: 'assets/green.svg', orange: 'assets/orange.svg', red: 'assets/red.svg', purple: 'assets/purple.svg' },
    colorsDark: { blue: 'assets/blue-y.svg', green: 'assets/green-y.svg', orange: 'assets/orange-y.svg', red: 'assets/red-y.svg', purple: 'assets/purple-y.svg' },
    colorHex: { blue: '#258AFF', green: '#079C04', orange: '#FF5E00', red: '#FF014D', purple: '#641AFF' },
    nightTextColor1: '#FFFFFF', nightTextColor2: '#B7B7B7', arrowSvg: 'assets/freccia.svg', arrowPadding: 8,
    heroImage: 'assets/hero-banner.png', heroX: 48, heroY: 121, heroWidth: 232.34, heroHeight: 154.89
};
const myPageColors = { blue: '#F0FBFF', green: '#F0FFF4', orange: '#FFFAF0', purple: '#F6F0FF' };
const myPageElementColors = { blue: '#0090FF', green: '#0E8B36', orange: '#FF7B00', purple: '#4E1685' };

const wangpanWorkspace = document.getElementById('wangpanWorkspace');
const emptyWorkspace = document.getElementById('emptyWorkspace');
const resourceDropdown = document.getElementById('resourceDropdown');

const baseGlobalPicArea = document.getElementById('baseGlobalPicArea');
const homeControls = document.getElementById('homeControls');
const myPageControls = document.getElementById('myPageControls');
const feedControls = document.getElementById('feedControls');
const developingPrompt = document.getElementById('developingPrompt');

const viewDevelopingPrompt = document.getElementById('viewDevelopingPrompt');
const homeView = document.getElementById('homeView');
const myPageView = document.getElementById('myPageView');
const feedView = document.getElementById('feedView');

const topHomePageCanvas = document.getElementById('topHomePageCanvas'); const topHomePageCtx = topHomePageCanvas?.getContext('2d');
const topHomeBannerCanvas = document.getElementById('topHomeBannerCanvas'); const topHomeBannerCtx = topHomeBannerCanvas?.getContext('2d');

const lightCanvas = document.getElementById('lightCanvas'); const lightCtx = lightCanvas?.getContext('2d');
const lightBannerCanvas = document.getElementById('lightBannerCanvas'); const lightBannerCtx = lightBannerCanvas?.getContext('2d');
const darkBannerCanvas = document.getElementById('darkBannerCanvas'); const darkBannerCtx = darkBannerCanvas?.getContext('2d');
const myPageFullCanvas = document.getElementById('myPageFullCanvas'); const myPageFullCtx = myPageFullCanvas?.getContext('2d');
const myPageCanvas = document.getElementById('myPageCanvas'); const myPageCtx = myPageCanvas?.getContext('2d');
const myPageDarkCanvas = document.getElementById('myPageDarkCanvas'); const myPageDarkCtx = myPageDarkCanvas?.getContext('2d');

const feedCanvas = document.getElementById('feedCanvas'); const feedCtx = feedCanvas?.getContext('2d');
const feedBannerCanvas = document.getElementById('feedBannerCanvas'); const feedBannerCtx = feedBannerCanvas?.getContext('2d');

const textLine1Input = document.getElementById('textLine1'); const textLine2Input = document.getElementById('textLine2');
const textCapsuleInput = document.getElementById('textCapsule'); const myPageTitle = document.getElementById('myPageTitle'); const myPageHighlight = document.getElementById('myPageHighlight'); const myPageSubtitle = document.getElementById('myPageSubtitle');
const homeColorRadios = document.getElementsByName('homeColor'); const myPageColorRadios = document.getElementsByName('myPageColor');

// 大版 Banner 背景控制相关
const topBgModeRadios = document.getElementsByName('topBgMode');
const topBgModeImage = document.getElementById('topBgModeImage');
const topBgModeGradient = document.getElementById('topBgModeGradient');
const topBgModeSolid = document.getElementById('topBgModeSolid');
const topGradColor1 = document.getElementById('topGradColor1');
const topGradColor2 = document.getElementById('topGradColor2');
const topGradAngle = document.getElementById('topGradAngle');
const topGradAngleVal = document.getElementById('topGradAngleVal');
const topSolidColor = document.getElementById('topSolidColor');

// Feed 背景控制相关
const feedBgModeRadios = document.getElementsByName('feedBgMode');
const feedBgModeImage = document.getElementById('feedBgModeImage');
const feedBgModeGradient = document.getElementById('feedBgModeGradient');
const feedBgModeSolid = document.getElementById('feedBgModeSolid');
const feedGradColor1 = document.getElementById('feedGradColor1');
const feedGradColor2 = document.getElementById('feedGradColor2');
const feedGradAngle = document.getElementById('feedGradAngle');
const feedGradAngleVal = document.getElementById('feedGradAngleVal');
const feedSolidColor = document.getElementById('feedSolidColor');

const feedTitleInput = document.getElementById('feedTitle');
const feedTitleColor = document.getElementById('feedTitleColor');
const feedSubtitleInput = document.getElementById('feedSubtitle');
const feedSubtitleColor = document.getElementById('feedSubtitleColor');
const feedBtnTextInput = document.getElementById('feedBtnText');

const zoomModal = document.getElementById('zoomModal'); const zoomedImg = document.getElementById('zoomedImg');

let userImgObj = null; 
let feedBgBannerObj = null; 

let currentTopBgMode = 'image';
let topBgBannerObj = null;

let userTopBannerTitleObj = null; 

let currentFeedBgMode = 'image'; 

let homeColor = 'blue'; let myPageColor = 'blue';
const globalImageCache = {}; const globalSvgTextCache = {};

function setupHighQualityContext(ctx) { if (!ctx) return; ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'; }

function drawSharpenedImage(ctx, img, x, y, w, h, amount = 0.3) {
    const iw = Math.floor(w), ih = Math.floor(h), ix = Math.floor(x), iy = Math.floor(y);
    if (!img || !img.width || iw < 3 || ih < 3) { if (img) ctx.drawImage(img, ix, iy, iw, ih); return; }
    const off = document.createElement('canvas'); off.width = iw; off.height = ih; const oCtx = off.getContext('2d'); setupHighQualityContext(oCtx); oCtx.drawImage(img, 0, 0, iw, ih);
    try {
        const imageData = oCtx.getImageData(0, 0, iw, ih), data = imageData.data, tempData = new Uint8ClampedArray(data), c = 1 + 4 * amount, edge = -amount;
        for (let cy = 1; cy < ih - 1; cy++) {
            for (let cx = 1; cx < iw - 1; cx++) {
                const i = (cy * iw + cx) * 4, iTop = ((cy - 1) * iw + cx) * 4, iBottom = ((cy + 1) * iw + cx) * 4, iLeft = (cy * iw + cx - 1) * 4, iRight = (cy * iw + cx + 1) * 4;
                for (let cIdx = 0; cIdx < 3; cIdx++) data[i + cIdx] = tempData[i + cIdx] * c + tempData[iTop + cIdx] * edge + tempData[iBottom + cIdx] * edge + tempData[iLeft + cIdx] * edge + tempData[iRight + cIdx] * edge;
            }
        }
        oCtx.putImageData(imageData, 0, 0);
    } catch (e) { }
    ctx.drawImage(off, ix, iy, iw, ih);
}

async function loadImage(src) {
    if (!src) return null; if (globalImageCache[src]) return globalImageCache[src];
    if (src.startsWith('data:')) { return new Promise(resolve => { const img = new Image(); img.onload = () => { globalImageCache[src] = img; resolve(img); }; img.onerror = () => resolve(new Image()); img.src = src; }); }
    try { const response = await fetch(src); const blob = await response.blob(); return new Promise((resolve) => { const reader = new FileReader(); reader.onloadend = () => { const img = new Image(); img.onload = () => { globalImageCache[src] = img; resolve(img); }; img.onerror = () => resolve(new Image()); img.src = reader.result; }; reader.readAsDataURL(blob); }); } catch (e) { return new Promise((resolve) => { const img = new Image(); img.crossOrigin = 'Anonymous'; img.onload = () => { globalImageCache[src] = img; resolve(img); }; img.onerror = () => { const fallback = new Image(); fallback.onload = () => { globalImageCache[src] = fallback; resolve(fallback); }; fallback.onerror = () => resolve(new Image()); fallback.src = src; }; img.src = src; }); }
}

async function loadColoredArrow(url, color) {
    let txt = globalSvgTextCache[url]; if (!txt) { try { const res = await fetch(url); if (!res.ok) return new Image(); txt = await res.text(); globalSvgTextCache[url] = txt; } catch (e) { return new Image(); } }
    let modified = txt.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    if (!modified.includes('xmlns=')) modified = modified.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    const dataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(modified))); return await loadImage(dataUri);
}

async function loadColoredSvgFill(url, color) {
    try {
        let txt = globalSvgTextCache[url]; if (!txt) { const res = await fetch(url); if (!res.ok) return null; txt = await res.text(); globalSvgTextCache[url] = txt; }
        if (!txt.includes('fill=')) { txt = txt.replace(/<svg/i, `<svg fill="${color}" `); } else { txt = txt.replace(/fill="([^"]*)"/gi, (m, p) => p.toLowerCase() === 'none' ? m : `fill="${color}"`).replace(/fill='([^']*)'/gi, (m, p) => p.toLowerCase() === 'none' ? m : `fill="${color}"`); }
        if (!txt.includes('xmlns=')) txt = txt.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
        const dataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(txt))); return await loadImage(dataUri);
    } catch (e) { return null; }
}

function drawRoundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r); ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r); ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath(); }

function drawDualColorText(ctx, fullText, highlightText, x, y, baseColor, highlightColor) {
    const fixedX = Math.floor(x), fixedY = Math.floor(y);
    if (!highlightText || !fullText.includes(highlightText)) { ctx.fillStyle = baseColor; ctx.fillText(fullText, fixedX, fixedY); return; }
    const parts = fullText.split(highlightText); let currentX = fixedX;
    for (let i = 0; i < parts.length; i++) { ctx.fillStyle = baseColor; ctx.fillText(parts[i], currentX, fixedY); currentX += Math.floor(ctx.measureText(parts[i]).width); if (i < parts.length - 1) { ctx.fillStyle = highlightColor; ctx.fillText(highlightText, currentX, fixedY); currentX += Math.floor(ctx.measureText(highlightText).width); } }
}

// 🌟 创建完整的大版主 Banner (底板可以是图/渐变/纯色)
async function createTopBannerCanvas(kvImg) {
    const defaultBanner = await loadImage(config.homeMainBanner);
    if (!defaultBanner || !defaultBanner.width) return null;

    const c = document.createElement('canvas');
    // 以默认底图的宽高为基准
    c.width = defaultBanner.width;
    c.height = defaultBanner.height;
    const ctx = c.getContext('2d');
    setupHighQualityContext(ctx);

    // 1. 根据底板模式绘制背景
    if (currentTopBgMode === 'image') {
        const bgImg = topBgBannerObj || defaultBanner;
        ctx.drawImage(bgImg, 0, 0, c.width, c.height);
    } else if (currentTopBgMode === 'gradient') {
        let angle = parseFloat(topGradAngle.value);
        let rad = (angle - 90) * Math.PI / 180;
        let w = c.width, h = c.height;
        let halfW = w / 2, halfH = h / 2;
        let length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad));
        
        let x0 = halfW - Math.cos(rad) * length / 2;
        let y0 = halfH - Math.sin(rad) * length / 2;
        let x1 = halfW + Math.cos(rad) * length / 2;
        let y1 = halfH + Math.sin(rad) * length / 2;

        const grad = ctx.createLinearGradient(x0, y0, x1, y1);
        grad.addColorStop(0, topGradColor1.value);
        grad.addColorStop(1, topGradColor2.value);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    } else if (currentTopBgMode === 'solid') {
        ctx.fillStyle = topSolidColor.value;
        ctx.fillRect(0, 0, c.width, c.height);
    }

    // 2. 在指定坐标 (48, 156) 插入 420x282 的 KV 配图
    if (kvImg && kvImg.width) {
        const targetX = 48, targetY = 156, targetW = 420, targetH = 282;
        ctx.save();
        ctx.beginPath();
        ctx.rect(targetX, targetY, targetW, targetH);
        ctx.clip();
        
        const scale = Math.min(targetW / kvImg.width, targetH / kvImg.height);
        const drawW = kvImg.width * scale;
        const drawH = kvImg.height * scale;
        
        const drawX = targetX + (targetW - drawW) / 2;
        const drawY = targetY + (targetH - drawH) / 2;
        
        drawSharpenedImage(ctx, kvImg, drawX, drawY, drawW, drawH, 0.3);
        ctx.restore();
    }

    // 3. 在指定坐标 (468, 168) 插入 660x252 的标题图
    const titleImg = userTopBannerTitleObj || await loadImage(config.topBannerTitleImg);
    if (titleImg && titleImg.width) {
        const titleX = 468, titleY = 168, titleW = 660, titleH = 252;
        ctx.save();
        ctx.beginPath();
        ctx.rect(titleX, titleY, titleW, titleH);
        ctx.clip();
        
        const titleScale = Math.min(titleW / titleImg.width, titleH / titleImg.height);
        const tDrawW = titleImg.width * titleScale;
        const tDrawH = titleImg.height * titleScale;
        
        const tDrawX = titleX + (titleW - tDrawW) / 2;
        const tDrawY = titleY + (titleH - tDrawH) / 2;
        
        ctx.drawImage(titleImg, tDrawX, tDrawY, tDrawW, tDrawH);
        ctx.restore();
    }

    return c;
}

// 绘制大版主 Banner (纯净切图版本)
async function drawTopHomeBanner(canvas, ctx, kvImg) {
    if (!canvas || !ctx) return;
    const bCanvas = await createTopBannerCanvas(kvImg);
    if (bCanvas) {
        canvas.width = bCanvas.width;
        canvas.height = bCanvas.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bCanvas, 0, 0);
    }
}

// 绘制大版主 Banner (带顶层透明手机 UI 遮罩)
async function drawTopHomePage(canvas, ctx, kvImg) {
    if (!canvas || !ctx) return;
    const uiImg = await loadImage(config.topHomePageUI);
    const bCanvas = await createTopBannerCanvas(kvImg);

    if (!uiImg || !uiImg.width || !bCanvas) return;
    
    canvas.width = uiImg.width;
    canvas.height = uiImg.height;
    setupHighQualityContext(ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = canvas.width / bCanvas.width;
    const drawW = canvas.width;
    const drawH = bCanvas.height * scale;
    ctx.drawImage(bCanvas, 0, 0, drawW, drawH);

    ctx.drawImage(uiImg, 0, 0, canvas.width, canvas.height);
}

async function renderHomeCanvas() {
    const heroImg = await loadImage(config.heroImage); 
    const kvImg = userImgObj || heroImg; 

    if (topHomeBannerCanvas) {
        await drawTopHomeBanner(topHomeBannerCanvas, topHomeBannerCtx, kvImg); 
    }

    if (topHomePageCanvas) {
        await drawTopHomePage(topHomePageCanvas, topHomePageCtx, kvImg); 
    }

    if (lightCanvas) {
        await drawMode(false, lightCanvas, lightCtx, kvImg);
    }

    if (lightBannerCanvas && lightBannerCtx) { const lbCanvas = await createFullBannerCanvas(false); lightBannerCanvas.width = lbCanvas.width; lightBannerCanvas.height = lbCanvas.height; setupHighQualityContext(lightBannerCtx); lightBannerCtx.clearRect(0, 0, lightBannerCanvas.width, lightBannerCanvas.height); lightBannerCtx.drawImage(lbCanvas, 0, 0); }
    if (darkBannerCanvas && darkBannerCtx) { const dbCanvas = await createFullBannerCanvas(true); darkBannerCanvas.width = dbCanvas.width; darkBannerCanvas.height = dbCanvas.height; setupHighQualityContext(darkBannerCtx); darkBannerCtx.clearRect(0, 0, darkBannerCanvas.width, darkBannerCanvas.height); darkBannerCtx.drawImage(dbCanvas, 0, 0); }
}

async function drawMode(isDark, canvas, ctx, kvImg) {
    const bgUrl = isDark ? config.baseUIDark : config.baseUI, bannerUrl = isDark ? (config.colorsDark[homeColor] || null) : (config.colors[homeColor] || null), textColor1 = isDark ? config.nightTextColor1 : '#030B1A', arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const baseUIImg = await loadImage(bgUrl), bannerBgImg = bannerUrl ? await loadImage(bannerUrl) : null, arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    canvas.width = baseUIImg.width || 1260; canvas.height = baseUIImg.height || 2652; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (baseUIImg.width) ctx.drawImage(baseUIImg, 0, 0, canvas.width, canvas.height); if (bannerBgImg && bannerBgImg.width) ctx.drawImage(bannerBgImg, Math.floor(config.bannerX), Math.floor(config.bannerY), bannerBgImg.width, bannerBgImg.height);
    if (kvImg && kvImg.width) { ctx.save(); ctx.beginPath(); ctx.rect(Math.floor(config.heroX), Math.floor(config.heroY), Math.floor(config.heroWidth), Math.floor(config.heroHeight)); ctx.clip(); const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height), kvDrawW = kvImg.width * kvScale, kvDrawH = kvImg.height * kvScale, drawX = config.heroX + (config.heroWidth - kvDrawW) / 2, drawY = config.heroY + (config.heroHeight - kvDrawH) / 2; drawSharpenedImage(ctx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3); ctx.restore(); }
    const line1Txt = (textLine1Input?.value || '').slice(0, TEXT_LIMITS.homeLine1); const line2Txt = (textLine2Input?.value || '').slice(0, TEXT_LIMITS.homeLine2);
    ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'bold 36px "PingFangSC-Medium", "Microsoft YaHei", sans-serif'; ctx.fillStyle = textColor1; ctx.fillText(line1Txt, Math.floor(306), Math.floor(166)); ctx.fillStyle = arrowColor; ctx.fillText(line2Txt, Math.floor(306), Math.floor(217));
    if (arrowImg && arrowImg.width) { const arrowX = Math.floor(306 + ctx.measureText(line2Txt).width + config.arrowPadding), arrowY = Math.floor(217 + 18 - arrowImg.height / 2 + 2); ctx.drawImage(arrowImg, arrowX, arrowY); }
}

async function createFullBannerCanvas(isDark) {
    const bannerUrl = isDark ? (config.colorsDark[homeColor] || null) : (config.colors[homeColor] || null), textColor1 = isDark ? config.nightTextColor1 : '#030B1A', arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const bannerBgImg = bannerUrl ? await loadImage(bannerUrl) : null, heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg, arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    const bannerW = (bannerBgImg && bannerBgImg.width) ? bannerBgImg.width : 420, bannerH = (bannerBgImg && bannerBgImg.height) ? bannerBgImg.height : 282, left = Math.min(config.heroX, config.bannerX), top = Math.min(config.heroY, config.bannerY), right = Math.max(config.bannerX + bannerW, 306 + 250), bottom = Math.max(config.bannerY + bannerH, 217 + 36);
    const fullCanvas = document.createElement('canvas'), fullCtx = fullCanvas.getContext('2d'); fullCanvas.width = right - left; fullCanvas.height = bottom - top; setupHighQualityContext(fullCtx);
    const offsetX = Math.floor(-left), offsetY = Math.floor(-top); if (bannerBgImg && bannerBgImg.width) fullCtx.drawImage(bannerBgImg, Math.floor(config.bannerX + offsetX), Math.floor(config.bannerY + offsetY));
    if (kvImg && kvImg.width) { fullCtx.save(); fullCtx.beginPath(); fullCtx.rect(Math.floor(config.heroX + offsetX), Math.floor(config.heroY + offsetY), Math.floor(config.heroWidth), Math.floor(config.heroHeight)); fullCtx.clip(); const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height), kvDrawW = kvImg.width * kvScale, kvDrawH = kvImg.height * kvScale, drawX = config.heroX + offsetX + (config.heroWidth - kvDrawW) / 2, drawY = config.heroY + offsetY + (config.heroHeight - kvDrawH) / 2; drawSharpenedImage(fullCtx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3); fullCtx.restore(); }
    const line1Txt = (textLine1Input?.value || '').slice(0, TEXT_LIMITS.homeLine1); const line2Txt = (textLine2Input?.value || '').slice(0, TEXT_LIMITS.homeLine2);
    fullCtx.textAlign = 'left'; fullCtx.textBaseline = 'top'; fullCtx.font = 'bold 36px "PingFangSC-Medium", "Microsoft YaHei", sans-serif'; fullCtx.fillStyle = textColor1; fullCtx.fillText(line1Txt, Math.floor(306 + offsetX), Math.floor(166 + offsetY)); fullCtx.fillStyle = arrowColor; fullCtx.fillText(line2Txt, Math.floor(306 + offsetX), Math.floor(217 + offsetY));
    if (arrowImg && arrowImg.width) { const arrowX = Math.floor(306 + offsetX + fullCtx.measureText(line2Txt).width + config.arrowPadding), arrowY = Math.floor(217 + offsetY + 18 - arrowImg.height / 2 + 2); fullCtx.drawImage(arrowImg, arrowX, arrowY); } return fullCanvas;
}

async function renderMyPage() { await renderMyPageBanner(); await renderMyPageFullCanvas(); }
async function renderMyPageBanner() {
    const heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg;
    const drawMyPageMode = async (canvas, ctx, isDark) => {
        if (!ctx || !canvas) return; const targetColor = isDark ? '#141414' : (myPageColors[myPageColor] || '#F0FBFF'), elementColor = myPageElementColors[myPageColor] || '#0090FF', currentCapsuleColor = isDark ? '#0090FF' : elementColor, banner2Img = await loadColoredSvgFill(config.banner2Svg, targetColor);
        if (banner2Img && banner2Img.width) {
            canvas.width = banner2Img.width; canvas.height = banner2Img.height; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(banner2Img, 0, 0);
            if (kvImg && kvImg.width) { ctx.save(); const imgBoxX = 37, imgBoxY = 23, imgBoxW = 314, imgBoxH = 178; ctx.beginPath(); ctx.rect(imgBoxX, imgBoxY, imgBoxW, imgBoxH); ctx.clip(); const imgScale = Math.min(imgBoxW / kvImg.width, imgBoxH / kvImg.height), drawImgW = kvImg.width * imgScale, drawImgH = kvImg.height * imgScale, drawImgX = imgBoxX + (imgBoxW - drawImgW) / 2, drawImgY = imgBoxY + (imgBoxH - drawImgH) / 2; drawSharpenedImage(ctx, kvImg, drawImgX, drawImgY, drawImgW, drawImgH, 0.3); ctx.restore(); }
            const capsuleTxt = (textCapsuleInput?.value || '').slice(0, TEXT_LIMITS.capsule); const titleTxt = (myPageTitle?.value || '').slice(0, TEXT_LIMITS.myPageTitle); const highlightTxt = myPageHighlight?.value || ''; const subtitleTxt = (myPageSubtitle?.value || '').slice(0, TEXT_LIMITS.myPageSubtitle);
            
            ctx.save(); ctx.globalAlpha = 0.15; ctx.fillStyle = currentCapsuleColor; drawRoundRect(ctx, 857, 62, 212, 100, 50); ctx.fill(); ctx.restore();
            
            ctx.save(); ctx.fillStyle = currentCapsuleColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; 
            ctx.font = 'normal 38px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; 
            if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; ctx.fillText(capsuleTxt, 963, 111); ctx.restore();
            
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; 
            ctx.font = 'normal 44px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; 
            if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A', titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor; drawDualColorText(ctx, titleTxt, highlightTxt, 388, 57, titleBaseColor, titleHighlightColor); ctx.restore();
            
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = ' 38px "FZLTHK", "PingFang SC", sans-serif'; if (isDark) ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; else { ctx.fillStyle = elementColor; ctx.globalAlpha = 0.75; } ctx.fillText(subtitleTxt, Math.floor(388), Math.floor(128)); ctx.restore();
        }
    };
    await drawMyPageMode(myPageCanvas, myPageCtx, false); await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);
}

async function renderMyPageFullCanvas() {
    if (!myPageFullCanvas || !myPageFullCtx) return;
    try { const bgImg = await loadImage(config.myPageBg); if (!bgImg || !bgImg.width) return; myPageFullCanvas.width = bgImg.width; myPageFullCanvas.height = bgImg.height; setupHighQualityContext(myPageFullCtx); myPageFullCtx.clearRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height); myPageFullCtx.drawImage(bgImg, 0, 0); if (myPageCanvas.width > 0) { myPageFullCtx.save(); drawRoundRect(myPageFullCtx, config.myPageX + 24, config.myPageY, myPageCanvas.width - 48, myPageCanvas.height, 36); myPageFullCtx.clip(); myPageFullCtx.drawImage(myPageCanvas, Math.floor(config.myPageX), Math.floor(config.myPageY)); myPageFullCtx.restore(); } } catch (e) { }
}

async function createFeedBannerCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 561;
    canvas.height = 750;
    const ctx = canvas.getContext('2d');
    setupHighQualityContext(ctx);

    if (currentFeedBgMode === 'image') {
        const defaultBg = await loadImage(config.feedBanner);
        const bgBannerImg = feedBgBannerObj || defaultBg;
        if (bgBannerImg && bgBannerImg.width) {
            ctx.drawImage(bgBannerImg, 0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    } else if (currentFeedBgMode === 'gradient') {
        let angle = parseFloat(feedGradAngle.value);
        let rad = (angle - 90) * Math.PI / 180;
        let w = canvas.width, h = canvas.height;
        let halfW = w / 2, halfH = h / 2;
        let length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad));
        
        let x0 = halfW - Math.cos(rad) * length / 2;
        let y0 = halfH - Math.sin(rad) * length / 2;
        let x1 = halfW + Math.cos(rad) * length / 2;
        let y1 = halfH + Math.sin(rad) * length / 2;

        const grad = ctx.createLinearGradient(x0, y0, x1, y1);
        grad.addColorStop(0, feedGradColor1.value);
        grad.addColorStop(1, feedGradColor2.value);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (currentFeedBgMode === 'solid') {
        ctx.fillStyle = feedSolidColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const defaultImg = await loadImage(config.feedExampleImage); 
    const imgToDraw = userImgObj || defaultImg;
    if (imgToDraw && imgToDraw.width) {
        ctx.save();
        const imgW = 412, imgH = 360;
        const imgX = 74.5;
        const imgY = 185;
        
        ctx.beginPath();
        ctx.rect(imgX, imgY, imgW, imgH);
        ctx.clip(); 
        
        const scale = Math.min(imgW / imgToDraw.width, imgH / imgToDraw.height);
        const drawW = imgToDraw.width * scale;
        const drawH = imgToDraw.height * scale;
        
        const drawX = imgX + (imgW - drawW) / 2;
        const drawY = imgY + (imgH - drawH) / 2;
        
        drawSharpenedImage(ctx, imgToDraw, drawX, drawY, drawW, drawH, 0.3);
        ctx.restore();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const centerX = 280.5;
    
    const titleTxt = (feedTitleInput?.value || '主标题7个字').slice(0, 7);
    ctx.font = 'normal 42px "FZLanTingHeiS-H", sans-serif';
    ctx.fillStyle = feedTitleColor?.value || '#000000'; 
    ctx.fillText(titleTxt, centerX, 69);

    const subtitleTxt = (feedSubtitleInput?.value || '副标题字数最多10个字').slice(0, 10);
    ctx.font = 'normal 36px "FZLTHK", sans-serif';
    ctx.fillStyle = feedSubtitleColor?.value || '#000000'; 
    ctx.fillText(subtitleTxt, centerX, 124);

    ctx.fillStyle = '#000000';
    drawRoundRect(ctx, 45, 557, 471, 108, 54);
    ctx.fill();

    const btnTxt = (feedBtnTextInput?.value || '立即参加').slice(0, 4);
    ctx.font = 'normal 36px "FZLanTingHeiS-DB", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(btnTxt, centerX, 611);

    return canvas;
}

async function renderFeedCanvas() {
    const fbCanvas = await createFeedBannerCanvas();
    
    if (feedBannerCanvas && feedBannerCtx) {
        feedBannerCanvas.width = fbCanvas.width;
        feedBannerCanvas.height = fbCanvas.height;
        setupHighQualityContext(feedBannerCtx);
        feedBannerCtx.clearRect(0, 0, feedBannerCanvas.width, feedBannerCanvas.height);
        feedBannerCtx.drawImage(fbCanvas, 0, 0);
    }

    if (!feedCanvas || !feedCtx) return;
    try {
        const bgImg = await loadImage(config.feedBg); 
        if (!bgImg || !bgImg.width) return;
        feedCanvas.width = bgImg.width;
        feedCanvas.height = bgImg.height;
        setupHighQualityContext(feedCtx);
        feedCtx.clearRect(0, 0, feedCanvas.width, feedCanvas.height);
        feedCtx.drawImage(bgImg, 0, 0);

        if (fbCanvas && fbCanvas.width) {
            feedCtx.save();
            drawRoundRect(feedCtx, config.feedBannerX, config.feedBannerY, fbCanvas.width, fbCanvas.height, 36);
            feedCtx.clip();
            feedCtx.drawImage(fbCanvas, config.feedBannerX, config.feedBannerY);
            feedCtx.restore();
        }
    } catch (e) { console.error(e); }
}

function updateResourceDropdown(terminalId) {
    resourceDropdown.innerHTML = '';
    const pages = PAGE_DIRECTORY[terminalId] || [];

    let hasSelected = false;
    pages.forEach(page => {
        const option = document.createElement('option');
        option.value = page.value;
        option.textContent = page.text;
        if (terminalId === 'NA' && page.value === 'na_home') {
            option.selected = true;
            hasSelected = true;
        }
        resourceDropdown.appendChild(option);
    });
    resourceDropdown.dispatchEvent(new Event('change'));
}

const buBtns = document.querySelectorAll('.bu-btn');
buBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buBtns.forEach(b => b.classList.remove('active'));
        const currentBtn = e.currentTarget; currentBtn.classList.add('active');
        const targetBU = currentBtn.dataset.bu;

        if (targetBU === 'wangpan') {
            document.documentElement.style.setProperty('--primary-color', '#258AFF');
            wangpanWorkspace.classList.remove('hidden');
            emptyWorkspace.classList.add('hidden');
            const activeTerminal = document.querySelector('.terminal-btn.active').dataset.terminal;
            updateResourceDropdown(activeTerminal);
        } else {
            document.documentElement.style.setProperty('--primary-color', targetBU === 'yike' ? '#0066ff' : '#87B4FF');
            wangpanWorkspace.classList.add('hidden');
            emptyWorkspace.classList.remove('hidden');
            [homeView, myPageView, feedView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
        }
    });
});

const terminalBtns = document.querySelectorAll('.terminal-btn');
terminalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        terminalBtns.forEach(b => b.classList.remove('active'));
        const currentBtn = e.currentTarget;
        currentBtn.classList.add('active');
        const targetTerminal = currentBtn.dataset.terminal;
        updateResourceDropdown(targetTerminal);
    });
});

resourceDropdown.addEventListener('change', (e) => {
    const selected = e.target.value;
    [homeControls, myPageControls, feedControls].forEach(ctrl => ctrl?.classList.remove('active'));
    [homeView, myPageView, feedView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
    developingPrompt.classList.add('hidden');
    
    if (selected === 'na_home' || selected === 'na_mypage' || selected === 'na_feed') {
        baseGlobalPicArea.style.display = 'block';
    } else {
        baseGlobalPicArea.style.display = 'none';
    }

    if (selected === 'na_home') {
        homeControls.classList.add('active');
        homeView.classList.add('active');
    } else if (selected === 'na_mypage') {
        myPageControls.classList.add('active');
        myPageView.classList.add('active');
    } else if (selected === 'na_feed') {
        feedControls.classList.add('active');
        feedView.classList.add('active');
    } else {
        developingPrompt.classList.remove('hidden');
        viewDevelopingPrompt.classList.add('active');
    }
});

function openZoomModal(canvas) { zoomedImg.src = canvas.toDataURL('image/png', 1.0); zoomModal.style.display = 'block'; }
function closeZoomModal() { zoomModal.style.display = 'none'; zoomedImg.src = ''; }
document.querySelectorAll('.zoomable-canvas').forEach(canvas => canvas.addEventListener('click', () => openZoomModal(canvas)));
zoomModal?.addEventListener('click', closeZoomModal); document.querySelector('.close-modal')?.addEventListener('click', closeZoomModal);

homeColorRadios.forEach(r => r.addEventListener('change', async e => { homeColor = e.target.value; await renderHomeCanvas(); }));
textLine1Input?.addEventListener('input', renderHomeCanvas); textLine2Input?.addEventListener('input', renderHomeCanvas);
myPageColorRadios.forEach(r => r.addEventListener('change', async e => { myPageColor = e.target.value; await renderMyPage(); }));
textCapsuleInput?.addEventListener('input', renderMyPage); myPageTitle?.addEventListener('input', renderMyPage); myPageSubtitle?.addEventListener('input', renderMyPage); myPageHighlight?.addEventListener('input', renderMyPage);


// 大版 Banner 背景事件
topBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentTopBgMode = e.target.value;
    topBgModeImage.classList.add('hidden');
    topBgModeGradient.classList.add('hidden');
    topBgModeSolid.classList.add('hidden');

    if (currentTopBgMode === 'image') topBgModeImage.classList.remove('hidden');
    else if (currentTopBgMode === 'gradient') topBgModeGradient.classList.remove('hidden');
    else if (currentTopBgMode === 'solid') topBgModeSolid.classList.remove('hidden');

    await renderHomeCanvas();
}));

topGradColor1?.addEventListener('input', renderHomeCanvas);
topGradColor2?.addEventListener('input', renderHomeCanvas);
topSolidColor?.addEventListener('input', renderHomeCanvas);
topGradAngle?.addEventListener('input', (e) => {
    topGradAngleVal.innerText = e.target.value + '°'; 
    renderHomeCanvas();
});


// Feed 背景事件
feedBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentFeedBgMode = e.target.value;
    feedBgModeImage.classList.add('hidden');
    feedBgModeGradient.classList.add('hidden');
    feedBgModeSolid.classList.add('hidden');

    if (currentFeedBgMode === 'image') feedBgModeImage.classList.remove('hidden');
    else if (currentFeedBgMode === 'gradient') feedBgModeGradient.classList.remove('hidden');
    else if (currentFeedBgMode === 'solid') feedBgModeSolid.classList.remove('hidden');

    await renderFeedCanvas();
}));

feedGradColor1?.addEventListener('input', renderFeedCanvas);
feedGradColor2?.addEventListener('input', renderFeedCanvas);
feedSolidColor?.addEventListener('input', renderFeedCanvas);
feedGradAngle?.addEventListener('input', (e) => {
    feedGradAngleVal.innerText = e.target.value + '°'; 
    renderFeedCanvas();
});

feedTitleInput?.addEventListener('input', renderFeedCanvas);
feedTitleColor?.addEventListener('input', renderFeedCanvas);
feedSubtitleInput?.addEventListener('input', renderFeedCanvas);
feedSubtitleColor?.addEventListener('input', renderFeedCanvas);
feedBtnTextInput?.addEventListener('input', renderFeedCanvas);


function canvasToBlob(c) { return new Promise((resolve, reject) => { try { c.toBlob(b => { if (b) resolve(b); else reject(new Error("画布已被污染无法生成")); }, 'image/png'); } catch (e) { reject(e); } }); }

const dropZone = document.getElementById('uploadDropZone'); const fileInput = document.getElementById('imageUpload'); const previewImg = document.getElementById('uploadPreviewImg');
function handleFileUpload(file) { 
    if (!file || !file.type.startsWith('image/')) return; 
    const reader = new FileReader(); 
    reader.onload = async ev => { 
        const src = ev.target.result; 
        userImgObj = await loadImage(src); 
        if (previewImg) previewImg.src = src; 
        await renderHomeCanvas(); 
        await renderMyPage(); 
        await renderFeedCanvas(); 
    }; 
    reader.readAsDataURL(file); 
}
if (fileInput) { fileInput.addEventListener('change', e => handleFileUpload(e.target.files[0])); }
if (dropZone) { dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); }); dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); }); dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { handleFileUpload(e.dataTransfer.files[0]); } }); }

const topBgDropZone = document.getElementById('topBgUploadDropZone');
const topBgFileInput = document.getElementById('topBgImageUpload');
const topBgPreviewImg = document.getElementById('topBgUploadPreviewImg');

function handleTopBgFileUpload(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async ev => {
        const src = ev.target.result;
        topBgBannerObj = await loadImage(src);
        if (topBgPreviewImg) topBgPreviewImg.src = src;
        await renderHomeCanvas();
    };
    reader.readAsDataURL(file);
}
if (topBgFileInput) { topBgFileInput.addEventListener('change', e => handleTopBgFileUpload(e.target.files[0])); }
if (topBgDropZone) {
    topBgDropZone.addEventListener('dragover', (e) => { e.preventDefault(); topBgDropZone.classList.add('drag-over'); });
    topBgDropZone.addEventListener('dragleave', (e) => { e.preventDefault(); topBgDropZone.classList.remove('drag-over'); });
    topBgDropZone.addEventListener('drop', (e) => { 
        e.preventDefault(); 
        topBgDropZone.classList.remove('drag-over'); 
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { handleTopBgFileUpload(e.dataTransfer.files[0]); } 
    });
}


const feedBgDropZone = document.getElementById('feedBgUploadDropZone');
const feedBgFileInput = document.getElementById('feedBgImageUpload');
const feedBgPreviewImg = document.getElementById('feedBgUploadPreviewImg');

function handleFeedBgFileUpload(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async ev => {
        const src = ev.target.result;
        feedBgBannerObj = await loadImage(src);
        if (feedBgPreviewImg) feedBgPreviewImg.src = src;
        await renderFeedCanvas();
    };
    reader.readAsDataURL(file);
}
if (feedBgFileInput) { feedBgFileInput.addEventListener('change', e => handleFeedBgFileUpload(e.target.files[0])); }
if (feedBgDropZone) {
    feedBgDropZone.addEventListener('dragover', (e) => { e.preventDefault(); feedBgDropZone.classList.add('drag-over'); });
    feedBgDropZone.addEventListener('dragleave', (e) => { e.preventDefault(); feedBgDropZone.classList.remove('drag-over'); });
    feedBgDropZone.addEventListener('drop', (e) => { 
        e.preventDefault(); 
        feedBgDropZone.classList.remove('drag-over'); 
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { handleFeedBgFileUpload(e.dataTransfer.files[0]); } 
    });
}

const tbDropZone = document.getElementById('topBannerTitleDropZone');
const tbFileInput = document.getElementById('topBannerTitleUpload');
const tbPreviewImg = document.getElementById('topBannerTitlePreviewImg');

function handleTopBannerTitleUpload(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async ev => {
        const src = ev.target.result;
        userTopBannerTitleObj = await loadImage(src);
        if (tbPreviewImg) tbPreviewImg.src = src;
        await renderHomeCanvas();
    };
    reader.readAsDataURL(file);
}
if (tbFileInput) { tbFileInput.addEventListener('change', e => handleTopBannerTitleUpload(e.target.files[0])); }
if (tbDropZone) {
    tbDropZone.addEventListener('dragover', (e) => { e.preventDefault(); tbDropZone.classList.add('drag-over'); });
    tbDropZone.addEventListener('dragleave', (e) => { e.preventDefault(); tbDropZone.classList.remove('drag-over'); });
    tbDropZone.addEventListener('drop', (e) => { 
        e.preventDefault(); 
        tbDropZone.classList.remove('drag-over'); 
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { handleTopBannerTitleUpload(e.dataTransfer.files[0]); } 
    });
}

function initExportModal() {
    const exportModal = document.getElementById('exportModal'); const openExportModalBtn = document.getElementById('openExportModalBtn'); const cancelExportBtn = document.getElementById('cancelExportBtn'); const confirmExportBtn = document.getElementById('confirmExportBtn');
    if (!exportModal || !openExportModalBtn) return;
    openExportModalBtn.addEventListener('click', () => { exportModal.style.display = 'block'; }); cancelExportBtn.addEventListener('click', () => { exportModal.style.display = 'none'; }); window.addEventListener('click', (e) => { if (e.target === exportModal) { exportModal.style.display = 'none'; } });

    confirmExportBtn.addEventListener('click', async () => {
        if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败，请检查网络'); const zip = new JSZip(); let selectedCount = 0; const originalText = confirmExportBtn.innerText; confirmExportBtn.innerText = '正在极速打包中...'; confirmExportBtn.disabled = true;
        try {
            if (document.getElementById('chkTopHomePhone')?.checked && topHomePageCanvas) { zip.file(`1314顶部Banner-大版主Banner带壳预览.png`, await canvasToBlob(topHomePageCanvas)); selectedCount++; }
            if (document.getElementById('chkTopHomeBanner')?.checked && topHomeBannerCanvas) { zip.file(`1314顶部Banner-大版主Banner纯净版.png`, await canvasToBlob(topHomeBannerCanvas)); selectedCount++; }
            
            if (document.getElementById('chkHomePhone')?.checked && lightCanvas) { zip.file(`1314顶部Banner-下拉沉浸带壳预览-${homeColor}.png`, await canvasToBlob(lightCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeKV')?.checked) { const kvCanvas = document.createElement('canvas'); const kvCtx = kvCanvas.getContext('2d'); kvCanvas.width = 420; kvCanvas.height = 282; setupHighQualityContext(kvCtx); const heroImg = await loadImage(config.heroImage); const kvImg = userImgObj || heroImg; if (kvImg && kvImg.width) { const scale = Math.max(420 / kvImg.width, 282 / kvImg.height); const drawW = kvImg.width * scale, drawH = kvImg.height * scale; const drawX = (420 - drawW) / 2, drawY = (282 - drawH) / 2; drawSharpenedImage(kvCtx, kvImg, drawX, drawY, drawW, drawH, 0.3); } zip.file(`1314顶部Banner-KV切图.png`, await canvasToBlob(kvCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeBannerLight')?.checked && lightBannerCanvas) { zip.file(`1314顶部Banner-下拉完整版-日间-${homeColor}.png`, await canvasToBlob(lightBannerCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeBannerDark')?.checked && darkBannerCanvas) { zip.file(`1314顶部Banner-下拉完整版-夜间-${homeColor}.png`, await canvasToBlob(darkBannerCanvas)); selectedCount++; }
            
            if (document.getElementById('chkMyPageBannerLight')?.checked && myPageCanvas) { zip.file(`我的页面-完整Banner-日间-${myPageColor}.png`, await canvasToBlob(myPageCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPageBannerDark')?.checked && myPageDarkCanvas) { zip.file(`我的页面-完整Banner-夜间-${myPageColor}.png`, await canvasToBlob(myPageDarkCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPagePhone')?.checked && myPageFullCanvas) { zip.file(`我的页面-带壳预览-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas)); selectedCount++; }
            
            if (document.getElementById('chkFeedBannerExport')?.checked && feedBannerCanvas) { zip.file(`Feed-独立卡片.png`, await canvasToBlob(feedBannerCanvas)); selectedCount++; }
            if (document.getElementById('chkFeedPhone')?.checked && feedCanvas) { zip.file(`Feed-带壳预览.png`, await canvasToBlob(feedCanvas)); selectedCount++; }

            if (selectedCount === 0) { alert('您没有勾选任何资源，请至少勾选一项！'); confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; return; }
            const zipBlob = await zip.generateAsync({ type: 'blob' }); const link = document.createElement('a'); link.download = `按需导出切图集合.zip`; link.href = URL.createObjectURL(zipBlob); link.click(); exportModal.style.display = 'none';
        } catch (e) { alert("【导出报错】\n\n原因: " + e.message); } finally { confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; }
    });
}

window.onload = async () => {
    if ('fonts' in document) { 
        try { 
            await document.fonts.load('normal 38px "FZLanTingHeiS-DB-GB"'); 
            await document.fonts.load('normal 44px "FZLanTingHeiS-DB-GB"'); 
            await document.fonts.load('normal 38px "FZLTHK"'); 
            await document.fonts.load('normal 42px "FZLanTingHeiS-H"');
            await document.fonts.load('normal 36px "FZLanTingHeiS-DB"');
        } catch (e) { } 
    }
    await renderHomeCanvas(); await renderMyPage(); await renderFeedCanvas();
    updateResourceDropdown('NA');
    initExportModal();
};