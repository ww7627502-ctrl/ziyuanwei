// 🌟 重新加回来的字数限制配置！想改几个字直接在这里改
const TEXT_LIMITS = {
    homeLine1: 6,       // 首页第一行最多6个字
    homeLine2: 4,       // 首页第二行最多4个字
    capsule: 3,         // 我的页面胶囊最多3个字
    myPageTitle: 9,    // 我的页面大标题最多9个字
    myPageSubtitle: 8  // 我的页面副标题最多8个字
};

const config = { 
    baseUI: 'assets/home-light.png', 
    baseUIDark: 'assets/home-dark.png', 
    myPageBg: 'assets/my-page.jpg', 
    myPageX: -6, 
    myPageY: 1621, 
    banner2Svg: 'assets/banner2.svg', 
    bannerX: 90, 
    bannerY: 120, 
    feedBg: 'assets/home-feed.jpg', 
    feedBanner: 'assets/home-feed-banner.png', 
    feedBannerX: 587, 
    feedBannerY: 1336, 
    colors: { 
        blue: 'assets/blue.svg', 
        green: 'assets/green.svg', 
        orange: 'assets/orange.svg', 
        red: 'assets/red.svg', 
        purple: 'assets/purple.svg' 
    }, 
    colorsDark: { 
        blue: 'assets/blue-y.svg', 
        green: 'assets/green-y.svg', 
        orange: 'assets/orange-y.svg', 
        red: 'assets/red-y.svg', 
        purple: 'assets/purple-y.svg' 
    }, 
    colorHex: { 
        blue: '#258AFF', 
        green: '#079C04', 
        orange: '#FF5E00', 
        red: '#FF014D', 
        purple: '#641AFF' 
    }, 
    nightTextColor1: '#FFFFFF', 
    nightTextColor2: '#B7B7B7', 
    arrowSvg: 'assets/freccia.svg', 
    arrowPadding: 8, 
    heroImage: 'assets/hero-banner.png', 
    heroX: 48, 
    heroY: 121, 
    heroWidth: 232.34, 
    heroHeight: 154.89 
};
const myPageColors = { blue: '#F0FBFF', green: '#F0FFF4', orange: '#FFFAF0', purple: '#F6F0FF' };
const myPageElementColors = { blue: '#0090FF', green: '#0E8B36', orange: '#FF7B00', purple: '#4E1685' };

const wangpanWorkspace = document.getElementById('wangpanWorkspace');
const emptyWorkspace = document.getElementById('emptyWorkspace');
const resourceDropdown = document.getElementById('resourceDropdown');
const homeView = document.getElementById('homeView');
const myPageView = document.getElementById('myPageView');
const feedView = document.getElementById('feedView');
const homeControls = document.getElementById('homeControls');
const myPageControls = document.getElementById('myPageControls');
const feedControls = document.getElementById('feedControls');

const lightCanvas = document.getElementById('lightCanvas');
const lightCtx = lightCanvas?.getContext('2d');
const lightBannerCanvas = document.getElementById('lightBannerCanvas');
const lightBannerCtx = lightBannerCanvas?.getContext('2d');
const darkBannerCanvas = document.getElementById('darkBannerCanvas');
const darkBannerCtx = darkBannerCanvas?.getContext('2d');

const myPageFullCanvas = document.getElementById('myPageFullCanvas');
const myPageFullCtx = myPageFullCanvas?.getContext('2d');
const myPageCanvas = document.getElementById('myPageCanvas');
const myPageCtx = myPageCanvas?.getContext('2d');
const myPageDarkCanvas = document.getElementById('myPageDarkCanvas');
const myPageDarkCtx = myPageDarkCanvas?.getContext('2d');

const feedCanvas = document.getElementById('feedCanvas');
const feedCtx = feedCanvas?.getContext('2d');

const textLine1Input = document.getElementById('textLine1');
const textLine2Input = document.getElementById('textLine2');
const textCapsuleInput = document.getElementById('textCapsule');
const myPageTitle = document.getElementById('myPageTitle');
const myPageHighlight = document.getElementById('myPageHighlight');
const myPageSubtitle = document.getElementById('myPageSubtitle');
const homeColorRadios = document.getElementsByName('homeColor');
const myPageColorRadios = document.getElementsByName('myPageColor');
const zoomModal = document.getElementById('zoomModal');
const zoomedImg = document.getElementById('zoomedImg');
const feedImageUpload = document.getElementById('feedImageUpload');

