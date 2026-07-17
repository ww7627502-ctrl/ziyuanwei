// ==================== 1. 目录结构数据 ====================
const PAGE_DIRECTORY = {
    'NA': [
        { value: 'dev_1_1_1', text: 'A1.1.1 NA - 开屏' },
        { value: 'dev_1_1_1_1', text: 'A1.1.1.1 NA - 品牌开屏模板' },
        { value: 'dev_1_1_2', text: 'A1.1.2 NA - 首页弹窗' },
        { value: 'na_home', text: '【SS级】A1.1.3 NA - 13.14首页顶部沉浸banner' },
        { value: 'na_feed', text: '【SS级】A1.1.4 NA - 首页feed 10出1' },
        { value: 'na_mypage', text: '【S级】A1.1.5 NA - 我的页面banner' },
        { value: 'dev_1_1_6', text: 'A1.1.6 NA - 首页角标+飘条' },
        { value: 'dev_1_1_7', text: 'A1.1.7 NA - 我的弹窗' },
        { value: 'dev_1_1_9', text: 'A1.1.9 NA - 会员频道下拉2楼' },
        { value: 'dev_1_1_10', text: 'A1.1.10 NA - 共享页角标' },
        { value: 'dev_1_1_11', text: 'A1.1.11 NA - 视频/音频/共享页右上角标' },
        { value: 'dev_1_1_12', text: 'A1.1.12 NA - 等级福利商品图' },
        { value: 'dev_1_1_13', text: '【A级】A1.1.13 NA - 搜索框icon' },
        { value: 'dev_1_1_15', text: 'A1.1.15 NA - 会员频道大卡' },
        { value: 'dev_1_1_16', text: '【A级】A1.1.16 NA - 我的空间/简单扫描banner' },
        { value: 'dev_1_1_17', text: 'A1.1.17 NA - 活动中心' },
        { value: 'dev_1_1_18', text: 'A1.1.18 NA - 共享点对点' },
        { value: 'dev_1_1_19', text: 'A1.1.19 NA - 共享点对点icon（push）' },
        { value: 'dev_1_1_20', text: 'A1.1.20 NA - 网盘商城feed流长banner' },
        { value: 'dev_1_1_21', text: 'A1.1.21 NA - 商城feed流宽banner' },
        { value: 'dev_1_1_23', text: 'A1.1.23 NA - 支付结果页推荐banner' },
        { value: 'dev_1_1_24', text: 'A1.1.24 NA - 付费引导皮肤' },
        { value: 'dev_1_1_25', text: 'A1.1.25 NA - 动因收银台皮肤' },
        { value: 'dev_1_1_26', text: 'A1.1.26 NA - 收银台优惠券弹窗' },
        { value: 'dev_1_1_27', text: 'A1.1.27 NA - 会员卡运营位规范' },
        { value: 'dev_1_1_28', text: 'A1.1.28 NA - 商业化团队空间运营入口' },
        { value: 'dev_1_1_29', text: 'A1.1.29 NA - 简单打印首页banner' },
        { value: 'dev_1_1_30', text: 'A1.1.30 NA - 会员福利商品图' },
        { value: 'dev_1_1_31', text: 'A1.1.31 NA - 收银台运营位banner' },
        { value: 'dev_1_1_32_bg', text: 'A1.1.32 NA - 我的页背景皮肤配置规范' },
        { value: 'dev_1_1_32_push', text: 'A1.1.32 NA - 首页push' }
    ],
    'PC': [{ value: 'pc_link', text: 'A1.2.1 PC - 首页文字链' }],
    'Web': [{ value: 'web_link', text: 'A1.3.1 Web - 文字链' }],
    'Wap': [{ value: 'wap_link', text: 'A1.4.1 Wap - 有效外链页' }],
    'Mac': [{ value: 'mac_link', text: 'A1.5.1 Mac - 首页文字链' }],
    'ipd': [{ value: 'ipd_dev', text: 'A1.6 ipd端配置项' }]
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
    searchBoxPage: 'assets/search-box-page.png', searchBoxIcon: 'assets/search-box-icon.png',
    mySpacePage: 'assets/my-space-page.png', searchBtSvg: 'assets/search-bt.svg', searchArrowSvg: 'assets/search-arrow.svg',
    mySpaceExampleImage: 'assets/search-banner-image.png', 
    colors: { blue: 'assets/blue.svg', green: 'assets/green.svg', orange: 'assets/orange.svg', red: 'assets/red.svg', purple: 'assets/purple.svg' },
    colorsDark: { blue: 'assets/blue-y.svg', green: 'assets/green-y.svg', orange: 'assets/orange-y.svg', red: 'assets/red-y.svg', purple: 'assets/purple-y.svg' },
    colorHex: { blue: '#258AFF', green: '#079C04', orange: '#FF5E00', red: '#FF014D', purple: '#641AFF' },
    nightTextColor1: '#FFFFFF', nightTextColor2: '#B7B7B7', arrowSvg: 'assets/freccia.svg', arrowPadding: 8,
    heroImage: 'assets/hero-banner.png', heroX: 48, heroY: 121, heroWidth: 232.34, heroHeight: 154.89
};
const myPageColors = { blue: '#F0FBFF', green: '#F0FFF4', orange: '#FFFAF0', purple: '#F6F0FF' };
const myPageElementColors = { blue: '#0090FF', green: '#0E8B36', orange: '#FF7B00', purple: '#4E1685' };

// ==================== DOM 元素获取 ====================
const wangpanWorkspace = document.getElementById('wangpanWorkspace');
const emptyWorkspace = document.getElementById('emptyWorkspace');
const resourceList = document.getElementById('resourceList');

const baseGlobalPicArea = document.getElementById('baseGlobalPicArea');
const homeControls = document.getElementById('homeControls');
const myPageControls = document.getElementById('myPageControls');
const feedControls = document.getElementById('feedControls');
const searchIconControls = document.getElementById('searchIconControls');
const mySpaceControls = document.getElementById('mySpaceControls');
const developingPrompt = document.getElementById('developingPrompt');

const viewDevelopingPrompt = document.getElementById('viewDevelopingPrompt');
const homeView = document.getElementById('homeView');
const myPageView = document.getElementById('myPageView');
const feedView = document.getElementById('feedView');
const searchIconView = document.getElementById('searchIconView');
const mySpaceView = document.getElementById('mySpaceView');

