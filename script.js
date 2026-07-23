// ==================== 1. 目录结构数据与全局配置 ====================
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
        { value: 'dev_1_1_17', text: '【A级】A1.1.17 NA - 活动中心' },
        { value: 'dev_1_1_18', text: '【A级】A1.1.18 NA - 共享点对点' },
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
// 记录当前所在的业务线
let currentBU = 'wangpan';
// 新增：一刻相册专属目录结构
const YIKE_PAGE_DIRECTORY = {
    'NA': [
        { value: 'yike_1', text: 'B1.1.1 NA - 开屏' },
        { value: 'yike_2', text: 'B1.1.2 NA - 弹窗' },
        { value: 'yike_3', text: 'B1.1.3 NA - 角标' },
        { value: 'yike_4', text: '【SS级】B1.1.4 NA - 首页banner' },
        { value: 'yike_5', text: '【SS级】B1.1.5 NA - 设备banner' },
        { value: 'yike_6', text: 'B1.1.6 NA - 九宫格' },
        { value: 'yike_7', text: '【SS级】B1.1.7 NA - 收银台banner' },
        { value: 'yike_8', text: 'B1.1.8 NA - 创意banner' },
        { value: 'yike_9', text: 'B1.1.9 NA - 搜索banner' },
        { value: 'yike_10', text: 'B1.1.10 NA - 网盘相册-弹窗' },
        { value: 'yike_11', text: 'B1.1.11 NA - 网盘相册-工具banner' },
        { value: 'yike_12', text: 'B1.1.12 NA - 网盘相册-头部广告banner' },
        { value: 'yike_13', text: 'B1.1.13 NA - 网盘相册-找图banner' },
        { value: 'yike_14', text: 'B1.1.14 NA - 网盘相册-空间管理入口' },
        { value: 'yike_15', text: 'B1.1.15 NA - 小程序工具banner' },
        { value: 'yike_16', text: 'B1.1.16 NA - 看见banner' },
        { value: 'yike_17', text: 'B1.1.17 NA - 相册banner' }
    ],
    'PC': [], 'Web': [], 'Wap': [], 'Mac': [], 'ipd': []
};
// 新增：出海方向专属目录结构
const CHUHAI_PAGE_DIRECTORY = {
    'NA': [
        { value: 'chuhai_1', text: 'C1.1.1 NA - 首页弹窗（大）' },
        { value: 'chuhai_2', text: 'C1.1.2 NA - 首页弹窗（小）' },
        { value: 'chuhai_3', text: 'C1.1.3 NA - 侧位悬浮' },
        { value: 'chuhai_4', text: 'C1.1.4 NA - 福利中心大曝光运营位' },
        { value: 'chuhai_5', text: 'C1.1.5 NA - 福利中心banner运营位' },
        { value: 'chuhai_6', text: 'C1.1.6 NA - 福利中心单元素图' }
    ],
    'PC': [], 'Web': [], 'Wap': [], 'Mac': [], 'ipd': []
};
const IMPLEMENTED_RESOURCE_PRIORITY = {
    wangpan: {
        NA: ['na_home', 'na_feed', 'na_mypage', 'dev_1_1_13', 'dev_1_1_16', 'dev_1_1_17', 'dev_1_1_18']
    },
    yike: {
        NA: ['yike_4', 'yike_5', 'yike_7']
    },
    chuhai: {
        NA: []
    }
};
const TEXT_LIMITS = { homeLine1: 6, homeLine2: 4, capsule: 4, myPageTitle: 9, myPageSubtitle: 8 };
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
    mySpacePage: 'assets/my-space-page.png', simpleScanPage: 'assets/simple-banner-scan.png',
    searchBtSvg: 'assets/search-bt.svg', searchArrowSvg: 'assets/search-arrow.svg',
    mySpaceExampleImage: 'assets/search-banner-image.png', simpleScanExampleImage: 'assets/simple-banner-scan-image.png',
    myActivityPage: 'assets/my-activity-enter-banner.png', peerSharingPage: 'assets/peer-to-peer-sharing.png',
    peerSharingExampleImage: 'assets/peer-to-peer-sharing-image.png',
    yikeEquipPage: 'assets/photo-equipment-page.png',
    yikeEquipExampleImage: 'assets/photo-equipment-image.png',
    yikeHomePage: 'assets/photo-home-page.png',
    yikeHomeExampleImage: 'assets/photo-home-image.png',
    yikeHomeBottomSvg: 'assets/photo-home-jianbian.svg',
    yikeCashPage: 'assets/photo-cash-page.png',
    yikeCashExampleImage: 'assets/photo-cash- image.png',
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
const myActivityControls = document.getElementById('myActivityControls');
const peerSharingControls = document.getElementById('peerSharingControls');
const developingPrompt = document.getElementById('developingPrompt');
const viewDevelopingPrompt = document.getElementById('viewDevelopingPrompt');
const homeView = document.getElementById('homeView');
const myPageView = document.getElementById('myPageView');
const feedView = document.getElementById('feedView');
const searchIconView = document.getElementById('searchIconView');
const mySpaceView = document.getElementById('mySpaceView');
const myActivityView = document.getElementById('myActivityView');
const peerSharingView = document.getElementById('peerSharingView');
const topHomePageCanvas = document.getElementById('topHomePageCanvas'); const topHomePageCtx = topHomePageCanvas?.getContext('2d');
const lightCanvas = document.getElementById('lightCanvas'); const lightCtx = lightCanvas?.getContext('2d');
const myPageFullCanvas = document.getElementById('myPageFullCanvas'); const myPageFullCtx = myPageFullCanvas?.getContext('2d');
const feedCanvas = document.getElementById('feedCanvas'); const feedCtx = feedCanvas?.getContext('2d');
const searchPageCanvas = document.getElementById('searchPageCanvas'); const searchPageCtx = searchPageCanvas?.getContext('2d');
const mySpacePageCanvas = document.getElementById('mySpacePageCanvas'); const mySpacePageCtx = mySpacePageCanvas?.getContext('2d');
const simpleScanPageCanvas = document.getElementById('simpleScanPageCanvas'); const simpleScanPageCtx = simpleScanPageCanvas?.getContext('2d');
const myActivityPageCanvas = document.getElementById('myActivityPageCanvas'); const myActivityPageCtx = myActivityPageCanvas?.getContext('2d');
const peerSharingPageCanvas = document.getElementById('peerSharingPageCanvas'); const peerSharingPageCtx = peerSharingPageCanvas?.getContext('2d');
const topHomeBannerCanvas = document.getElementById('topHomeBannerCanvas'); const topHomeBannerCtx = topHomeBannerCanvas?.getContext('2d');
const lightBannerCanvas = document.getElementById('lightBannerCanvas'); const lightBannerCtx = lightBannerCanvas?.getContext('2d');
const darkBannerCanvas = document.getElementById('darkBannerCanvas'); const darkBannerCtx = darkBannerCanvas?.getContext('2d');
const myPageCanvas = document.getElementById('myPageCanvas'); const myPageCtx = myPageCanvas?.getContext('2d');
const myPageDarkCanvas = document.getElementById('myPageDarkCanvas'); const myPageDarkCtx = myPageDarkCanvas?.getContext('2d');
const feedBannerCanvas = document.getElementById('feedBannerCanvas'); const feedBannerCtx = feedBannerCanvas?.getContext('2d');
const searchIconExportCanvas = document.getElementById('searchIconExportCanvas'); const searchIconExportCtx = searchIconExportCanvas?.getContext('2d');
const mySpaceExportCanvas = document.getElementById('mySpaceExportCanvas'); const mySpaceExportCtx = mySpaceExportCanvas?.getContext('2d');
const simpleScanExportCanvas = document.getElementById('simpleScanExportCanvas'); const simpleScanExportCtx = simpleScanExportCanvas?.getContext('2d');
const myActivityExportCanvas = document.getElementById('myActivityExportCanvas'); const myActivityExportCtx = myActivityExportCanvas?.getContext('2d');
const peerSharingExportCanvas = document.getElementById('peerSharingExportCanvas'); const peerSharingExportCtx = peerSharingExportCanvas?.getContext('2d');
const textLine1Input = document.getElementById('textLine1'); const textLine2Input = document.getElementById('textLine2');
const textCapsuleInput = document.getElementById('textCapsule'); const myPageTitle = document.getElementById('myPageTitle'); const myPageHighlight = document.getElementById('myPageHighlight'); const myPageSubtitle = document.getElementById('myPageSubtitle');
const homeColorRadios = document.getElementsByName('homeColor'); const myPageColorRadios = document.getElementsByName('myPageColor');
const topBgModeRadios = document.getElementsByName('topBgMode');
const topBgModeImage = document.getElementById('topBgModeImage'); const topBgModeGradient = document.getElementById('topBgModeGradient'); const topBgModeSolid = document.getElementById('topBgModeSolid');
const topGradColor1 = document.getElementById('topGradColor1'); const topGradColor2 = document.getElementById('topGradColor2');
const topGradAngle = document.getElementById('topGradAngle'); const topGradAngleVal = document.getElementById('topGradAngleVal'); const topSolidColor = document.getElementById('topSolidColor');
const feedBgModeRadios = document.getElementsByName('feedBgMode');
const feedBgModeImage = document.getElementById('feedBgModeImage'); const feedBgModeGradient = document.getElementById('feedBgModeGradient'); const feedBgModeSolid = document.getElementById('feedBgModeSolid');
const feedGradColor1 = document.getElementById('feedGradColor1'); const feedGradColor2 = document.getElementById('feedGradColor2');
const feedGradAngle = document.getElementById('feedGradAngle'); const feedGradAngleVal = document.getElementById('feedGradAngleVal'); const feedSolidColor = document.getElementById('feedSolidColor');
const feedTitleInput = document.getElementById('feedTitle'); const feedTitleColor = document.getElementById('feedTitleColor');
const feedSubtitleInput = document.getElementById('feedSubtitle'); const feedSubtitleColor = document.getElementById('feedSubtitleColor');
const feedBtnTextInput = document.getElementById('feedBtnText');
const mySpaceBgModeRadios = document.getElementsByName('mySpaceBgMode');
const mySpaceBgModeSolid = document.getElementById('mySpaceBgModeSolid'); const mySpaceBgModeGradient = document.getElementById('mySpaceBgModeGradient');
const mySpaceSolidColor = document.getElementById('mySpaceSolidColor'); const mySpaceGradColor1 = document.getElementById('mySpaceGradColor1'); const mySpaceGradColor2 = document.getElementById('mySpaceGradColor2');
const mySpaceTitleInput = document.getElementById('mySpaceTitle'); const mySpaceSubInput = document.getElementById('mySpaceSub');
const mySpaceBtnTextInput = document.getElementById('mySpaceBtnText'); const mySpaceBtnGrad1 = document.getElementById('mySpaceBtnGrad1'); const mySpaceBtnGrad2 = document.getElementById('mySpaceBtnGrad2');
const simpleScanBgModeRadios = document.getElementsByName('simpleScanBgMode');
const simpleScanBgModeSolid = document.getElementById('simpleScanBgModeSolid'); const simpleScanBgModeGradient = document.getElementById('simpleScanBgModeGradient');
const simpleScanSolidColor = document.getElementById('simpleScanSolidColor'); const simpleScanGradColor1 = document.getElementById('simpleScanGradColor1'); const simpleScanGradColor2 = document.getElementById('simpleScanGradColor2');
const simpleScanTitleInput = document.getElementById('simpleScanTitle'); const simpleScanHighlightInput = document.getElementById('simpleScanHighlight'); const simpleScanHighlightColor = document.getElementById('simpleScanHighlightColor');
const simpleScanSubInput = document.getElementById('simpleScanSub'); const simpleScanBtnTextInput = document.getElementById('simpleScanBtnText'); const simpleScanBtnGrad1 = document.getElementById('simpleScanBtnGrad1'); const simpleScanBtnGrad2 = document.getElementById('simpleScanBtnGrad2');
const myActivityGrad1 = document.getElementById('myActivityGrad1'); const myActivityGrad2 = document.getElementById('myActivityGrad2');
const myActivitySub = document.getElementById('myActivitySub'); const myActivityTitle1 = document.getElementById('myActivityTitle1'); const myActivityTitle2 = document.getElementById('myActivityTitle2');
const myActivityBtnText = document.getElementById('myActivityBtnText'); const myActivitySubColor = document.getElementById('myActivitySubColor'); const myActivityTitle1Color = document.getElementById('myActivityTitle1Color'); const myActivityTitle2Color = document.getElementById('myActivityTitle2Color'); const myActivityBtnColor = document.getElementById('myActivityBtnColor');
const peerSharingGrad1 = document.getElementById('peerSharingGrad1'); const peerSharingGrad2 = document.getElementById('peerSharingGrad2');
const peerSharingSub = document.getElementById('peerSharingSub'); const peerSharingTitle1 = document.getElementById('peerSharingTitle1'); const peerSharingTitle2 = document.getElementById('peerSharingTitle2');
const peerSharingBtnText = document.getElementById('peerSharingBtnText'); const peerSharingSubColor = document.getElementById('peerSharingSubColor'); const peerSharingTitle1Color = document.getElementById('peerSharingTitle1Color'); const peerSharingTitle2Color = document.getElementById('peerSharingTitle2Color'); const peerSharingBtnColor = document.getElementById('peerSharingBtnColor');
const yikeEquipView = document.getElementById('yikeEquipView');
const yikeEquipControls = document.getElementById('yikeEquipControls');
const yikeEquipPageCanvas = document.getElementById('yikeEquipPageCanvas');
const yikeEquipPageCtx = yikeEquipPageCanvas?.getContext('2d');
const yikeEquipExportCanvas = document.getElementById('yikeEquipExportCanvas');
const yikeEquipExportCtx = yikeEquipExportCanvas?.getContext('2d');
const yikeEquipTitle = document.getElementById('yikeEquipTitle'); const yikeEquipTitleColor = document.getElementById('yikeEquipTitleColor');
const yikeEquipSub = document.getElementById('yikeEquipSub'); const yikeEquipSubColor = document.getElementById('yikeEquipSubColor');
const yikeEquipBtnText = document.getElementById('yikeEquipBtnText'); const yikeEquipBtnBgColor = document.getElementById('yikeEquipBtnBgColor'); const yikeEquipBtnTextColor = document.getElementById('yikeEquipBtnTextColor');
const yikeEquipGrad1 = document.getElementById('yikeEquipGrad1'); const yikeEquipGrad2 = document.getElementById('yikeEquipGrad2');

const yikeCashView = document.getElementById('yikeCashView');
const yikeCashControls = document.getElementById('yikeCashControls');
const yikeCashPageCanvas = document.getElementById('yikeCashPageCanvas');
const yikeCashPageCtx = yikeCashPageCanvas?.getContext('2d');
const yikeCashExportCanvas = document.getElementById('yikeCashExportCanvas');
const yikeCashExportCtx = yikeCashExportCanvas?.getContext('2d');
const yikeCashTitle = document.getElementById('yikeCashTitle'); const yikeCashTitleColor = document.getElementById('yikeCashTitleColor');
const yikeCashHighlight = document.getElementById('yikeCashHighlight'); const yikeCashHighlightColor = document.getElementById('yikeCashHighlightColor');
const yikeCashGrad1 = document.getElementById('yikeCashGrad1'); const yikeCashGrad2 = document.getElementById('yikeCashGrad2');

const yikeHomeView = document.getElementById('yikeHomeView');
const yikeHomeControls = document.getElementById('yikeHomeControls');
const yikeHomePageCanvas = document.getElementById('yikeHomePageCanvas');
const yikeHomePageCtx = yikeHomePageCanvas?.getContext('2d');
const yikeHomeExportCanvas = document.getElementById('yikeHomeExportCanvas');
const yikeHomeExportCtx = yikeHomeExportCanvas?.getContext('2d');
const yikeHomeTitle = document.getElementById('yikeHomeTitle'); const yikeHomeTitleColor = document.getElementById('yikeHomeTitleColor');
const yikeHomeSub = document.getElementById('yikeHomeSub'); const yikeHomeSubColor = document.getElementById('yikeHomeSubColor');
const yikeHomeSubHighlight = document.getElementById('yikeHomeSubHighlight'); const yikeHomeSubHighlightColor = document.getElementById('yikeHomeSubHighlightColor');
let yikeHomeBgBannerObj = null;