let userImgObj = null;
let feedImgObj = null;
let homeColor = 'blue';
let myPageColor = 'blue';

const globalImageCache = {};
const globalSvgTextCache = {};

function setupHighQualityContext(ctx) { 
    if (!ctx) return; 
    ctx.imageSmoothingEnabled = true; 
    ctx.imageSmoothingQuality = 'high'; 
}

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

// 彻底解决污染的本地资源加载引擎
async function loadImage(src) {
    if (!src) return null; 
    if (globalImageCache[src]) return globalImageCache[src];
    if (src.startsWith('data:')) {
        return new Promise(resolve => {
            const img = new Image(); 
            img.onload = () => { globalImageCache[src] = img; resolve(img); }; 
            img.onerror = () => resolve(new Image()); 
            img.src = src; 
        });
    }
    try {
        const response = await fetch(src);
        const blob = await response.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.onload = () => { globalImageCache[src] = img; resolve(img); };
                img.onerror = () => resolve(new Image());
                img.src = reader.result; 
            };
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        return new Promise((resolve) => {
            const img = new Image(); 
            img.crossOrigin = 'Anonymous';
            img.onload = () => { globalImageCache[src] = img; resolve(img); }; 
            img.onerror = () => {
                const fallback = new Image();
                fallback.onload = () => { globalImageCache[src] = fallback; resolve(fallback); };
                fallback.onerror = () => resolve(new Image());
                fallback.src = src;
            };
            img.src = src; 
        });
    }
}

async function loadColoredArrow(url, color) {
    let txt = globalSvgTextCache[url];
    if (!txt) { 
        try { 
            const res = await fetch(url); 
            if (!res.ok) return new Image(); 
            txt = await res.text(); 
            globalSvgTextCache[url] = txt; 
        } catch (e) { return new Image(); } 
    }
    let modified = txt.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    if (!modified.includes('xmlns=')) modified = modified.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    const dataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(modified)));
    return await loadImage(dataUri);
}

async function loadColoredSvgFill(url, color) {
    try {
        let txt = globalSvgTextCache[url];
        if (!txt) { 
            const res = await fetch(url); 
            if (!res.ok) return null; 
            txt = await res.text(); 
            globalSvgTextCache[url] = txt; 
        }
        if (!txt.includes('fill=')) {
            txt = txt.replace(/<svg/i, `<svg fill="${color}" `); 
        } else {
            txt = txt.replace(/fill="([^"]*)"/gi, (m, p) => p.toLowerCase() === 'none' ? m : `fill="${color}"`)
                     .replace(/fill='([^']*)'/gi, (m, p) => p.toLowerCase() === 'none' ? m : `fill="${color}"`);
        }
        if (!txt.includes('xmlns=')) txt = txt.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
        const dataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(txt)));
        return await loadImage(dataUri);
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
    const rawCanvas = document.getElementById('rawImageCanvas');
    if (rawCanvas && kvImg && kvImg.width) { const rawCtx = rawCanvas.getContext('2d'), scale = Math.min(1, 400 / kvImg.height); rawCanvas.width = Math.floor(kvImg.width * scale); rawCanvas.height = Math.floor(kvImg.height * scale); setupHighQualityContext(rawCtx); drawSharpenedImage(rawCtx, kvImg, 0, 0, rawCanvas.width, rawCanvas.height, 0.3); }
}