// 画布
const topHomePageCanvas = document.getElementById('topHomePageCanvas'); const topHomePageCtx = topHomePageCanvas?.getContext('2d');
const lightCanvas = document.getElementById('lightCanvas'); const lightCtx = lightCanvas?.getContext('2d');
const myPageFullCanvas = document.getElementById('myPageFullCanvas'); const myPageFullCtx = myPageFullCanvas?.getContext('2d');
const feedCanvas = document.getElementById('feedCanvas'); const feedCtx = feedCanvas?.getContext('2d');
const searchPageCanvas = document.getElementById('searchPageCanvas'); const searchPageCtx = searchPageCanvas?.getContext('2d');
const mySpacePageCanvas = document.getElementById('mySpacePageCanvas'); const mySpacePageCtx = mySpacePageCanvas?.getContext('2d');

const topHomeBannerCanvas = document.getElementById('topHomeBannerCanvas'); const topHomeBannerCtx = topHomeBannerCanvas?.getContext('2d');
const lightBannerCanvas = document.getElementById('lightBannerCanvas'); const lightBannerCtx = lightBannerCanvas?.getContext('2d');
const darkBannerCanvas = document.getElementById('darkBannerCanvas'); const darkBannerCtx = darkBannerCanvas?.getContext('2d');
const myPageCanvas = document.getElementById('myPageCanvas'); const myPageCtx = myPageCanvas?.getContext('2d');
const myPageDarkCanvas = document.getElementById('myPageDarkCanvas'); const myPageDarkCtx = myPageDarkCanvas?.getContext('2d');
const feedBannerCanvas = document.getElementById('feedBannerCanvas'); const feedBannerCtx = feedBannerCanvas?.getContext('2d');
const searchIconExportCanvas = document.getElementById('searchIconExportCanvas'); const searchIconExportCtx = searchIconExportCanvas?.getContext('2d');
const mySpaceExportCanvas = document.getElementById('mySpaceExportCanvas'); const mySpaceExportCtx = mySpaceExportCanvas?.getContext('2d');

// 输入控件
const textLine1Input = document.getElementById('textLine1'); const textLine2Input = document.getElementById('textLine2');
const textCapsuleInput = document.getElementById('textCapsule'); const myPageTitle = document.getElementById('myPageTitle'); const myPageHighlight = document.getElementById('myPageHighlight'); const myPageSubtitle = document.getElementById('myPageSubtitle');
const homeColorRadios = document.getElementsByName('homeColor'); const myPageColorRadios = document.getElementsByName('myPageColor');

// 首页底板控制
const topBgModeRadios = document.getElementsByName('topBgMode');
const topBgModeImage = document.getElementById('topBgModeImage');
const topBgModeGradient = document.getElementById('topBgModeGradient');
const topBgModeSolid = document.getElementById('topBgModeSolid');
const topGradColor1 = document.getElementById('topGradColor1');
const topGradColor2 = document.getElementById('topGradColor2');
const topGradAngle = document.getElementById('topGradAngle');
const topGradAngleVal = document.getElementById('topGradAngleVal');
const topSolidColor = document.getElementById('topSolidColor');

// Feed底板控制
const feedBgModeRadios = document.getElementsByName('feedBgMode');
const feedBgModeImage = document.getElementById('feedBgModeImage');
const feedBgModeGradient = document.getElementById('feedBgModeGradient');
const feedBgModeSolid = document.getElementById('feedBgModeSolid');
const feedGradColor1 = document.getElementById('feedGradColor1');
const feedGradColor2 = document.getElementById('feedGradColor2');
const feedGradAngle = document.getElementById('feedGradAngle');
const feedGradAngleVal = document.getElementById('feedGradAngleVal');
const feedSolidColor = document.getElementById('feedSolidColor');

const feedTitleInput = document.getElementById('feedTitle'); const feedTitleColor = document.getElementById('feedTitleColor');
const feedSubtitleInput = document.getElementById('feedSubtitle'); const feedSubtitleColor = document.getElementById('feedSubtitleColor');
const feedBtnTextInput = document.getElementById('feedBtnText');

// 我的空间控制
const mySpaceBgModeRadios = document.getElementsByName('mySpaceBgMode');
const mySpaceBgModeSolid = document.getElementById('mySpaceBgModeSolid');
const mySpaceBgModeGradient = document.getElementById('mySpaceBgModeGradient');
const mySpaceSolidColor = document.getElementById('mySpaceSolidColor');
const mySpaceGradColor1 = document.getElementById('mySpaceGradColor1');
const mySpaceGradColor2 = document.getElementById('mySpaceGradColor2');

const mySpaceTitleInput = document.getElementById('mySpaceTitle');
const mySpaceSubInput = document.getElementById('mySpaceSub');
const mySpaceBtnTextInput = document.getElementById('mySpaceBtnText');
const mySpaceBtnGrad1 = document.getElementById('mySpaceBtnGrad1'); 
const mySpaceBtnGrad2 = document.getElementById('mySpaceBtnGrad2');

// 全局状态与缓存
let userImgObj = null; 
let feedBgBannerObj = null; 
let currentTopBgMode = 'image';
let topBgBannerObj = null;
let userTopBannerTitleObj = null; 
let currentFeedBgMode = 'image'; 
let homeColor = 'blue'; let myPageColor = 'blue';
let currentMySpaceBgMode = 'solid';
const globalImageCache = {}; const globalSvgTextCache = {};

// ==================== 图片处理与加载函数 ====================
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

// ==================== 渲染核心逻辑 ====================

