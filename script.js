const config = {
    baseUI: 'assets/home-light.png',
    baseUIDark: 'assets/home-dark.png',
    myPageBg: 'assets/my-page.jpg',
    myPageX: -6,
    myPageY: 1621,
    banner2Svg: 'assets/banner2.svg',
    bannerX: 90,
    bannerY: 120,
    colors: { blue: 'assets/blue.svg', green: 'assets/green.svg', orange: 'assets/orange.svg', red: 'assets/red.svg', purple: 'assets/purple.svg' },
    colorsDark: { blue: 'assets/blue-y.svg', green: 'assets/green-y.svg', orange: 'assets/orange-y.svg', red: 'assets/red-y.svg', purple: 'assets/purple-y.svg' },
    colorHex: { blue: '#258AFF', green: '#079C04', orange: '#FF5E00', red: '#FF014D', purple: '#641AFF' },
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

// DOM 元素获取
const tabHomeBtn = document.getElementById('tabHomeBtn');
const tabMyPageBtn = document.getElementById('tabMyPageBtn');
const homeView = document.getElementById('homeView');
const myPageView = document.getElementById('myPageView');
const homeControls = document.getElementById('homeControls');
const myPageControls = document.getElementById('myPageControls');

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

let userImgObj = null;
let homeColor = 'blue';
let myPageColor = 'blue';

// ============== 工具函数 ==============
function setupHighQualityContext(ctx) {
    if(!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high'; 
}

// 🌟 核心优化：图像卷积锐化引擎 (单独对配图使用，不污染文字)
function drawSharpenedImage(ctx, img, x, y, w, h, amount = 0.3) {
    const iw = Math.floor(w);
    const ih = Math.floor(h);
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    
    if (iw < 3 || ih < 3) {
        ctx.drawImage(img, ix, iy, iw, ih);
        return;
    }

    const off = document.createElement('canvas');
    off.width = iw;
    off.height = ih;
    const oCtx = off.getContext('2d');
    setupHighQualityContext(oCtx);
    oCtx.drawImage(img, 0, 0, iw, ih);

    try {
        const imageData = oCtx.getImageData(0, 0, iw, ih);
        const data = imageData.data;
        const tempData = new Uint8ClampedArray(data);
        
        const c = 1 + 4 * amount;
        const edge = -amount;

        for (let cy = 1; cy < ih - 1; cy++) {
            for (let cx = 1; cx < iw - 1; cx++) {
                const i = (cy * iw + cx) * 4;
                const iTop = ((cy - 1) * iw + cx) * 4;
                const iBottom = ((cy + 1) * iw + cx) * 4;
                const iLeft = (cy * iw + cx - 1) * 4;
                const iRight = (cy * iw + cx + 1) * 4;

                for (let cIdx = 0; cIdx < 3; cIdx++) {
                    data[i + cIdx] = 
                        tempData[i + cIdx] * c +
                        tempData[iTop + cIdx] * edge +
                        tempData[iBottom + cIdx] * edge +
                        tempData[iLeft + cIdx] * edge +
                        tempData[iRight + cIdx] * edge;
                }
            }
        }
        oCtx.putImageData(imageData, 0, 0);
    } catch (e) {
        // 若因跨域等问题无法读取像素，自动降级为无锐化的原生高清绘制
        console.warn('锐化失败,降级原画质:', e);
    }
    
    ctx.drawImage(off, ix, iy, iw, ih);
}

async function loadImage(src) {
    if (src.startsWith('data:') || src.startsWith('blob:')) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }
    try {
        const res = await fetch(src);
        const blob = await res.blob();
        return new Promise((resolve, reject) => {
            const f = new FileReader();
            f.onloadend = () => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = f.result;
            };
            f.onerror = reject;
            f.readAsDataURL(blob);
        });
    } catch (e) {
        console.error('图片加载失败:', src, e);
    }
}

async function loadColoredArrow(url, color) {
    const res = await fetch(url);
    const txt = await res.text();
    const coloredSvg = txt.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    return await loadImage('data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(coloredSvg))));
}

async function loadColoredSvgFill(url, color) {
    try {
        const res = await fetch(url);
        let txt = await res.text();
        if (!txt.includes('fill=')) {
            txt = txt.replace(/<svg/i, `<svg fill="${color}" `);
        } else {
            txt = txt.replace(/fill="([^"]*)"/gi, (m, p) => p.toLowerCase() === 'none' ? m : `fill="${color}"`)
                     .replace(/fill='([^']*)'/gi, (m, p) => p.toLowerCase() === 'none' ? m : `fill="${color}"`);
        }
        const u = URL.createObjectURL(new Blob([txt], { type: 'image/svg+xml;charset=utf-8' }));
        const img = await loadImage(u);
        URL.revokeObjectURL(u);
        return img;
    } catch (e) {
        return null;
    }
}

function drawRoundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
}

function getVisualLength(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        len += str.charCodeAt(i) > 255 ? 1 : 0.5;
    }
    return len;
}

function truncateToVisualLength(str, maxLen) {
    let len = 0;
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let charLen = str.charCodeAt(i) > 255 ? 1 : 0.5;
        if (len + charLen > maxLen) break;
        len += charLen;
        res += str[i];
    }
    return res;
}

function handleInputLimit(e, maxLen) {
    let str = e.target.value;
    if (getVisualLength(str) > maxLen) {
        e.target.value = truncateToVisualLength(str, maxLen);
    }
    renderMyPage();
}

function drawDualColorText(ctx, fullText, highlightText, x, y, baseColor, highlightColor) {
    const fixedX = Math.floor(x);
    const fixedY = Math.floor(y);
    if (!highlightText || !fullText.includes(highlightText)) {
        ctx.fillStyle = baseColor;
        ctx.fillText(fullText, fixedX, fixedY);
        return;
    }
    const parts = fullText.split(highlightText);
    let currentX = fixedX;
    for (let i = 0; i < parts.length; i++) {
        ctx.fillStyle = baseColor;
        ctx.fillText(parts[i], currentX, fixedY);
        currentX += Math.floor(ctx.measureText(parts[i]).width);
        if (i < parts.length - 1) {
            ctx.fillStyle = highlightColor;
            ctx.fillText(highlightText, currentX, fixedY);
            currentX += Math.floor(ctx.measureText(highlightText).width);
        }
    }
}

// ============== 1. 首页渲染逻辑 ==============
async function renderHomeCanvas() {
    if (!lightCanvas) return;
    const heroImg = await loadImage(config.heroImage);
    const kvImg = userImgObj || heroImg;
    
    await drawMode(false, lightCanvas, lightCtx, kvImg);
    
    if(lightBannerCanvas && lightBannerCtx) {
        const lbCanvas = await createFullBannerCanvas(false);
        lightBannerCanvas.width = lbCanvas.width;
        lightBannerCanvas.height = lbCanvas.height;
        setupHighQualityContext(lightBannerCtx);
        lightBannerCtx.clearRect(0,0, lightBannerCanvas.width, lightBannerCanvas.height);
        lightBannerCtx.drawImage(lbCanvas, 0, 0);
    }
    if(darkBannerCanvas && darkBannerCtx) {
        const dbCanvas = await createFullBannerCanvas(true);
        darkBannerCanvas.width = dbCanvas.width;
        darkBannerCanvas.height = dbCanvas.height;
        setupHighQualityContext(darkBannerCtx);
        darkBannerCtx.clearRect(0,0, darkBannerCanvas.width, darkBannerCanvas.height);
        darkBannerCtx.drawImage(dbCanvas, 0, 0);
    }

    const rawCanvas = document.getElementById('rawImageCanvas');
    if (rawCanvas) {
        const rawCtx = rawCanvas.getContext('2d');
        const scale = Math.min(1, 400 / kvImg.height); 
        rawCanvas.width = Math.floor(kvImg.width * scale);
        rawCanvas.height = Math.floor(kvImg.height * scale);
        setupHighQualityContext(rawCtx);
        drawSharpenedImage(rawCtx, kvImg, 0, 0, rawCanvas.width, rawCanvas.height, 0.3);
    }
}

async function drawMode(isDark, canvas, ctx, kvImg) {
    const bgUrl = isDark ? config.baseUIDark : config.baseUI;
    const bannerUrl = isDark ? config.colorsDark[homeColor] : config.colors[homeColor];
    const textColor1 = isDark ? config.nightTextColor1 : '#030B1A';
    const arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const baseUIImg = await loadImage(bgUrl);
    const bannerBgImg = await loadImage(bannerUrl);
    const arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    
    canvas.width = baseUIImg.width;
    canvas.height = baseUIImg.height;
    setupHighQualityContext(ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(baseUIImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bannerBgImg, Math.floor(config.bannerX), Math.floor(config.bannerY), bannerBgImg.width, bannerBgImg.height);
    
    ctx.save();
    ctx.beginPath();
    ctx.rect(Math.floor(config.heroX), Math.floor(config.heroY), Math.floor(config.heroWidth), Math.floor(config.heroHeight));
    ctx.clip();
    const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height);
    const kvDrawW = kvImg.width * kvScale;
    const kvDrawH = kvImg.height * kvScale;
    
    const drawX = config.heroX + (config.heroWidth - kvDrawW) / 2;
    const drawY = config.heroY + (config.heroHeight - kvDrawH) / 2;
    
    // 🌟 对核心照片进行锐化绘制
    drawSharpenedImage(ctx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3);
    ctx.restore();
    
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'bold 36px "PingFangSC-Medium", "PingFang SC", sans-serif';
    ctx.fillStyle = textColor1;
    ctx.fillText(textLine1Input?.value || '', Math.floor(306), Math.floor(166));
    ctx.fillStyle = arrowColor;
    ctx.fillText(textLine2Input?.value || '', Math.floor(306), Math.floor(217));
    const arrowX = Math.floor(306 + ctx.measureText(textLine2Input?.value || '').width + config.arrowPadding);
    const arrowY = Math.floor(217 + 18 - arrowImg.height / 2 + 2);
    ctx.drawImage(arrowImg, arrowX, arrowY);
}