async function drawMode(isDark, canvas, ctx, kvImg) {
    const bgUrl = isDark ? config.baseUIDark : config.baseUI, bannerUrl = isDark ? (config.colorsDark[homeColor] || null) : (config.colors[homeColor] || null), textColor1 = isDark ? config.nightTextColor1 : '#030B1A', arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const baseUIImg = await loadImage(bgUrl), bannerBgImg = bannerUrl ? await loadImage(bannerUrl) : null, arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    canvas.width = baseUIImg.width || 1260; canvas.height = baseUIImg.height || 2652; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (baseUIImg.width) ctx.drawImage(baseUIImg, 0, 0, canvas.width, canvas.height); if (bannerBgImg && bannerBgImg.width) ctx.drawImage(bannerBgImg, Math.floor(config.bannerX), Math.floor(config.bannerY), bannerBgImg.width, bannerBgImg.height);
    if (kvImg && kvImg.width) { ctx.save(); ctx.beginPath(); ctx.rect(Math.floor(config.heroX), Math.floor(config.heroY), Math.floor(config.heroWidth), Math.floor(config.heroHeight)); ctx.clip(); const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height), kvDrawW = kvImg.width * kvScale, kvDrawH = kvImg.height * kvScale, drawX = config.heroX + (config.heroWidth - kvDrawW) / 2, drawY = config.heroY + (config.heroHeight - kvDrawH) / 2; drawSharpenedImage(ctx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3); ctx.restore(); }
    
    // 🌟 画图阶段：强制截取字数
    const line1Txt = (textLine1Input?.value || '').slice(0, TEXT_LIMITS.homeLine1);
    const line2Txt = (textLine2Input?.value || '').slice(0, TEXT_LIMITS.homeLine2);
    
    ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'bold 36px "PingFangSC-Medium", "PingFang SC", sans-serif'; 
    ctx.fillStyle = textColor1; ctx.fillText(line1Txt, Math.floor(306), Math.floor(166)); 
    ctx.fillStyle = arrowColor; ctx.fillText(line2Txt, Math.floor(306), Math.floor(217));
    if (arrowImg && arrowImg.width) { const arrowX = Math.floor(306 + ctx.measureText(line2Txt).width + config.arrowPadding), arrowY = Math.floor(217 + 18 - arrowImg.height / 2 + 2); ctx.drawImage(arrowImg, arrowX, arrowY); }
}

async function createFullBannerCanvas(isDark) {
    const bannerUrl = isDark ? (config.colorsDark[homeColor] || null) : (config.colors[homeColor] || null), textColor1 = isDark ? config.nightTextColor1 : '#030B1A', arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const bannerBgImg = bannerUrl ? await loadImage(bannerUrl) : null, heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg, arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    const bannerW = (bannerBgImg && bannerBgImg.width) ? bannerBgImg.width : 420, bannerH = (bannerBgImg && bannerBgImg.height) ? bannerBgImg.height : 282, left = Math.min(config.heroX, config.bannerX), top = Math.min(config.heroY, config.bannerY), right = Math.max(config.bannerX + bannerW, 306 + 250), bottom = Math.max(config.bannerY + bannerH, 217 + 36);
    const fullCanvas = document.createElement('canvas'), fullCtx = fullCanvas.getContext('2d'); fullCanvas.width = right - left; fullCanvas.height = bottom - top; setupHighQualityContext(fullCtx);
    const offsetX = Math.floor(-left), offsetY = Math.floor(-top); if (bannerBgImg && bannerBgImg.width) fullCtx.drawImage(bannerBgImg, Math.floor(config.bannerX + offsetX), Math.floor(config.bannerY + offsetY));
    if (kvImg && kvImg.width) { fullCtx.save(); fullCtx.beginPath(); fullCtx.rect(Math.floor(config.heroX + offsetX), Math.floor(config.heroY + offsetY), Math.floor(config.heroWidth), Math.floor(config.heroHeight)); fullCtx.clip(); const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height), kvDrawW = kvImg.width * kvScale, kvDrawH = kvImg.height * kvScale, drawX = config.heroX + offsetX + (config.heroWidth - kvDrawW) / 2, drawY = config.heroY + offsetY + (config.heroHeight - kvDrawH) / 2; drawSharpenedImage(fullCtx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3); fullCtx.restore(); }
    
    // 🌟 画图阶段：强制截取字数
    const line1Txt = (textLine1Input?.value || '').slice(0, TEXT_LIMITS.homeLine1);
    const line2Txt = (textLine2Input?.value || '').slice(0, TEXT_LIMITS.homeLine2);

    fullCtx.textAlign = 'left'; fullCtx.textBaseline = 'top'; fullCtx.font = 'bold 36px "PingFangSC-Medium", "PingFang SC", sans-serif'; 
    fullCtx.fillStyle = textColor1; fullCtx.fillText(line1Txt, Math.floor(306 + offsetX), Math.floor(166 + offsetY)); 
    fullCtx.fillStyle = arrowColor; fullCtx.fillText(line2Txt, Math.floor(306 + offsetX), Math.floor(217 + offsetY));
    if (arrowImg && arrowImg.width) { const arrowX = Math.floor(306 + offsetX + fullCtx.measureText(line2Txt).width + config.arrowPadding), arrowY = Math.floor(217 + offsetY + 18 - arrowImg.height / 2 + 2); fullCtx.drawImage(arrowImg, arrowX, arrowY); }
    return fullCanvas;
}