const businessUploadState = {
    wangpan: { src: null, img: null },
    yike: { src: null, img: null },
    chuhai: { src: null, img: null },
};
let userImgObj = null; let feedBgBannerObj = null; let topBgBannerObj = null; let userTopBannerTitleObj = null;
function getActiveBusinessLineKey() { return currentBU === 'yike' ? 'yike' : currentBU === 'chuhai' ? 'chuhai' : 'wangpan'; }
function getDefaultUploadPreviewSrc(selectedResource = document.querySelector('.resource-item.active')?.dataset.value) {
    const key = getActiveBusinessLineKey();
    if (key === 'yike') {
        if (selectedResource === 'yike_4') return config.yikeHomeExampleImage;
        if (selectedResource === 'yike_5') return config.yikeEquipExampleImage;
        if (selectedResource === 'yike_7') return config.yikeCashExampleImage;
        return config.yikeEquipExampleImage;
    }
    return config.heroImage;
}
function syncCurrentBusinessUploadState(selectedResource) {
    const key = getActiveBusinessLineKey();
    userImgObj = businessUploadState[key].img;
    const uploadPreviewImg = document.getElementById('uploadPreviewImg');
    if (uploadPreviewImg) uploadPreviewImg.src = businessUploadState[key].src || getDefaultUploadPreviewSrc(selectedResource);
}
let currentTopBgMode = 'image'; let currentFeedBgMode = 'image';
let homeColor = 'blue'; let myPageColor = 'blue';
let currentMySpaceBgMode = 'solid'; let currentSimpleScanBgMode = 'solid';
const globalImageCache = {}; const globalSvgTextCache = {};
// ==================== ✨ A/B 测试核心状态库与字典映射 ====================
window.abTestCopies = {};
window.abTestActiveIndex = {};
const MODULE_INPUT_MAP = {
    'home': [{ id: 'textLine1', key: 'line1', limit: 6 }, { id: 'textLine2', key: 'line2', limit: 4 }],
    'myPage': [{ id: 'myPageTitle', key: 'title', limit: 9 }, { id: 'myPageSubtitle', key: 'sub', limit: 8 }, { id: 'textCapsule', key: 'capsule', limit: 4 }, { id: 'myPageHighlight', key: 'highlight', limit: 9 }],
    'feed': [{ id: 'feedTitle', key: 'title', limit: 7 }, { id: 'feedSubtitle', key: 'sub', limit: 10 }, { id: 'feedBtnText', key: 'btn', limit: 4 }],
    'mySpace': [{ id: 'mySpaceTitle', key: 'title', limit: 11 }, { id: 'mySpaceSub', key: 'sub', limit: 8 }, { id: 'mySpaceBtnText', key: 'btn', limit: 4 }],
    'simpleScan': [{ id: 'simpleScanTitle', key: 'title', limit: 11 }, { id: 'simpleScanSub', key: 'sub', limit: 8 }, { id: 'simpleScanBtnText', key: 'btn', limit: 4 }, { id: 'simpleScanHighlight', key: 'highlight', limit: 6 }],
    'activity': [{ id: 'myActivityTitle1', key: 'title1', limit: 7 }, { id: 'myActivityTitle2', key: 'title2', limit: 7 }, { id: 'myActivitySub', key: 'sub', limit: 8 }, { id: 'myActivityBtnText', key: 'btn', limit: 4 }],
    'peerSharing': [{ id: 'peerSharingTitle1', key: 'title1', limit: 7 }, { id: 'peerSharingTitle2', key: 'title2', limit: 7 }, { id: 'peerSharingSub', key: 'sub', limit: 8 }, { id: 'peerSharingBtnText', key: 'btn', limit: 4 }],
    'yikeEquip': [{ id: 'yikeEquipTitle', key: 'title', limit: 9 }, { id: 'yikeEquipSub', key: 'sub', limit: 12 }, { id: 'yikeEquipBtnText', key: 'btn', limit: 4 }],
    'yikeHome': [{ id: 'yikeHomeTitle', key: 'title', limit: 8 }, { id: 'yikeHomeSub', key: 'sub', limit: 11 }, { id: 'yikeHomeSubHighlight', key: 'highlight', limit: 11 }, { id: 'yikeHomeTitleColor', key: 'titleColor', limit: 7 }, { id: 'yikeHomeSubColor', key: 'subColor', limit: 7 }, { id: 'yikeHomeSubHighlightColor', key: 'highlightColor', limit: 7 }],
    'yikeCash': [{ id: 'yikeCashTitle', key: 'title', limit: 12 }, { id: 'yikeCashHighlight', key: 'highlight', limit: 12 }, { id: 'yikeCashTitleColor', key: 'titleColor', limit: 7 }, { id: 'yikeCashHighlightColor', key: 'highlightColor', limit: 7 }, { id: 'yikeCashGrad1', key: 'grad1', limit: 7 }, { id: 'yikeCashGrad2', key: 'grad2', limit: 7 }],
};
const MODULE_RENDER_FNS = {
    'home': renderHomeCanvas, 'myPage': renderMyPage, 'feed': renderFeedCanvas,
    'mySpace': renderMySpaceCanvas, 'simpleScan': renderSimpleScanCanvas,
    'activity': renderMyActivityCanvas, 'peerSharing': renderPeerSharingCanvas,
    'yikeEquip': renderYikeEquipCanvas, 'yikeHome': renderYikeHomeCanvas,
    'yikeCash': renderYikeCashCanvas
};
const AI_RESOURCE_MATCHERS = [
    { resource: 'na_home', bu: 'wangpan', label: 'A1.1.3 NA - 13.14首页顶部沉浸banner', patterns: [/A\s*1\.1\.3/i, /13\.14\s*首页顶部沉浸\s*banner/i, /首页顶部沉浸\s*banner/i] },
    { resource: 'na_feed', bu: 'wangpan', label: 'A1.1.4 NA - 首页feed 10出1', patterns: [/A\s*1\.1\.4/i, /首页\s*feed/i, /首页运营\s*10\s*出\s*1/i, /10\s*出\s*1/] },
    { resource: 'na_mypage', bu: 'wangpan', label: 'A1.1.5 NA - 我的页面banner', patterns: [/A\s*1\.1\.5/i, /我的(页面|页).*banner/i, /我的页轮播\s*banner/i] },
    { resource: 'dev_1_1_13', bu: 'wangpan', label: 'A1.1.13 NA - 搜索框icon', patterns: [/A\s*1\.1\.13/i, /搜索框\s*icon/i, /搜索\s*icon/i] },
    { resource: 'dev_1_1_16', bu: 'wangpan', label: 'A1.1.16 NA - 我的空间/简单扫描banner', patterns: [/A\s*1\.1\.16/i, /我的空间/i, /任务中心/i, /分享页/i, /简单扫描/i] },
    { resource: 'dev_1_1_17', bu: 'wangpan', label: 'A1.1.17 NA - 活动中心', patterns: [/A\s*1\.1\.17/i, /活动中心/i] },
    { resource: 'dev_1_1_18', bu: 'wangpan', label: 'A1.1.18 NA - 共享点对点', patterns: [/A\s*1\.1\.18/i, /共享点对点/i, /点对点/i] },
    { resource: 'yike_4', bu: 'yike', label: 'B1.1.4 NA - 首页banner', patterns: [/B\s*1\.1\.4/i, /一刻.*首页\s*banner/i, /一刻相册.*首页/i] },
    { resource: 'yike_5', bu: 'yike', label: 'B1.1.5 NA - 设备banner', patterns: [/B\s*1\.1\.5/i, /一刻.*设备\s*banner/i] },
    { resource: 'yike_7', bu: 'yike', label: 'B1.1.7 NA - 收银台banner', patterns: [/B\s*1\.1\.7/i, /一刻.*收银台\s*banner/i, /一刻.*收银台/i] }
];
function normalizeDemandTextForMatch(str = '') {
    return String(str)
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function inferResourcesFromDemandText(text) {
    const normalized = normalizeDemandTextForMatch(text);
    if (!normalized) return [];
    const matched = [];
    AI_RESOURCE_MATCHERS.forEach(item => {
        if (item.patterns.some(pattern => pattern.test(normalized))) matched.push(item.resource);
    });
    return [...new Set(matched)];
}
function getBusinessForResource(resource) {
    const match = AI_RESOURCE_MATCHERS.find(item => item.resource === resource);
    return match?.bu || (resource?.startsWith('yike_') ? 'yike' : resource?.startsWith('chuhai_') ? 'chuhai' : 'wangpan');
}
function getDominantBusinessFromResources(resources) {
    const counts = resources.reduce((acc, resource) => {
        const bu = getBusinessForResource(resource);
        acc[bu] = (acc[bu] || 0) + 1;
        return acc;
    }, {});
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    if (!entries.length) return null;
    if (entries.length === 1 || entries[0][1] > entries[1][1]) return entries[0][0];
    return currentBU;
}
// ==================== ✨ 核心工具：智能半角统计、逗号转空格、打字实时渲染 ====================
function formatAndLimitText(str, maxLen) {
    if (!str) return '';
    str = str.replace(/。/g, '');
    str = str.replace(/，/g, ' ').replace(/,/g, ' ');
    str = str.replace(/！/g, '!').replace(/？/g, '?').replace(/：/g, ':').replace(/；/g, ';');
    str = str.replace(/\s+/g, ' ');
    let len = 0, res = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let charLen = 1;
        if (str[i] === ' ') {
            charLen = 0;
        } else if (charCode >= 0x0000 && charCode <= 0x00FF) {
            charLen = 0.5;
        }
        if (len + charLen > maxLen) break;
        len += charLen;
        res += str[i];
    }
    return res.trim();
}
function bindFormatter(inputId, maxLen, moduleKey = null, dataKey = null) {
    const el = document.getElementById(inputId);
    if (!el) return;
    el.removeAttribute('maxlength');
    let isComposing = false;
    const updateDataAndRender = (val) => {
        if (moduleKey && dataKey && window.abTestCopies[moduleKey] && window.abTestCopies[moduleKey].length > 0) {
            let activeIdx = window.abTestActiveIndex[moduleKey] || 0;
            window.abTestCopies[moduleKey][activeIdx][dataKey] = val;
        }
        if (moduleKey && MODULE_RENDER_FNS[moduleKey]) {
            MODULE_RENDER_FNS[moduleKey]();
        }
    };
    el.addEventListener('compositionstart', () => { isComposing = true; });
    el.addEventListener('compositionend', (e) => {
        isComposing = false;
        const formatted = formatAndLimitText(e.target.value, maxLen);
        if (e.target.value !== formatted) { e.target.value = formatted; }
        updateDataAndRender(formatted);
    });
    el.addEventListener('input', (e) => {
        if (isComposing) return;
        const formatted = formatAndLimitText(e.target.value, maxLen);
        if (e.target.value !== formatted) { e.target.value = formatted; }
        updateDataAndRender(formatted);
    });
}
// ==================== 🛠️ 2. Figma 级拖拽与缩放功能 ====================
let cvsScale = 1; let cvsTranslateX = 0; let cvsTranslateY = 0;
let isDraggingCanvas = false; let startDragX, startDragY;
const viewport = document.getElementById('viewport');
const container = document.getElementById('canvasContainer');
const zoomLevelText = document.getElementById('zoomLevel');
function updateCanvasTransform() {
    container.style.transform = `translate(${cvsTranslateX}px, ${cvsTranslateY}px) scale(${cvsScale})`;
    zoomLevelText.innerText = Math.round(cvsScale * 100) + '%';
}
function resetCanvasView() {
    cvsScale = 1; cvsTranslateX = 0; cvsTranslateY = 0;
    updateCanvasTransform();
}
viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
        const delta = -e.deltaY * 0.002;
        const newScale = Math.min(Math.max(0.1, cvsScale + delta), 5);
        const rect = viewport.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        cvsTranslateX = mouseX - (mouseX - cvsTranslateX) * (newScale / cvsScale);
        cvsTranslateY = mouseY - (mouseY - cvsTranslateY) * (newScale / cvsScale);
        cvsScale = newScale;
        updateCanvasTransform();
    } else {
        cvsTranslateX -= e.deltaX;
        cvsTranslateY -= e.deltaY;
        updateCanvasTransform();
    }
}, { passive: false });
let isSpacePressed = false;
window.addEventListener('keydown', e => { if (e.code === 'Space') { isSpacePressed = true; viewport.style.cursor = 'grab'; } });
window.addEventListener('keyup', e => { if (e.code === 'Space') { isSpacePressed = false; viewport.style.cursor = 'default'; } });
viewport.addEventListener('mousedown', (e) => {
    if (e.button === 1 || (e.button === 0 && isSpacePressed)) {
        isDraggingCanvas = true;
        startDragX = e.clientX - cvsTranslateX;
        startDragY = e.clientY - cvsTranslateY;
        viewport.style.cursor = 'grabbing';
        e.preventDefault();
    }
});
window.addEventListener('mousemove', (e) => {
    if (!isDraggingCanvas) return;
    cvsTranslateX = e.clientX - startDragX;
    cvsTranslateY = e.clientY - startDragY;
    updateCanvasTransform();
});
window.addEventListener('mouseup', () => {
    isDraggingCanvas = false;
    viewport.style.cursor = isSpacePressed ? 'grab' : 'default';
});
document.getElementById('zoomInBtn').addEventListener('click', () => { cvsScale = Math.min(cvsScale + 0.1, 5); updateCanvasTransform(); });
document.getElementById('zoomOutBtn').addEventListener('click', () => { cvsScale = Math.max(cvsScale - 0.1, 0.1); updateCanvasTransform(); });
document.getElementById('zoomResetBtn').addEventListener('click', resetCanvasView);
// ==================== 🎨 3. 颜色主题与工具函数 ====================
const BRAND_THEMES = [
    { id: 'red', hue: 350, grad1: '#FFD9E2', grad2: '#FFF2F5', lightGrad: '#FFF0F3', solid: '#FFEAEF', btn1: '#FF5E7E', btn2: '#FF1A4B', textHighlight: '#FF1A4B', darkGrad1: '#FF3366', darkGrad2: '#D90036' },
    { id: 'yellow', hue: 45, grad1: '#FFF3B3', grad2: '#FFFCF0', lightGrad: '#FFFDF0', solid: '#FFF8DB', btn1: '#FFAA00', btn2: '#FF6600', textHighlight: '#FF6600', darkGrad1: '#FFAA00', darkGrad2: '#E65C00' },
    { id: 'green', hue: 130, grad1: '#D6F0D6', grad2: '#F0FFF0', lightGrad: '#F0FFF4', solid: '#EBF8E5', btn1: '#00D26A', btn2: '#00A344', textHighlight: '#00A344', darkGrad1: '#00D26A', darkGrad2: '#008A39' },
    { id: 'blue', hue: 210, grad1: '#D6EBFF', grad2: '#F0F8FF', lightGrad: '#F0F8FF', solid: '#E5F3FF', btn1: '#06A7FF', btn2: '#0066FF', textHighlight: '#0066FF', darkGrad1: '#06A7FF', darkGrad2: '#0052CC' },
    { id: 'purple', hue: 275, grad1: '#E6D4FF', grad2: '#F6F0FF', lightGrad: '#F8F0FF', solid: '#EFE5FF', btn1: '#B358FF', btn2: '#7B1BFF', textHighlight: '#7B1BFF', darkGrad1: '#B358FF', darkGrad2: '#6200E6' }
];
function triggerThemeSwitch(themeId, targetBU = getActiveBusinessLineKey()) {
    let matchedTheme = BRAND_THEMES.find(t => t.id === themeId);
    if (themeId === 'orange') matchedTheme = BRAND_THEMES.find(t => t.id === 'yellow');
    if (!matchedTheme) matchedTheme = BRAND_THEMES.find(t => t.id === 'blue');
    const colorMapByBU = {
        wangpan: {
            'topSolidColor': matchedTheme.solid, 'topGradColor1': '#FFFFFF', 'topGradColor2': matchedTheme.grad1,
            'feedSolidColor': matchedTheme.solid, 'feedGradColor1': matchedTheme.grad1, 'feedGradColor2': matchedTheme.grad2,
            'mySpaceSolidColor': '#FFFFFF', 'mySpaceGradColor1': matchedTheme.lightGrad, 'mySpaceGradColor2': '#FFFFFF', 'mySpaceBtnGrad1': matchedTheme.btn1, 'mySpaceBtnGrad2': matchedTheme.btn2,
            'simpleScanSolidColor': '#FFFFFF', 'simpleScanGradColor1': matchedTheme.lightGrad, 'simpleScanGradColor2': '#FFFFFF', 'simpleScanBtnGrad1': matchedTheme.btn1, 'simpleScanBtnGrad2': matchedTheme.btn2, 'simpleScanHighlightColor': matchedTheme.textHighlight,
            'myActivityGrad1': matchedTheme.grad1, 'myActivityGrad2': matchedTheme.grad2,
            'myActivityTitle1Color': '#000000', 'myActivityTitle2Color': '#000000', 'myActivitySubColor': '#777777',
            'peerSharingGrad1': matchedTheme.grad1, 'peerSharingGrad2': matchedTheme.grad2,
            'peerSharingTitle1Color': '#000000', 'peerSharingTitle2Color': '#000000', 'peerSharingSubColor': '#777777',
        },
        yike: {
            'yikeEquipGrad1': matchedTheme.grad1, 'yikeEquipGrad2': matchedTheme.grad2,
            'yikeCashGrad1': matchedTheme.grad1, 'yikeCashGrad2': matchedTheme.grad2,
            'yikeHomeTitleColor': '#000000', 'yikeHomeSubColor': '#000000', 'yikeHomeSubHighlightColor': matchedTheme.textHighlight,
        }
    };
    const colorMap = colorMapByBU[targetBU] || colorMapByBU.wangpan;
    Object.keys(colorMap).forEach(id => {
        const inputEl = document.getElementById(id);
        if (inputEl) {
            inputEl.value = colorMap[id];
            if (inputEl._pickrInstance) inputEl._pickrInstance.setColor(colorMap[id]);
            inputEl.dispatchEvent(new Event('input'));
        }
    });
    if (targetBU === 'wangpan') {
        let targetRadioId = themeId === 'yellow' ? 'orange' : themeId;
        const targetRadioHome = document.querySelector(`input[name="homeColor"][value="${targetRadioId}"]`);
        if (targetRadioHome) { targetRadioHome.checked = true; homeColor = targetRadioId; }
        const targetRadioMyPage = document.querySelector(`input[name="myPageColor"][value="${targetRadioId}"]`);
        if (targetRadioMyPage) { targetRadioMyPage.checked = true; myPageColor = targetRadioId; }
    }
}
function bindCanvasClickToControl() {
    const mappings = {
        'homeView': 'homeControls', 'myPageView': 'myPageControls', 'feedView': 'feedControls',
        'searchIconView': 'searchIconControls', 'mySpaceView': 'mySpaceControls',
        'myActivityView': 'myActivityControls', 'peerSharingView': 'peerSharingControls',
        'yikeHomeView': 'yikeHomeControls', 'yikeEquipView': 'yikeEquipControls',
        'yikeCashView': 'yikeCashControls'
    };
    Object.keys(mappings).forEach(viewId => {
        const viewEl = document.getElementById(viewId);
        if (viewEl) {
            viewEl.addEventListener('mousedown', (e) => {
                if (isSpacePressed) return;
                const ctrlEl = document.getElementById(mappings[viewId]);
                const rightSidebar = document.querySelector('.right-sidebar');
                if (ctrlEl && ctrlEl.classList.contains('active') && rightSidebar) {
                    rightSidebar.scrollTo({ top: ctrlEl.offsetTop - 20, behavior: 'smooth' });
                    ctrlEl.style.transition = 'all 0.3s ease';
                    ctrlEl.style.boxShadow = '0 0 0 2px #258AFF, 0 8px 24px rgba(37,138,255,0.2)';
                    ctrlEl.style.transform = 'scale(1.01)';
                    setTimeout(() => { ctrlEl.style.boxShadow = 'none'; ctrlEl.style.transform = 'scale(1)'; }, 800);
                }
            });
        }
    });
}
// ==================== 🚀 4. 肖恩AI 智能大模型与多模态图片解析引擎 ====================
const API_KEY = "sk-J8qfNDBaclZUYadIA5Dc2b975257460495D2E9B36fD0Bc65";
let currentImageBase64 = null;
let currentRichTextContext = "";
const aiPromptInput = document.getElementById('aiPromptInput');
const aiInputContainer = document.getElementById('aiInputContainer');
const aiImagePreview = document.getElementById('aiImagePreview');
const aiPreviewImg = document.getElementById('aiPreviewImg');
async function processPdfFile(file) {
    aiPromptInput.value = `📄 [正在全力解析 PDF 中，请稍候...]`;
    try {
        if (!window.pdfjsLib) {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
            window.pdfjsLib = window['pdfjs-dist/build/pdf'];
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
        }
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        let fullText = "";
        const maxPages = Math.min(pdf.numPages, 10);
        for (let i = 1; i <= maxPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const strings = textContent.items.map(item => item.str).filter(Boolean);
            fullText += `\n--- PDF Page ${i} ---\n` + strings.join(" ") + "\n";
        }
        currentRichTextContext = fullText;
        const page1 = await pdf.getPage(1);
        const viewport = page1.getViewport({ scale: 1.0 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page1.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
        currentImageBase64 = canvas.toDataURL('image/jpeg', 0.5);
        aiPreviewImg.src = currentImageBase64;
        aiImagePreview.style.display = 'block';
        aiPromptInput.value = `📄 [已成功读取 PDF：${file.name}]\n(已自动提取前 ${maxPages} 页文字 + 首页截图)，您可以直接点击解析按钮了！`;
    } catch (e) {
        console.error("PDF 解析失败:", e);
        aiPromptInput.value = `❌ PDF 读取失败，请尝试直接复制表格文字粘贴。`;
    }
}
aiPromptInput.addEventListener('paste', function (e) {
    if (!e.clipboardData) return;
    if (e.clipboardData.files.length > 0) {
        const file = e.clipboardData.files[0];
        if (file.type.startsWith('image/')) {
            e.preventDefault();
            loadAiImage(file);
            return;
        } else if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
            e.preventDefault();
            processPdfFile(file);
            return;
        }
    }
    const htmlData = e.clipboardData.getData('text/html');
    if (htmlData) {
        currentRichTextContext = htmlData;
    } else {
        currentRichTextContext = "";
    }
});
aiInputContainer.addEventListener('dragover', e => { e.preventDefault(); aiInputContainer.style.borderColor = '#641AFF'; });
aiInputContainer.addEventListener('dragleave', e => { e.preventDefault(); aiInputContainer.style.borderColor = '#cbd5e1'; });
aiInputContainer.addEventListener('drop', e => {
    e.preventDefault();
    aiInputContainer.style.borderColor = '#cbd5e1';
    if (e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
            loadAiImage(file);
        } else if (file.type === 'application/pdf' || file.name.match(/\.pdf$/i)) {
            processPdfFile(file);
        } else if (file.name.match(/\.(html|md|txt|csv)$/i)) {
            const reader = new FileReader();
            reader.onload = function (event) {
                currentRichTextContext = event.target.result;
                aiPromptInput.value = `📄 [已成功读取需求文件：${file.name}]\n你可以直接点击解析，AI将读取底层文件内容。`;
            };
            reader.readAsText(file);
        }
    }
});
document.getElementById('aiRemoveImageBtn')?.addEventListener('click', () => {
    currentImageBase64 = null; currentRichTextContext = ""; aiPromptInput.value = "";
    aiImagePreview.style.display = 'none'; aiPreviewImg.src = '';
});
function loadAiImage(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = () => {
            const MAX_SIZE = 1200;
            let width = img.width, height = img.height;
            if (width > height && width > MAX_SIZE) {
                height *= MAX_SIZE / width; width = MAX_SIZE;
            } else if (height > MAX_SIZE) {
                width *= MAX_SIZE / height; height = MAX_SIZE;
            }
            const canvas = document.createElement('canvas');
            canvas.width = width; canvas.height = height;
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);
            currentImageBase64 = canvas.toDataURL('image/jpeg', 0.5);
            aiPreviewImg.src = currentImageBase64;
            aiImagePreview.style.display = 'block';
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}
function renderABTestSwitcher(ctrlId, moduleKey) {
    const copies = window.abTestCopies[moduleKey];
    if (!copies || copies.length <= 1) return;
    const ctrl = document.getElementById(ctrlId);
    if (!ctrl) return;
    let switcherBox = ctrl.querySelector('.ab-switcher-box');
    if (!switcherBox) {
        switcherBox = document.createElement('div');
        switcherBox.className = 'ab-switcher-box';
        switcherBox.style.cssText = 'margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap; align-items: center; background: #f0f4f8; padding: 10px 12px; border-radius: 8px; border: 1px dashed #cbd5e1;';
        const label = document.createElement('span');
        label.style.cssText = 'font-size: 13px; color: #64748b; font-weight: bold; margin-right: 4px;';
        label.innerHTML = '✨ 识别到多套文案，请点击切换预览:';
        switcherBox.appendChild(label);
        ctrl.insertBefore(switcherBox, ctrl.firstChild);
    } else {
        Array.from(switcherBox.querySelectorAll('.ab-btn')).forEach(el => el.remove());
    }
    if (window.abTestActiveIndex[moduleKey] === undefined) {
        window.abTestActiveIndex[moduleKey] = 0;
    }
    copies.forEach((copy, index) => {
        const btn = document.createElement('button');
        btn.className = 'ab-btn';
        btn.innerText = `方案 ${index + 1}`;
        btn.style.cssText = `padding: 4px 14px; font-size: 13px; font-weight: 500; border-radius: 6px; cursor: pointer; border: 1px solid #258AFF; transition: all 0.2s ease; outline: none;`;
        if (index === window.abTestActiveIndex[moduleKey]) {
            btn.style.background = '#258AFF';
            btn.style.color = '#fff';
            btn.style.boxShadow = '0 2px 6px rgba(37,138,255,0.3)';
        } else {
            btn.style.background = '#fff';
            btn.style.color = '#258AFF';
            btn.style.boxShadow = 'none';
        }
        btn.onclick = () => {
            window.abTestActiveIndex[moduleKey] = index;
            switcherBox.querySelectorAll('.ab-btn').forEach((b, i) => {
                b.style.background = i === index ? '#258AFF' : '#fff';
                b.style.color = i === index ? '#fff' : '#258AFF';
                b.style.boxShadow = i === index ? '0 2px 6px rgba(37,138,255,0.3)' : 'none';
            });
            const map = MODULE_INPUT_MAP[moduleKey];
            if (map) {
                map.forEach(ref => {
                    let val = copy[ref.key];
                    const el = document.getElementById(ref.id);
                    if (el) {
                        if (val !== undefined) {
                            el.value = formatAndLimitText(ref.id === 'textCapsule' ? (val || '去查看') : val, ref.limit || 99);
                        } else {
                            el.value = '';
                        }
                        el.dispatchEvent(new Event('input'));
                    }
                });
                if (MODULE_RENDER_FNS[moduleKey]) MODULE_RENDER_FNS[moduleKey]();
            }
        };
        switcherBox.appendChild(btn);
    });
}
document.getElementById('aiGenerateBtn').addEventListener('click', async () => {
    const rawText = aiPromptInput.value.trim();
    const modelSelectVal = document.getElementById('apiModelSelect')?.value;
    if (!rawText && !currentImageBase64 && !currentRichTextContext) { alert('请粘贴需求文案、PDF文件或需求截图！'); return; }
    if (API_KEY.includes('sk-xxxxx')) { alert('请先在 script.js 文件顶部填写你的 API Key！'); return; }
    if (!modelSelectVal) { alert('未能获取模型地址'); return; }
    const [apiURL, selectedModel] = modelSelectVal.split('|');
    const btn = document.getElementById('aiGenerateBtn');
    const originalText = btn.innerText;
    btn.innerText = '⚡ AI 视觉与多方案矩阵解析中...';
    btn.style.opacity = '0.8';
    btn.disabled = true;
    document.querySelectorAll('.ab-switcher-box').forEach(el => el.remove());
    window.abTestCopies = {};
    window.abTestActiveIndex = {};
    let userContent = [];
    let textPayload = `【任务指令】: 请仔细查看我提供的图片截图或底层文本。这是一个UI设计需求文档。请提取其中的文案，并匹配到对应的画板模块。\n`;
    const fixHeteronyms = (str) => str ? str.replace(/https?:\/\/[^\s]+/g, '[链接已过滤]').replace(/⼼/g, '心').replace(/⻚/g, '页').replace(/⽹/g, '网').replace(/⻛/g, '风').replace(/⾸/g, '首').replace(/⻔/g, '门') : '';
    const isAiStatusText = (str) => str && (str.includes('[正在') || str.includes('[已成功读取') || str.includes('PDF 读取失败'));
    let cleanRawText = fixHeteronyms(rawText);
    let cleanRichText = fixHeteronyms(currentRichTextContext);
    const demandTextForMatch = `${isAiStatusText(cleanRawText) ? '' : cleanRawText}\n${cleanRichText}`;
    const inferredResources = inferResourcesFromDemandText(demandTextForMatch);
    if (inferredResources.length > 0) {
        const labels = inferredResources.map(resource => AI_RESOURCE_MATCHERS.find(item => item.resource === resource)?.label || resource);
        textPayload += `【系统本地预匹配到的资源位编号】:\n${labels.join('\n')}\n请优先按这些资源位输出对应 JSON 字段，不要因为截图里还有其他示例区域而串到别的模块。\n\n`;
    }
    if (cleanRawText && !isAiStatusText(cleanRawText)) {
        textPayload += `【用户手动输入的附加说明】:\n${cleanRawText}\n\n`;
    }
    if (cleanRichText) {
        textPayload += `【系统自动提取的底层表格/PDF原本文本】:\n${cleanRichText}\n\n`;
    }
    userContent.push({ type: "text", text: textPayload });
    if (currentImageBase64) {
        userContent.push({ type: "image_url", image_url: { url: currentImageBase64 } });
    }
    console.log("🚀 即将发给 AI 的文本体 (给AI减负后的纯净版):", textPayload);
    const systemPrompt = `你是一个资深的UI设计助手。请从用户的表格或截图中，精准提取文案并分配到对应的 JSON 字段中。
【映射关系】(资源编号优先级最高，注意识别可能带有"-banner"或PDF提取错别字的情况):
- "A1.1.3" / "13.14首页顶部沉浸banner" / "首页沉浸" -> "home"
- "A1.1.4" / "首页运营10出1" / "⾸⻚运营10出1banner" / "首页feed" -> "feed"
- "A1.1.5" / "我的页" / "我的⻚" / "我的页面banner" / "我的⻚轮播banner" -> "mypage"
- "A1.1.13" / "搜索框icon" / "搜索icon" -> "searchIcon"
- "A1.1.16" + "任务中心" / "任务中⼼" / "任务中心-banner" / "分享页" / "我的空间" -> "mySpace"
- "A1.1.16" + "简单扫描" -> "simpleScan"
- "A1.1.17" / "活动中心" -> "activity"
- "A1.1.18" / "共享点对点" / "点对点" -> "peerSharing"
- "B1.1.4" / "一刻相册NA端B1.1.4" / "一刻首页banner" -> "yikeHome"
- "B1.1.5" / "设备banner" / "设备" -> "yikeEquip"
- "B1.1.7" / "收银台banner" / "收银台" -> "yikeCash"
【提取与拆分铁律】(绝对服从):
1. 如果文档没有给出明确的按钮字（如“去查看”），btn 字段默认填 "去查看"。
2. 【针对“活动中心 (activity)”和“共享点对点 (peerSharing)”的独家排版拆分算法】(⚠️绝不可错)：
   由于该卡片UI结构为：[最上方的副标题sub] + [中间特大主标题第一行title1] + [中间特大主标题第二行title2] + [底部按钮btn]。
   当文档只提供两行字（例如第一行是“创建宝宝相簿”，第二行是“珍藏童年，全家共享”）时，请严格按以下逻辑拆分：
   -> 寻找带有标点（逗号或空格）的那一行（如“珍藏童年，全家共享”），从标点处切断！前一半填入 "title1"，后一半填入 "title2"。绝不能把整句塞进一个字段！
   -> 将剩下的那行短字（如“创建宝宝相簿”）直接填入 "sub"。
   -> 绝对禁止重复填词！提取过的字不要再填到其他字段。
3. 【多套方案支持】：如果你在某模块看到了多组不同的备选文案，请将它们作为数组的多个元素返回。如果没有明确写多套，切忌无中生有！
请只输出严格的JSON，不要解释。
JSON结构示例(所有模块必须是数组，没有的置为空数组 [] )：
{
    "theme": "blue", 
    "home": [ { "line1": "第一行主标题", "line2": "第二行按钮" } ],
    "mypage": [ { "capsule": "胶囊词", "title": "主标题", "highlight": "需要高亮的词", "sub": "副标题" } ],
    "feed": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "mySpace": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "simpleScan": [ { "title": "主标题", "highlight": "高亮词", "sub": "副标题", "btn": "按钮文字" } ],
    "activity": [ { "title1": "中间大字第一行", "title2": "中间大字第二行", "sub": "最上面的副标题", "btn": "最下面的按钮字" } ],
    "peerSharing": [ { "title1": "中间大字第一行", "title2": "中间大字第二行", "sub": "最上面的副标题", "btn": "最下面的按钮字" } ],
    "searchIcon": [ { "matched": true } ],
    "yikeHome": [ { "title": "主标题", "sub": "副标题", "highlight": "高亮词", "titleColor": "#000000", "subColor": "#000000", "highlightColor": "#E63F00" } ],
    "yikeEquip": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "yikeCash": [ { "title": "主标题", "highlight": "高亮词", "titleColor": "#000000", "highlightColor": "#EE3A31", "grad1": "#FFFAEF", "grad2": "#FEEFBA" } ]
}`;
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
            body: JSON.stringify({
                model: selectedModel,
                messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userContent }],
                temperature: 0.1
            })
        });
        if (!response.ok) throw new Error(`[${response.status}] 服务器报错: ${await response.text()}`);
        const data = await response.json();
        let aiResult = data.choices[0].message.content.trim();
        let jsonString = aiResult;
        const jsonMatch = aiResult.match(/\{[\s\S]*\}/);
        if (jsonMatch) jsonString = jsonMatch[0];
        const config = JSON.parse(jsonString);
        let recognizedModules = new Set();
        let foundMySpace = false;
        let foundSimpleScan = false;
        inferredResources.forEach(resource => recognizedModules.add(resource));
        const inferredDemandText = normalizeDemandTextForMatch(demandTextForMatch);
        if (inferredResources.includes('dev_1_1_16')) {
            foundSimpleScan = /简单扫描/.test(inferredDemandText);
            foundMySpace = /任务中心|任务中|我的空间|分享页/.test(inferredDemandText);
        }
        if (config.theme) triggerThemeSwitch(config.theme, getActiveBusinessLineKey());
        if (config.searchIcon && config.searchIcon.length > 0) {
            recognizedModules.add('dev_1_1_13');
        }
        if (config.home && config.home.length > 0) {
            recognizedModules.add('na_home');
            window.abTestCopies['home'] = config.home; window.abTestActiveIndex['home'] = 0;
            const first = config.home[0];
            if (first.line1) document.getElementById('textLine1').value = formatAndLimitText(first.line1, 6);
            if (first.line2) document.getElementById('textLine2').value = formatAndLimitText(first.line2, 4);
            currentTopBgMode = 'gradient'; document.querySelector('input[name="topBgMode"][value="gradient"]').checked = true;
            document.getElementById('topBgModeImage').classList.add('hidden'); document.getElementById('topBgModeSolid').classList.add('hidden'); document.getElementById('topBgModeGradient').classList.remove('hidden');
            renderABTestSwitcher('homeControls', 'home');
        }
        if (config.mypage && config.mypage.length > 0) {
            recognizedModules.add('na_mypage');
            window.abTestCopies['myPage'] = config.mypage; window.abTestActiveIndex['myPage'] = 0;
            const first = config.mypage[0];
            if (first.capsule && first.capsule !== "null") document.getElementById('textCapsule').value = formatAndLimitText(first.capsule, 4);
            if (first.title) document.getElementById('myPageTitle').value = formatAndLimitText(first.title, 9);
            if (first.highlight) document.getElementById('myPageHighlight').value = formatAndLimitText(first.highlight, 9);
            if (first.sub) document.getElementById('myPageSubtitle').value = formatAndLimitText(first.sub, 8);
            renderABTestSwitcher('myPageControls', 'myPage');
        }
        if (config.feed && config.feed.length > 0) {
            recognizedModules.add('na_feed');
            window.abTestCopies['feed'] = config.feed; window.abTestActiveIndex['feed'] = 0;
            const first = config.feed[0];
            if (first.title) document.getElementById('feedTitle').value = formatAndLimitText(first.title, 7);
            if (first.sub) document.getElementById('feedSubtitle').value = formatAndLimitText(first.sub, 10);
            if (first.btn) document.getElementById('feedBtnText').value = formatAndLimitText(first.btn, 4);
            currentFeedBgMode = 'gradient'; document.querySelector('input[name="feedBgMode"][value="gradient"]').checked = true;
            document.getElementById('feedBgModeImage').classList.add('hidden'); document.getElementById('feedBgModeSolid').classList.add('hidden'); document.getElementById('feedBgModeGradient').classList.remove('hidden');
            renderABTestSwitcher('feedControls', 'feed');
        }
        if (config.mySpace && config.mySpace.length > 0) {
            recognizedModules.add('dev_1_1_16'); foundMySpace = true;
            window.abTestCopies['mySpace'] = config.mySpace; window.abTestActiveIndex['mySpace'] = 0;
            const first = config.mySpace[0];
            if (first.title) document.getElementById('mySpaceTitle').value = formatAndLimitText(first.title, 11);
            if (first.sub) document.getElementById('mySpaceSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('mySpaceBtnText').value = formatAndLimitText(first.btn, 4);
            renderABTestSwitcher('mySpaceControls', 'mySpace');
        }
        if (config.simpleScan && config.simpleScan.length > 0) {
            recognizedModules.add('dev_1_1_16'); foundSimpleScan = true;
            window.abTestCopies['simpleScan'] = config.simpleScan; window.abTestActiveIndex['simpleScan'] = 0;
            const first = config.simpleScan[0];
            if (first.title) document.getElementById('simpleScanTitle').value = formatAndLimitText(first.title, 11);
            if (first.highlight) document.getElementById('simpleScanHighlight').value = formatAndLimitText(first.highlight, 6);
            if (first.sub) document.getElementById('simpleScanSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('simpleScanBtnText').value = formatAndLimitText(first.btn, 4);
            renderABTestSwitcher('mySpaceControls', 'simpleScan');
        }
        if (config.activity && config.activity.length > 0) {
            recognizedModules.add('dev_1_1_17');
            window.abTestCopies['activity'] = config.activity; window.abTestActiveIndex['activity'] = 0;
            const first = config.activity[0];
            if (first.title1) document.getElementById('myActivityTitle1').value = formatAndLimitText(first.title1, 7);
            if (first.title2) document.getElementById('myActivityTitle2').value = formatAndLimitText(first.title2, 7);
            if (first.sub) document.getElementById('myActivitySub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('myActivityBtnText').value = formatAndLimitText(first.btn, 4);
            renderABTestSwitcher('myActivityControls', 'activity');
        }
        if (config.peerSharing && config.peerSharing.length > 0) {
            recognizedModules.add('dev_1_1_18');
            window.abTestCopies['peerSharing'] = config.peerSharing; window.abTestActiveIndex['peerSharing'] = 0;
            const first = config.peerSharing[0];
            if (first.title1) document.getElementById('peerSharingTitle1').value = formatAndLimitText(first.title1, 7);
            if (first.title2) document.getElementById('peerSharingTitle2').value = formatAndLimitText(first.title2, 7);
            if (first.sub) document.getElementById('peerSharingSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('peerSharingBtnText').value = formatAndLimitText(first.btn, 4);
            renderABTestSwitcher('peerSharingControls', 'peerSharing');
        }
        if (config.yikeHome && config.yikeHome.length > 0) {
            recognizedModules.add('yike_4');
            window.abTestCopies['yikeHome'] = config.yikeHome; window.abTestActiveIndex['yikeHome'] = 0;
            const first = config.yikeHome[0];
            if (first.title) document.getElementById('yikeHomeTitle').value = formatAndLimitText(first.title, 8);
            if (first.sub) document.getElementById('yikeHomeSub').value = formatAndLimitText(first.sub, 11);
            if (first.highlight) document.getElementById('yikeHomeSubHighlight').value = formatAndLimitText(first.highlight, 11);
            if (first.titleColor) document.getElementById('yikeHomeTitleColor').value = first.titleColor;
            if (first.subColor) document.getElementById('yikeHomeSubColor').value = first.subColor;
            if (first.highlightColor) document.getElementById('yikeHomeSubHighlightColor').value = first.highlightColor;
            renderABTestSwitcher('yikeHomeControls', 'yikeHome');
        }
        if (config.yikeEquip && config.yikeEquip.length > 0) {
            recognizedModules.add('yike_5');
            window.abTestCopies['yikeEquip'] = config.yikeEquip; window.abTestActiveIndex['yikeEquip'] = 0;
            const first = config.yikeEquip[0];
            if (first.title) document.getElementById('yikeEquipTitle').value = formatAndLimitText(first.title, 9);
            if (first.sub) document.getElementById('yikeEquipSub').value = formatAndLimitText(first.sub, 12);
            if (first.btn) document.getElementById('yikeEquipBtnText').value = formatAndLimitText(first.btn, 4);
            renderABTestSwitcher('yikeEquipControls', 'yikeEquip');
            // 注意：这里已经删除了自动跳转业务线的代码
        }
        if (config.yikeCash && config.yikeCash.length > 0) {
            recognizedModules.add('yike_7');
            window.abTestCopies['yikeCash'] = config.yikeCash; window.abTestActiveIndex['yikeCash'] = 0;
            const first = config.yikeCash[0];
            if (first.title) document.getElementById('yikeCashTitle').value = formatAndLimitText(first.title, 12);
            if (first.highlight) document.getElementById('yikeCashHighlight').value = formatAndLimitText(first.highlight, 12);
            if (first.titleColor) document.getElementById('yikeCashTitleColor').value = first.titleColor;
            if (first.highlightColor) document.getElementById('yikeCashHighlightColor').value = first.highlightColor;
            if (first.grad1) document.getElementById('yikeCashGrad1').value = first.grad1;
            if (first.grad2) document.getElementById('yikeCashGrad2').value = first.grad2;
            renderABTestSwitcher('yikeCashControls', 'yikeCash');
        }
        if (recognizedModules.size > 0) {
            const allModules = Array.from(recognizedModules);
            const targetBU = getDominantBusinessFromResources(allModules);
            if (targetBU && targetBU !== currentBU) {
                setActiveBusinessLine(targetBU);
            }
            const sameBusinessModules = allModules.filter(mod => getBusinessForResource(mod) === currentBU);
            const modules = sameBusinessModules.length > 0 ? sameBusinessModules : allModules;
            await renderResourceCanvases(modules, { foundMySpace, foundSimpleScan });
            [homeView, myPageView, feedView, searchIconView, mySpaceView, myActivityView, peerSharingView, yikeEquipView, yikeCashView, yikeHomeView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
            developingPrompt.classList.add('hidden');
            document.querySelectorAll('.resource-item').forEach(el => el.classList.remove('active'));
            const firstEl = document.querySelector(`.resource-item[data-value="${modules[0]}"]`);
            if (firstEl) firstEl.classList.add('active');
            await switchResourceView(modules[0]);
            [homeView, myPageView, feedView, searchIconView, mySpaceView, myActivityView, peerSharingView, yikeEquipView, yikeCashView, yikeHomeView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
            developingPrompt.classList.add('hidden');
            const container = document.getElementById('canvasContainer');
            if (modules.length > 1) {
                container.style.flexDirection = 'row'; container.style.alignItems = 'flex-start'; container.style.justifyContent = 'center'; container.style.gap = '100px';
                document.querySelectorAll('.view-section').forEach(el => { el.style.width = 'auto'; el.style.flexShrink = '0'; });
            } else {
                container.style.flexDirection = 'column'; container.style.alignItems = 'center'; container.style.gap = '0px';
                document.querySelectorAll('.view-section').forEach(el => { el.style.width = '100%'; el.style.flexShrink = '1'; });
            }
            modules.forEach(mod => {
                let viewId, ctrlId;
                if (mod === 'na_home') { viewId = 'homeView'; ctrlId = 'homeControls'; }
                else if (mod === 'na_mypage') { viewId = 'myPageView'; ctrlId = 'myPageControls'; }
                else if (mod === 'na_feed') { viewId = 'feedView'; ctrlId = 'feedControls'; }
                else if (mod === 'dev_1_1_13') { viewId = 'searchIconView'; ctrlId = 'searchIconControls'; }
                else if (mod === 'dev_1_1_17') { viewId = 'myActivityView'; ctrlId = 'myActivityControls'; }
                else if (mod === 'dev_1_1_18') { viewId = 'peerSharingView'; ctrlId = 'peerSharingControls'; }
                else if (mod === 'yike_4') { viewId = 'yikeHomeView'; ctrlId = 'yikeHomeControls'; }
                else if (mod === 'yike_5') { viewId = 'yikeEquipView'; ctrlId = 'yikeEquipControls'; }
                else if (mod === 'yike_7') { viewId = 'yikeCashView'; ctrlId = 'yikeCashControls'; }
                else if (mod === 'dev_1_1_16') {
                    viewId = 'mySpaceView'; ctrlId = 'mySpaceControls';
                    const spaceCard = document.getElementById('mySpacePageCanvas')?.closest('.preview-card');
                    const scanCard = document.getElementById('simpleScanPageCanvas')?.closest('.preview-card');
                    const showBothA116 = !foundMySpace && !foundSimpleScan;
                    if (spaceCard) spaceCard.style.display = (showBothA116 || foundMySpace) ? '' : 'none';
                    if (scanCard) scanCard.style.display = (showBothA116 || foundSimpleScan) ? '' : 'none';
                }
                if (viewId) document.getElementById(viewId).classList.add('active');
                if (ctrlId) document.getElementById(ctrlId).classList.add('active');
            });
            cvsScale = modules.length > 1 ? 0.6 : 1; cvsTranslateX = 0; cvsTranslateY = modules.length > 1 ? 100 : 0;
            updateCanvasTransform();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        btn.innerText = '🎉 解析成功，已生成多方案画板！';
        btn.style.background = '#10B981';
    } catch (error) {
        console.error("AI解析失败详情:", error);
        alert("AI解析出错啦！\n" + error.message);
        btn.innerText = '解析失败，点击重试';
        btn.style.background = '#FF014D';
    } finally {
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'linear-gradient(90deg, #258AFF, #641AFF)';
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 3000);
    }
});
// ==================== 渲染与绘图核心代码 ====================
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
    canvas._bannerBBox = { x: 0, y: 0, w: drawW, h: drawH };
}
async function drawMode(isDark, canvas, ctx, kvImg) {
    const bgUrl = isDark ? config.baseUIDark : config.baseUI, bannerUrl = isDark ? (config.colorsDark[homeColor] || null) : (config.colors[homeColor] || null), textColor1 = isDark ? config.nightTextColor1 : '#030B1A', arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const baseUIImg = await loadImage(bgUrl), bannerBgImg = bannerUrl ? await loadImage(bannerUrl) : null, arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    canvas.width = baseUIImg.width || 1260; canvas.height = baseUIImg.height || 2652; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (baseUIImg.width) ctx.drawImage(baseUIImg, 0, 0, canvas.width, canvas.height); if (bannerBgImg && bannerBgImg.width) ctx.drawImage(bannerBgImg, Math.floor(config.bannerX), Math.floor(config.bannerY), bannerBgImg.width, bannerBgImg.height);
    if (kvImg && kvImg.width) { ctx.save(); ctx.beginPath(); ctx.rect(Math.floor(config.heroX), Math.floor(config.heroY), Math.floor(config.heroWidth), Math.floor(config.heroHeight)); ctx.clip(); const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height), kvDrawW = kvImg.width * kvScale, kvDrawH = kvImg.height * kvScale, drawX = config.heroX + (config.heroWidth - kvDrawW) / 2, drawY = config.heroY + (config.heroHeight - kvDrawH) / 2; drawSharpenedImage(ctx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3); ctx.restore(); }
    const line1Txt = textLine1Input?.value || ''; const line2Txt = textLine2Input?.value || '';
    ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'bold 36px "PingFangSC-Medium", "Microsoft YaHei", sans-serif'; ctx.fillStyle = textColor1; ctx.fillText(line1Txt, Math.floor(306), Math.floor(166)); ctx.fillStyle = arrowColor; ctx.fillText(line2Txt, Math.floor(306), Math.floor(217));
    if (arrowImg && arrowImg.width) { const arrowX = Math.floor(306 + ctx.measureText(line2Txt).width + config.arrowPadding), arrowY = Math.floor(217 + 18 - arrowImg.height / 2 + 2); ctx.drawImage(arrowImg, arrowX, arrowY); }
    canvas._bannerBBox = { x: config.bannerX, y: config.bannerY, w: 556, h: 282 };
}
async function createFullBannerCanvas(isDark) {
    const bannerUrl = isDark ? (config.colorsDark[homeColor] || null) : (config.colors[homeColor] || null), textColor1 = isDark ? config.nightTextColor1 : '#030B1A', arrowColor = isDark ? config.nightTextColor2 : config.colorHex[homeColor];
    const bannerBgImg = bannerUrl ? await loadImage(bannerUrl) : null, heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg, arrowImg = await loadColoredArrow(config.arrowSvg, arrowColor);
    const bannerW = (bannerBgImg && bannerBgImg.width) ? bannerBgImg.width : 420, bannerH = (bannerBgImg && bannerBgImg.height) ? bannerBgImg.height : 282, left = Math.min(config.heroX, config.bannerX), top = Math.min(config.heroY, config.bannerY), right = Math.max(config.bannerX + bannerW, 306 + 250), bottom = Math.max(config.bannerY + bannerH, 217 + 36);
    const fullCanvas = document.createElement('canvas'), fullCtx = fullCanvas.getContext('2d'); fullCanvas.width = right - left; fullCanvas.height = bottom - top; setupHighQualityContext(fullCtx);
    const offsetX = Math.floor(-left), offsetY = Math.floor(-top); if (bannerBgImg && bannerBgImg.width) fullCtx.drawImage(bannerBgImg, Math.floor(config.bannerX + offsetX), Math.floor(config.bannerY + offsetY));
    if (kvImg && kvImg.width) { fullCtx.save(); fullCtx.beginPath(); fullCtx.rect(Math.floor(config.heroX + offsetX), Math.floor(config.heroY + offsetY), Math.floor(config.heroWidth), Math.floor(config.heroHeight)); fullCtx.clip(); const kvScale = Math.min(config.heroWidth / kvImg.width, config.heroHeight / kvImg.height), kvDrawW = kvImg.width * kvScale, kvDrawH = kvImg.height * kvScale, drawX = config.heroX + offsetX + (config.heroWidth - kvDrawW) / 2, drawY = config.heroY + offsetY + (config.heroHeight - kvDrawH) / 2; drawSharpenedImage(fullCtx, kvImg, drawX, drawY, kvDrawW, kvDrawH, 0.3); fullCtx.restore(); }
    const line1Txt = textLine1Input?.value || ''; const line2Txt = textLine2Input?.value || '';
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
async function renderMyPage() { await renderMyPageBanner(); await renderMyPageFullCanvas(); }
async function renderMyPageBanner() {
    const heroImg = await loadImage(config.heroImage), kvImg = userImgObj || heroImg;
    const drawMyPageMode = async (canvas, ctx, isDark) => {
        if (!ctx || !canvas) return; const targetColor = isDark ? '#141414' : (myPageColors[myPageColor] || '#F0FBFF'), elementColor = myPageElementColors[myPageColor] || '#0090FF', currentCapsuleColor = isDark ? '#0090FF' : elementColor, banner2Img = await loadColoredSvgFill(config.banner2Svg, targetColor);
        if (banner2Img && banner2Img.width) {
            canvas.width = banner2Img.width; canvas.height = banner2Img.height; setupHighQualityContext(ctx); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(banner2Img, 0, 0);
            if (kvImg && kvImg.width) { ctx.save(); const imgBoxX = 37, imgBoxY = 23, imgBoxW = 314, imgBoxH = 178; ctx.beginPath(); ctx.rect(imgBoxX, imgBoxY, imgBoxW, imgBoxH); ctx.clip(); const imgScale = Math.min(imgBoxW / kvImg.width, imgBoxH / kvImg.height), drawImgW = kvImg.width * imgScale, drawImgH = kvImg.height * imgScale, drawImgX = imgBoxX + (imgBoxW - drawImgW) / 2, drawImgY = imgBoxY + (imgBoxH - drawImgH) / 2; drawSharpenedImage(ctx, kvImg, drawImgX, drawImgY, drawImgW, drawImgH, 0.3); ctx.restore(); }
            const capsuleTxt = textCapsuleInput?.value || ''; const titleTxt = myPageTitle?.value || ''; const highlightTxt = myPageHighlight?.value || ''; const subtitleTxt = myPageSubtitle?.value || '';
            ctx.save(); ctx.globalAlpha = 0.15; ctx.fillStyle = currentCapsuleColor; drawRoundRect(ctx, 857, 62, 212, 100, 50); ctx.fill(); ctx.restore();
            ctx.save(); ctx.fillStyle = currentCapsuleColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = 'normal 38px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; ctx.fillText(capsuleTxt, 963, 111); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'normal 44px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A', titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor; drawDualColorText(ctx, titleTxt, highlightTxt, 388, 57, titleBaseColor, titleHighlightColor); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = ' 38px "FZLTHK", "PingFang SC", sans-serif'; if (isDark) ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; else { ctx.fillStyle = elementColor; ctx.globalAlpha = 0.75; } ctx.fillText(subtitleTxt, Math.floor(388), Math.floor(126)); ctx.restore();
        }
    };
    await drawMyPageMode(myPageCanvas, myPageCtx, false); await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);
}
async function renderMyPageFullCanvas() {
    if (!myPageFullCanvas || !myPageFullCtx) return;
    try {
        const bgImg = await loadImage(config.myPageBg); if (!bgImg || !bgImg.width) return; myPageFullCanvas.width = bgImg.width; myPageFullCanvas.height = bgImg.height; setupHighQualityContext(myPageFullCtx); myPageFullCtx.clearRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height); myPageFullCtx.drawImage(bgImg, 0, 0); if (myPageCanvas.width > 0) { myPageFullCtx.save(); drawRoundRect(myPageFullCtx, config.myPageX + 24, config.myPageY, myPageCanvas.width - 48, myPageCanvas.height, 36); myPageFullCtx.clip(); myPageFullCtx.drawImage(myPageCanvas, Math.floor(config.myPageX), Math.floor(config.myPageY)); myPageFullCtx.restore(); }
        myPageFullCanvas._bannerBBox = { x: config.myPageX + 24, y: config.myPageY, w: myPageCanvas.width - 48, h: myPageCanvas.height };
    } catch (e) { }
}
async function createFeedBannerCanvas() {
    const canvas = document.createElement('canvas'); canvas.width = 561; canvas.height = 750; const ctx = canvas.getContext('2d'); setupHighQualityContext(ctx);
    if (currentFeedBgMode === 'image') { const bgBannerImg = feedBgBannerObj || await loadImage(config.feedBanner); if (bgBannerImg && bgBannerImg.width) ctx.drawImage(bgBannerImg, 0, 0, canvas.width, canvas.height); else { ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height); } }
    else if (currentFeedBgMode === 'gradient') { let angle = parseFloat(feedGradAngle.value), rad = (angle - 90) * Math.PI / 180, w = canvas.width, h = canvas.height, halfW = w / 2, halfH = h / 2, length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad)), x0 = halfW - Math.cos(rad) * length / 2, y0 = halfH - Math.sin(rad) * length / 2, x1 = halfW + Math.cos(rad) * length / 2, y1 = halfH + Math.sin(rad) * length / 2; const grad = ctx.createLinearGradient(x0, y0, x1, y1); grad.addColorStop(0, feedGradColor1.value); grad.addColorStop(1, feedGradColor2.value); ctx.fillStyle = grad; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    else if (currentFeedBgMode === 'solid') { ctx.fillStyle = feedSolidColor.value; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    const defaultImg = await loadImage(config.feedExampleImage); const imgToDraw = userImgObj || defaultImg;
    if (imgToDraw && imgToDraw.width) { ctx.save(); const imgW = 412, imgH = 360, imgX = 74.5, imgY = 185; ctx.beginPath(); ctx.rect(imgX, imgY, imgW, imgH); ctx.clip(); const scale = Math.min(imgW / imgToDraw.width, imgH / imgToDraw.height), drawW = imgToDraw.width * scale, drawH = imgToDraw.height * scale, drawX = imgX + (imgW - drawW) / 2, drawY = imgY + (imgH - drawH) / 2; drawSharpenedImage(ctx, imgToDraw, drawX, drawY, drawW, drawH, 0.3); ctx.restore(); }
    ctx.textAlign = 'center'; ctx.textBaseline = 'top'; const centerX = 280.5;
    const titleTxt = feedTitleInput?.value || ''; ctx.font = 'normal 42px "FZLanTingHeiS-H", sans-serif'; ctx.fillStyle = feedTitleColor?.value || '#000000'; ctx.fillText(titleTxt, centerX, 77);
    const subtitleTxt = feedSubtitleInput?.value || ''; ctx.font = 'normal 36px "FZLTHK", sans-serif'; ctx.fillStyle = feedSubtitleColor?.value || '#000000'; ctx.fillText(subtitleTxt, centerX, 124);
    ctx.fillStyle = '#000000'; drawRoundRect(ctx, 45, 557, 471, 108, 54); ctx.fill();
    const btnTxt = feedBtnTextInput?.value || ''; ctx.font = 'normal 36px "FZLanTingHeiS-DB", sans-serif'; ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(btnTxt, centerX, 611);
    return canvas;
}
async function renderFeedCanvas() {
    const fbCanvas = await createFeedBannerCanvas();
    if (feedBannerCanvas && feedBannerCtx) { feedBannerCanvas.width = fbCanvas.width; feedBannerCanvas.height = fbCanvas.height; setupHighQualityContext(feedBannerCtx); feedBannerCtx.clearRect(0, 0, feedBannerCanvas.width, feedBannerCanvas.height); feedBannerCtx.drawImage(fbCanvas, 0, 0); }
    if (!feedCanvas || !feedCtx) return;
    try {
        const bgImg = await loadImage(config.feedBg); if (!bgImg || !bgImg.width) return; feedCanvas.width = bgImg.width; feedCanvas.height = bgImg.height; setupHighQualityContext(feedCtx); feedCtx.clearRect(0, 0, feedCanvas.width, feedCanvas.height); feedCtx.drawImage(bgImg, 0, 0); if (fbCanvas && fbCanvas.width) { feedCtx.save(); drawRoundRect(feedCtx, config.feedBannerX, config.feedBannerY, fbCanvas.width, fbCanvas.height, 36); feedCtx.clip(); feedCtx.drawImage(fbCanvas, config.feedBannerX, config.feedBannerY); feedCtx.restore(); }
        feedCanvas._bannerBBox = { x: config.feedBannerX, y: config.feedBannerY, w: fbCanvas.width, h: fbCanvas.height };
    } catch (e) { console.error(e); }
}
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
        searchPageCanvas._bannerBBox = { x: 48, y: 359, w: 128, h: 128 };
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
async function build1182Banner(opts) {
    const canvas = document.createElement('canvas');
    canvas.width = 1182; canvas.height = 252;
    const ctx = canvas.getContext('2d');
    setupHighQualityContext(ctx);
    if (opts.bgMode === 'solid') {
        ctx.fillStyle = opts.solidColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, opts.grad1);
        grad.addColorStop(1, opts.grad2);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.font = 'normal 50px "FZLanTingHeiS-DB-GB", sans-serif';
    ctx.textBaseline = 'top';
    drawDualColorText(ctx, opts.title, opts.highlight, 62, 64, '#000000', opts.highlightColor);
    ctx.font = 'normal 42px "FZLanTingHeiS-R-GB", sans-serif';
    ctx.fillStyle = '#777777';
    ctx.textBaseline = 'top';
    ctx.fillText(opts.sub, 62, 149);
    const btnSvg = await loadImage(config.searchBtSvg);
    const btnX = 410, btnY = 144;
    if (btnSvg && btnSvg.width) {
        const btnCanvas = document.createElement('canvas');
        btnCanvas.width = btnSvg.width; btnCanvas.height = btnSvg.height;
        const btnCtx = btnCanvas.getContext('2d');
        btnCtx.drawImage(btnSvg, 0, 0);
        btnCtx.globalCompositeOperation = 'source-in';
        const btnGrad = btnCtx.createLinearGradient(0, 0, btnCanvas.width, 0);
        btnGrad.addColorStop(0, opts.btnGrad1);
        btnGrad.addColorStop(1, opts.btnGrad2);
        btnCtx.fillStyle = btnGrad;
        btnCtx.fillRect(0, 0, btnCanvas.width, btnCanvas.height);
        btnCtx.globalCompositeOperation = 'source-over';
        btnCtx.font = 'normal 36px "FZLanTingHeiS-DB-GB", sans-serif';
        btnCtx.fillStyle = '#FFFFFF';
        btnCtx.textBaseline = 'top';
        btnCtx.textAlign = 'left';
        btnCtx.fillText(opts.btnText, 22, 7.26);
        const arrowSvg = await loadImage(config.searchArrowSvg);
        if (arrowSvg && arrowSvg.width) {
            btnCtx.drawImage(arrowSvg, 146, 13.38);
        }
        ctx.drawImage(btnCanvas, btnX, btnY);
    }
    const defaultImg = await loadImage(opts.defaultImgSrc);
    const imgToDraw = userImgObj || defaultImg;
    if (imgToDraw && imgToDraw.width) {
        ctx.save();
        const imgX = 795, imgY = 17, imgW = 300, imgH = 220;
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
    return canvas;
}
async function renderMySpaceCanvas() {
    const opts = {
        bgMode: currentMySpaceBgMode,
        solidColor: mySpaceSolidColor?.value || '#FFFFFF',
        grad1: mySpaceGradColor1?.value || '#E5F3FF',
        grad2: mySpaceGradColor2?.value || '#FFFFFF',
        title: mySpaceTitleInput?.value || '',
        highlight: '',
        highlightColor: '#000000',
        sub: mySpaceSubInput?.value || '',
        btnText: mySpaceBtnTextInput?.value || '',
        btnGrad1: mySpaceBtnGrad1?.value || '#06A7FF',
        btnGrad2: mySpaceBtnGrad2?.value || '#0066FF',
        defaultImgSrc: config.mySpaceExampleImage
    };
    const bannerCanvas = await build1182Banner(opts);
    if (mySpaceExportCanvas && mySpaceExportCtx) {
        mySpaceExportCanvas.width = bannerCanvas.width;
        mySpaceExportCanvas.height = bannerCanvas.height;
        setupHighQualityContext(mySpaceExportCtx);
        mySpaceExportCtx.clearRect(0, 0, mySpaceExportCanvas.width, mySpaceExportCanvas.height);
        mySpaceExportCtx.drawImage(bannerCanvas, 0, 0);
    }
    if (mySpacePageCanvas && mySpacePageCtx) {
        const pageImg = await loadImage(config.mySpacePage);
        if (pageImg && pageImg.width) {
            mySpacePageCanvas.width = pageImg.width;
            mySpacePageCanvas.height = pageImg.height;
            setupHighQualityContext(mySpacePageCtx);
            mySpacePageCtx.clearRect(0, 0, mySpacePageCanvas.width, mySpacePageCanvas.height);
            mySpacePageCtx.drawImage(pageImg, 0, 0);
            const targetW = 1107;
            const scale = targetW / bannerCanvas.width;
            const targetH = bannerCanvas.height * scale;
            const drawX = 31, drawY = 847;
            const scaledRadius = 50 * scale;
            mySpacePageCtx.save();
            drawRoundRect(mySpacePageCtx, drawX, drawY, targetW, targetH, scaledRadius);
            mySpacePageCtx.clip();
            mySpacePageCtx.drawImage(bannerCanvas, 0, 0, bannerCanvas.width, bannerCanvas.height, drawX, drawY, targetW, targetH);
            mySpacePageCtx.restore();
            mySpacePageCanvas._bannerBBox = { x: drawX, y: drawY, w: targetW, h: targetH };
        }
    }
}
async function renderSimpleScanCanvas() {
    const opts = {
        bgMode: currentSimpleScanBgMode,
        solidColor: simpleScanSolidColor?.value || '#FFFFFF',
        grad1: simpleScanGradColor1?.value || '#E5F3FF',
        grad2: simpleScanGradColor2?.value || '#FFFFFF',
        title: simpleScanTitleInput?.value || '',
        highlight: simpleScanHighlightInput?.value || '',
        highlightColor: simpleScanHighlightColor?.value || '#14B5FF',
        sub: simpleScanSubInput?.value || '',
        btnText: simpleScanBtnTextInput?.value || '',
        btnGrad1: simpleScanBtnGrad1?.value || '#06A7FF',
        btnGrad2: simpleScanBtnGrad2?.value || '#0066FF',
        defaultImgSrc: config.simpleScanExampleImage
    };
    const bannerCanvas = await build1182Banner(opts);
    if (simpleScanExportCanvas && simpleScanExportCtx) {
        simpleScanExportCanvas.width = bannerCanvas.width;
        simpleScanExportCanvas.height = bannerCanvas.height;
        setupHighQualityContext(simpleScanExportCtx);
        simpleScanExportCtx.clearRect(0, 0, simpleScanExportCanvas.width, simpleScanExportCanvas.height);
        simpleScanExportCtx.drawImage(bannerCanvas, 0, 0);
    }
    if (simpleScanPageCanvas && simpleScanPageCtx) {
        const pageImg = await loadImage(config.simpleScanPage);
        if (pageImg && pageImg.width) {
            simpleScanPageCanvas.width = pageImg.width;
            simpleScanPageCanvas.height = pageImg.height;
            setupHighQualityContext(simpleScanPageCtx);
            simpleScanPageCtx.clearRect(0, 0, simpleScanPageCanvas.width, simpleScanPageCanvas.height);
            simpleScanPageCtx.drawImage(pageImg, 0, 0);
            const targetW = 1134;
            const scale = targetW / bannerCanvas.width;
            const targetH = bannerCanvas.height * scale;
            const drawX = 18.01, drawY = 1158;
            const scaledRadius = 50 * scale;
            simpleScanPageCtx.save();
            drawRoundRect(simpleScanPageCtx, drawX, drawY, targetW, targetH, scaledRadius);
            simpleScanPageCtx.clip();
            simpleScanPageCtx.drawImage(bannerCanvas, 0, 0, bannerCanvas.width, bannerCanvas.height, drawX, drawY, targetW, targetH);
            simpleScanPageCtx.restore();
            simpleScanPageCanvas._bannerBBox = { x: drawX, y: drawY, w: targetW, h: targetH };
        }
    }
}
async function renderMyActivityCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 670; canvas.height = 320;
    const ctx = canvas.getContext('2d');
    setupHighQualityContext(ctx);
    let angle = 45;
    let rad = (angle - 90) * Math.PI / 180;
    let w = canvas.width, h = canvas.height;
    let halfW = w / 2, halfH = h / 2;
    let length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad));
    let x0 = halfW - Math.cos(rad) * length / 2;
    let y0 = halfH - Math.sin(rad) * length / 2;
    let x1 = halfW + Math.cos(rad) * length / 2;
    let y1 = halfH + Math.sin(rad) * length / 2;
    const exactGrad = ctx.createLinearGradient(x0, y0, x1, y1);
    exactGrad.addColorStop(0, myActivityGrad1?.value || '#E5F3FF');
    exactGrad.addColorStop(1, myActivityGrad2?.value || '#FFFFFF');
    ctx.fillStyle = exactGrad;
    ctx.fillRect(0, 0, w, h);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = myActivitySubColor?.value || '#777777';
    ctx.font = 'normal 27px "FZLanTingHeiS-R", sans-serif';
    ctx.fillText(myActivitySub?.value || '', 47.01, 50.67);
    const titleColor = myActivityTitle1Color?.value || '#000000';
    ctx.fillStyle = titleColor;
    ctx.font = 'normal 46px "FZLanTingHeiS-DB", sans-serif';
    ctx.fillText(myActivityTitle1?.value || '', 47.01, 89.5);
    ctx.fillStyle = myActivityTitle2Color?.value || '#000000';
    ctx.fillText(myActivityTitle2?.value || '', 47.01, 148.92);
    const btnX = 47.01, btnY = 220.05, btnW = 176.3, btnH = 53.53, lw = 1.96;
    const radius = btnH / 2;
    const btnColor = titleColor;
    ctx.lineWidth = lw;
    ctx.strokeStyle = btnColor;
    drawRoundRect(
        ctx,
        btnX + lw / 2,
        btnY + lw / 2,
        btnW - lw,
        btnH - lw,
        radius - lw / 2
    );
    ctx.stroke();
    ctx.fillStyle = btnColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal 32px "FZLanTingHeiS-DB", sans-serif';
    ctx.fillText(myActivityBtnText?.value || '', btnX + btnW / 2, btnY + btnH / 2);
    const defaultImg = await loadImage(config.feedExampleImage);
    const imgToDraw = userImgObj || defaultImg;
    if (imgToDraw && imgToDraw.width) {
        ctx.save();
        const imgX = 382, imgY = 28, imgW = 270, imgH = 270;
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
    if (myActivityExportCanvas && myActivityExportCtx) {
        myActivityExportCanvas.width = canvas.width;
        myActivityExportCanvas.height = canvas.height;
        setupHighQualityContext(myActivityExportCtx);
        myActivityExportCtx.clearRect(0, 0, myActivityExportCanvas.width, myActivityExportCanvas.height);
        myActivityExportCtx.drawImage(canvas, 0, 0);
    }
    if (myActivityPageCanvas && myActivityPageCtx) {
        const pageImg = await loadImage(config.myActivityPage);
        if (pageImg && pageImg.width) {
            myActivityPageCanvas.width = pageImg.width;
            myActivityPageCanvas.height = pageImg.height;
            setupHighQualityContext(myActivityPageCtx);
            myActivityPageCtx.clearRect(0, 0, myActivityPageCanvas.width, myActivityPageCanvas.height);
            myActivityPageCtx.drawImage(pageImg, 0, 0);
            const targetW = 1045.2;
            const scale = targetW / canvas.width;
            const targetH = canvas.height * scale;
            const drawX = 62.4, drawY = 1542.84;
            const bannerRadius = 21.84;
            myActivityPageCtx.save();
            drawRoundRect(myActivityPageCtx, drawX, drawY, targetW, targetH, bannerRadius);
            myActivityPageCtx.clip();
            myActivityPageCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, drawX, drawY, targetW, targetH);
            myActivityPageCtx.restore();
            myActivityPageCanvas._bannerBBox = { x: drawX, y: drawY, w: targetW, h: targetH };
        }
    }
}
async function renderPeerSharingCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 670; canvas.height = 320;
    const ctx = canvas.getContext('2d');
    setupHighQualityContext(ctx);
    let angle = 45;
    let rad = (angle - 90) * Math.PI / 180;
    let w = canvas.width, h = canvas.height;
    let halfW = w / 2, halfH = h / 2;
    let length = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad));
    let x0 = halfW - Math.cos(rad) * length / 2;
    let y0 = halfH - Math.sin(rad) * length / 2;
    let x1 = halfW + Math.cos(rad) * length / 2;
    let y1 = halfH + Math.sin(rad) * length / 2;
    const exactGrad = ctx.createLinearGradient(x0, y0, x1, y1);
    exactGrad.addColorStop(0, peerSharingGrad1?.value || '#06A7FF');
    exactGrad.addColorStop(1, peerSharingGrad2?.value || '#0052CC');
    ctx.fillStyle = exactGrad;
    ctx.fillRect(0, 0, w, h);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = peerSharingSubColor?.value || '#FFFFFF';
    ctx.font = 'normal 27px "FZLanTingHeiS-R", sans-serif';
    ctx.fillText(peerSharingSub?.value || '', 47.01, 50.67);
    const titleColor = peerSharingTitle1Color?.value || '#FFFFFF';
    ctx.fillStyle = titleColor;
    ctx.font = 'normal 46px "FZLanTingHeiS-DB", sans-serif';
    ctx.fillText(peerSharingTitle1?.value || '', 47.01, 89.5);
    ctx.fillStyle = peerSharingTitle2Color?.value || '#FFFFFF';
    ctx.fillText(peerSharingTitle2?.value || '', 47.01, 148.92);
    const btnX = 47.01, btnY = 220.05, btnW = 176.3, btnH = 53.53, lw = 1.96;
    const radius = btnH / 2;
    const btnColor = titleColor;
    ctx.lineWidth = lw;
    ctx.strokeStyle = btnColor;
    drawRoundRect(
        ctx,
        btnX + lw / 2,
        btnY + lw / 2,
        btnW - lw,
        btnH - lw,
        radius - lw / 2
    );
    ctx.stroke();
    ctx.fillStyle = btnColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal 32px "FZLanTingHeiS-DB", sans-serif';
    ctx.fillText(peerSharingBtnText?.value || '', btnX + btnW / 2, btnY + btnH / 2);
    const defaultImg = await loadImage(config.peerSharingExampleImage);
    const imgToDraw = userImgObj || defaultImg;
    if (imgToDraw && imgToDraw.width) {
        ctx.save();
        const imgX = 382, imgY = 28, imgW = 270, imgH = 270;
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
    if (peerSharingExportCanvas && peerSharingExportCtx) {
        peerSharingExportCanvas.width = canvas.width;
        peerSharingExportCanvas.height = canvas.height;
        setupHighQualityContext(peerSharingExportCtx);
        peerSharingExportCtx.clearRect(0, 0, peerSharingExportCanvas.width, peerSharingExportCanvas.height);
        peerSharingExportCtx.drawImage(canvas, 0, 0);
    }
    if (peerSharingPageCanvas && peerSharingPageCtx) {
        const pageImg = await loadImage(config.peerSharingPage);
        if (pageImg && pageImg.width) {
            peerSharingPageCanvas.width = pageImg.width;
            peerSharingPageCanvas.height = pageImg.height;
            setupHighQualityContext(peerSharingPageCtx);
            peerSharingPageCtx.clearRect(0, 0, peerSharingPageCanvas.width, peerSharingPageCanvas.height);
            peerSharingPageCtx.drawImage(pageImg, 0, 0);
            const targetW = 1067.04;
            const scale = targetW / canvas.width;
            const targetH = canvas.height * scale;
            const drawX = 51.48, drawY = 1679.66;
            const bannerRadius = 21.84;
            peerSharingPageCtx.save();
            drawRoundRect(peerSharingPageCtx, drawX, drawY, targetW, targetH, bannerRadius);
            peerSharingPageCtx.clip();
            peerSharingPageCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, drawX, drawY, targetW, targetH);
            peerSharingPageCtx.restore();
            peerSharingPageCanvas._bannerBBox = { x: drawX, y: drawY, w: targetW, h: targetH };
        }
    }
}
// ==================== 🛠️ 一刻相册：设备Banner (SS级) ====================
async function renderYikeEquipCanvas() {
    if (!yikeEquipPageCtx || !yikeEquipExportCtx) return;
    const bannerW = 1125, bannerH = 270;
    yikeEquipExportCanvas.width = bannerW; yikeEquipExportCanvas.height = bannerH;

    // 渐变底板
    const grad = yikeEquipExportCtx.createLinearGradient(0, 0, bannerW, 0);
    grad.addColorStop(0, yikeEquipGrad1?.value || '#AFF000');
    grad.addColorStop(1, yikeEquipGrad2?.value || '#E6FAB2');
    yikeEquipExportCtx.fillStyle = grad;
    yikeEquipExportCtx.fillRect(0, 0, bannerW, bannerH);

    // 图片居中
    let visualImg = userImgObj;
    if (!visualImg && !globalImageCache[config.yikeEquipExampleImage]) {
        // ✨ 这里修复了，使用正确的 loadImage 函数
        globalImageCache[config.yikeEquipExampleImage] = await loadImage(config.yikeEquipExampleImage);
    }
    if (!visualImg) visualImg = globalImageCache[config.yikeEquipExampleImage];

    if (visualImg) {
        const maxW = 420, maxH = 240;
        const scale = Math.min(maxW / visualImg.width, maxH / visualImg.height);
        const drawW = visualImg.width * scale, drawH = visualImg.height * scale;
        const drawX = 51 + (maxW - drawW) / 2, drawY = 15 + (maxH - drawH) / 2;
        setupHighQualityContext(yikeEquipExportCtx);
        yikeEquipExportCtx.drawImage(visualImg, drawX, drawY, drawW, drawH);
    }

    // 文字
    yikeEquipExportCtx.textAlign = 'left'; yikeEquipExportCtx.textBaseline = 'top';
    yikeEquipExportCtx.font = `63px "FZHanZhenGuangBiaoS-GB", "FZHanZhenGuangBiaoS", sans-serif`;
    yikeEquipExportCtx.fillStyle = yikeEquipTitleColor?.value || '#000000';
    if (yikeEquipExportCtx.letterSpacing !== undefined) yikeEquipExportCtx.letterSpacing = '-1.89px';
    yikeEquipExportCtx.fillText(yikeEquipTitle?.value || '', 510, 53);
    if (yikeEquipExportCtx.letterSpacing !== undefined) yikeEquipExportCtx.letterSpacing = '0px';

    yikeEquipExportCtx.font = `33px "FZLanTingHeiS-R-GB", "FZLanTingHeiS-R", sans-serif`;
    yikeEquipExportCtx.fillStyle = yikeEquipSubColor?.value || '#000000';
    yikeEquipExportCtx.fillText(yikeEquipSub?.value || '', 624, 124);

    yikeEquipExportCtx.fillStyle = yikeEquipBtnBgColor?.value || '#000000';
    yikeEquipExportCtx.beginPath();
    yikeEquipExportCtx.roundRect(661, 174, 229, 66, 33);
    yikeEquipExportCtx.fill();

    yikeEquipExportCtx.font = `33px "FZLanTingHeiS-DB-GB", "FZLanTingHeiS-DB", sans-serif`;
    yikeEquipExportCtx.fillStyle = yikeEquipBtnTextColor?.value || '#FFFFFF';
    yikeEquipExportCtx.textAlign = 'center'; yikeEquipExportCtx.textBaseline = 'middle';
    yikeEquipExportCtx.fillText(yikeEquipBtnText?.value || '', 661 + 229 / 2, 174 + 66 / 2);

    // 透视外壳
    if (!globalImageCache[config.yikeEquipPage]) {
        // ✨ 这里也修复了
        globalImageCache[config.yikeEquipPage] = await loadImage(config.yikeEquipPage);
    }
    const pageImg = globalImageCache[config.yikeEquipPage];

    if (pageImg) {
        yikeEquipPageCanvas.width = pageImg.width; yikeEquipPageCanvas.height = pageImg.height;
        setupHighQualityContext(yikeEquipPageCtx);
        yikeEquipPageCtx.drawImage(yikeEquipExportCanvas, -1, 735);
        yikeEquipPageCtx.drawImage(pageImg, 0, 0);
        yikeEquipPageCanvas._bannerBBox = { x: 0, y: 735, w: 1125, h: 270 };
    }
}
// ==================== 🛠️ 一刻相册：收银台Banner (SS级) ====================
async function renderYikeCashCanvas() {
    if (!yikeCashPageCtx || !yikeCashExportCtx) return;
    const bannerW = 670, bannerH = 78;
    yikeCashExportCanvas.width = bannerW; yikeCashExportCanvas.height = bannerH;
    setupHighQualityContext(yikeCashExportCtx);
    yikeCashExportCtx.clearRect(0, 0, bannerW, bannerH);

    const grad = yikeCashExportCtx.createLinearGradient(0, 0, bannerW, 0);
    grad.addColorStop(0, yikeCashGrad1?.value || '#FFFAEF');
    grad.addColorStop(1, yikeCashGrad2?.value || '#FEEFBA');
    yikeCashExportCtx.fillStyle = grad;
    drawRoundRect(yikeCashExportCtx, 0, 0, bannerW, bannerH, 16);
    yikeCashExportCtx.fill();

    yikeCashExportCtx.save();
    drawRoundRect(yikeCashExportCtx, 0, 0, bannerW, bannerH, 16);
    yikeCashExportCtx.clip();

    let visualImg = userImgObj;
    if (!visualImg && !globalImageCache[config.yikeCashExampleImage]) {
        globalImageCache[config.yikeCashExampleImage] = await loadImage(config.yikeCashExampleImage);
    }
    if (!visualImg) visualImg = globalImageCache[config.yikeCashExampleImage];
    if (visualImg && visualImg.width) {
        const maxW = 156, maxH = 78;
        const scale = Math.min(maxW / visualImg.width, maxH / visualImg.height);
        const drawW = visualImg.width * scale, drawH = visualImg.height * scale;
        const drawX = 14 + (maxW - drawW) / 2, drawY = (maxH - drawH) / 2;
        drawSharpenedImage(yikeCashExportCtx, visualImg, drawX, drawY, drawW, drawH, 0.3);
    }

    const titleVal = yikeCashTitle?.value || '';
    const highlightVal = yikeCashHighlight?.value || '';
    if (document.fonts?.load) {
        await document.fonts.load('36px "FZHZGBJW"');
    }
    yikeCashExportCtx.textAlign = 'left';
    yikeCashExportCtx.textBaseline = 'top';
    yikeCashExportCtx.font = `36px "FZHZGBJW", sans-serif`;
    drawDualColorText(
        yikeCashExportCtx,
        titleVal,
        highlightVal,
        188,
        23,
        yikeCashTitleColor?.value || '#000000',
        yikeCashHighlightColor?.value || '#EE3A31'
    );

    yikeCashExportCtx.restore();

    if (!globalImageCache[config.yikeCashPage]) {
        globalImageCache[config.yikeCashPage] = await loadImage(config.yikeCashPage);
    }
    const pageImg = globalImageCache[config.yikeCashPage];
    if (pageImg) {
        yikeCashPageCanvas.width = pageImg.width; yikeCashPageCanvas.height = pageImg.height;
        setupHighQualityContext(yikeCashPageCtx);
        yikeCashPageCtx.drawImage(pageImg, 0, 0);
        yikeCashPageCtx.drawImage(yikeCashExportCanvas, 43, 443);
        yikeCashPageCanvas._bannerBBox = { x: 43, y: 443, w: 670, h: 78 };
    }
}
// ==================== 界面交互事件 ====================
function updateResourceDropdown(terminalId) {
    const resourceList = document.getElementById('resourceList');
    if (!resourceList) return;
    resourceList.innerHTML = '';
    let dirData = PAGE_DIRECTORY;
    let buKey = 'wangpan';
    if (currentBU === 'yike') { dirData = YIKE_PAGE_DIRECTORY; buKey = 'yike'; }
    if (currentBU === 'chuhai') { dirData = CHUHAI_PAGE_DIRECTORY; buKey = 'chuhai'; }
    const priorityList = IMPLEMENTED_RESOURCE_PRIORITY[buKey]?.[terminalId] || [];
    const pages = (dirData[terminalId] || []).slice();
    const activeValue = priorityList.find(value => pages.some(page => page.value === value)) || pages[0]?.value;
    pages.forEach((page) => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        if (page.value === activeValue) item.classList.add('active');
        item.dataset.value = page.value;
        item.innerHTML = `<div class="resource-item-text" title="${page.text}">${page.text}</div>`;
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.resource-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            switchResourceView(page.value);
            resetCanvasView();
        });
        resourceList.appendChild(item);
    });
    const activeItem = resourceList.querySelector('.active') || resourceList.querySelector('.resource-item');
    if (activeItem) switchResourceView(activeItem.dataset.value); else switchResourceView(null);
}
const renderedPages = {};
async function renderActiveBusinessCanvases() {
    if (currentBU === 'yike') {
        if (renderedPages.yikeHome) await renderYikeHomeCanvas();
        if (renderedPages.yikeEquip) await renderYikeEquipCanvas();
        if (renderedPages.yikeCash) await renderYikeCashCanvas();
        return;
    }
    if (renderedPages.home) await renderHomeCanvas();
    if (renderedPages.myPage) await renderMyPage();
    if (renderedPages.feed) await renderFeedCanvas();
    if (renderedPages.searchIcon) await renderSearchIcon();
    if (renderedPages.mySpace) { await renderMySpaceCanvas(); await renderSimpleScanCanvas(); }
    if (renderedPages.myActivity) await renderMyActivityCanvas();
    if (renderedPages.peerSharing) await renderPeerSharingCanvas();
}
async function renderResourceCanvases(resources, options = {}) {
    const uniqueResources = [...new Set(resources)];
    for (const resource of uniqueResources) {
        if (resource === 'na_home') { await renderHomeCanvas(); renderedPages.home = true; }
        else if (resource === 'na_mypage') { await renderMyPage(); renderedPages.myPage = true; }
        else if (resource === 'na_feed') { await renderFeedCanvas(); renderedPages.feed = true; }
        else if (resource === 'dev_1_1_13') { await renderSearchIcon(); renderedPages.searchIcon = true; }
        else if (resource === 'dev_1_1_16') {
            const showBoth = !options.foundMySpace && !options.foundSimpleScan;
            if (showBoth || options.foundMySpace) await renderMySpaceCanvas();
            if (showBoth || options.foundSimpleScan) await renderSimpleScanCanvas();
            renderedPages.mySpace = true;
        } else if (resource === 'dev_1_1_17') { await renderMyActivityCanvas(); renderedPages.myActivity = true; }
        else if (resource === 'dev_1_1_18') { await renderPeerSharingCanvas(); renderedPages.peerSharing = true; }
        else if (resource === 'yike_4') { await renderYikeHomeCanvas(); renderedPages.yikeHome = true; }
        else if (resource === 'yike_5') { await renderYikeEquipCanvas(); renderedPages.yikeEquip = true; }
        else if (resource === 'yike_7') { await renderYikeCashCanvas(); renderedPages.yikeCash = true; }
    }
}
async function switchResourceView(selected) {
    [homeControls, myPageControls, feedControls, searchIconControls, mySpaceControls, myActivityControls, peerSharingControls, yikeEquipControls, yikeCashControls, yikeHomeControls].forEach(ctrl => ctrl?.classList.remove('active'));
    [homeView, myPageView, feedView, searchIconView, mySpaceView, myActivityView, peerSharingView, yikeEquipView, yikeCashView, yikeHomeView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
    developingPrompt.classList.add('hidden');
    const container = document.getElementById('canvasContainer');
    container.style.flexDirection = 'column'; container.style.alignItems = 'center'; container.style.gap = '0px';
    document.querySelectorAll('.view-section').forEach(el => { el.style.width = '100%'; el.style.flexShrink = '1'; });
    syncCurrentBusinessUploadState(selected);
    const spaceCard = document.getElementById('mySpacePageCanvas')?.closest('.preview-card');
    const scanCard = document.getElementById('simpleScanPageCanvas')?.closest('.preview-card');
    if (spaceCard) spaceCard.style.display = '';
    if (scanCard) scanCard.style.display = '';
    if (['na_home', 'na_mypage', 'na_feed', 'dev_1_1_13', 'dev_1_1_16', 'dev_1_1_17', 'dev_1_1_18', 'yike_4', 'yike_5', 'yike_7'].includes(selected)) {
        baseGlobalPicArea.style.display = 'block';
    } else {
        baseGlobalPicArea.style.display = 'none';
    }
    if (selected === 'na_home') {
        homeControls.classList.add('active'); homeView.classList.add('active');
        if (!renderedPages.home) { await renderHomeCanvas(); renderedPages.home = true; }
    } else if (selected === 'na_mypage') {
        myPageControls.classList.add('active'); myPageView.classList.add('active');
        if (!renderedPages.myPage) { await renderMyPage(); renderedPages.myPage = true; }
    } else if (selected === 'na_feed') {
        feedControls.classList.add('active'); feedView.classList.add('active');
        if (!renderedPages.feed) { await renderFeedCanvas(); renderedPages.feed = true; }
    } else if (selected === 'dev_1_1_13') {
        searchIconControls.classList.add('active'); searchIconView.classList.add('active');
        if (!renderedPages.searchIcon) { await renderSearchIcon(); renderedPages.searchIcon = true; }
    } else if (selected === 'dev_1_1_16') {
        mySpaceControls.classList.add('active'); mySpaceView.classList.add('active');
        if (!renderedPages.mySpace) { await renderMySpaceCanvas(); await renderSimpleScanCanvas(); renderedPages.mySpace = true; }
    } else if (selected === 'dev_1_1_17') {
        myActivityControls.classList.add('active'); myActivityView.classList.add('active');
        if (!renderedPages.myActivity) { await renderMyActivityCanvas(); renderedPages.myActivity = true; }
    } else if (selected === 'dev_1_1_18') {
        peerSharingControls.classList.add('active'); peerSharingView.classList.add('active');
        if (!renderedPages.peerSharing) { await renderPeerSharingCanvas(); renderedPages.peerSharing = true; }

    } else if (selected === 'yike_4') {
        if (yikeHomeControls) yikeHomeControls.classList.add('active');
        if (yikeHomeView) yikeHomeView.classList.add('active');
        if (!renderedPages.yikeHome) { await renderYikeHomeCanvas(); renderedPages.yikeHome = true; }
    } else if (selected === 'yike_5') {
        if (yikeEquipControls) yikeEquipControls.classList.add('active');
        if (yikeEquipView) yikeEquipView.classList.add('active');
        if (!renderedPages.yikeEquip) { await renderYikeEquipCanvas(); renderedPages.yikeEquip = true; }
    } else if (selected === 'yike_7') {
        if (yikeCashControls) yikeCashControls.classList.add('active');
        if (yikeCashView) yikeCashView.classList.add('active');
        if (!renderedPages.yikeCash) { await renderYikeCashCanvas(); renderedPages.yikeCash = true; }
    } else {
        developingPrompt.classList.remove('hidden'); viewDevelopingPrompt.classList.add('active');
    }
}
const buBtns = document.querySelectorAll('.bu-btn');
function setActiveBusinessLine(bu) {
    const targetBtn = document.querySelector(`.bu-btn[data-bu="${bu}"]`);
    if (!targetBtn) return;
    buBtns.forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');
    currentBU = bu;

    Object.keys(renderedPages).forEach(key => { renderedPages[key] = false; });
    syncCurrentBusinessUploadState();

    if (currentBU === 'wangpan' || currentBU === 'yike' || currentBU === 'chuhai') {
        document.documentElement.style.setProperty('--primary-color', '#258AFF');
        wangpanWorkspace.classList.remove('hidden'); emptyWorkspace.classList.add('hidden');
        updateResourceDropdown(document.querySelector('.terminal-btn.active').dataset.terminal);
        if (document.getElementById('exportModal')?.style.display === 'flex') autoSelectExportItems();
    } else {
        document.documentElement.style.setProperty('--primary-color', '#87B4FF');
        wangpanWorkspace.classList.add('hidden'); emptyWorkspace.classList.remove('hidden');
        [homeView, myPageView, feedView, searchIconView, mySpaceView, myActivityView, peerSharingView, yikeEquipView, yikeCashView, yikeHomeView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
    }
}
buBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setActiveBusinessLine(e.currentTarget.dataset.bu);
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
const detailModal = document.getElementById('detailModal');
const detailImagesBox = document.getElementById('detailImagesBox');
const detailModalTitle = document.getElementById('detailModalTitle');
function openDetailModal(targetType) {
    detailImagesBox.innerHTML = '';
    if (targetType === 'homeTop') {
        detailModalTitle.innerText = '大图状态 Banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">纯净切图</div><img src="${topHomeBannerCanvas.toDataURL()}" style="max-height: 400px; width: auto;">`;
    } else if (targetType === 'homeLight') {
        detailModalTitle.innerText = '小图状态 Banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">日间完整版</div><img src="${lightBannerCanvas.toDataURL()}" style="max-height: 250px; width: auto;"><div class="banner-label" style="margin-top:16px;">夜间完整版</div><img src="${darkBannerCanvas.toDataURL()}" style="max-height: 250px; width: auto;">`;
    } else if (targetType === 'myPage') {
        detailModalTitle.innerText = '我的页面 Banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">日间模式</div><img src="${myPageCanvas.toDataURL()}" style="max-height: 250px; width: auto;"><div class="banner-label" style="margin-top:16px;">夜间模式</div><img src="${myPageDarkCanvas.toDataURL()}" style="max-height: 250px; width: auto;">`;
    } else if (targetType === 'feed') {
        detailModalTitle.innerText = 'Feed10出1卡片 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立 Feed 卡片切图</div><img src="${feedBannerCanvas.toDataURL()}" style="max-height: 500px; width: auto;">`;
    } else if (targetType === 'searchIcon') {
        detailModalTitle.innerText = '搜索框 icon - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (204x204)</div><img src="${searchIconExportCanvas.toDataURL()}" style="max-height: 204px; width: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'mySpace') {
        detailModalTitle.innerText = '我的空间 Banner - 纯净切图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (1182x252)</div><img src="${mySpaceExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    } else if (targetType === 'simpleScan') {
        detailModalTitle.innerText = '简单扫描 Banner - 纯净切图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (1182x252)</div><img src="${simpleScanExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    } else if (targetType === 'myActivity') {
        detailModalTitle.innerText = '活动中心 Banner - 纯净切图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (670x320)</div><img src="${myActivityExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    } else if (targetType === 'peerSharing') {
        detailModalTitle.innerText = '共享点对点 Banner - 纯净切图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (670x320)</div><img src="${peerSharingExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    } else if (targetType === 'yikeEquip') {
        detailModalTitle.innerText = '设备 Banner - 详情预览';
        detailImagesBox.innerHTML = `
            <div class="banner-label" style="color:#258AFF; font-size:16px;">纯净版切图 (1125x270) 👇</div>
            <img src="${yikeEquipExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; margin-bottom: 30px; border: 1px dashed #cbd5e1; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">`;
    } else if (targetType === 'yikeCash') {
        detailModalTitle.innerText = '收银台 Banner - 详情预览';
        detailImagesBox.innerHTML = `
            <div class="banner-label" style="color:#258AFF; font-size:16px;">纯净版切图 (670x78) 👇</div>
            <img src="${yikeCashExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; margin-bottom: 30px; border: 1px dashed #cbd5e1; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">`;
    } else if (targetType === 'yikeHome') {
        detailModalTitle.innerText = '首页 Banner - 详情预览';
        detailImagesBox.innerHTML = `
            <div class="banner-label" style="color:#258AFF; font-size:16px;">纯净版切图 (1170x624) 👇</div>
            <img src="${yikeHomeExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; margin-bottom: 30px; border: 1px dashed #cbd5e1; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">`;
    }
    detailModal.style.display = 'flex';
}
document.querySelectorAll('.zoomable-canvas').forEach(canvas => {
    canvas.addEventListener('click', (e) => {
        if (isDraggingCanvas) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width; const scaleY = canvas.height / rect.height;
        const clickX = (e.clientX - rect.left) * scaleX; const clickY = (e.clientY - rect.top) * scaleY;
        const bbox = canvas._bannerBBox;
        if (bbox) {
            if (clickX >= bbox.x && clickX <= bbox.x + bbox.w && clickY >= bbox.y && clickY <= bbox.y + bbox.h) {
                const targetType = canvas.getAttribute('data-target');
                if (targetType) openDetailModal(targetType);
            }
        } else {
            const targetType = canvas.getAttribute('data-target');
            if (targetType) openDetailModal(targetType);
        }
    });
});
document.querySelector('.close-detail-modal')?.addEventListener('click', () => { detailModal.style.display = 'none'; });
detailModal?.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.style.display = 'none'; });
// ==================== 参数输入监听 ====================
homeColorRadios.forEach(r => r.addEventListener('change', async e => { homeColor = e.target.value; await renderHomeCanvas(); }));
myPageColorRadios.forEach(r => r.addEventListener('change', async e => { myPageColor = e.target.value; await renderMyPage(); }));
myPageHighlight?.addEventListener('input', renderMyPage);
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
feedTitleColor?.addEventListener('input', renderFeedCanvas); feedSubtitleColor?.addEventListener('input', renderFeedCanvas);
mySpaceBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentMySpaceBgMode = e.target.value; mySpaceBgModeSolid.classList.add('hidden'); mySpaceBgModeGradient.classList.add('hidden');
    if (currentMySpaceBgMode === 'solid') mySpaceBgModeSolid.classList.remove('hidden'); else mySpaceBgModeGradient.classList.remove('hidden');
    await renderMySpaceCanvas();
}));
mySpaceSolidColor?.addEventListener('input', renderMySpaceCanvas); mySpaceGradColor1?.addEventListener('input', renderMySpaceCanvas); mySpaceGradColor2?.addEventListener('input', renderMySpaceCanvas);
mySpaceBtnGrad1?.addEventListener('input', renderMySpaceCanvas); mySpaceBtnGrad2?.addEventListener('input', renderMySpaceCanvas);
simpleScanBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentSimpleScanBgMode = e.target.value; simpleScanBgModeSolid.classList.add('hidden'); simpleScanBgModeGradient.classList.add('hidden');
    if (currentSimpleScanBgMode === 'solid') simpleScanBgModeSolid.classList.remove('hidden'); else simpleScanBgModeGradient.classList.remove('hidden');
    await renderSimpleScanCanvas();
}));
simpleScanSolidColor?.addEventListener('input', renderSimpleScanCanvas); simpleScanGradColor1?.addEventListener('input', renderSimpleScanCanvas); simpleScanGradColor2?.addEventListener('input', renderSimpleScanCanvas);
simpleScanHighlightColor?.addEventListener('input', renderSimpleScanCanvas); simpleScanBtnGrad1?.addEventListener('input', renderSimpleScanCanvas); simpleScanBtnGrad2?.addEventListener('input', renderSimpleScanCanvas);
myActivityGrad1?.addEventListener('input', renderMyActivityCanvas); myActivityGrad2?.addEventListener('input', renderMyActivityCanvas);
myActivitySubColor?.addEventListener('input', renderMyActivityCanvas); myActivityTitle1Color?.addEventListener('input', renderMyActivityCanvas); myActivityTitle2Color?.addEventListener('input', renderMyActivityCanvas); myActivityBtnColor?.addEventListener('input', renderMyActivityCanvas);
peerSharingGrad1?.addEventListener('input', renderPeerSharingCanvas); peerSharingGrad2?.addEventListener('input', renderPeerSharingCanvas);
peerSharingSubColor?.addEventListener('input', renderPeerSharingCanvas); peerSharingTitle1Color?.addEventListener('input', renderPeerSharingCanvas); peerSharingTitle2Color?.addEventListener('input', renderPeerSharingCanvas); peerSharingBtnColor?.addEventListener('input', renderPeerSharingCanvas);
// 绑定一刻设备 Banner 参数实时监听
['yikeEquipGrad1', 'yikeEquipGrad2', 'yikeEquipTitleColor', 'yikeEquipSubColor', 'yikeEquipBtnBgColor', 'yikeEquipBtnTextColor'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeEquipCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderYikeEquipCanvas); }
});


