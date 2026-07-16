// ==================== 1. 基于截图还原的目录结构数据 ====================
const PAGE_DIRECTORY = {
    'NA': [
        // 🌟 修正：解绑开屏，将其恢复为待接入状态
        { value: 'dev_0', text: 'A1.1.1 NA - 开屏' },
        { value: 'dev_1', text: 'A1.1.1.1 NA - 品牌开屏模板' },
        { value: 'dev_2', text: 'A1.1.2 NA - 首页弹窗' },
        // 🌟 修正：将原先做好的首页逻辑(na_home)正确绑定给“13.14首页顶部沉浸banner”
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

// 预定义原有的逻辑常量
const TEXT_LIMITS = { homeLine1: 6, homeLine2: 4, capsule: 3, myPageTitle: 9, myPageSubtitle: 8 };
const config = { baseUI: 'assets/home-light.png', baseUIDark: 'assets/home-dark.png', myPageBg: 'assets/my-page.jpg', myPageX: -6, myPageY: 1621, banner2Svg: 'assets/banner2.svg', bannerX: 90, bannerY: 120, feedBg: 'assets/home-feed.jpg', feedBanner: 'assets/home-feed-banner.png', feedBannerX: 587, feedBannerY: 1336, colors: { blue: 'assets/blue.svg', green: 'assets/green.svg', orange: 'assets/orange.svg', red: 'assets/red.svg', purple: 'assets/purple.svg' }, colorsDark: { blue: 'assets/blue-y.svg', green: 'assets/green-y.svg', orange: 'assets/orange-y.svg', red: 'assets/red-y.svg', purple: 'assets/purple-y.svg' }, colorHex: { blue: '#258AFF', green: '#079C04', orange: '#FF5E00', red: '#FF014D', purple: '#641AFF' }, nightTextColor1: '#FFFFFF', nightTextColor2: '#B7B7B7', arrowSvg: 'assets/freccia.svg', arrowPadding: 8, heroImage: 'assets/hero-banner.png', heroX: 48, heroY: 121, heroWidth: 232.34, heroHeight: 154.89 };
const myPageColors = { blue: '#F0FBFF', green: '#F0FFF4', orange: '#FFFAF0', purple: '#F6F0FF' };
const myPageElementColors = { blue: '#0090FF', green: '#0E8B36', orange: '#FF7B00', purple: '#4E1685' };

// DOM 元素绑定
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

// Canvas 上下文
const lightCanvas = document.getElementById('lightCanvas'); const lightCtx = lightCanvas?.getContext('2d');
const lightBannerCanvas = document.getElementById('lightBannerCanvas'); const lightBannerCtx = lightBannerCanvas?.getContext('2d');
const darkBannerCanvas = document.getElementById('darkBannerCanvas'); const darkBannerCtx = darkBannerCanvas?.getContext('2d');
const myPageFullCanvas = document.getElementById('myPageFullCanvas'); const myPageFullCtx = myPageFullCanvas?.getContext('2d');
const myPageCanvas = document.getElementById('myPageCanvas'); const myPageCtx = myPageCanvas?.getContext('2d');
const myPageDarkCanvas = document.getElementById('myPageDarkCanvas'); const myPageDarkCtx = myPageDarkCanvas?.getContext('2d');
const feedCanvas = document.getElementById('feedCanvas'); const feedCtx = feedCanvas?.getContext('2d');

const textLine1Input = document.getElementById('textLine1'); const textLine2Input = document.getElementById('textLine2');
const textCapsuleInput = document.getElementById('textCapsule'); const myPageTitle = document.getElementById('myPageTitle'); const myPageHighlight = document.getElementById('myPageHighlight'); const myPageSubtitle = document.getElementById('myPageSubtitle');
const homeColorRadios = document.getElementsByName('homeColor'); const myPageColorRadios = document.getElementsByName('myPageColor');
const zoomModal = document.getElementById('zoomModal'); const zoomedImg = document.getElementById('zoomedImg');
const feedImageUpload = document.getElementById('feedImageUpload');

let userImgObj = null; let feedImgObj = null; let homeColor = 'blue'; let myPageColor = 'blue';
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

async function renderHomeCanvas() {
    if (!lightCanvas) return; const heroImg = await loadImage(config.heroImage); const kvImg = userImgObj || heroImg; await drawMode(false, lightCanvas, lightCtx, kvImg);
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
            ctx.save(); ctx.fillStyle = currentCapsuleColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '900 38px "FZLanTingHeiS-R", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; ctx.fillText(capsuleTxt, 963, 111); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = '900 44px "FZLanTingHeiS-R", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A', titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor; drawDualColorText(ctx, titleTxt, highlightTxt, 388, 57, titleBaseColor, titleHighlightColor); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = ' 38px "FZLTHK.TTF", "PingFang SC", sans-serif'; if (isDark) ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; else { ctx.fillStyle = elementColor; ctx.globalAlpha = 0.75; } ctx.fillText(subtitleTxt, Math.floor(388), Math.floor(128)); ctx.restore();
        }
    };
    await drawMyPageMode(myPageCanvas, myPageCtx, false); await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);
}