// ============== 2. 我的页面渲染逻辑 ==============
async function renderMyPage() {
    await renderMyPageBanner();
    await renderMyPageFullCanvas();
}

async function renderMyPageBanner() {
    const heroImg = await loadImage(config.heroImage);
    const kvImg = userImgObj || heroImg;

    const drawMyPageMode = async (canvas, ctx, isDark) => {
        if (!ctx || !canvas) return;
        
        const targetColor = isDark ? '#141414' : myPageColors[myPageColor];
        const elementColor = myPageElementColors[myPageColor]; 
        const capsuleBlue = '#0090FF';
        
        const banner2Img = await loadColoredSvgFill(config.banner2Svg, targetColor);

        if (banner2Img) {
            canvas.width = banner2Img.width;
            canvas.height = banner2Img.height;
            setupHighQualityContext(ctx);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(banner2Img, 0, 0);
            
            ctx.save();
            const imgBoxX = 37;
            const imgBoxY = 23;
            const imgBoxW = 314;
            const imgBoxH = 178;
            ctx.beginPath();
            ctx.rect(imgBoxX, imgBoxY, imgBoxW, imgBoxH);
            ctx.clip();
            const imgScale = Math.min(imgBoxW / kvImg.width, imgBoxH / kvImg.height);
            const drawImgW = kvImg.width * imgScale;
            const drawImgH = kvImg.height * imgScale;
            
            const drawImgX = imgBoxX + (imgBoxW - drawImgW) / 2;
            const drawImgY = imgBoxY + (imgBoxH - drawImgH) / 2;
            
            // 🌟 对核心照片进行锐化绘制
            drawSharpenedImage(ctx, kvImg, drawImgX, drawImgY, drawImgW, drawImgH, 0.3);
            ctx.restore();
            
            ctx.save();
            ctx.globalAlpha = 0.15;
            ctx.fillStyle = capsuleBlue; 
            drawRoundRect(ctx, 857, 62, 212, 100, 50);
            ctx.fill();
            ctx.restore();
            
            ctx.save();
            ctx.fillStyle = capsuleBlue; 
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'normal 37px "FZLanTingHei"';
            if ('letterSpacing' in ctx) ctx.letterSpacing = '1px';
            ctx.fillText(textCapsuleInput?.value || '', 963, 111);
            ctx.restore();
            
            ctx.save();
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.font = 'normal 43px "FZLanTingHei"';
            if ('letterSpacing' in ctx) ctx.letterSpacing = '1px';
            
            const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A';
            const titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor;
            drawDualColorText(ctx, myPageTitle?.value || '', myPageHighlight?.value || '', 388, 57, titleBaseColor, titleHighlightColor);
            ctx.restore();
            
            ctx.save();
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.font = 'normal 38px "FZLanTingHei-R", "PingFang SC", sans-serif';
            
            if (isDark) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            } else {
                ctx.fillStyle = elementColor;
                ctx.globalAlpha = 0.75;
            }
            ctx.fillText(myPageSubtitle?.value || '', Math.floor(388), Math.floor(128));
            ctx.restore();
        }
    };

    await drawMyPageMode(myPageCanvas, myPageCtx, false);
    await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);

    const myPageRawCanvas = document.getElementById('myPageRawImageCanvas');
    if (myPageRawCanvas) {
        const rawCtx = myPageRawCanvas.getContext('2d');
        const scale = Math.min(1, 400 / kvImg.height); 
        myPageRawCanvas.width = Math.floor(kvImg.width * scale);
        myPageRawCanvas.height = Math.floor(kvImg.height * scale);
        setupHighQualityContext(rawCtx);
        drawSharpenedImage(rawCtx, kvImg, 0, 0, myPageRawCanvas.width, myPageRawCanvas.height, 0.3);
    }
}