// 大图状态 Banner
async function createTopBannerCanvas(kvImg) {
    const defaultBanner = await loadImage(config.homeMainBanner);
    if (!defaultBanner || !defaultBanner.width) return null;
    const c = document.createElement('canvas'); c.width = defaultBanner.width; c.height = defaultBanner.height; const ctx = c.getContext('2d'); setupHighQualityContext(ctx);

    if (currentTopBgMode === 'image') {
        const bgImg = topBgBannerObj || defaultBanner; ctx.drawImage(bgImg, 0, 0, c.width, c.height);
    } else if (currentTopBgMode === 'gradient') {
        let angle = parseFloat(topGradAngle.value), rad = (angle - 90) * Math.PI / 180, w = c.width, h = c.height, halfW = w / 2, halfH = h / 2;
        let length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad)), x0 = halfW - Math.cos(rad) * length / 2, y0 = halfH - Math.sin(rad) * length / 2, x1 = halfW + Math.cos(rad) * length / 2, y1 = halfH + Math.sin(rad) * length / 2;
        const grad = ctx.createLinearGradient(x0, y0, x1, y1); grad.addColorStop(0, topGradColor1.value); grad.addColorStop(1, topGradColor2.value); ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
    } else if (currentTopBgMode === 'solid') {
        ctx.fillStyle = topSolidColor.value; ctx.fillRect(0, 0, c.width, c.height);
    }

    if (kvImg && kvImg.width) {
        const targetX = 48, targetY = 156, targetW = 420, targetH = 282;
        ctx.save(); ctx.beginPath(); ctx.rect(targetX, targetY, targetW, targetH); ctx.clip();
        const scale = Math.min(targetW / kvImg.width, targetH / kvImg.height), drawW = kvImg.width * scale, drawH = kvImg.height * scale, drawX = targetX + (targetW - drawW) / 2, drawY = targetY + (targetH - drawH) / 2;
        drawSharpenedImage(ctx, kvImg, drawX, drawY, drawW, drawH, 0.3); ctx.restore();
    }
    const titleImg = userTopBannerTitleObj || await loadImage(config.topBannerTitleImg);
    if (titleImg && titleImg.width) {
        const titleX = 468, titleY = 168, titleW = 660, titleH = 252;
        ctx.save(); ctx.beginPath(); ctx.rect(titleX, titleY, titleW, titleH); ctx.clip();
        const titleScale = Math.min(titleW / titleImg.width, titleH / titleImg.height), tDrawW = titleImg.width * titleScale, tDrawH = titleImg.height * titleScale, tDrawX = titleX + (titleW - tDrawW) / 2, tDrawY = titleY + (titleH - tDrawH) / 2;
        ctx.drawImage(titleImg, tDrawX, tDrawY, tDrawW, tDrawH); ctx.restore();
    }
    return c;
}

async function drawTopHomeBanner(canvas, ctx, kvImg) {
    if (!canvas || !ctx) return; const bCanvas = await createTopBannerCanvas(kvImg);
    if (bCanvas) { canvas.width = bCanvas.width; canvas.height = bCanvas.height; ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(bCanvas, 0, 0); }
}

async function drawTopHomePage(canvas, ctx, kvImg) {
    if (!canvas || !ctx) return; const uiImg = await loadImage(config.topHomePageUI), bCanvas = await createTopBannerCanvas(kvImg);
    if (!uiImg || !uiImg.width || !bCanvas) return;
    canvas.width = uiImg.width; canvas.height = uiImg.height; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = canvas.width / bCanvas.width, drawW = canvas.width, drawH = bCanvas.height * scale;
    ctx.drawImage(bCanvas, 0, 0, drawW, drawH); ctx.drawImage(uiImg, 0, 0, canvas.width, canvas.height);
}

// 小图状态 Banner 相关
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

async function renderHomeCanvas() {
    const heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg; 
    if (topHomeBannerCanvas) await drawTopHomeBanner(topHomeBannerCanvas, topHomeBannerCtx, kvImg); 
    if (topHomePageCanvas) await drawTopHomePage(topHomePageCanvas, topHomePageCtx, kvImg); 
    if (lightCanvas) await drawMode(false, lightCanvas, lightCtx, kvImg);
    if (lightBannerCanvas && lightBannerCtx) { const lbCanvas = await createFullBannerCanvas(false); lightBannerCanvas.width = lbCanvas.width; lightBannerCanvas.height = lbCanvas.height; setupHighQualityContext(lightBannerCtx); lightBannerCtx.clearRect(0, 0, lightBannerCanvas.width, lightBannerCanvas.height); lightBannerCtx.drawImage(lbCanvas, 0, 0); }
    if (darkBannerCanvas && darkBannerCtx) { const dbCanvas = await createFullBannerCanvas(true); darkBannerCanvas.width = dbCanvas.width; darkBannerCanvas.height = dbCanvas.height; setupHighQualityContext(darkBannerCtx); darkBannerCtx.clearRect(0, 0, darkBannerCanvas.width, darkBannerCanvas.height); darkBannerCtx.drawImage(dbCanvas, 0, 0); }
}

// 我的页面相关
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
            ctx.save(); ctx.fillStyle = currentCapsuleColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = 'normal 38px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; ctx.fillText(capsuleTxt, 963, 111); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'normal 44px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A', titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor; drawDualColorText(ctx, titleTxt, highlightTxt, 388, 57, titleBaseColor, titleHighlightColor); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = ' 38px "FZLTHK", "PingFang SC", sans-serif'; if (isDark) ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; else { ctx.fillStyle = elementColor; ctx.globalAlpha = 0.75; } ctx.fillText(subtitleTxt, Math.floor(388), Math.floor(128)); ctx.restore();
        }
    };
    await drawMyPageMode(myPageCanvas, myPageCtx, false); await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);
}

async function renderMyPageFullCanvas() {
    if (!myPageFullCanvas || !myPageFullCtx) return;
    try { const bgImg = await loadImage(config.myPageBg); if (!bgImg || !bgImg.width) return; myPageFullCanvas.width = bgImg.width; myPageFullCanvas.height = bgImg.height; setupHighQualityContext(myPageFullCtx); myPageFullCtx.clearRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height); myPageFullCtx.drawImage(bgImg, 0, 0); if (myPageCanvas.width > 0) { myPageFullCtx.save(); drawRoundRect(myPageFullCtx, config.myPageX + 24, config.myPageY, myPageCanvas.width - 48, myPageCanvas.height, 36); myPageFullCtx.clip(); myPageFullCtx.drawImage(myPageCanvas, Math.floor(config.myPageX), Math.floor(config.myPageY)); myPageFullCtx.restore(); } } catch (e) { }
}