async function renderMyPageFullCanvas() {
    if (!myPageFullCanvas || !myPageFullCtx) return;
    try { const bgImg = await loadImage(config.myPageBg); if (!bgImg || !bgImg.width) return; myPageFullCanvas.width = bgImg.width; myPageFullCanvas.height = bgImg.height; setupHighQualityContext(myPageFullCtx); myPageFullCtx.clearRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height); myPageFullCtx.drawImage(bgImg, 0, 0); if (myPageCanvas.width > 0) { myPageFullCtx.save(); drawRoundRect(myPageFullCtx, config.myPageX + 24, config.myPageY, myPageCanvas.width - 48, myPageCanvas.height, 36); myPageFullCtx.clip(); myPageFullCtx.drawImage(myPageCanvas, Math.floor(config.myPageX), Math.floor(config.myPageY)); myPageFullCtx.restore(); } } catch (e) { }
}

async function renderFeedCanvas() {
    if (!feedCanvas || !feedCtx) return;
    try {
        const bgImg = await loadImage(config.feedBg), defaultBannerImg = await loadImage(config.feedBanner); if (!bgImg || !bgImg.width || !defaultBannerImg || !defaultBannerImg.width) return; feedCanvas.width = bgImg.width; feedCanvas.height = bgImg.height; setupHighQualityContext(feedCtx); feedCtx.clearRect(0, 0, feedCanvas.width, feedCanvas.height); feedCtx.drawImage(bgImg, 0, 0);
        const currentBanner = feedImgObj || defaultBannerImg; if (currentBanner && currentBanner.width) { const targetW = defaultBannerImg.width, targetH = defaultBannerImg.height; feedCtx.save(); drawRoundRect(feedCtx, config.feedBannerX, config.feedBannerY, targetW, targetH, 36); feedCtx.clip(); const scale = Math.max(targetW / currentBanner.width, targetH / currentBanner.height), drawW = currentBanner.width * scale, drawH = currentBanner.height * scale, drawX = config.feedBannerX + (targetW - drawW) / 2, drawY = config.feedBannerY + (targetH - drawH) / 2; drawSharpenedImage(feedCtx, currentBanner, drawX, drawY, drawW, drawH, 0.3); feedCtx.restore(); }
    } catch (e) { }
}

// ==================== 2. 核心级联逻辑：更新下拉框选项 ====================
function updateResourceDropdown(terminalId) {
    resourceDropdown.innerHTML = '';
    const pages = PAGE_DIRECTORY[terminalId] || [];

    // 如果是 NA 端，由于开屏被改成了待开发，我们要默认选中 "na_home" (即13.14首页banner)
    let hasSelected = false;

    pages.forEach(page => {
        const option = document.createElement('option');
        option.value = page.value;
        option.textContent = page.text;

        // 自动选中第一个已开发的功能
        if (terminalId === 'NA' && page.value === 'na_home') {
            option.selected = true;
            hasSelected = true;
        }

        resourceDropdown.appendChild(option);
    });

    // 主动触发一次 change，更新下方的面板
    resourceDropdown.dispatchEvent(new Event('change'));
}