async function renderMyPage() { await renderMyPageBanner(); await renderMyPageFullCanvas(); }
async function renderMyPageBanner() {
    const heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg;
    const drawMyPageMode = async (canvas, ctx, isDark) => {
        if (!ctx || !canvas) return; const targetColor = isDark ? '#141414' : (myPageColors[myPageColor] || '#F0FBFF'), elementColor = myPageElementColors[myPageColor] || '#0090FF', currentCapsuleColor = isDark ? '#0090FF' : elementColor, banner2Img = await loadColoredSvgFill(config.banner2Svg, targetColor);
        if (banner2Img && banner2Img.width) {
            canvas.width = banner2Img.width; canvas.height = banner2Img.height; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(banner2Img, 0, 0);
            if (kvImg && kvImg.width) { ctx.save(); const imgBoxX = 37, imgBoxY = 23, imgBoxW = 314, imgBoxH = 178; ctx.beginPath(); ctx.rect(imgBoxX, imgBoxY, imgBoxW, imgBoxH); ctx.clip(); const imgScale = Math.min(imgBoxW / kvImg.width, imgBoxH / kvImg.height), drawImgW = kvImg.width * imgScale, drawImgH = kvImg.height * imgScale, drawImgX = imgBoxX + (imgBoxW - drawImgW) / 2, drawImgY = imgBoxY + (imgBoxH - drawImgH) / 2; drawSharpenedImage(ctx, kvImg, drawImgX, drawImgY, drawImgW, drawImgH, 0.3); ctx.restore(); }
            
            // 🌟 画图阶段：强制截取字数
            const capsuleTxt = (textCapsuleInput?.value || '').slice(0, TEXT_LIMITS.capsule);
            const titleTxt = (myPageTitle?.value || '').slice(0, TEXT_LIMITS.myPageTitle);
            const highlightTxt = myPageHighlight?.value || ''; 
            const subtitleTxt = (myPageSubtitle?.value || '').slice(0, TEXT_LIMITS.myPageSubtitle);

            ctx.save(); ctx.globalAlpha = 0.15; ctx.fillStyle = currentCapsuleColor; drawRoundRect(ctx, 857, 62, 212, 100, 50); ctx.fill(); ctx.restore();
            ctx.save(); ctx.fillStyle = currentCapsuleColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = 'normal 37px "FZLanTingHei"'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; ctx.fillText(capsuleTxt, 963, 111); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'normal 43px "FZLanTingHei"'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A', titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor; drawDualColorText(ctx, titleTxt, highlightTxt, 388, 57, titleBaseColor, titleHighlightColor); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'normal 38px "FZLanTingHei-R", "PingFang SC", sans-serif'; if (isDark) ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; else { ctx.fillStyle = elementColor; ctx.globalAlpha = 0.75; } ctx.fillText(subtitleTxt, Math.floor(388), Math.floor(128)); ctx.restore();
        }
    };
    await drawMyPageMode(myPageCanvas, myPageCtx, false); await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);
    const myPageRawCanvas = document.getElementById('myPageRawImageCanvas'); if (myPageRawCanvas && kvImg && kvImg.width) { const rawCtx = myPageRawCanvas.getContext('2d'), scale = Math.min(1, 400 / kvImg.height); myPageRawCanvas.width = Math.floor(kvImg.width * scale); myPageRawCanvas.height = Math.floor(kvImg.height * scale); setupHighQualityContext(rawCtx); drawSharpenedImage(rawCtx, kvImg, 0, 0, myPageRawCanvas.width, myPageRawCanvas.height, 0.3); }
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