// Feed 相关
async function createFeedBannerCanvas() {
    const canvas = document.createElement('canvas'); canvas.width = 561; canvas.height = 750; const ctx = canvas.getContext('2d'); setupHighQualityContext(ctx);
    if (currentFeedBgMode === 'image') { const bgBannerImg = feedBgBannerObj || await loadImage(config.feedBanner); if (bgBannerImg && bgBannerImg.width) ctx.drawImage(bgBannerImg, 0, 0, canvas.width, canvas.height); else { ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height); } }
    else if (currentFeedBgMode === 'gradient') { let angle = parseFloat(feedGradAngle.value), rad = (angle - 90) * Math.PI / 180, w = canvas.width, h = canvas.height, halfW = w / 2, halfH = h / 2, length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad)), x0 = halfW - Math.cos(rad) * length / 2, y0 = halfH - Math.sin(rad) * length / 2, x1 = halfW + Math.cos(rad) * length / 2, y1 = halfH + Math.sin(rad) * length / 2; const grad = ctx.createLinearGradient(x0, y0, x1, y1); grad.addColorStop(0, feedGradColor1.value); grad.addColorStop(1, feedGradColor2.value); ctx.fillStyle = grad; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    else if (currentFeedBgMode === 'solid') { ctx.fillStyle = feedSolidColor.value; ctx.fillRect(0, 0, canvas.width, canvas.height); }

    const defaultImg = await loadImage(config.feedExampleImage); const imgToDraw = userImgObj || defaultImg;
    if (imgToDraw && imgToDraw.width) { ctx.save(); const imgW = 412, imgH = 360, imgX = 74.5, imgY = 185; ctx.beginPath(); ctx.rect(imgX, imgY, imgW, imgH); ctx.clip(); const scale = Math.min(imgW / imgToDraw.width, imgH / imgToDraw.height), drawW = imgToDraw.width * scale, drawH = imgToDraw.height * scale, drawX = imgX + (imgW - drawW) / 2, drawY = imgY + (imgH - drawH) / 2; drawSharpenedImage(ctx, imgToDraw, drawX, drawY, drawW, drawH, 0.3); ctx.restore(); }

    ctx.textAlign = 'center'; ctx.textBaseline = 'top'; const centerX = 280.5;
    const titleTxt = (feedTitleInput?.value || '主标题7个字').slice(0, 7); ctx.font = 'normal 42px "FZLanTingHeiS-H", sans-serif'; ctx.fillStyle = feedTitleColor?.value || '#000000'; ctx.fillText(titleTxt, centerX, 69);
    const subtitleTxt = (feedSubtitleInput?.value || '副标题字数最多10个字').slice(0, 10); ctx.font = 'normal 36px "FZLTHK", sans-serif'; ctx.fillStyle = feedSubtitleColor?.value || '#000000'; ctx.fillText(subtitleTxt, centerX, 124);
    ctx.fillStyle = '#000000'; drawRoundRect(ctx, 45, 557, 471, 108, 54); ctx.fill();
    const btnTxt = (feedBtnTextInput?.value || '立即参加').slice(0, 4); ctx.font = 'normal 36px "FZLanTingHeiS-DB", sans-serif'; ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(btnTxt, centerX, 611);
    return canvas;
}

async function renderFeedCanvas() {
    const fbCanvas = await createFeedBannerCanvas();
    if (feedBannerCanvas && feedBannerCtx) { feedBannerCanvas.width = fbCanvas.width; feedBannerCanvas.height = fbCanvas.height; setupHighQualityContext(feedBannerCtx); feedBannerCtx.clearRect(0, 0, feedBannerCanvas.width, feedBannerCanvas.height); feedBannerCtx.drawImage(fbCanvas, 0, 0); }
    if (!feedCanvas || !feedCtx) return;
    try { const bgImg = await loadImage(config.feedBg); if (!bgImg || !bgImg.width) return; feedCanvas.width = bgImg.width; feedCanvas.height = bgImg.height; setupHighQualityContext(feedCtx); feedCtx.clearRect(0, 0, feedCanvas.width, feedCanvas.height); feedCtx.drawImage(bgImg, 0, 0); if (fbCanvas && fbCanvas.width) { feedCtx.save(); drawRoundRect(feedCtx, config.feedBannerX, config.feedBannerY, fbCanvas.width, fbCanvas.height, 36); feedCtx.clip(); feedCtx.drawImage(fbCanvas, config.feedBannerX, config.feedBannerY); feedCtx.restore(); } } catch (e) { console.error(e); }
}

// 搜索框 Icon 相关
async function renderSearchIcon() {
    if (!searchPageCanvas || !searchPageCtx) return;
    const bgImg = await loadImage(config.searchBoxPage);
    const defaultIcon = await loadImage(config.searchBoxIcon);
    const iconImg = userImgObj || defaultIcon;

    if (bgImg && bgImg.width) {
        searchPageCanvas.width = bgImg.width;
        searchPageCanvas.height = bgImg.height;
        setupHighQualityContext(searchPageCtx);
        searchPageCtx.clearRect(0, 0, searchPageCanvas.width, searchPageCanvas.height);
        searchPageCtx.drawImage(bgImg, 0, 0);

        if (iconImg && iconImg.width) {
            const targetX = 48, targetY = 359, targetW = 128, targetH = 128;
            searchPageCtx.save();
            const scale = Math.min(targetW / iconImg.width, targetH / iconImg.height);
            const drawW = iconImg.width * scale, drawH = iconImg.height * scale;
            const drawX = targetX + (targetW - drawW) / 2;
            const drawY = targetY + (targetH - drawH) / 2;
            drawSharpenedImage(searchPageCtx, iconImg, drawX, drawY, drawW, drawH, 0.3);
            searchPageCtx.restore();
        }
    }

    if (searchIconExportCanvas && searchIconExportCtx) {
        searchIconExportCanvas.width = 204;
        searchIconExportCanvas.height = 204;
        setupHighQualityContext(searchIconExportCtx);
        searchIconExportCtx.clearRect(0, 0, 204, 204);
        
        if (iconImg && iconImg.width) {
            const targetW = 204, targetH = 204;
            const scale = Math.min(targetW / iconImg.width, targetH / iconImg.height);
            const drawW = iconImg.width * scale, drawH = iconImg.height * scale;
            const drawX = (targetW - drawW) / 2;
            const drawY = (targetH - drawH) / 2;
            drawSharpenedImage(searchIconExportCtx, iconImg, drawX, drawY, drawW, drawH, 0.3);
        }
    }
}