// 第一级：业务线切换
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

            // 如果切回网盘，触发当前选中的端，重新加载下拉框和面板
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

// 第二级：端切换
const terminalBtns = document.querySelectorAll('.terminal-btn');
terminalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        terminalBtns.forEach(b => b.classList.remove('active'));
        const currentBtn = e.currentTarget;
        currentBtn.classList.add('active');

        const targetTerminal = currentBtn.dataset.terminal;
        // 核心：根据选择的端，重绘第三级的页面下拉框
        updateResourceDropdown(targetTerminal);
    });
});

// 第三级：具体资源位页面下拉框 Change 逻辑
resourceDropdown.addEventListener('change', (e) => {
    const selected = e.target.value;

    // 隐藏所有左侧特定操作区
    [homeControls, myPageControls, feedControls].forEach(ctrl => ctrl?.classList.remove('active'));
    // 隐藏所有右侧画板区
    [homeView, myPageView, feedView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));

    developingPrompt.classList.add('hidden');
    baseGlobalPicArea.style.display = 'none'; // 默认隐藏基础配图，按需开启

    // 精确匹配我们已开发的页面逻辑
    if (selected === 'na_home') {
        baseGlobalPicArea.style.display = 'block';
        homeControls.classList.add('active');
        homeView.classList.add('active');
    } else if (selected === 'na_mypage') {
        baseGlobalPicArea.style.display = 'block';
        myPageControls.classList.add('active');
        myPageView.classList.add('active');
    } else if (selected === 'na_feed') {
        feedControls.classList.add('active');
        feedView.classList.add('active');
    } else {
        // 如果是列表中新增的暂未接入的页面项
        developingPrompt.classList.remove('hidden');
        viewDevelopingPrompt.classList.add('active');
    }
});

// 图片上传和弹窗等基础逻辑
function openZoomModal(canvas) { zoomedImg.src = canvas.toDataURL('image/png', 1.0); zoomModal.style.display = 'block'; }
function closeZoomModal() { zoomModal.style.display = 'none'; zoomedImg.src = ''; }
document.querySelectorAll('.zoomable-canvas').forEach(canvas => canvas.addEventListener('click', () => openZoomModal(canvas)));
zoomModal?.addEventListener('click', closeZoomModal); document.querySelector('.close-modal')?.addEventListener('click', closeZoomModal);

homeColorRadios.forEach(r => r.addEventListener('change', async e => { homeColor = e.target.value; await renderHomeCanvas(); }));
textLine1Input?.addEventListener('input', renderHomeCanvas); textLine2Input?.addEventListener('input', renderHomeCanvas);
feedImageUpload?.addEventListener('change', e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = async ev => { feedImgObj = await loadImage(ev.target.result); await renderFeedCanvas(); }; r.readAsDataURL(f); });
myPageColorRadios.forEach(r => r.addEventListener('change', async e => { myPageColor = e.target.value; await renderMyPage(); }));
textCapsuleInput?.addEventListener('input', renderMyPage); myPageTitle?.addEventListener('input', renderMyPage); myPageSubtitle?.addEventListener('input', renderMyPage); myPageHighlight?.addEventListener('input', renderMyPage);

function canvasToBlob(c) { return new Promise((resolve, reject) => { try { c.toBlob(b => { if (b) resolve(b); else reject(new Error("画布已被污染无法生成")); }, 'image/png'); } catch (e) { reject(e); } }); }

const dropZone = document.getElementById('uploadDropZone'); const fileInput = document.getElementById('imageUpload'); const previewImg = document.getElementById('uploadPreviewImg');
function handleFileUpload(file) { if (!file || !file.type.startsWith('image/')) return; const reader = new FileReader(); reader.onload = async ev => { const src = ev.target.result; userImgObj = await loadImage(src); if (previewImg) previewImg.src = src; await renderHomeCanvas(); await renderMyPage(); }; reader.readAsDataURL(file); }
if (fileInput) { fileInput.addEventListener('change', e => handleFileUpload(e.target.files[0])); }
if (dropZone) { dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); }); dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); }); dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { handleFileUpload(e.dataTransfer.files[0]); } }); }