async function initBUIcons() {
    const buBtns = document.querySelectorAll('.bu-btn');
    for (let btn of buBtns) {
        const img = btn.querySelector('img'); if (!img) continue; const src = img.getAttribute('src'); if (!src.endsWith('.svg')) continue;
        try { const res = await fetch(src); if (!res.ok) continue; const svgText = await res.text(), activeData = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgText), inactiveData = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgText.replace(/#(000000|000|1a1a1a|1A1A1A|141414|111111|222222|333333)/gi, '#C8E1FF').replace(/fill="black"/gi, 'fill="#C8E1FF"')); img.dataset.activeSrc = activeData; img.dataset.inactiveSrc = inactiveData; if (btn.classList.contains('active')) img.src = activeData; else img.src = inactiveData; } catch (e) { }
    }
}

const buBtns = document.querySelectorAll('.bu-btn');
buBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
        buBtns.forEach(b => { b.classList.remove('active'); const img = b.querySelector('img'); if (img && img.dataset.inactiveSrc) img.src = img.dataset.inactiveSrc; });
        const currentBtn = e.currentTarget; currentBtn.classList.add('active'); const activeImg = currentBtn.querySelector('img'); if (activeImg && activeImg.dataset.activeSrc) activeImg.src = activeImg.dataset.activeSrc;
        const targetBU = currentBtn.dataset.bu;
        if (targetBU === 'wangpan') { document.documentElement.style.setProperty('--primary-color', '#258AFF'); if (wangpanWorkspace) wangpanWorkspace.style.display = 'block'; if (emptyWorkspace) emptyWorkspace.style.display = 'none'; if (resourceDropdown) resourceDropdown.dispatchEvent(new Event('change')); }
        else { document.documentElement.style.setProperty('--primary-color', targetBU === 'yike' ? '#0066ff' : '#87B4FF'); if (wangpanWorkspace) wangpanWorkspace.style.display = 'none'; if (emptyWorkspace) emptyWorkspace.style.display = 'block'; [homeView, myPageView, feedView].forEach(view => view?.classList.remove('active')); }
    });
});

resourceDropdown?.addEventListener('change', (e) => {
    const selected = e.target.value; [homeControls, myPageControls, feedControls].forEach(ctrl => ctrl?.classList.remove('active')); [homeView, myPageView, feedView].forEach(view => view?.classList.remove('active'));
    if (selected === 'home') { homeControls?.classList.add('active'); homeView?.classList.add('active'); } else if (selected === 'myPage') { myPageControls?.classList.add('active'); myPageView?.classList.add('active'); } else if (selected === 'feed') { feedControls?.classList.add('active'); feedView?.classList.add('active'); }
});

function openZoomModal(canvas) { zoomedImg.src = canvas.toDataURL('image/png', 1.0); zoomModal.style.display = 'block'; }
function closeZoomModal() { zoomModal.style.display = 'none'; zoomedImg.src = ''; }
document.querySelectorAll('.zoomable-canvas').forEach(canvas => canvas.addEventListener('click', () => openZoomModal(canvas)));
zoomModal?.addEventListener('click', closeZoomModal); document.querySelector('.close-modal')?.addEventListener('click', closeZoomModal);

homeColorRadios.forEach(r => r.addEventListener('change', async e => { homeColor = e.target.value; await renderHomeCanvas(); }));
textLine1Input?.addEventListener('input', renderHomeCanvas); textLine2Input?.addEventListener('input', renderHomeCanvas);
document.getElementById('imageUpload')?.addEventListener('change', e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = async ev => { userImgObj = await loadImage(ev.target.result); await renderHomeCanvas(); await renderMyPage(); }; r.readAsDataURL(f); });
feedImageUpload?.addEventListener('change', e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = async ev => { feedImgObj = await loadImage(ev.target.result); await renderFeedCanvas(); }; r.readAsDataURL(f); });
myPageColorRadios.forEach(r => r.addEventListener('change', async e => { myPageColor = e.target.value; await renderMyPage(); }));

textCapsuleInput?.addEventListener('input', renderMyPage); 
myPageTitle?.addEventListener('input', renderMyPage); 
myPageSubtitle?.addEventListener('input', renderMyPage); 
myPageHighlight?.addEventListener('input', renderMyPage);

function canvasToBlob(c) { 
    return new Promise((resolve, reject) => {
        try {
            c.toBlob(b => {
                if (b) resolve(b);
                else reject(new Error("画布已被浏览器标记为污染对象，无法生成图片"));
            }, 'image/png');
        } catch (e) {
            reject(e);
        }
    }); 
}