// ==================== 我的空间/简单扫描 Banner ====================
async function createMySpaceBannerCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1182; canvas.height = 252;
    const ctx = canvas.getContext('2d');
    setupHighQualityContext(ctx);

    // 1. 绘制底板
    if (currentMySpaceBgMode === 'solid') {
        ctx.fillStyle = mySpaceSolidColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, mySpaceGradColor1.value);
        grad.addColorStop(1, mySpaceGradColor2.value);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 2. 绘制主标题 (固定黑色)
    const titleTxt = (mySpaceTitleInput?.value || '主标题最多11个文字').slice(0, 11);
    ctx.font = 'normal 50px "FZLanTingHeiS-DB-GB", sans-serif';
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'top'; // 统一左上角对齐
    ctx.fillText(titleTxt, 62, 62);

    // 3. 绘制副标题 (固定灰色 #777777)
    const subTxt = (mySpaceSubInput?.value || '副标题最多8个字').slice(0, 8);
    ctx.font = 'normal 42px "FZLanTingHeiS-R-GB", sans-serif';
    ctx.fillStyle = '#777777';
    ctx.textBaseline = 'top';
    ctx.fillText(subTxt, 62, 142);

    // 4. 绘制渐变按钮 
    const btnSvg = await loadImage(config.searchBtSvg);
    const btnX = 410, btnY = 144; // 143.63 取整

    if (btnSvg && btnSvg.width) {
        // 创建一个独立的小画板，尺寸和按钮完全一样
        const btnCanvas = document.createElement('canvas');
        btnCanvas.width = btnSvg.width; btnCanvas.height = btnSvg.height;
        const btnCtx = btnCanvas.getContext('2d');
        
        // --- 核心：在独立画板上绘制并填充渐变 ---
        btnCtx.drawImage(btnSvg, 0, 0);
        btnCtx.globalCompositeOperation = 'source-in';
        
        const btnGrad = btnCtx.createLinearGradient(0, 0, btnCanvas.width, 0);
        btnGrad.addColorStop(0, mySpaceBtnGrad1.value);
        btnGrad.addColorStop(1, mySpaceBtnGrad2.value);
        btnCtx.fillStyle = btnGrad;
        btnCtx.fillRect(0, 0, btnCanvas.width, btnCanvas.height);
        
        // 恢复正常模式，准备画字和箭头
        btnCtx.globalCompositeOperation = 'source-over';
        
        // 文字：在独立画板里，绝对左上角对齐
        const btnTxt = mySpaceBtnTextInput.value || '去查看';
        btnCtx.font = 'normal 36px "FZLanTingHeiS-DB-GB", sans-serif';
        btnCtx.fillStyle = '#FFFFFF';
        btnCtx.textBaseline = 'top';
        btnCtx.textAlign = 'left';
        btnCtx.fillText(btnTxt, 22, 7.26);

        // 箭头：在独立画板里，绝对坐标对齐
        const arrowSvg = await loadImage(config.searchArrowSvg);
        if (arrowSvg && arrowSvg.width) {
            btnCtx.drawImage(arrowSvg, 146, 13.38); 
        }

        // 最后，把整个小画板贴到大 Banner 上
        ctx.drawImage(btnCanvas, btnX, btnY);
    }

    // 5. 绘制右侧配图 (300x220, 位于 x795, y17)
    const defaultMySpaceImg = await loadImage(config.mySpaceExampleImage);
    const imgToDraw = userImgObj || defaultMySpaceImg; // 全局上传的图 或 默认图

    if (imgToDraw && imgToDraw.width) {
        ctx.save();
        const imgX = 795, imgY = 17, imgW = 300, imgH = 220;
        ctx.beginPath();
        ctx.rect(imgX, imgY, imgW, imgH);
        ctx.clip(); // 限制绘制区域，保证绝不超框
        
        // 等比缩放，居中裁剪
        const scale = Math.max(imgW / imgToDraw.width, imgH / imgToDraw.height); // 使用 max 保证填满整个区域
        const drawW = imgToDraw.width * scale;
        const drawH = imgToDraw.height * scale;
        const drawX = imgX + (imgW - drawW) / 2;
        const drawY = imgY + (imgH - drawH) / 2;
        
        drawSharpenedImage(ctx, imgToDraw, drawX, drawY, drawW, drawH, 0.3);
        ctx.restore();
    }

    return canvas;
}

async function renderMySpaceCanvas() {
    const bannerCanvas = await createMySpaceBannerCanvas();
    
    // 渲染独立切图 (1182x252) - 无圆角
    if (mySpaceExportCanvas && mySpaceExportCtx) {
        mySpaceExportCanvas.width = bannerCanvas.width;
        mySpaceExportCanvas.height = bannerCanvas.height;
        setupHighQualityContext(mySpaceExportCtx);
        mySpaceExportCtx.clearRect(0, 0, mySpaceExportCanvas.width, mySpaceExportCanvas.height);
        
        // 直接绘制，去掉了之前的圆角 clip
        mySpaceExportCtx.drawImage(bannerCanvas, 0, 0);
    }

    // 渲染页面预览 (等比缩放)
    if (!mySpacePageCanvas || !mySpacePageCtx) return;
    const pageImg = await loadImage(config.mySpacePage);
    if (pageImg && pageImg.width) {
        mySpacePageCanvas.width = pageImg.width;
        mySpacePageCanvas.height = pageImg.height;
        setupHighQualityContext(mySpacePageCtx);
        mySpacePageCtx.clearRect(0, 0, mySpacePageCanvas.width, mySpacePageCanvas.height);
        mySpacePageCtx.drawImage(pageImg, 0, 0);

        const targetW = 1107;
        const scale = targetW / bannerCanvas.width; // 缩放比 ≈ 0.9365
        const targetH = bannerCanvas.height * scale; // ≈ 236
        const drawX = 31, drawY = 847;
        const scaledRadius = 50 * scale;

        mySpacePageCtx.save();
        drawRoundRect(mySpacePageCtx, drawX, drawY, targetW, targetH, scaledRadius);
        mySpacePageCtx.clip();
        mySpacePageCtx.drawImage(bannerCanvas, 0, 0, bannerCanvas.width, bannerCanvas.height, drawX, drawY, targetW, targetH);
        mySpacePageCtx.restore();
    }
}