async function renderMyPageFullCanvas() {
    if (!myPageFullCanvas || !myPageFullCtx) return;
    try {
        const bgImg = await loadImage(config.myPageBg);
        myPageFullCanvas.width = bgImg.width; 
        myPageFullCanvas.height = bgImg.height;
        setupHighQualityContext(myPageFullCtx);
        myPageFullCtx.clearRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height);
        myPageFullCtx.drawImage(bgImg, 0, 0);
        
        if (myPageCanvas.width > 0) {
            myPageFullCtx.save(); 
            drawRoundRect(myPageFullCtx, config.myPageX + 24, config.myPageY, myPageCanvas.width - 48, myPageCanvas.height, 36); 
            myPageFullCtx.clip();
            myPageFullCtx.drawImage(myPageCanvas, Math.floor(config.myPageX), Math.floor(config.myPageY));
            myPageFullCtx.restore();
        }
    } catch (e) { 
        console.error("渲染带壳预览失败: ", e); 
    }
}

async function createFullBannerCanvas(isDark) {
    const bannerUrl = isDark ? config.colorsDark[homeColor] : config.colors[homeColor];
    const textColor1 = isDark ? config.nightTextColor1 : '#030B1A';
    const arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    
    const bannerBgImg = await loadImage(bannerUrl);
    const heroImg = await loadImage(config.heroImage);
    const kvImg = userImgObj || heroImg;
    const arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    
    const left = Math.min(config.heroX, config.bannerX);
    const top = Math.min(config.heroY, config.bannerY);
    const right = Math.max(config.bannerX + bannerBgImg.width, 306 + 250);
    const bottom = Math.max(config.bannerY + bannerBgImg.height, 217 + 36);
    
    const fullCanvas = document.createElement('canvas');
    const fullCtx = fullCanvas.getContext('2d');
    fullCanvas.width = right - left;
    fullCanvas.height = bottom - top;
    setupHighQualityContext(fullCtx);
    
    const offsetX = Math.floor(-left);
    const offsetY = Math.floor(-top);
    fullCtx.drawImage(bannerBgImg, Math.floor(config.bannerX + offsetX), Math.floor(config.bannerY + offsetY));
    
    fullCtx.save();
    fullCtx.beginPath();
    fullCtx.rect(Math.floor(config.heroX + offsetX), Math.floor(config.heroY + offsetY), Math.floor(config.heroWidth), Math.floor(config.heroHeight));
    fullCtx.clip();
    const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height);
    const kvDrawW = kvImg.width * kvScale;
    const kvDrawH = kvImg.height * kvScale;
    
    const drawX = config.heroX + offsetX + (config.heroWidth - kvDrawW) / 2;
    const drawY = config.heroY + offsetY + (config.heroHeight - kvDrawH) / 2;
    
    // 🌟 对核心照片进行锐化绘制
    drawSharpenedImage(fullCtx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3);
    fullCtx.restore();
    
    fullCtx.textAlign = 'left';
    fullCtx.textBaseline = 'top';
    fullCtx.font = 'bold 36px "PingFangSC-Medium", "PingFang SC", sans-serif';
    fullCtx.fillStyle = textColor1;
    fullCtx.fillText(textLine1Input.value, Math.floor(306 + offsetX), Math.floor(166 + offsetY));
    fullCtx.fillStyle = arrowColor;
    fullCtx.fillText(textLine2Input.value, Math.floor(306 + offsetX), Math.floor(217 + offsetY));
    
    const arrowX = Math.floor(306 + offsetX + fullCtx.measureText(textLine2Input.value).width + config.arrowPadding);
    const arrowY = Math.floor(217 + offsetY + 18 - arrowImg.height / 2 + 2);
    fullCtx.drawImage(arrowImg, arrowX, arrowY);
    
    return fullCanvas;
}

// ==================== Tab 联动切换逻辑 ====================
if(tabHomeBtn && tabMyPageBtn) {
    tabHomeBtn.addEventListener('click', () => {
        tabHomeBtn.classList.add('active');
        tabMyPageBtn.classList.remove('active');
        homeView.classList.add('active');
        myPageView.classList.remove('active');
        homeControls.classList.add('active');
        myPageControls.classList.remove('active');
    });
    
    tabMyPageBtn.addEventListener('click', () => {
        tabMyPageBtn.classList.add('active');
        tabHomeBtn.classList.remove('active');
        myPageView.classList.add('active');
        homeView.classList.remove('active');
        myPageControls.classList.add('active');
        homeControls.classList.remove('active');
    });
}