document.getElementById('exportBtn')?.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败'); const zip = new JSZip(); 
    try {
        if (lightCanvas) zip.file(`带壳预览-首页-日间-${homeColor}.png`, await canvasToBlob(lightCanvas)); if (myPageFullCanvas) zip.file(`带壳预览-我的页面-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas)); if (feedCanvas) zip.file(`带壳预览-首页Feed-10出1.png`, await canvasToBlob(feedCanvas));
        const zipBlob = await zip.generateAsync({ type: 'blob' }), link = document.createElement('a'); link.download = `全部场景预览大全集.zip`; link.href = URL.createObjectURL(zipBlob); link.click();
    } catch (e) { alert("【系统拦截报错】\n\n原因: " + e.message + "\n\n建议: 按键盘 F12 打开开发者工具，勾选 Network 下的 'Disable cache' (停用缓存) 后按 F5 刷新页面再试。"); }
});

document.getElementById('exportBannerBtn')?.addEventListener('click', async () => {
    try {
        const kvCanvas = document.createElement('canvas'), kvCtx = kvCanvas.getContext('2d'); kvCanvas.width = 420; kvCanvas.height = 282; setupHighQualityContext(kvCtx); const heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg;
        if (kvImg && kvImg.width) { const scale = Math.max(420 / kvImg.width, 282 / kvImg.height), drawW = kvImg.width * scale, drawH = kvImg.height * scale, drawX = (420 - drawW) / 2, drawY = (282 - drawH) / 2; drawSharpenedImage(kvCtx, kvImg, drawX, drawY, drawW, drawH, 0.3); }
        const link = document.createElement('a'); link.download = `首页启动-KV切图.png`; link.href = kvCanvas.toDataURL('image/png', 1.0); link.click();
    } catch (e) { alert("【系统拦截报错】\n\n原因: " + e.message + "\n\n建议: 按键盘 F12 打开开发者工具，勾选 Network 下的 'Disable cache' (停用缓存) 后按 F5 刷新页面再试。"); }
});

document.getElementById('exportFullBannerBtn')?.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败'); const zip = new JSZip(); 
    try {
        zip.file(`完整Banner-首页-日间-${homeColor}.png`, await canvasToBlob(await createFullBannerCanvas(false))); zip.file(`完整Banner-首页-夜间-${homeColor}.png`, await canvasToBlob(await createFullBannerCanvas(true))); if (myPageCanvas) zip.file(`完整Banner-我的页面-日间-${myPageColor}.png`, await canvasToBlob(myPageCanvas)); if (myPageDarkCanvas) zip.file(`完整Banner-我的页面-夜间-${myPageColor}.png`, await canvasToBlob(myPageDarkCanvas));
        const zipBlob = await zip.generateAsync({ type: 'blob' }), link = document.createElement('a'); link.download = `全套Banner切图.zip`; link.href = URL.createObjectURL(zipBlob); link.click();
    } catch (e) { alert("【系统拦截报错】\n\n原因: " + e.message + "\n\n建议: 按键盘 F12 打开开发者工具，勾选 Network(网络) 下的 'Disable cache' (停用缓存) 后按 F5 刷新页面再试。"); }
});

// 🌟 初始化时强制给输入框加上物理字数限制，连输入都输不进去
function initInputLimits() {
    if (textLine1Input) textLine1Input.maxLength = TEXT_LIMITS.homeLine1;
    if (textLine2Input) textLine2Input.maxLength = TEXT_LIMITS.homeLine2;
    if (textCapsuleInput) textCapsuleInput.maxLength = TEXT_LIMITS.capsule;
    if (myPageTitle) myPageTitle.maxLength = TEXT_LIMITS.myPageTitle;
    if (myPageHighlight) myPageHighlight.maxLength = TEXT_LIMITS.myPageTitle; // 高亮通常不应超过大标题
    if (myPageSubtitle) myPageSubtitle.maxLength = TEXT_LIMITS.myPageSubtitle;
}

window.onload = async () => {
    initInputLimits(); // 🌟 启动字数物理拦截！
    if ('fonts' in document) { try { await document.fonts.load('normal 44px "FZLanTingHei"'); await document.fonts.load('normal 38px "FZLanTingHei-R"'); await document.fonts.load('normal 44px "FZLanTingHei-H"'); } catch (e) { } }
    await initBUIcons(); await renderHomeCanvas(); await renderMyPage(); await renderFeedCanvas();
    const defaultBtn = document.querySelector('.bu-btn[data-bu="wangpan"]'); if (defaultBtn) defaultBtn.click();
};