// ==================== 界面交互事件 ====================

// 极简侧边栏列表
function updateResourceDropdown(terminalId) {
    const resourceList = document.getElementById('resourceList');
    if (!resourceList) return;
    resourceList.innerHTML = ''; 
    const pages = PAGE_DIRECTORY[terminalId] || [];

    pages.forEach((page, index) => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        if ((terminalId === 'NA' && page.value === 'na_home') || (terminalId !== 'NA' && index === 0)) {
            item.classList.add('active');
        }
        item.dataset.value = page.value;
        item.innerHTML = `<div class="resource-item-text" title="${page.text}">${page.text}</div>`;

        item.addEventListener('click', (e) => {
            document.querySelectorAll('.resource-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            switchResourceView(page.value);
        });
        resourceList.appendChild(item);
    });

    const activeItem = resourceList.querySelector('.active');
    if (activeItem) switchResourceView(activeItem.dataset.value);
    else switchResourceView(null);
}

function switchResourceView(selected) {
    [homeControls, myPageControls, feedControls, searchIconControls, mySpaceControls].forEach(ctrl => ctrl?.classList.remove('active'));
    [homeView, myPageView, feedView, searchIconView, mySpaceView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
    developingPrompt.classList.add('hidden');

    if (selected === 'na_home' || selected === 'na_mypage' || selected === 'na_feed' || selected === 'dev_1_1_13' || selected === 'dev_1_1_16') {
        baseGlobalPicArea.style.display = 'block';
    } else {
        baseGlobalPicArea.style.display = 'none';
    }

    if (selected === 'na_home') { homeControls.classList.add('active'); homeView.classList.add('active'); } 
    else if (selected === 'na_mypage') { myPageControls.classList.add('active'); myPageView.classList.add('active'); } 
    else if (selected === 'na_feed') { feedControls.classList.add('active'); feedView.classList.add('active'); } 
    else if (selected === 'dev_1_1_13') { searchIconControls.classList.add('active'); searchIconView.classList.add('active'); }
    else if (selected === 'dev_1_1_16') { mySpaceControls.classList.add('active'); mySpaceView.classList.add('active'); }
    else { developingPrompt.classList.remove('hidden'); viewDevelopingPrompt.classList.add('active'); }
}

const buBtns = document.querySelectorAll('.bu-btn');
buBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buBtns.forEach(b => b.classList.remove('active')); const currentBtn = e.currentTarget; currentBtn.classList.add('active'); const targetBU = currentBtn.dataset.bu;
        if (targetBU === 'wangpan') { 
            document.documentElement.style.setProperty('--primary-color', '#258AFF'); 
            wangpanWorkspace.classList.remove('hidden'); emptyWorkspace.classList.add('hidden'); 
            updateResourceDropdown(document.querySelector('.terminal-btn.active').dataset.terminal); 
        } else { 
            document.documentElement.style.setProperty('--primary-color', targetBU === 'yike' ? '#0066ff' : '#87B4FF'); 
            wangpanWorkspace.classList.add('hidden'); emptyWorkspace.classList.remove('hidden'); 
            [homeView, myPageView, feedView, searchIconView, mySpaceView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active')); 
        }
    });
});

const terminalBtns = document.querySelectorAll('.terminal-btn');
terminalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => { 
        terminalBtns.forEach(b => b.classList.remove('active')); 
        const currentBtn = e.currentTarget; currentBtn.classList.add('active'); 
        updateResourceDropdown(currentBtn.dataset.terminal); 
    });
});

// ==================== 全新简洁大图弹窗 ====================
const detailModal = document.getElementById('detailModal');
const detailImagesBox = document.getElementById('detailImagesBox');
const detailModalTitle = document.getElementById('detailModalTitle');

function openDetailModal(targetType) {
    detailImagesBox.innerHTML = ''; 
    if (targetType === 'homeTop') {
        detailModalTitle.innerText = '大图状态 Banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">纯净切图</div><img src="${topHomeBannerCanvas.toDataURL()}" style="max-height: 400px; width: auto;">`;
    } 
    else if (targetType === 'homeLight') {
        detailModalTitle.innerText = '小图状态 Banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">日间完整版</div><img src="${lightBannerCanvas.toDataURL()}" style="max-height: 250px; width: auto;"><div class="banner-label" style="margin-top:16px;">夜间完整版</div><img src="${darkBannerCanvas.toDataURL()}" style="max-height: 250px; width: auto;">`;
    }
    else if (targetType === 'myPage') {
        detailModalTitle.innerText = '我的页面 Banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">日间模式</div><img src="${myPageCanvas.toDataURL()}" style="max-height: 250px; width: auto;"><div class="banner-label" style="margin-top:16px;">夜间模式</div><img src="${myPageDarkCanvas.toDataURL()}" style="max-height: 250px; width: auto;">`;
    }
    else if (targetType === 'feed') {
        detailModalTitle.innerText = 'Feed10出1卡片 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立 Feed 卡片切图</div><img src="${feedBannerCanvas.toDataURL()}" style="max-height: 500px; width: auto;">`;
    }
    else if (targetType === 'searchIcon') {
        detailModalTitle.innerText = '搜索框 icon - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (204x204)</div><img src="${searchIconExportCanvas.toDataURL()}" style="max-height: 204px; width: auto; border: 1px dashed #ccc;">`;
    }
    else if (targetType === 'mySpace') {
        detailModalTitle.innerText = '我的空间 Banner - 纯净切图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (1182x252)</div><img src="${mySpaceExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    }
    detailModal.style.display = 'flex';
}

document.querySelectorAll('.zoomable-canvas').forEach(canvas => {
    canvas.addEventListener('click', (e) => { const targetType = e.target.getAttribute('data-target'); if (targetType) openDetailModal(targetType); });
});

document.querySelector('.close-detail-modal')?.addEventListener('click', () => { detailModal.style.display = 'none'; });
detailModal?.addEventListener('click', (e) => { if(e.target === detailModal) detailModal.style.display = 'none'; });

// ==================== 参数输入监听 ====================
homeColorRadios.forEach(r => r.addEventListener('change', async e => { homeColor = e.target.value; await renderHomeCanvas(); }));
textLine1Input?.addEventListener('input', renderHomeCanvas); textLine2Input?.addEventListener('input', renderHomeCanvas);
myPageColorRadios.forEach(r => r.addEventListener('change', async e => { myPageColor = e.target.value; await renderMyPage(); }));
textCapsuleInput?.addEventListener('input', renderMyPage); myPageTitle?.addEventListener('input', renderMyPage); myPageSubtitle?.addEventListener('input', renderMyPage); myPageHighlight?.addEventListener('input', renderMyPage);

topBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentTopBgMode = e.target.value; topBgModeImage.classList.add('hidden'); topBgModeGradient.classList.add('hidden'); topBgModeSolid.classList.add('hidden');
    if (currentTopBgMode === 'image') topBgModeImage.classList.remove('hidden'); else if (currentTopBgMode === 'gradient') topBgModeGradient.classList.remove('hidden'); else if (currentTopBgMode === 'solid') topBgModeSolid.classList.remove('hidden');
    await renderHomeCanvas();
}));
topGradColor1?.addEventListener('input', renderHomeCanvas); topGradColor2?.addEventListener('input', renderHomeCanvas); topSolidColor?.addEventListener('input', renderHomeCanvas);
topGradAngle?.addEventListener('input', (e) => { topGradAngleVal.innerText = e.target.value + '°'; renderHomeCanvas(); });

feedBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentFeedBgMode = e.target.value; feedBgModeImage.classList.add('hidden'); feedBgModeGradient.classList.add('hidden'); feedBgModeSolid.classList.add('hidden');
    if (currentFeedBgMode === 'image') feedBgModeImage.classList.remove('hidden'); else if (currentFeedBgMode === 'gradient') feedBgModeGradient.classList.remove('hidden'); else if (currentFeedBgMode === 'solid') feedBgModeSolid.classList.remove('hidden');
    await renderFeedCanvas();
}));
feedGradColor1?.addEventListener('input', renderFeedCanvas); feedGradColor2?.addEventListener('input', renderFeedCanvas); feedSolidColor?.addEventListener('input', renderFeedCanvas);
feedGradAngle?.addEventListener('input', (e) => { feedGradAngleVal.innerText = e.target.value + '°'; renderFeedCanvas(); });
feedTitleInput?.addEventListener('input', renderFeedCanvas); feedTitleColor?.addEventListener('input', renderFeedCanvas); feedSubtitleInput?.addEventListener('input', renderFeedCanvas); feedSubtitleColor?.addEventListener('input', renderFeedCanvas); feedBtnTextInput?.addEventListener('input', renderFeedCanvas);

// 我的空间监听
mySpaceBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentMySpaceBgMode = e.target.value; mySpaceBgModeSolid.classList.add('hidden'); mySpaceBgModeGradient.classList.add('hidden');
    if (currentMySpaceBgMode === 'solid') mySpaceBgModeSolid.classList.remove('hidden'); else mySpaceBgModeGradient.classList.remove('hidden');
    await renderMySpaceCanvas();
}));
mySpaceSolidColor?.addEventListener('input', renderMySpaceCanvas); mySpaceGradColor1?.addEventListener('input', renderMySpaceCanvas); mySpaceGradColor2?.addEventListener('input', renderMySpaceCanvas);
mySpaceTitleInput?.addEventListener('input', renderMySpaceCanvas);
mySpaceSubInput?.addEventListener('input', renderMySpaceCanvas);
mySpaceBtnTextInput?.addEventListener('input', renderMySpaceCanvas); mySpaceBtnGrad1?.addEventListener('input', renderMySpaceCanvas); mySpaceBtnGrad2?.addEventListener('input', renderMySpaceCanvas);


// ==================== 文件上传与拖拽 ====================
function handleFileUpload(file, callback) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader(); reader.onload = async ev => { const src = ev.target.result; await callback(src); }; reader.readAsDataURL(file);
}

function bindUploadEvents(dropZoneId, inputId, previewId, processFn) {
    const dz = document.getElementById(dropZoneId), input = document.getElementById(inputId), prev = document.getElementById(previewId);
    if (input) input.addEventListener('change', e => handleFileUpload(e.target.files[0], async src => { if(prev) prev.src = src; await processFn(src); }));
    if (dz) {
        dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); }); dz.addEventListener('dragleave', e => { e.preventDefault(); dz.classList.remove('drag-over'); });
        dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('drag-over'); if (e.dataTransfer.files.length > 0) handleFileUpload(e.dataTransfer.files[0], async src => { if(prev) prev.src = src; await processFn(src); }); });
    }
}

bindUploadEvents('uploadDropZone', 'imageUpload', 'uploadPreviewImg', async src => { userImgObj = await loadImage(src); await renderHomeCanvas(); await renderMyPage(); await renderFeedCanvas(); await renderSearchIcon(); await renderMySpaceCanvas(); });
bindUploadEvents('topBgUploadDropZone', 'topBgImageUpload', 'topBgUploadPreviewImg', async src => { topBgBannerObj = await loadImage(src); await renderHomeCanvas(); });
bindUploadEvents('feedBgUploadDropZone', 'feedBgImageUpload', 'feedBgUploadPreviewImg', async src => { feedBgBannerObj = await loadImage(src); await renderFeedCanvas(); });
bindUploadEvents('topBannerTitleDropZone', 'topBannerTitleUpload', 'topBannerTitlePreviewImg', async src => { userTopBannerTitleObj = await loadImage(src); await renderHomeCanvas(); });

// ==================== 导出 ZIP 逻辑 ====================
function canvasToBlob(c) { return new Promise((resolve, reject) => { try { c.toBlob(b => { if (b) resolve(b); else reject(new Error("画布已被污染无法生成")); }, 'image/png'); } catch (e) { reject(e); } }); }