// ==================== 放大镜详情交互 ====================
function openZoomModal(canvas) {
    zoomedImg.src = canvas.toDataURL('image/png', 1.0);
    zoomModal.style.display = 'block';
}
function closeZoomModal() {
    zoomModal.style.display = 'none';
    zoomedImg.src = '';
}
document.querySelectorAll('.zoomable-canvas').forEach(canvas => {
    canvas.addEventListener('click', () => openZoomModal(canvas));
});
zoomModal.addEventListener('click', closeZoomModal);
document.querySelector('.close-modal').addEventListener('click', closeZoomModal);

// ==================== 事件监听 ====================
homeColorRadios.forEach(r => {
    r.addEventListener('change', async e => {
        homeColor = e.target.value;
        await renderHomeCanvas();
    });
});
textLine1Input?.addEventListener('input', renderHomeCanvas);
textLine2Input?.addEventListener('input', renderHomeCanvas);

document.getElementById('imageUpload')?.addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = async ev => {
        userImgObj = await loadImage(ev.target.result);
        await renderHomeCanvas();
        await renderMyPage(); 
    };
    r.readAsDataURL(f);
});

myPageColorRadios.forEach(r => {
    r.addEventListener('change', async e => {
        myPageColor = e.target.value;
        await renderMyPage();
    });
});
textCapsuleInput?.addEventListener('input', renderMyPage);
myPageTitle?.addEventListener('input', e => handleInputLimit(e, 9));
myPageSubtitle?.addEventListener('input', e => handleInputLimit(e, 8));
myPageHighlight?.addEventListener('input', renderMyPage);

// ==================== 导出功能 ====================
function canvasToBlob(c) {
    return new Promise(r => c.toBlob(b => r(b), 'image/png'));
}
document.getElementById('exportBtn')?.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败');
    const zip = new JSZip();
    zip.file(`带壳预览-首页-日间-${homeColor}.png`, await canvasToBlob(lightCanvas));
    if (myPageFullCanvas) {
        zip.file(`带壳预览-我的页面-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas));
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.download = `带壳预览(纯净日间版).zip`;
    link.href = URL.createObjectURL(zipBlob);
    link.click();
});

document.getElementById('exportBannerBtn')?.addEventListener('click', async () => {
    const kvCanvas = document.createElement('canvas');
    const kvCtx = kvCanvas.getContext('2d');
    kvCanvas.width = 420;
    kvCanvas.height = 282;
    setupHighQualityContext(kvCtx);

    const heroImg = await loadImage(config.heroImage);
    const kvImg = userImgObj || heroImg;
    const scale = Math.max(420 / kvImg.width, 282 / kvImg.height);
    const drawW = kvImg.width * scale;
    const drawH = kvImg.height * scale;
    
    const drawX = (420 - drawW) / 2;
    const drawY = (282 - drawH) / 2;
    
    // 🌟 对单独导出的 KV 切图进行锐化绘制
    drawSharpenedImage(kvCtx, kvImg, drawX, drawY, drawW, drawH, 0.3);
    
    const link = document.createElement('a');
    link.download = `首页启动-KV切图(锐化版).png`;
    link.href = kvCanvas.toDataURL('image/png', 1.0);
    link.click();
});

document.getElementById('exportFullBannerBtn')?.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') return alert('加载 ZIP 库失败');
    const zip = new JSZip();
    zip.file(`完整Banner-首页-日间-${homeColor}.png`, await canvasToBlob(await createFullBannerCanvas(false)));
    zip.file(`完整Banner-首页-夜间-${homeColor}.png`, await canvasToBlob(await createFullBannerCanvas(true)));
    
    if (myPageCanvas) {
        zip.file(`完整Banner-我的页面-日间-${myPageColor}.png`, await canvasToBlob(myPageCanvas));
    }
    if (myPageDarkCanvas) {
        zip.file(`完整Banner-我的页面-夜间-${myPageColor}.png`, await canvasToBlob(myPageDarkCanvas));
    }
    
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.download = `全套Banner切图(锐化版).zip`;
    link.href = URL.createObjectURL(zipBlob);
    link.click();
});

// ==================== 初始化 ====================
window.onload = async () => {
    if ('fonts' in document) {
        try {
            await document.fonts.load('normal 44px "FZLanTingHei"');
            await document.fonts.load('normal 38px "FZLanTingHei-R"');
        } catch (e) {
            console.warn("字体加载失败", e);
        }
    }
    await renderHomeCanvas();
    await renderMyPage();
};