function initExportModal() {
    const exportModal = document.getElementById('exportModal'); const openExportModalBtn = document.getElementById('openExportModalBtn'); const cancelExportBtn = document.getElementById('cancelExportBtn'); const confirmExportBtn = document.getElementById('confirmExportBtn');
    if (!exportModal || !openExportModalBtn) return;
    openExportModalBtn.addEventListener('click', () => { exportModal.style.display = 'block'; }); cancelExportBtn.addEventListener('click', () => { exportModal.style.display = 'none'; }); window.addEventListener('click', (e) => { if (e.target === exportModal) { exportModal.style.display = 'none'; } });

    confirmExportBtn.addEventListener('click', async () => {
        if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败，请检查网络'); const zip = new JSZip(); let selectedCount = 0; const originalText = confirmExportBtn.innerText; confirmExportBtn.innerText = '正在极速打包中...'; confirmExportBtn.disabled = true;
        try {
            if (document.getElementById('chkHomeKV')?.checked) { const kvCanvas = document.createElement('canvas'); const kvCtx = kvCanvas.getContext('2d'); kvCanvas.width = 420; kvCanvas.height = 282; setupHighQualityContext(kvCtx); const heroImg = await loadImage(config.heroImage); const kvImg = userImgObj || heroImg; if (kvImg && kvImg.width) { const scale = Math.max(420 / kvImg.width, 282 / kvImg.height); const drawW = kvImg.width * scale, drawH = kvImg.height * scale; const drawX = (420 - drawW) / 2, drawY = (282 - drawH) / 2; drawSharpenedImage(kvCtx, kvImg, drawX, drawY, drawW, drawH, 0.3); } zip.file(`1314顶部Banner-KV切图.png`, await canvasToBlob(kvCanvas)); selectedCount++; }
            if (document.getElementById('chkHomeBannerLight')?.checked) { zip.file(`1314顶部Banner-完整版-日间-${homeColor}.png`, await canvasToBlob(await createFullBannerCanvas(false))); selectedCount++; }
            if (document.getElementById('chkHomeBannerDark')?.checked) { zip.file(`1314顶部Banner-完整版-夜间-${homeColor}.png`, await canvasToBlob(await createFullBannerCanvas(true))); selectedCount++; }
            if (document.getElementById('chkHomePhone')?.checked && lightCanvas) { zip.file(`1314顶部Banner-带壳预览-日间-${homeColor}.png`, await canvasToBlob(lightCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPageBannerLight')?.checked && myPageCanvas) { zip.file(`我的页面-完整Banner-日间-${myPageColor}.png`, await canvasToBlob(myPageCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPageBannerDark')?.checked && myPageDarkCanvas) { zip.file(`我的页面-完整Banner-夜间-${myPageColor}.png`, await canvasToBlob(myPageDarkCanvas)); selectedCount++; }
            if (document.getElementById('chkMyPagePhone')?.checked && myPageFullCanvas) { zip.file(`我的页面-带壳预览-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas)); selectedCount++; }
            if (document.getElementById('chkFeedPhone')?.checked && feedCanvas) { zip.file(`Feed-带壳预览.png`, await canvasToBlob(feedCanvas)); selectedCount++; }
            if (selectedCount === 0) { alert('您没有勾选任何资源，请至少勾选一项！'); confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; return; }
            const zipBlob = await zip.generateAsync({ type: 'blob' }); const link = document.createElement('a'); link.download = `按需导出切图集合.zip`; link.href = URL.createObjectURL(zipBlob); link.click(); exportModal.style.display = 'none';
        } catch (e) { alert("【导出报错】\n\n原因: " + e.message); } finally { confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; }
    });
}

window.onload = async () => {
    if ('fonts' in document) { try { await document.fonts.load('normal 38px "FZLTHK.TTF"'); await document.fonts.load('normal 44px "FZLanTingHeiS-R"'); } catch (e) { } }
    await renderHomeCanvas(); await renderMyPage(); await renderFeedCanvas();
    // 默认触发第一级和第二级，建立级联联系
    updateResourceDropdown('NA');
    initExportModal();
};