['yikeHomeTitleColor', 'yikeHomeSubColor', 'yikeHomeSubHighlightColor', 'yikeHomeSubHighlight'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeHomeCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderYikeHomeCanvas); }
});
['yikeHomeTitle', 'yikeHomeSub'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeHomeCanvas); }
});
bindUploadEvents('yikeHomeBgUploadDropZone', 'yikeHomeBgUpload', 'yikeHomeBgPreviewImg', async src => { yikeHomeBgBannerObj = await loadImage(src); await renderYikeHomeCanvas(); });

// ==================== 文件上传与取色 ====================
function handleFileUpload(file, callback) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader(); reader.onload = async ev => { const src = ev.target.result; await callback(src); }; reader.readAsDataURL(file);
}
function bindUploadEvents(dropZoneId, inputId, previewId, processFn) {
    const dz = document.getElementById(dropZoneId), input = document.getElementById(inputId), prev = document.getElementById(previewId);
    if (input) input.addEventListener('change', e => handleFileUpload(e.target.files[0], async src => { if (prev) prev.src = src; await processFn(src); }));
    if (dz) {
        dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); }); dz.addEventListener('dragleave', e => { e.preventDefault(); dz.classList.remove('drag-over'); });
        dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('drag-over'); if (e.dataTransfer.files.length > 0) handleFileUpload(e.dataTransfer.files[0], async src => { if (prev) prev.src = src; await processFn(src); }); });
    }
}
function rgbToHsl(r, g, b) { r /= 255; g /= 255; b /= 255; let max = Math.max(r, g, b), min = Math.min(r, g, b); let h, s, l = (max + min) / 2; if (max == min) { h = s = 0; } else { let d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min); switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; }h /= 6; } return [h * 360, s, l]; }
bindUploadEvents('uploadDropZone', 'imageUpload', 'uploadPreviewImg', async src => {
    const activeBU = getActiveBusinessLineKey();
    const loadedImg = await loadImage(src);
    businessUploadState[activeBU] = { src, img: loadedImg };
    userImgObj = loadedImg;
    syncCurrentBusinessUploadState();
    if (userImgObj) {
        const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d'); const w = canvas.width = Math.min(userImgObj.width, 100); const h = canvas.height = Math.min(userImgObj.height, 100);
        ctx.drawImage(userImgObj, 0, 0, w, h); let data; try { data = ctx.getImageData(0, 0, w, h).data; } catch (e) { }
        if (data) {
            let r = 0, g = 0, b = 0, count = 0; for (let i = 0; i < data.length; i += 16) { if (data[i + 3] < 128) continue; r += data[i]; g += data[i + 1]; b += data[i + 2]; count++; }
            if (count > 0) {
                let matchedTheme = BRAND_THEMES.find(t => t.id === 'blue');
                let [h_val, s_val, l_val] = rgbToHsl(Math.floor(r / count), Math.floor(g / count), Math.floor(b / count));
                if (s_val > 0.1 && l_val > 0.1 && l_val < 0.95) {
                    let minDiff = Infinity;
                    for (let theme of BRAND_THEMES) {
                        let diff = Math.abs(h_val - theme.hue); diff = diff > 180 ? 360 - diff : diff;
                        if (diff < minDiff) { minDiff = diff; matchedTheme = theme; }
                    }
                }
                triggerThemeSwitch(matchedTheme.id === 'yellow' ? 'orange' : matchedTheme.id, activeBU);
            }
        }
    }
    await renderActiveBusinessCanvases();
});
bindUploadEvents('topBgUploadDropZone', 'topBgImageUpload', 'topBgUploadPreviewImg', async src => { topBgBannerObj = await loadImage(src); await renderHomeCanvas(); });
bindUploadEvents('feedBgUploadDropZone', 'feedBgImageUpload', 'feedBgUploadPreviewImg', async src => { feedBgBannerObj = await loadImage(src); await renderFeedCanvas(); });
bindUploadEvents('topBannerTitleDropZone', 'topBannerTitleUpload', 'topBannerTitlePreviewImg', async src => { userTopBannerTitleObj = await loadImage(src); await renderHomeCanvas(); });
function syncExportModalByBusinessLine() {
    const activeBU = getActiveBusinessLineKey() === 'yike' ? 'yike' : 'wangpan';
    const visibleChecks = [];
    document.querySelectorAll('.export-group[data-bu]').forEach(group => {
        const visible = group.dataset.bu === activeBU;
        group.style.display = visible ? '' : 'none';
        const checks = Array.from(group.querySelectorAll('.export-item-chk'));
        if (visible) visibleChecks.push(...checks);
        else checks.forEach(chk => { chk.checked = false; });
    });
    return visibleChecks;
}
// ==================== ✨ 智能勾选辅助函数 ====================
function autoSelectExportItems() {
    const visibleChecks = syncExportModalByBusinessLine();
    document.querySelectorAll('.export-item-chk').forEach(chk => chk.checked = false);
    if (document.getElementById('homeView')?.classList.contains('active')) {
        ['chkTopHomePhone', 'chkTopHomeBanner', 'chkHomePhone', 'chkHomeBannerLight', 'chkHomeBannerDark', 'chkHomeKV'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('myPageView')?.classList.contains('active')) {
        ['chkMyPageBannerLight', 'chkMyPageBannerDark', 'chkMyPagePhone'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('feedView')?.classList.contains('active')) {
        ['chkFeedBannerExport', 'chkFeedPhone'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('searchIconView')?.classList.contains('active')) {
        ['chkSearchIconExport', 'chkSearchPageExport'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('mySpaceView')?.classList.contains('active')) {
        const spaceCanvas = document.getElementById('mySpacePageCanvas');
        const scanCanvas = document.getElementById('simpleScanPageCanvas');
        if (spaceCanvas && spaceCanvas.closest('.preview-card').style.display !== 'none') {
            ['chkMySpaceExport', 'chkMySpacePageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
        }
        if (scanCanvas && scanCanvas.closest('.preview-card').style.display !== 'none') {
            ['chkSimpleScanExport', 'chkSimpleScanPageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
        }
    }
    if (document.getElementById('myActivityView')?.classList.contains('active')) {
        ['chkMyActivityExport', 'chkMyActivityPageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }
    if (document.getElementById('peerSharingView')?.classList.contains('active')) {
        ['chkPeerSharingExport', 'chkPeerSharingPageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }
    if (document.getElementById('yikeEquipView')?.classList.contains('active')) {
        ['chkYikeEquipExport', 'chkYikeEquipPageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }
    if (document.getElementById('yikeCashView')?.classList.contains('active')) {
        ['chkYikeCashExport', 'chkYikeCashPageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }
    if (document.getElementById('yikeHomeView')?.classList.contains('active')) {
        ['chkYikeHomeExport', 'chkYikeHomePageExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }

    const selectAllChk = document.getElementById('selectAllExport');
    if (selectAllChk && visibleChecks.length > 0) { selectAllChk.checked = visibleChecks.every(c => c.checked); }
    else if (selectAllChk) { selectAllChk.checked = false; }
}
// ==================== 导出 ZIP 与初始化 ====================
function canvasToBlob(c) { return new Promise((resolve, reject) => { try { c.toBlob(b => { if (b) resolve(b); else reject(new Error("画布已被污染无法生成")); }, 'image/png'); } catch (e) { reject(e); } }); }
const externalScriptPromises = {};
function loadExternalScriptOnce(src) {
    if (externalScriptPromises[src]) return externalScriptPromises[src];
    externalScriptPromises[src] = new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            existing.addEventListener('load', resolve, { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
    return externalScriptPromises[src];
}
async function ensureJSZipLoaded() {
    if (typeof JSZip !== 'undefined') return;
    await loadExternalScriptOnce('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
}

async function exportMultiCanvas(chkId, canvas, baseName, testKey, folder, inputRefs, renderFn, force = false) {
    const chkEl = document.getElementById(chkId);
    // ✨ 修复关键：如果不强制导出，且没打勾或者压根没有复选框，才跳过
    if (!force) {
        if (!chkEl || !chkEl.checked) return;
    }
    if (!canvas) return;

    let chunks = window.abTestCopies ? window.abTestCopies[testKey] : null;
    inputRefs = inputRefs || [];
    if (chunks && chunks.length > 1) {
        let backups = inputRefs.map(ref => document.getElementById(ref.id).value);
        for (let i = 0; i < chunks.length; i++) {
            let chunk = chunks[i];
            inputRefs.forEach(ref => {
                let val = chunk[ref.key];
                if (val !== undefined) {
                    if (ref.id === 'textCapsule') document.getElementById(ref.id).value = formatAndLimitText(val || '去查看', 4);
                    else document.getElementById(ref.id).value = formatAndLimitText(val, ref.limit || 99);
                }
            });
            await renderFn();
            folder.file(`${baseName}-方案${i + 1}.png`, await canvasToBlob(canvas));
        }
        inputRefs.forEach((ref, idx) => { document.getElementById(ref.id).value = backups[idx]; });
        await renderFn();
    } else {
        folder.file(`${baseName}.png`, await canvasToBlob(canvas));
    }
}

async function exportCanvasOrMulti(chkId, canvas, baseName, testKey, folder, inputRefs, renderFn, force = false) {
    await exportMultiCanvas(chkId, canvas, baseName, testKey, folder, inputRefs, renderFn, force);
}

function initExportModal() {
    const exportModal = document.getElementById('exportModal');
    const openExportModalBtn = document.getElementById('openExportModalBtn');
    const cancelExportBtn = document.getElementById('cancelExportBtn');
    const confirmExportBtn = document.getElementById('confirmExportBtn');
    const selectAllChk = document.getElementById('selectAllExport');
    const getVisibleItemChks = () => Array.from(document.querySelectorAll('.export-group[data-bu]')).filter(group => group.style.display !== 'none').flatMap(group => Array.from(group.querySelectorAll('.export-item-chk')));
    const itemChks = document.querySelectorAll('.export-item-chk');
    if (!exportModal || !openExportModalBtn) return;

    openExportModalBtn.addEventListener('click', () => {
        autoSelectExportItems(); exportModal.style.display = 'flex';
    });
    cancelExportBtn.addEventListener('click', () => { exportModal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target === exportModal) exportModal.style.display = 'none'; });

    if (selectAllChk) {
        selectAllChk.addEventListener('change', (e) => { getVisibleItemChks().forEach(chk => chk.checked = e.target.checked); });
        itemChks.forEach(chk => { chk.addEventListener('change', () => { const visibleItemChks = getVisibleItemChks(); selectAllChk.checked = visibleItemChks.length > 0 && visibleItemChks.every(c => c.checked); }); });
    }

    confirmExportBtn.addEventListener('click', async () => {
        try {
            await ensureJSZipLoaded();
        } catch (e) {
            return alert('加载 ZIP 库失败，请检查网络');
        }
        const zip = new JSZip();
        const previewFolder = zip.folder("带壳预览图");
        const bannerFolder = zip.folder("纯净Banner切图");
        let hasSelected = getVisibleItemChks().some(c => c.checked);
        if (!hasSelected) { alert('您没有勾选任何资源，请至少勾选一项！'); return; }

        const originalText = confirmExportBtn.innerText;
        confirmExportBtn.innerText = '正在执行打包下载...'; confirmExportBtn.disabled = true;

        try {
            // == 网盘首页特殊处理：大图状态与气泡状态 ==
            const homeViewActive = document.getElementById('homeView')?.classList.contains('active');
            if (homeViewActive) {
                if (document.getElementById('chkTopHomePhone')?.checked && topHomePageCanvas) previewFolder.file(`首页-大图状态预览.png`, await canvasToBlob(topHomePageCanvas));
                if (document.getElementById('chkTopHomeBanner')?.checked && topHomeBannerCanvas) bannerFolder.file(`首页-大图状态Banner.png`, await canvasToBlob(topHomeBannerCanvas));
                
                let homeRefs = MODULE_INPUT_MAP['home'];
                // 导出完整的日夜间气泡Banner
                await exportCanvasOrMulti('chkHomeBannerLight', lightBannerCanvas, `首页-小图状态Banner(日间)-${homeColor}`, 'home', bannerFolder, homeRefs, renderHomeCanvas, true);
                await exportCanvasOrMulti('chkHomeBannerDark', darkBannerCanvas, `首页-小图状态Banner(夜间)-${homeColor}`, 'home', bannerFolder, homeRefs, renderHomeCanvas, true);
                await exportCanvasOrMulti('chkHomePhone', lightCanvas, `首页-小图状态预览-${homeColor}`, 'home', previewFolder, homeRefs, renderHomeCanvas);

                // ✨✨✨ 单独导出纯透明底的配图切图 (只保留 420x282) ✨✨✨
                const kvImg = userImgObj || await loadImage(config.heroImage);
                if (kvImg && kvImg.width) {
                    const standaloneCanvas = document.createElement('canvas');
                    standaloneCanvas.width = 420; standaloneCanvas.height = 282;
                    const sCtx = standaloneCanvas.getContext('2d');
                    setupHighQualityContext(sCtx);
                    const sScale = Math.min(420 / kvImg.width, 282 / kvImg.height);
                    const sDrawW = kvImg.width * sScale; const sDrawH = kvImg.height * sScale;
                    const sDrawX = (420 - sDrawW) / 2; const sDrawY = (282 - sDrawH) / 2;
                    sCtx.save(); sCtx.beginPath(); sCtx.rect(0, 0, 420, 282); sCtx.clip();
                    drawSharpenedImage(sCtx, kvImg, sDrawX, sDrawY, sDrawW, sDrawH, 0.3);
                    sCtx.restore();
                    bannerFolder.file(`首页-纯净配图独立切图(420x282).png`, await canvasToBlob(standaloneCanvas));
                }
            }
            
            let feedRefs = MODULE_INPUT_MAP['feed'];
            await exportCanvasOrMulti('chkFeedBannerExport', feedBannerCanvas, `首页-Feed10出1banner`, 'feed', bannerFolder, feedRefs, renderFeedCanvas);
            await exportCanvasOrMulti('chkFeedPhone', feedCanvas, `首页-Feed10出1预览`, 'feed', previewFolder, feedRefs, renderFeedCanvas);
            let myPageRefs = MODULE_INPUT_MAP['myPage'];
            await exportCanvasOrMulti('chkMyPageBannerLight', myPageCanvas, `我的-Banner(日间)-${myPageColor}`, 'myPage', bannerFolder, myPageRefs, renderMyPage);
            await exportCanvasOrMulti('chkMyPageBannerDark', myPageDarkCanvas, `我的-Banner(夜间)-${myPageColor}`, 'myPage', bannerFolder, myPageRefs, renderMyPage);
            if (document.getElementById('chkMyPagePhone')?.checked && myPageFullCanvas) previewFolder.file(`我的-预览-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas));
            if (document.getElementById('chkSearchIconExport')?.checked && searchIconExportCanvas) bannerFolder.file(`搜索框-独立切图(204x204).png`, await canvasToBlob(searchIconExportCanvas));
            if (document.getElementById('chkSearchPageExport')?.checked && searchPageCanvas) previewFolder.file(`搜索框-页面预览.png`, await canvasToBlob(searchPageCanvas));
            let mySpaceRefs = MODULE_INPUT_MAP['mySpace'];
            if (document.getElementById('chkMySpaceExport')?.checked && mySpaceExportCanvas && mySpacePageCanvas.closest('.preview-card').style.display !== 'none') await exportCanvasOrMulti('chkMySpaceExport', mySpaceExportCanvas, `我的空间-独立切图(1182x252)`, 'mySpace', bannerFolder, mySpaceRefs, renderMySpaceCanvas);
            if (document.getElementById('chkMySpacePageExport')?.checked && mySpacePageCanvas && mySpacePageCanvas.closest('.preview-card').style.display !== 'none') await exportCanvasOrMulti('chkMySpacePageExport', mySpacePageCanvas, `我的空间-页面预览`, 'mySpace', previewFolder, mySpaceRefs, renderMySpaceCanvas);
            let simpleScanRefs = MODULE_INPUT_MAP['simpleScan'];
            if (document.getElementById('chkSimpleScanExport')?.checked && simpleScanExportCanvas && simpleScanPageCanvas.closest('.preview-card').style.display !== 'none') await exportCanvasOrMulti('chkSimpleScanExport', simpleScanExportCanvas, `简单扫描-独立切图(1182x252)`, 'simpleScan', bannerFolder, simpleScanRefs, renderSimpleScanCanvas);
            if (document.getElementById('chkSimpleScanPageExport')?.checked && simpleScanPageCanvas && simpleScanPageCanvas.closest('.preview-card').style.display !== 'none') await exportCanvasOrMulti('chkSimpleScanPageExport', simpleScanPageCanvas, `简单扫描-页面预览`, 'simpleScan', previewFolder, simpleScanRefs, renderSimpleScanCanvas);
            let myActivityRefs = MODULE_INPUT_MAP['activity'];
            await exportCanvasOrMulti('chkMyActivityExport', myActivityExportCanvas, `活动中心-独立切图(670x320)`, 'activity', bannerFolder, myActivityRefs, renderMyActivityCanvas);
            await exportCanvasOrMulti('chkMyActivityPageExport', myActivityPageCanvas, `活动中心-页面预览`, 'activity', previewFolder, myActivityRefs, renderMyActivityCanvas);
            let peerSharingRefs = MODULE_INPUT_MAP['peerSharing'];
            await exportCanvasOrMulti('chkPeerSharingExport', peerSharingExportCanvas, `共享点对点-独立切图(670x320)`, 'peerSharing', bannerFolder, peerSharingRefs, renderPeerSharingCanvas);
            await exportCanvasOrMulti('chkPeerSharingPageExport', peerSharingPageCanvas, `共享点对点-页面预览`, 'peerSharing', previewFolder, peerSharingRefs, renderPeerSharingCanvas);

            let yikeEquipRefs = MODULE_INPUT_MAP['yikeEquip'];
            await exportCanvasOrMulti('chkYikeEquipExport', yikeEquipExportCanvas, `设备-独立切图(1125x270)`, 'yikeEquip', bannerFolder, yikeEquipRefs, renderYikeEquipCanvas);
            await exportCanvasOrMulti('chkYikeEquipPageExport', yikeEquipPageCanvas, `设备-页面预览`, 'yikeEquip', previewFolder, yikeEquipRefs, renderYikeEquipCanvas);
            let yikeCashRefs = MODULE_INPUT_MAP['yikeCash'];
            await exportCanvasOrMulti('chkYikeCashExport', yikeCashExportCanvas, `收银台-独立切图(670x78)`, 'yikeCash', bannerFolder, yikeCashRefs, renderYikeCashCanvas);
            await exportCanvasOrMulti('chkYikeCashPageExport', yikeCashPageCanvas, `收银台-页面预览`, 'yikeCash', previewFolder, yikeCashRefs, renderYikeCashCanvas);
            
            let yikeHomeRefs = MODULE_INPUT_MAP['yikeHome'];
            await exportCanvasOrMulti('chkYikeHomeExport', yikeHomeExportCanvas, `首页banner-独立切图(1170x624)`, 'yikeHome', bannerFolder, yikeHomeRefs, renderYikeHomeCanvas);
            await exportCanvasOrMulti('chkYikeHomePageExport', yikeHomePageCanvas, `首页banner-页面预览`, 'yikeHome', previewFolder, yikeHomeRefs, renderYikeHomeCanvas);

            
            const content = await zip.generateAsync({ type: 'blob' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(content); a.download = `设计资源打包_${new Date().getTime()}.zip`; a.click();
            exportModal.style.display = 'none';
        } catch (e) { alert('导出出错，可能是图片跨域污染或内存不足：\n' + e); } finally { confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; }
    });
}
function upgradeToFigmaColorPickers() {
    const colorInputs = document.querySelectorAll('input[type="color"]');
    colorInputs.forEach(input => {
        const defaultValue = input.value; input.type = 'text'; input.style.display = 'none';
        const pickrEl = document.createElement('div'); input.parentNode.insertBefore(pickrEl, input);
        const pickr = Pickr.create({
            el: pickrEl, theme: 'nano', default: defaultValue,
            swatches: ['#258AFF', '#079C04', '#FF5E00', '#FF014D', '#641AFF', '#FFFFFF', '#000000', 'rgba(0, 0, 0, 0.4)', 'rgba(255, 255, 255, 0.8)'],
            components: { preview: true, opacity: true, hue: true, interaction: { hex: true, rgba: true, input: true, save: false } }
        });
        input._pickrInstance = pickr;
        pickr.on('change', (color) => { input.value = color.toRGBA().toString(0); input.dispatchEvent(new Event('input')); });
    });
}
// 灵魂启动：全量渲染与字体加载
window.onload = async () => {
    Object.keys(MODULE_INPUT_MAP).forEach(moduleKey => {
        MODULE_INPUT_MAP[moduleKey].forEach(ref => { bindFormatter(ref.id, ref.limit, moduleKey, ref.key); });
    });
    upgradeToFigmaColorPickers();
    updateResourceDropdown('NA');
    initExportModal();
    bindCanvasClickToControl();
    const aiInputContainer = document.getElementById('aiInputContainer');
    if (aiInputContainer) {
        aiInputContainer.style.position = 'relative';
        const hiddenFileInput = document.createElement('input'); hiddenFileInput.type = 'file'; hiddenFileInput.style.display = 'none'; hiddenFileInput.accept = 'image/*,.pdf,.txt,.csv,.md,.html';
        document.body.appendChild(hiddenFileInput);
        const addFileBtn = document.createElement('div');
        addFileBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span style="font-size: 13px; margin-left: 4px; font-weight: 500;">添加文件</span>
        `;
        addFileBtn.style.cssText = `position: absolute; right: 12px; bottom: 12px; display: flex; align-items: center; background: #f8fafc; color: #641AFF; padding: 6px 12px; border-radius: 20px; cursor: pointer; border: 1px solid #e2e8f0; transition: all 0.2s ease; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.02);`;
        addFileBtn.onmouseover = () => { addFileBtn.style.background = '#f1f5f9'; addFileBtn.style.borderColor = '#cbd5e1'; addFileBtn.style.transform = 'translateY(-1px)'; };
        addFileBtn.onmouseout = () => { addFileBtn.style.background = '#f8fafc'; addFileBtn.style.borderColor = '#e2e8f0'; addFileBtn.style.transform = 'translateY(0)'; };
        addFileBtn.addEventListener('click', (e) => { e.stopPropagation(); hiddenFileInput.click(); });
        hiddenFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                if (file.type.startsWith('image/')) loadAiImage(file);
                else if (file.type === 'application/pdf' || file.name.match(/\.pdf$/i)) processPdfFile(file);
                else if (file.name.match(/\.(html|md|txt|csv)$/i)) { const reader = new FileReader(); reader.onload = function (event) { currentRichTextContext = event.target.result; aiPromptInput.value = `📄 [已成功读取需求文件：${file.name}]\n你可以直接点击解析，AI将读取底层文件内容。`; }; reader.readAsText(file); }
            }
            hiddenFileInput.value = '';
        });
        aiInputContainer.appendChild(addFileBtn);
    }
    const warmFonts = async () => {
        if (!('fonts' in document)) return;
        try {
            await Promise.all([
                document.fonts.load('10px "FZLanTingHeiS-R-GB"'),
                document.fonts.load('10px "FZLanTingHeiS-R"'),
                document.fonts.load('10px "FZLanTingHeiS-DB-GB"'),
                document.fonts.load('10px "FZLanTingHeiS-DB"'),
                document.fonts.load('10px "FZHanZhenGuangBiaoS-GB"'),
                document.fonts.load('10px "FZLanTingHeiS-H"'),
                document.fonts.load('10px "FZLTHK"')
            ]);
        } catch (e) { console.warn("字体加载报错:", e); }
    };
    if ('requestIdleCallback' in window) requestIdleCallback(warmFonts, { timeout: 2000 });
    else setTimeout(warmFonts, 800);
};

// ==================== 🛠️ 一刻首页：Banner (SS级) ====================
async function renderYikeHomeCanvas() {
    if (!yikeHomePageCanvas || !yikeHomeExportCanvas) return;
    const bannerW = 1170, bannerH = 624;
    yikeHomeExportCanvas.width = bannerW; yikeHomeExportCanvas.height = bannerH;

    // 底图或背景色
    if (yikeHomeBgBannerObj) {
        yikeHomeExportCtx.drawImage(yikeHomeBgBannerObj, 0, 0, bannerW, bannerH);
    } else {
        if (!globalImageCache['assets/photo-home-beijing.png']) {
            globalImageCache['assets/photo-home-beijing.png'] = await loadImage('assets/photo-home-beijing.png');
        }
        if (globalImageCache['assets/photo-home-beijing.png']) {
            yikeHomeExportCtx.drawImage(globalImageCache['assets/photo-home-beijing.png'], 0, 0, bannerW, bannerH);
        } else {
            yikeHomeExportCtx.fillStyle = '#FFFFFF';
            yikeHomeExportCtx.fillRect(0, 0, bannerW, bannerH);
        }
    }

    // 视觉图
    let visualImg = userImgObj;
    if (!visualImg && !globalImageCache[config.yikeHomeExampleImage]) {
        globalImageCache[config.yikeHomeExampleImage] = await loadImage(config.yikeHomeExampleImage);
    }
    if (!visualImg) visualImg = globalImageCache[config.yikeHomeExampleImage];

    if (visualImg && visualImg.width) {
        const imgW = 492, imgH = 318, imgX = 36, imgY = 132;
        yikeHomeExportCtx.save();
        yikeHomeExportCtx.beginPath();
        yikeHomeExportCtx.rect(imgX, imgY, imgW, imgH);
        yikeHomeExportCtx.clip();
        const scale = Math.min(imgW / visualImg.width, imgH / visualImg.height);
        const drawW = visualImg.width * scale, drawH = visualImg.height * scale;
        const drawX = imgX + (imgW - drawW) / 2, drawY = imgY + (imgH - drawH) / 2;
        drawSharpenedImage(yikeHomeExportCtx, visualImg, drawX, drawY, drawW, drawH, 0.3);
        yikeHomeExportCtx.restore();
    }

    // 文字
    const titleVal = yikeHomeTitle?.value || '';
    yikeHomeExportCtx.font = `71px "FZHanYunHeiS-M", sans-serif`;
    yikeHomeExportCtx.fillStyle = yikeHomeTitleColor?.value || '#000000';
    yikeHomeExportCtx.textBaseline = 'top';
    yikeHomeExportCtx.fillText(titleVal, 563, 252);

    const subVal = yikeHomeSub?.value || '';
    const hlVal = yikeHomeSubHighlight?.value || '';
    const hlColor = yikeHomeSubHighlightColor?.value || '#E63F00';
    const subColor = yikeHomeSubColor?.value || '#000000';

    yikeHomeExportCtx.font = `41px "FZHanYunHeiS-L", sans-serif`;
    yikeHomeExportCtx.textBaseline = 'top';
    
    if (hlVal && subVal.includes(hlVal)) {
        const parts = subVal.split(hlVal);
        let currX = 649;
        const subY = 343.27;
        for (let i = 0; i < parts.length; i++) {
            yikeHomeExportCtx.fillStyle = subColor;
            yikeHomeExportCtx.fillText(parts[i], currX, subY);
            currX += yikeHomeExportCtx.measureText(parts[i]).width;
            if (i < parts.length - 1) {
                yikeHomeExportCtx.fillStyle = hlColor;
                yikeHomeExportCtx.fillText(hlVal, currX, subY);
                currX += yikeHomeExportCtx.measureText(hlVal).width;
            }
        }
    } else {
        yikeHomeExportCtx.fillStyle = subColor;
        yikeHomeExportCtx.fillText(subVal, 649, 343.27);
    }

    // 底部渐变SVG
    if (!globalImageCache[config.yikeHomeBottomSvg]) {
        globalImageCache[config.yikeHomeBottomSvg] = await loadImage(config.yikeHomeBottomSvg);
    }
    if (globalImageCache[config.yikeHomeBottomSvg]) {
        yikeHomeExportCtx.drawImage(globalImageCache[config.yikeHomeBottomSvg], 0, 624 - 177, 1170, 177);
    }

    // 透视外壳
    if (!globalImageCache[config.yikeHomePage]) {
        globalImageCache[config.yikeHomePage] = await loadImage(config.yikeHomePage);
    }
    const pageImg = globalImageCache[config.yikeHomePage];

    if (pageImg) {
        yikeHomePageCanvas.width = pageImg.width; yikeHomePageCanvas.height = pageImg.height;
        setupHighQualityContext(yikeHomePageCtx);
        // Banner在最顶部居中，yikeHomePageCanvas的width就是1170
        yikeHomePageCtx.drawImage(yikeHomeExportCanvas, 0, 0);
        yikeHomePageCtx.drawImage(pageImg, 0, 0);
        yikeHomePageCanvas._bannerBBox = { x: 0, y: 0, w: 1170, h: 624 };
    }
}