function initExportModal() {
    const exportModal = document.getElementById('exportModal'); 
    const openExportModalBtn = document.getElementById('openExportModalBtn'); 
    const cancelExportBtn = document.getElementById('cancelExportBtn'); 
    const confirmExportBtn = document.getElementById('confirmExportBtn');
    const selectAllChk = document.getElementById('selectAllExport');
    const itemChks = document.querySelectorAll('.export-item-chk');

    if (!exportModal || !openExportModalBtn) return;
    openExportModalBtn.addEventListener('click', () => { exportModal.style.display = 'flex'; }); 
    cancelExportBtn.addEventListener('click', () => { exportModal.style.display = 'none'; }); 
    window.addEventListener('click', (e) => { if (e.target === exportModal) exportModal.style.display = 'none'; });

    if (selectAllChk) {
        selectAllChk.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            itemChks.forEach(chk => chk.checked = isChecked);
        });
        itemChks.forEach(chk => {
            chk.addEventListener('change', () => {
                const allChecked = Array.from(itemChks).every(c => c.checked);
                selectAllChk.checked = allChecked;
            });
        });
    }

    confirmExportBtn.addEventListener('click', async () => {
        if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败，请检查网络'); 
        const zip = new JSZip(); 
        const previewFolder = zip.folder("带壳预览图");
        const bannerFolder = zip.folder("纯净Banner切图");
        let selectedCount = 0; 
        const originalText = confirmExportBtn.innerText; 
        confirmExportBtn.innerText = '正在极速打包中...'; 
        confirmExportBtn.disabled = true;

        try {
            if (document.getElementById('chkTopHomePhone')?.checked && topHomePageCanvas) { previewFolder.file(`首页-大图状态预览.png`, await canvasToBlob(topHomePageCanvas)); selectedCount++; }
            if (document.getElementById('chkTopHomeBanner')?.checked && topHomeBannerCanvas) { bannerFolder.file(`首页-大图状态Banner.png`, await canvasToBlob(topHomeBannerCanvas)); selectedCount++; }
            if (document.getElementById('chkHomePhone')?.checked && lightCanvas) { previewFolder.file(`首页-小图状态预览-${homeColor}.png`, await canvasToBlob(lightCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeBannerLight')?.checked && lightBannerCanvas) { bannerFolder.file(`首页-小图状态Banner(日间)-${homeColor}.png`, await canvasToBlob(lightBannerCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeBannerDark')?.checked && darkBannerCanvas) { bannerFolder.file(`首页-小图状态Banner(夜间)-${homeColor}.png`, await canvasToBlob(darkBannerCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeKV')?.checked) { 
                const kvCanvas = document.createElement('canvas'); const kvCtx = kvCanvas.getContext('2d'); 
                kvCanvas.width = 420; kvCanvas.height = 282; setupHighQualityContext(kvCtx); 
                const heroImg = await loadImage(config.heroImage); const kvImg = userImgObj || heroImg; 
                if (kvImg && kvImg.width) { 
                    const scale = Math.min(420 / kvImg.width, 282 / kvImg.height); 
                    const drawW = kvImg.width * scale, drawH = kvImg.height * scale; 
                    const drawX = (420 - drawW) / 2, drawY = (282 - drawH) / 2; 
                    drawSharpenedImage(kvCtx, kvImg, drawX, drawY, drawW, drawH, 0.3); 
                } 
                bannerFolder.file(`首页-独立切图.png`, await canvasToBlob(kvCanvas)); selectedCount++; 
            }
            if (document.getElementById('chkFeedBannerExport')?.checked && feedBannerCanvas) { bannerFolder.file(`首页-Feed10出1banner.png`, await canvasToBlob(feedBannerCanvas)); selectedCount++; }
            if (document.getElementById('chkFeedPhone')?.checked && feedCanvas) { previewFolder.file(`首页-Feed10出1预览.png`, await canvasToBlob(feedCanvas)); selectedCount++; }

            if (document.getElementById('chkMyPageBannerLight')?.checked && myPageCanvas) { bannerFolder.file(`我的-Banner(日间)-${myPageColor}.png`, await canvasToBlob(myPageCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPageBannerDark')?.checked && myPageDarkCanvas) { bannerFolder.file(`我的-Banner(夜间)-${myPageColor}.png`, await canvasToBlob(myPageDarkCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPagePhone')?.checked && myPageFullCanvas) { previewFolder.file(`我的-预览-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas)); selectedCount++; }

            if (document.getElementById('chkSearchIconExport')?.checked && searchIconExportCanvas) { bannerFolder.file(`搜索框-独立切图(204x204).png`, await canvasToBlob(searchIconExportCanvas)); selectedCount++; }
            if (document.getElementById('chkSearchPageExport')?.checked && searchPageCanvas) { previewFolder.file(`搜索框-页面预览.png`, await canvasToBlob(searchPageCanvas)); selectedCount++; }

            if (document.getElementById('chkMySpaceExport')?.checked && mySpaceExportCanvas) { bannerFolder.file(`我的空间-独立切图(1182x252).png`, await canvasToBlob(mySpaceExportCanvas)); selectedCount++; }
            if (document.getElementById('chkMySpacePageExport')?.checked && mySpacePageCanvas) { previewFolder.file(`我的空间-页面预览.png`, await canvasToBlob(mySpacePageCanvas)); selectedCount++; }

            if (selectedCount === 0) { alert('您没有勾选任何资源，请至少勾选一项！'); confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; return; }
            const zipBlob = await zip.generateAsync({ type: 'blob' }); 
            const link = document.createElement('a'); 
            link.download = `按需导出切图集合.zip`; 
            link.href = URL.createObjectURL(zipBlob); 
            link.click(); 
            exportModal.style.display = 'none';
        } catch (e) { 
            alert("【导出报错】\n\n原因: " + e.message); 
        } finally { 
            confirmExportBtn.innerText = originalText; 
            confirmExportBtn.disabled = false; 
        }
    });
}

window.onload = async () => {
    if ('fonts' in document) { try { await document.fonts.load('normal 38px "FZLanTingHeiS-DB-GB"'); await document.fonts.load('normal 44px "FZLanTingHeiS-DB-GB"'); await document.fonts.load('normal 38px "FZLTHK"'); await document.fonts.load('normal 42px "FZLanTingHeiS-H"'); await document.fonts.load('normal 36px "FZLanTingHeiS-DB"'); } catch (e) { } }
    
    await renderHomeCanvas(); await renderMyPage(); await renderFeedCanvas(); await renderSearchIcon(); await renderMySpaceCanvas();
    
    updateResourceDropdown('NA'); initExportModal();
};