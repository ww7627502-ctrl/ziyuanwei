// ==================== 1. 目录结构数据与全局配置 ====================
// 部署加速：把 USE_ASSET_CDN 改为 true 可让 assets 走 jsDelivr CDN（仓库需为 public）。
// 加载失败会自动回退到本地相对路径，本地/localhost 调试时保持关闭即可。
const USE_ASSET_CDN = false;
const ASSET_CDN_BASE = 'https://cdn.jsdelivr.net/gh/ww7627502-ctrl/ziyuanwei@main/';
function cdnUrl(src) { return (USE_ASSET_CDN && typeof src === 'string' && src.indexOf('assets/') === 0) ? ASSET_CDN_BASE + src : src; }
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
        { value: 'dev_1_1_9', text: '【A级】A1.1.9 NA - 会员频道下拉2楼' },
        { value: 'dev_1_1_10', text: 'A1.1.10 NA - 共享页角标' },
        { value: 'dev_1_1_11', text: '【A级】A1.1.11 NA - 视频/音频/共享页右上icon' },
        { value: 'dev_1_1_12', text: '【A级】A1.1.12 NA - 等级福利商品图' },
        { value: 'dev_1_1_13', text: '【A级】A1.1.13 NA - 搜索框icon' },
        { value: 'dev_1_1_15', text: '【A级】A1.1.15 NA - 会员频道大卡' },
        { value: 'dev_1_1_16', text: '【A级】A1.1.16 NA - 我的空间/简单扫描banner' },
        { value: 'dev_1_1_17', text: '【A级】A1.1.17 NA - 活动中心' },
        { value: 'dev_1_1_18', text: '【A级】A1.1.18 NA - 共享点对点' },
        { value: 'dev_1_1_19', text: '【A级】A1.1.19 NA - 共享点对点icon（push）' },
        { value: 'dev_1_1_20', text: '【A级】A1.1.20 NA - 网盘商城feed流长banner' },
        { value: 'dev_1_1_21', text: '【A级】A1.1.21 NA - 商城feed流宽banner' },
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
    'PC': [{
        title: 'A1.2 PC端',
        items: [
            { value: 'pc_home_banner', text: 'A1.2.1 PC-首页文字链banner', placeholder: true },
            { value: 'pc_bottom_tray', text: 'A1.2.2 PC-右下角托盘', placeholder: true },
            { value: 'pc_transfer_corner', text: 'A1.2.3 PC-传输页左下角', placeholder: true },
            { value: 'pc_corner_badge', text: 'A1.2.4 PC-角标', placeholder: true },
            { value: 'pc_cashier_banner', text: 'A1.2.5 PC-收银台运营位banner', placeholder: true },
            { value: 'pc_member_hover_banner', text: 'A1.2.6 PC-会员信息hover状态banner', placeholder: true }
        ]
    }],
    'Web': [{
        title: 'A1.3 Web端',
        items: [
            { value: 'web_link', text: 'A1.3.1 Web-文字链', placeholder: true },
            { value: 'web_popup', text: 'A1.3.2 Web-弹窗', placeholder: true },
            { value: 'web_save_banner', text: 'A1.3.3 Web-保存弹窗banner', placeholder: true },
            { value: 'web_pending_extract', text: 'A1.3.4 Web-待提取页', placeholder: true },
            { value: 'web_extract_page', text: 'A1.3.5 Web-提取页', placeholder: true }
        ]
    }],
    'Wap': [{
        title: 'A1.4 Wap端',
        items: [
            { value: 'wap_corner_badge', text: 'A1.4.1 Wap-有效外链页角标', placeholder: true },
            { value: 'wap_external_page', text: 'A1.4.2 Wap-外链页', placeholder: true }
        ]
    }],
    'Mac': [{
        title: 'A1.5 Mac端',
        items: [
            { value: 'mac_home_banner', text: 'A1.5.1 Mac-首页文字链banner', placeholder: true },
            { value: 'mac_home_badge', text: 'A1.5.2 Mac-首页角标', placeholder: true }
        ]
    }],
    'ipd': [{
        title: 'A1.6 ipd端',
        items: [
            { value: 'ipd_home_banner', text: 'A1.6.1 ipad-首页banner', placeholder: true },
            { value: 'ipd_floating_strip', text: 'A1.6.2 ipad-首页悬浮飘条', placeholder: true }
        ]
    }]
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
        {
            title: 'C1.1 NA端',
            items: [
                { value: 'chuhai_na_1', text: 'C1.1.1 NA - 首页弹窗（大）', placeholder: true },
                { value: 'chuhai_na_2', text: 'C1.1.2 NA - 首页弹窗（小）', placeholder: true },
                { value: 'chuhai_na_3', text: 'C1.1.3 NA - 侧位悬浮', placeholder: true },
                { value: 'chuhai_na_4', text: 'C1.1.4 NA - 福利中心大曝光运营位', placeholder: true },
                { value: 'chuhai_na_5', text: 'C1.1.5 NA - 福利中心banner运营位', placeholder: true },
                { value: 'chuhai_na_6', text: 'C1.1.6 NA - 福利中心单元素图', placeholder: true }
            ]
        }
    ],
    'PC': [
        {
            title: 'C1.2 PC端（暂未配置运营位）',
            items: [
                { value: 'chuhai_pc_1', text: 'C1.2.1 PC - ', placeholder: true },
                { value: 'chuhai_pc_2', text: 'C1.2.2 PC - ', placeholder: true },
                { value: 'chuhai_pc_3', text: 'C1.2.3 PC - ', placeholder: true },
                { value: 'chuhai_pc_4', text: 'C1.2.4 PC - ', placeholder: true }
            ]
        }
    ],
    'Web': [
        {
            title: 'C1.3 Web端',
            items: [
                { value: 'chuhai_web_1', text: 'C1.3.1 Web - ', placeholder: true },
                { value: 'chuhai_web_2', text: 'C1.3.2 Web - ', placeholder: true },
                { value: 'chuhai_web_3', text: 'C1.3.3 Web - ', placeholder: true },
                { value: 'chuhai_web_4', text: 'C1.3.4 Web - ', placeholder: true },
                { value: 'chuhai_web_5', text: 'C1.3.5 Web - ', placeholder: true },
                { value: 'chuhai_web_6', text: 'C1.3.6 Web - ', placeholder: true }
            ]
        }
    ],
    'Wap': [
        {
            title: 'C1.4 Wap端',
            items: [
                { value: 'chuhai_wap_1', text: 'C1.4.1 wap - 有效外链页角标', placeholder: true },
                { value: 'chuhai_wap_2', text: 'C1.4.2 wap - 外链页', placeholder: true }
            ]
        }
    ],
    'Mac': [],
    'ipd': []
};
const WENKU_PAGE_DIRECTORY = {
    'NA': [
        {
            title: 'A1.1 NA端',
            items: [
                { value: 'wenku_na_1', text: 'A1.1.1 NA - 开屏 iOS-3X', placeholder: true },
                { value: 'wenku_na_2', text: 'A1.1.2 NA - 开屏 iOS-2', placeholder: true },
                { value: 'wenku_na_3', text: 'A1.1.3 NA - 开屏 Android-1', placeholder: true },
                { value: 'wenku_na_4', text: 'A1.1.3 NA - 开屏Android-X', placeholder: true },
                { value: 'wenku_na_5', text: 'A1.1.4 NA - 文库APP首页banner', placeholder: true },
                { value: 'wenku_na_6', text: 'A1.1.5 NA - 文库APP首页弹窗', placeholder: true },
                { value: 'wenku_na_7', text: 'A1.1.6 NA - 首页页一楼', placeholder: true },
                { value: 'wenku_mp_1', text: 'A1.2.1 小程序-首页banner设计', placeholder: true }
            ]
        }
    ],
    'PC': [
        {
            title: 'A1.3 PC端',
            items: [
                { value: 'wenku_pc_1', text: 'A1.4.1 文库PC阅读页左上角', placeholder: true },
                { value: 'wenku_pc_2', text: 'A1.4.2 PC首页banner', placeholder: true },
                { value: 'wenku_pc_3', text: 'A1.4.2 文库PC端搜索结果页', placeholder: true }
            ]
        }
    ],
    'Web': [
        {
            title: 'A1.4 WEP端',
            items: [
                { value: 'wenku_wep_1', text: 'A1.2.1 WEP端-首页banner设计', placeholder: true }
            ]
        }
    ],
    'Wap': [],
    'Mac': [],
    'ipd': []
};
const IMPLEMENTED_RESOURCE_PRIORITY = {
    wangpan: {
        NA: ['na_home', 'na_feed', 'na_mypage', 'dev_1_1_9', 'dev_1_1_11', 'dev_1_1_12', 'dev_1_1_13', 'dev_1_1_15', 'dev_1_1_16', 'dev_1_1_17', 'dev_1_1_18', 'dev_1_1_19', 'dev_1_1_20', 'dev_1_1_21']
    },
    yike: {
        NA: ['yike_4', 'yike_5', 'yike_7']
    },
    chuhai: {
        NA: []
    }
};
const TEXT_LIMITS = { homeLine1: 6, homeLine2: 4, capsule: 4, myPageTitle: 9, myPageSubtitle: 8 };
const SHARED_BANNER_EXAMPLE_IMAGE = 'assets/search-banner-image.png';
const config = {
    baseUI: 'assets/home-light.jpg', baseUIDark: 'assets/home-dark.png',
    topHomePageUI: 'assets/top-of-the-home-page.png',
    homeMainBanner: 'assets/home-page-main-banner.png',
    topBannerTitleImg: 'assets/top-banner-w.png',
    myPageBg: 'assets/my-page.jpg', myPageX: -6, myPageY: 1621,
    banner2Svg: 'assets/banner2.svg', bannerX: 90, bannerY: 120,
    feedBg: 'assets/home-feed.jpg', feedBanner: 'assets/home-feed-banner.png', feedBannerX: 587, feedBannerY: 1336,
    feedExampleImage: 'assets/feed-image.png',
    searchBoxPage: 'assets/search-box-page.jpg', searchBoxIcon: 'assets/search-box-icon.png',
    videoAudioSharePage: 'assets/video-audio-share-page.jpg', videoAudioShareImage: 'assets/video-audio-share-image.png',
    tierBasedRewardsProductImagesPage1: 'assets/tier-based-rewards-product-images-page1.jpg', tierBasedRewardsProductImagesPage2: 'assets/tier-based-rewards-product-images-page2.jpg', tierBasedRewardsProductImagesPage3: 'assets/tier-based-rewards-product-images-page3.jpg', tierBasedRewardsProductImagesImage: 'assets/tier-based-rewards-product-images-image.png',
    membershipChannelCardPage: 'assets/membership-channel-card-page.jpg', membershipChannelCardImage: 'assets/membership-channel-card-image.png',
    mySpacePage: 'assets/my-space-page.jpg', simpleScanPage: 'assets/simple-banner-scan.jpg',
    membersChannelPage1: 'assets/members-only-channel-page1.jpg', membersChannelPage2: 'assets/members-only-channel-page2.jpg', membersChannelPage3: 'assets/members-only-channel-page3.jpg',
    membersChannelBanner1: 'assets/members-only-channel-banner1.svg', membersChannelBanner2: 'assets/members-only-channel-banner2.svg', membersChannelBanner3: 'assets/members-only-channel-banner3.svg?v=20260731-banner3fix1',
    searchBtSvg: 'assets/search-bt.svg', searchArrowSvg: 'assets/search-arrow.svg',
    mySpaceExampleImage: SHARED_BANNER_EXAMPLE_IMAGE, simpleScanExampleImage: 'assets/simple-banner-scan-image.png',
    myActivityPage: 'assets/my-activity-enter-banner.jpg', peerSharingPage: 'assets/peer-to-peer-sharing.jpg',
    peerSharingExampleImage: 'assets/peer-to-peer-sharing-image.png', peerSharingIconPushPage: 'assets/share-peer-to-peer-icon-push.jpg',
    peerSharingIconPushExampleImage: SHARED_BANNER_EXAMPLE_IMAGE,
    mallFeedWideBannerPage1: 'assets/mal-eed-wide-banner-page1.jpg',
    mallFeedWideBannerPage2: 'assets/mal-eed-wide-banner-page2.jpg',
    mallFeedWideBannerExampleImage: SHARED_BANNER_EXAMPLE_IMAGE,
    cloudStoreFeedLongBannerPage: 'assets/long-banner-in-the-cloud-store-feed.jpg',
    cloudStoreFeedLongBannerBanner: 'assets/long-banner-in-the-cloud-store-feed-banner.png',
    cloudStoreFeedLongBannerExampleImage: 'assets/long-banner-in-the-cloud-store-feed-image.jpg',
    paymentResultBannerPage: 'assets/rd-banner-on-the-payment-results-page.jpg',
    paymentResultBannerColors: { blue: 'assets/rd-blue.svg', green: 'assets/rd-blue-1.svg', purple: 'assets/rd-purple.svg', red: 'assets/rd-red.svg', yelloworange: 'assets/rd-yelloworange.svg' },
    paymentResultBannerExampleImage: 'assets/membership-channel-card-image.png',
    yikeEquipPage: 'assets/photo-equipment-page.png',
    yikeEquipExampleImage: 'assets/photo-equipment-image.png',
    yikeHomePage: 'assets/photo-home-page.png',
    yikeHomeExampleImage: 'assets/photo-home-image.png',
    yikeHomeBottomSvg: 'assets/photo-home-jianbian.svg',
    yikeCashPage: 'assets/photo-cash-page.jpg',
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
const materialLibPanel = document.getElementById('materialLibPanel');
const materialLibGrid = document.getElementById('materialLibGrid');
const materialLibCount = document.getElementById('materialLibCount');
const materialFileInput = document.getElementById('materialFileInput');
const materialFolderInput = document.getElementById('materialFolderInput');
const smartActionPanel = document.getElementById('smartActionPanel');
const smartActionToggleBtn = document.getElementById('smartActionToggleBtn');
const smartActionTitle = document.getElementById('smartActionTitle');
const smartActionExportBtn = document.getElementById('smartActionExportBtn');
const smartActionDetail = document.getElementById('smartActionDetail');
let smartActionMode = null;
let smartActionPageIndex = 0;
let smartActionPanelExpanded = false;
let materialLibraryItems = [];
let materialLibrarySeed = 0;
const homeControls = document.getElementById('homeControls');
const myPageControls = document.getElementById('myPageControls');
const feedControls = document.getElementById('feedControls');
const searchIconControls = document.getElementById('searchIconControls');
const videoAudioShareControls = document.getElementById('videoAudioShareControls');
const membershipChannelCardControls = document.getElementById('membershipChannelCardControls');
const tierBasedRewardsProductImagesControls = document.getElementById('tierBasedRewardsProductImagesControls');
const membersChannelControls = document.getElementById('membersChannelControls');
const mySpaceControls = document.getElementById('mySpaceControls');
const myActivityControls = document.getElementById('myActivityControls');
const peerSharingControls = document.getElementById('peerSharingControls');
const peerSharingIconPushControls = document.getElementById('peerSharingIconPushControls');
const cloudStoreFeedLongBannerControls = document.getElementById('cloudStoreFeedLongBannerControls');
const mallFeedWideBannerControls = document.getElementById('mallFeedWideBannerControls');
const mallFeedWideBannerPage1ControlPanel = document.getElementById('mallFeedWideBannerPage1ControlPanel');
const mallFeedWideBannerPage2ControlPanel = document.getElementById('mallFeedWideBannerPage2ControlPanel');
const paymentResultBannerControls = document.getElementById('paymentResultBannerControls');
const developingPrompt = document.getElementById('developingPrompt');
const viewDevelopingPrompt = document.getElementById('viewDevelopingPrompt');
const homeView = document.getElementById('homeView');
const myPageView = document.getElementById('myPageView');
const feedView = document.getElementById('feedView');
const searchIconView = document.getElementById('searchIconView');
const videoAudioShareView = document.getElementById('videoAudioShareView');
const membershipChannelCardView = document.getElementById('membershipChannelCardView');
const tierBasedRewardsProductImagesView = document.getElementById('tierBasedRewardsProductImagesView');
const membersChannelView = document.getElementById('membersChannelView');
const mySpaceView = document.getElementById('mySpaceView');
const myActivityView = document.getElementById('myActivityView');
const peerSharingView = document.getElementById('peerSharingView');
const peerSharingIconPushView = document.getElementById('peerSharingIconPushView');
const cloudStoreFeedLongBannerView = document.getElementById('cloudStoreFeedLongBannerView');
const mallFeedWideBannerView = document.getElementById('mallFeedWideBannerView');
const paymentResultBannerView = document.getElementById('paymentResultBannerView');
const topHomePageCanvas = document.getElementById('topHomePageCanvas'); const topHomePageCtx = topHomePageCanvas?.getContext('2d');
const lightCanvas = document.getElementById('lightCanvas'); const lightCtx = lightCanvas?.getContext('2d');
const myPageFullCanvas = document.getElementById('myPageFullCanvas'); const myPageFullCtx = myPageFullCanvas?.getContext('2d');
const feedCanvas = document.getElementById('feedCanvas'); const feedCtx = feedCanvas?.getContext('2d');
const searchPageCanvas = document.getElementById('searchPageCanvas'); const searchPageCtx = searchPageCanvas?.getContext('2d');
const videoAudioSharePageCanvas = document.getElementById('videoAudioSharePageCanvas'); const videoAudioSharePageCtx = videoAudioSharePageCanvas?.getContext('2d');
const membershipChannelCardPageCanvas = document.getElementById('membershipChannelCardPageCanvas'); const membershipChannelCardPageCtx = membershipChannelCardPageCanvas?.getContext('2d');
const tierBasedRewardsProductImagesPage1Canvas = document.getElementById('tierBasedRewardsProductImagesPage1Canvas'); const tierBasedRewardsProductImagesPage1Ctx = tierBasedRewardsProductImagesPage1Canvas?.getContext('2d');
const tierBasedRewardsProductImagesPage2Canvas = document.getElementById('tierBasedRewardsProductImagesPage2Canvas'); const tierBasedRewardsProductImagesPage2Ctx = tierBasedRewardsProductImagesPage2Canvas?.getContext('2d');
const tierBasedRewardsProductImagesPage3Canvas = document.getElementById('tierBasedRewardsProductImagesPage3Canvas'); const tierBasedRewardsProductImagesPage3Ctx = tierBasedRewardsProductImagesPage3Canvas?.getContext('2d');
const membersChannelPage1Canvas = document.getElementById('membersChannelPage1Canvas'); const membersChannelPage1Ctx = membersChannelPage1Canvas?.getContext('2d');
const membersChannelPage1ExportCanvas = document.getElementById('membersChannelPage1ExportCanvas'); const membersChannelPage1ExportCtx = membersChannelPage1ExportCanvas?.getContext('2d');
const membersChannelPage2Canvas = document.getElementById('membersChannelPage2Canvas'); const membersChannelPage2Ctx = membersChannelPage2Canvas?.getContext('2d');
const membersChannelPage2ExportCanvas = document.getElementById('membersChannelPage2ExportCanvas'); const membersChannelPage2ExportCtx = membersChannelPage2ExportCanvas?.getContext('2d');
const membersChannelPage3Canvas = document.getElementById('membersChannelPage3Canvas'); const membersChannelPage3Ctx = membersChannelPage3Canvas?.getContext('2d');
const membersChannelPage3ExportCanvas = document.getElementById('membersChannelPage3ExportCanvas'); const membersChannelPage3ExportCtx = membersChannelPage3ExportCanvas?.getContext('2d');
const mySpacePageCanvas = document.getElementById('mySpacePageCanvas'); const mySpacePageCtx = mySpacePageCanvas?.getContext('2d');
const simpleScanPageCanvas = document.getElementById('simpleScanPageCanvas'); const simpleScanPageCtx = simpleScanPageCanvas?.getContext('2d');
const myActivityPageCanvas = document.getElementById('myActivityPageCanvas'); const myActivityPageCtx = myActivityPageCanvas?.getContext('2d');
const peerSharingPageCanvas = document.getElementById('peerSharingPageCanvas'); const peerSharingPageCtx = peerSharingPageCanvas?.getContext('2d');
const peerSharingIconPushPageCanvas = document.getElementById('peerSharingIconPushPageCanvas'); const peerSharingIconPushPageCtx = peerSharingIconPushPageCanvas?.getContext('2d');
const cloudStoreFeedLongBannerPageCanvas = document.getElementById('cloudStoreFeedLongBannerPageCanvas'); const cloudStoreFeedLongBannerPageCtx = cloudStoreFeedLongBannerPageCanvas?.getContext('2d');
const mallFeedWideBannerPage1Canvas = document.getElementById('mallFeedWideBannerPage1Canvas'); const mallFeedWideBannerPage1Ctx = mallFeedWideBannerPage1Canvas?.getContext('2d');
const mallFeedWideBannerPage2Canvas = document.getElementById('mallFeedWideBannerPage2Canvas'); const mallFeedWideBannerPage2Ctx = mallFeedWideBannerPage2Canvas?.getContext('2d');
const paymentResultBannerPageCanvas = document.getElementById('paymentResultBannerPageCanvas'); const paymentResultBannerPageCtx = paymentResultBannerPageCanvas?.getContext('2d');
const topHomeBannerCanvas = document.getElementById('topHomeBannerCanvas'); const topHomeBannerCtx = topHomeBannerCanvas?.getContext('2d');
const lightBannerCanvas = document.getElementById('lightBannerCanvas'); const lightBannerCtx = lightBannerCanvas?.getContext('2d');
const darkBannerCanvas = document.getElementById('darkBannerCanvas'); const darkBannerCtx = darkBannerCanvas?.getContext('2d');
const myPageCanvas = document.getElementById('myPageCanvas'); const myPageCtx = myPageCanvas?.getContext('2d');
const myPageDarkCanvas = document.getElementById('myPageDarkCanvas'); const myPageDarkCtx = myPageDarkCanvas?.getContext('2d');
const feedBannerCanvas = document.getElementById('feedBannerCanvas'); const feedBannerCtx = feedBannerCanvas?.getContext('2d');
const searchIconExportCanvas = document.getElementById('searchIconExportCanvas'); const searchIconExportCtx = searchIconExportCanvas?.getContext('2d');
const videoAudioShareExportCanvas = document.getElementById('videoAudioShareExportCanvas'); const videoAudioShareExportCtx = videoAudioShareExportCanvas?.getContext('2d');
const membershipChannelCardExportCanvas = document.getElementById('membershipChannelCardExportCanvas'); const membershipChannelCardExportCtx = membershipChannelCardExportCanvas?.getContext('2d');
const tierBasedRewardsProductImagesExportCanvas = document.getElementById('tierBasedRewardsProductImagesExportCanvas'); const tierBasedRewardsProductImagesExportCtx = tierBasedRewardsProductImagesExportCanvas?.getContext('2d');
const mySpaceExportCanvas = document.getElementById('mySpaceExportCanvas'); const mySpaceExportCtx = mySpaceExportCanvas?.getContext('2d');
const simpleScanExportCanvas = document.getElementById('simpleScanExportCanvas'); const simpleScanExportCtx = simpleScanExportCanvas?.getContext('2d');
const myActivityExportCanvas = document.getElementById('myActivityExportCanvas'); const myActivityExportCtx = myActivityExportCanvas?.getContext('2d');
const peerSharingExportCanvas = document.getElementById('peerSharingExportCanvas'); const peerSharingExportCtx = peerSharingExportCanvas?.getContext('2d');
const peerSharingIconPushExportCanvas = document.getElementById('peerSharingIconPushExportCanvas'); const peerSharingIconPushExportCtx = peerSharingIconPushExportCanvas?.getContext('2d');
const cloudStoreFeedLongBannerExportCanvas = document.getElementById('cloudStoreFeedLongBannerExportCanvas'); const cloudStoreFeedLongBannerExportCtx = cloudStoreFeedLongBannerExportCanvas?.getContext('2d');
const mallFeedWideBannerExportCanvas = document.getElementById('mallFeedWideBannerExportCanvas'); const mallFeedWideBannerExportCtx = mallFeedWideBannerExportCanvas?.getContext('2d');
const mallFeedWideBannerPage1ExportCanvas = document.getElementById('mallFeedWideBannerPage1ExportCanvas'); const mallFeedWideBannerPage1ExportCtx = mallFeedWideBannerPage1ExportCanvas?.getContext('2d');
const mallFeedWideBannerPage2ExportCanvas = document.getElementById('mallFeedWideBannerPage2ExportCanvas'); const mallFeedWideBannerPage2ExportCtx = mallFeedWideBannerPage2ExportCanvas?.getContext('2d');
const paymentResultBannerExportCanvas = document.getElementById('paymentResultBannerExportCanvas'); const paymentResultBannerExportCtx = paymentResultBannerExportCanvas?.getContext('2d');
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
const feedGradAngle = document.getElementById('feedGradAngle'); const feedGradAngleVal = document.getElementById('feedGradAngleVal'); const feedGradStop1 = document.getElementById('feedGradStop1'); const feedGradStop1Val = document.getElementById('feedGradStop1Val'); const feedGradStop2 = document.getElementById('feedGradStop2'); const feedGradStop2Val = document.getElementById('feedGradStop2Val'); const feedSolidColor = document.getElementById('feedSolidColor');
const feedTitleInput = document.getElementById('feedTitle'); const feedTitleColor = document.getElementById('feedTitleColor');
const feedSubtitleInput = document.getElementById('feedSubtitle'); const feedSubtitleColor = document.getElementById('feedSubtitleColor');
const feedBtnTextInput = document.getElementById('feedBtnText');
const membershipChannelCardTitle = document.getElementById('membershipChannelCardTitle');
const membershipChannelCardTitleLine2 = document.getElementById('membershipChannelCardTitleLine2');
const membershipChannelCardBgColor1 = document.getElementById('membershipChannelCardBgColor1');
const membershipChannelCardBgColor2 = document.getElementById('membershipChannelCardBgColor2');
const membershipChannelCardTextColor = document.getElementById('membershipChannelCardTextColor');
const membershipChannelCardSub = document.getElementById('membershipChannelCardSub');
const membershipChannelCardBtnText = document.getElementById('membershipChannelCardBtnText');
const membersChannelBtnGrad1 = document.getElementById('membersChannelBtnGrad1'); const membersChannelBtnGrad2 = document.getElementById('membersChannelBtnGrad2');
const membersChannelBtnGradAngle = document.getElementById('membersChannelBtnGradAngle'); const membersChannelBtnGradAngleVal = document.getElementById('membersChannelBtnGradAngleVal'); const membersChannelBtnGradStop1 = document.getElementById('membersChannelBtnGradStop1'); const membersChannelBtnGradStop1Val = document.getElementById('membersChannelBtnGradStop1Val'); const membersChannelBtnGradStop2 = document.getElementById('membersChannelBtnGradStop2'); const membersChannelBtnGradStop2Val = document.getElementById('membersChannelBtnGradStop2Val');
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
const cloudStoreFeedLongBannerTitle = document.getElementById('cloudStoreFeedLongBannerTitle'); const cloudStoreFeedLongBannerSub = document.getElementById('cloudStoreFeedLongBannerSub'); const cloudStoreFeedLongBannerBtnText = document.getElementById('cloudStoreFeedLongBannerBtnText');
const mallFeedWideBannerTitle = document.getElementById('mallFeedWideBannerTitle'); const mallFeedWideBannerSub = document.getElementById('mallFeedWideBannerSub'); const mallFeedWideBannerBtnText = document.getElementById('mallFeedWideBannerBtnText');
const mallFeedWideBannerGrad1 = document.getElementById('mallFeedWideBannerGrad1'); const mallFeedWideBannerGrad2 = document.getElementById('mallFeedWideBannerGrad2');
const mallFeedWideBannerTitleColor = document.getElementById('mallFeedWideBannerTitleColor'); const mallFeedWideBannerSubColor = document.getElementById('mallFeedWideBannerSubColor'); const mallFeedWideBannerBtnColor = document.getElementById('mallFeedWideBannerBtnColor');
const mallFeedWideBannerPage2Title = document.getElementById('mallFeedWideBannerPage2Title'); const mallFeedWideBannerPage2Sub = document.getElementById('mallFeedWideBannerPage2Sub'); const mallFeedWideBannerPage2BtnText = document.getElementById('mallFeedWideBannerPage2BtnText');
const mallFeedWideBannerPage2Grad1 = document.getElementById('mallFeedWideBannerPage2Grad1'); const mallFeedWideBannerPage2Grad2 = document.getElementById('mallFeedWideBannerPage2Grad2');
const mallFeedWideBannerPage2TitleColor = document.getElementById('mallFeedWideBannerPage2TitleColor'); const mallFeedWideBannerPage2SubColor = document.getElementById('mallFeedWideBannerPage2SubColor'); const mallFeedWideBannerPage2BtnColor = document.getElementById('mallFeedWideBannerPage2BtnColor');
const paymentResultBannerTitle = document.getElementById('paymentResultBannerTitle'); const paymentResultBannerSub = document.getElementById('paymentResultBannerSub'); const paymentResultBannerBtnText = document.getElementById('paymentResultBannerBtnText');
const paymentResultBannerColorSelect = document.getElementById('paymentResultBannerColorSelect');
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
    wenku: { src: null, img: null },
};
let userImgObj = null; let feedBgBannerObj = null; let topBgBannerObj = null; let userTopBannerTitleObj = null;
function getActiveBusinessLineKey() { return currentBU === 'yike' ? 'yike' : currentBU === 'chuhai' ? 'chuhai' : currentBU === 'wenku' ? 'wenku' : 'wangpan'; }
function getDefaultUploadPreviewSrc(selectedResource = document.querySelector('.resource-item.active')?.dataset.value) {
    const key = getActiveBusinessLineKey();
    if (key === 'yike') {
        if (selectedResource === 'yike_4') return config.yikeHomeExampleImage;
        if (selectedResource === 'yike_5') return config.yikeEquipExampleImage;
        if (selectedResource === 'yike_7') return config.yikeCashExampleImage;
        return config.yikeEquipExampleImage;
    }
    if (selectedResource === 'dev_1_1_9') return config.feedExampleImage;
    if (selectedResource === 'dev_1_1_11') return config.videoAudioShareImage;
    if (selectedResource === 'dev_1_1_12') return config.tierBasedRewardsProductImagesImage;
    if (selectedResource === 'dev_1_1_15') return config.membershipChannelCardImage;
    if (selectedResource === 'dev_1_1_19') return config.peerSharingIconPushExampleImage;
    if (selectedResource === 'dev_1_1_20') return config.cloudStoreFeedLongBannerExampleImage;
    if (selectedResource === 'dev_1_1_21') return config.mallFeedWideBannerExampleImage;
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
let currentPaymentResultBannerColor = 'blue';
const globalImageCache = {}; const globalSvgTextCache = {};
async function renderPaymentResultBannerCanvas() {
    if (!paymentResultBannerPageCanvas || !paymentResultBannerPageCtx || !paymentResultBannerExportCanvas || !paymentResultBannerExportCtx) return;
    const exportW = 522;
    const exportH = 240;
    const imageBox = { x: 25, y: 35, w: 170, h: 170 };
    const pagePlacement = { x: 30, y: 1878 };
    const colorKey = paymentResultBannerColorSelect?.value || currentPaymentResultBannerColor || 'blue';
    currentPaymentResultBannerColor = colorKey;
    const bannerSrc = config.paymentResultBannerColors[colorKey] || config.paymentResultBannerColors.blue;

    if (!globalImageCache[bannerSrc]) globalImageCache[bannerSrc] = await loadImage(bannerSrc);
    if (!globalImageCache[config.paymentResultBannerExampleImage]) globalImageCache[config.paymentResultBannerExampleImage] = await loadImage(config.paymentResultBannerExampleImage);
    if (!globalImageCache[config.paymentResultBannerPage]) globalImageCache[config.paymentResultBannerPage] = await loadImage(config.paymentResultBannerPage);

    const bannerImg = globalImageCache[bannerSrc];
    const exampleImg = userImgObj || globalImageCache[config.paymentResultBannerExampleImage];
    const pageImg = globalImageCache[config.paymentResultBannerPage];

    paymentResultBannerExportCanvas.width = exportW;
    paymentResultBannerExportCanvas.height = exportH;
    setupHighQualityContext(paymentResultBannerExportCtx);
    paymentResultBannerExportCtx.clearRect(0, 0, exportW, exportH);
    if (bannerImg && bannerImg.width) paymentResultBannerExportCtx.drawImage(bannerImg, 0, 0, exportW, exportH);
    if (exampleImg && exampleImg.width) drawContainedImage(paymentResultBannerExportCtx, exampleImg, imageBox);

    const ctx = paymentResultBannerExportCtx;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
    ctx.fillStyle = '#000000';
    ctx.font = 'normal 39px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif';
    ctx.fillText(paymentResultBannerTitle?.value || '主标题最多七字', 215, 47);
    ctx.fillStyle = '#787878';
    ctx.font = 'normal 33px "FZLanTingHeiS-R-GB", "Microsoft YaHei", sans-serif';
    ctx.fillText(paymentResultBannerSub?.value || '副标题最多八个字', 215, 97);

    const buttonBox = { x: 215, y: 152, w: 145, h: 47 };
    ctx.save();
    ctx.lineWidth = 1.35;
    ctx.strokeStyle = '#000000';
    drawRoundRect(ctx, buttonBox.x + ctx.lineWidth / 2, buttonBox.y + ctx.lineWidth / 2, buttonBox.w - ctx.lineWidth, buttonBox.h - ctx.lineWidth, (buttonBox.h - ctx.lineWidth) / 2);
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#000000';
    ctx.font = 'normal 36px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(paymentResultBannerBtnText?.value || '三个字', buttonBox.x + buttonBox.w / 2, buttonBox.y + buttonBox.h / 2);

    if (pageImg && pageImg.width) {
        paymentResultBannerPageCanvas.width = pageImg.width;
        paymentResultBannerPageCanvas.height = pageImg.height;
        setupHighQualityContext(paymentResultBannerPageCtx);
        paymentResultBannerPageCtx.clearRect(0, 0, pageImg.width, pageImg.height);
        paymentResultBannerPageCtx.drawImage(pageImg, 0, 0);
        paymentResultBannerPageCtx.drawImage(paymentResultBannerExportCanvas, 0, 0, exportW, exportH, pagePlacement.x, pagePlacement.y, exportW, exportH);
        paymentResultBannerPageCanvas._bannerBBox = { x: pagePlacement.x, y: pagePlacement.y, w: exportW, h: exportH };
    }
}
// ==================== ✨ A/B 测试核心状态库与字典映射 ====================
window.abTestCopies = {};
window.abTestActiveIndex = {};
const MODULE_INPUT_MAP = {
    'home': [{ id: 'textLine1', key: 'line1', limit: 6 }, { id: 'textLine2', key: 'line2', limit: 4 }],
    'myPage': [{ id: 'myPageTitle', key: 'title', limit: 9 }, { id: 'myPageSubtitle', key: 'sub', limit: 8 }, { id: 'textCapsule', key: 'capsule', limit: 4 }, { id: 'myPageHighlight', key: 'highlight', limit: 9 }],
    'feed': [{ id: 'feedTitle', key: 'title', limit: 7 }, { id: 'feedSubtitle', key: 'sub', limit: 10 }, { id: 'feedBtnText', key: 'btn', limit: 4 }],
    'membershipChannelCard': [{ id: 'membershipChannelCardTitle', key: 'title', limit: 6 }, { id: 'membershipChannelCardTitleLine2', key: 'title2', limit: 6 }, { id: 'membershipChannelCardSub', key: 'sub', limit: 9 }, { id: 'membershipChannelCardBtnText', key: 'btn', limit: 3 }],
    'membersChannelPage1': [{ id: 'membersChannelPage1Title', key: 'title', limit: 11 }, { id: 'membersChannelPage1Sub', key: 'sub', limit: 8 }, { id: 'membersChannelPage1Btn', key: 'btn', limit: 3 }],
    'membersChannelPage2': [{ id: 'membersChannelPage2Title', key: 'title', limit: 10 }, { id: 'membersChannelPage2Btn', key: 'btn', limit: 4 }],
    'membersChannelPage3': [{ id: 'membersChannelPage3Title', key: 'title', limit: 10 }, { id: 'membersChannelPage3Btn', key: 'btn', limit: 4 }],
    'mySpace': [{ id: 'mySpaceTitle', key: 'title', limit: 11 }, { id: 'mySpaceSub', key: 'sub', limit: 8 }, { id: 'mySpaceBtnText', key: 'btn', limit: 4 }],
    'simpleScan': [{ id: 'simpleScanTitle', key: 'title', limit: 11 }, { id: 'simpleScanSub', key: 'sub', limit: 8 }, { id: 'simpleScanBtnText', key: 'btn', limit: 4 }, { id: 'simpleScanHighlight', key: 'highlight', limit: 6 }],
    'activity': [{ id: 'myActivityTitle1', key: 'title1', limit: 7 }, { id: 'myActivityTitle2', key: 'title2', limit: 7 }, { id: 'myActivitySub', key: 'sub', limit: 8 }, { id: 'myActivityBtnText', key: 'btn', limit: 4 }],
    'peerSharing': [{ id: 'peerSharingTitle1', key: 'title1', limit: 7 }, { id: 'peerSharingTitle2', key: 'title2', limit: 7 }, { id: 'peerSharingSub', key: 'sub', limit: 8 }, { id: 'peerSharingBtnText', key: 'btn', limit: 4 }],
    'cloudStoreFeedLongBanner': [{ id: 'cloudStoreFeedLongBannerTitle', key: 'title', limit: 8 }, { id: 'cloudStoreFeedLongBannerSub', key: 'sub', limit: 8 }, { id: 'cloudStoreFeedLongBannerBtnText', key: 'btn', limit: 3 }],
    'mallFeedWideBanner': [{ id: 'mallFeedWideBannerTitle', key: 'title', limit: 8 }, { id: 'mallFeedWideBannerSub', key: 'sub', limit: 8 }, { id: 'mallFeedWideBannerBtnText', key: 'btn', limit: 3 }],
    'mallFeedWideBannerPage1': [{ id: 'mallFeedWideBannerTitle', key: 'title', limit: 8 }, { id: 'mallFeedWideBannerSub', key: 'sub', limit: 8 }, { id: 'mallFeedWideBannerBtnText', key: 'btn', limit: 3 }],
    'mallFeedWideBannerPage2': [{ id: 'mallFeedWideBannerPage2Title', key: 'title', limit: 8 }, { id: 'mallFeedWideBannerPage2Sub', key: 'sub', limit: 8 }, { id: 'mallFeedWideBannerPage2BtnText', key: 'btn', limit: 3 }],
    'paymentResultBanner': [{ id: 'paymentResultBannerTitle', key: 'title', limit: 7 }, { id: 'paymentResultBannerSub', key: 'sub', limit: 8 }, { id: 'paymentResultBannerBtnText', key: 'btn', limit: 3 }],
    'yikeEquip': [{ id: 'yikeEquipTitle', key: 'title', limit: 9 }, { id: 'yikeEquipSub', key: 'sub', limit: 12 }, { id: 'yikeEquipBtnText', key: 'btn', limit: 4 }],
    'yikeHome': [{ id: 'yikeHomeTitle', key: 'title', limit: 8 }, { id: 'yikeHomeSub', key: 'sub', limit: 11 }, { id: 'yikeHomeSubHighlight', key: 'highlight', limit: 11 }, { id: 'yikeHomeTitleColor', key: 'titleColor', limit: 7 }, { id: 'yikeHomeSubColor', key: 'subColor', limit: 7 }, { id: 'yikeHomeSubHighlightColor', key: 'highlightColor', limit: 7 }],
    'yikeCash': [{ id: 'yikeCashTitle', key: 'title', limit: 12 }, { id: 'yikeCashHighlight', key: 'highlight', limit: 12 }, { id: 'yikeCashTitleColor', key: 'titleColor', limit: 7 }, { id: 'yikeCashHighlightColor', key: 'highlightColor', limit: 7 }, { id: 'yikeCashGrad1', key: 'grad1', limit: 7 }, { id: 'yikeCashGrad2', key: 'grad2', limit: 7 }],
};
const MODULE_RENDER_FNS = {
    'home': renderHomeCanvas, 'myPage': renderMyPage, 'feed': renderFeedCanvas,
    'videoAudioShare': renderVideoAudioShareCanvas, 'membershipChannelCard': renderMembershipChannelCardCanvas,
    'membersChannelPage1': renderMembersChannelPage1Canvas, 'membersChannelPage2': renderMembersChannelPage2Canvas, 'membersChannelPage3': renderMembersChannelPage3Canvas,
    'mySpace': renderMySpaceCanvas, 'simpleScan': renderSimpleScanCanvas,
    'activity': renderMyActivityCanvas, 'peerSharing': renderPeerSharingCanvas,
    'cloudStoreFeedLongBanner': renderCloudStoreFeedLongBannerCanvas,
    'mallFeedWideBanner': renderMallFeedWideBannerCanvas,
    'mallFeedWideBannerPage1': renderMallFeedWideBannerCanvas,
    'mallFeedWideBannerPage2': renderMallFeedWideBannerCanvas,
    'paymentResultBanner': renderPaymentResultBannerCanvas,
    'yikeEquip': renderYikeEquipCanvas, 'yikeHome': renderYikeHomeCanvas,
    'yikeCash': renderYikeCashCanvas
};
const AI_RESOURCE_MATCHERS = [
    { resource: 'na_home', bu: 'wangpan', label: 'A1.1.3 NA - 13.14首页顶部沉浸banner', patterns: [/A\s*1\.1\.3/i, /13\.14\s*首页顶部沉浸\s*banner/i, /首页顶部沉浸\s*banner/i, /首页\s*banner\s*(尺寸|尺|A|宝宝相簿|宝宝相册)/i, /首页\s*banner[\s\S]{0,120}(沉浸式|宝宝相簿|宝宝相册|去创建|立即创建)/i, /沉浸式\s*banner/i, /首页\s*banner.*420\s*[×x*]\s*282/i] },
    { resource: 'na_feed', bu: 'wangpan', label: 'A1.1.4 NA - 首页feed 10出1', patterns: [/A\s*1\.1\.4/i, /首页\s*feed/i, /首页运营\s*10\s*出\s*1/i, /10\s*出\s*1/, /561\s*[×x*]\s*750/] },
    { resource: 'na_mypage', bu: 'wangpan', label: 'A1.1.5 NA - 我的页面banner', patterns: [/A\s*1\.1\.5/i, /我的(页面|页).*banner/i, /我的页轮播\s*banner/i, /我的(页面|页).*1182\s*[×x*]\s*(225|252)/] },
    { resource: 'dev_1_1_11', bu: 'wangpan', label: 'A1.1.11 NA - 视频/音频/共享页右上icon', patterns: [/A\s*1\.1\.11/i, /视频.*音频.*共享页.*右上(?:icon|角标)/i, /右上(?:icon|角标)/i, /video[-_\s]?audio[-_\s]?share/i, /80\s*[×x*]\s*80/, /114\s*[×x*]\s*114/] },
    { resource: 'dev_1_1_12', bu: 'wangpan', label: 'A1.1.12 NA - 等级福利商品图', patterns: [/A\s*1\.1\.12/i, /等级福利商品图/i, /tier[-_\s]?based[-_\s]?rewards[-_\s]?product[-_\s]?images/i, /342\s*[×x*]\s*342/] },
    { resource: 'dev_1_1_15', bu: 'wangpan', label: 'A1.1.15 NA - 会员频道大卡', patterns: [/A\s*1\.1\.15/i, /会员频道大卡/i, /membership[-_\s]?channel[-_\s]?card/i, /F4F476/i, /83FFE6/i] },
    { resource: 'dev_1_1_9', bu: 'wangpan', label: 'A1.1.9 NA - 会员频道下拉2楼', patterns: [/A\s*1\.1\.9(?:\.[123])?/i, /会员频道.*(?:下拉|下2楼|2楼|单列|双列|三列)/i, /member[s-]?only[-\s]?channel[-_\s]?page[123]/i, /members[-_\s]?only[-_\s]?channel[-_\s]?banner[123]/i] },
    { resource: 'dev_1_1_13', bu: 'wangpan', label: 'A1.1.13 NA - 搜索框icon', patterns: [/A\s*1\.1\.13/i, /搜索框\s*icon/i, /搜索词\s*icon/i, /搜索\s*icon/i, /204\s*[×x*]\s*204/] },
    { resource: 'dev_1_1_16', bu: 'wangpan', label: 'A1.1.16 NA - 我的空间banner', patterns: [/A\s*1\.1\.16/i, /我的空间/i, /任务中心/i, /分享页/i, /分享页\s*\/\s*任务中心/i, /任务中心\s*-?\s*banner/i, /简单扫描/i] },
    { resource: 'dev_1_1_17', bu: 'wangpan', label: 'A1.1.17 NA - 活动中心', patterns: [/A\s*1\.1\.17/i, /活动中心/i, /670\s*[×x*]\s*320/] },
    { resource: 'dev_1_1_18', bu: 'wangpan', label: 'A1.1.18 NA - 共享点对点', patterns: [/A\s*1\.1\.18/i, /共享点对点/i, /点对点/i, /1023\s*[×x*]\s*488/] },
    { resource: 'dev_1_1_19', bu: 'wangpan', label: 'A1.1.19 NA - 共享点对点icon（push）', patterns: [/A\s*1\.1\.19/i, /共享点对点icon/i, /share[-_\s]?peer[-_\s]?to[-_\s]?peer[-_\s]?icon[-_\s]?push/i, /300\s*[×x*]\s*300/i, /300\s*[×x*]\s*330/i] },
    { resource: 'dev_1_1_20', bu: 'wangpan', label: 'A1.1.20 NA - 网盘商城feed流长banner', patterns: [/A\s*1\.1\.20/i, /网盘商城\s*feed流长\s*banner/i, /网盘商城\s*feed.*长\s*banner/i, /long[-_\s]?banner[-_\s]?in[-_\s]?the[-_\s]?cloud[-_\s]?store[-_\s]?feed/i, /522\s*[×x*]\s*837/i] },
    { resource: 'dev_1_1_21', bu: 'wangpan', label: 'A1.1.21 NA - 商城feed流宽banner', patterns: [/A\s*1\.1\.21/i, /商城\s*feed流\s*宽\s*banner/i, /商城\s*feed.*宽\s*banner/i, /mall[-_\s]?feed[-_\s]?wide[-_\s]?banner/i, /mal[-_\s]?eed[-_\s]?wide[-_\s]?banner/i, /522\s*[×x*]\s*336/i] },
    { resource: 'yike_4', bu: 'yike', label: 'B1.1.4 NA - 首页banner', patterns: [/B\s*1\.1\.4/i, /一刻.*首页\s*banner/i, /一刻相册.*首页/i] },
    { resource: 'yike_5', bu: 'yike', label: 'B1.1.5 NA - 设备banner', patterns: [/B\s*1\.1\.5/i, /一刻.*设备\s*banner/i] },
    { resource: 'yike_7', bu: 'yike', label: 'B1.1.7 NA - 收银台banner', patterns: [/B\s*1\.1\.7/i, /一刻.*收银台\s*banner/i, /一刻.*收银台/i] }
];
const RESOURCE_VIEW_MAP = {
    na_home: 'homeView',
    na_mypage: 'myPageView',
    na_feed: 'feedView',
    dev_1_1_11: 'videoAudioShareView',
    dev_1_1_12: 'tierBasedRewardsProductImagesView',
    dev_1_1_15: 'membershipChannelCardView',
    dev_1_1_9: 'membersChannelView',
    dev_1_1_13: 'searchIconView',
    dev_1_1_16: 'mySpaceView',
    dev_1_1_17: 'myActivityView',
    dev_1_1_18: 'peerSharingView',
    dev_1_1_19: 'peerSharingIconPushView',
    dev_1_1_20: 'cloudStoreFeedLongBannerView',
    dev_1_1_21: 'mallFeedWideBannerView',
    dev_1_1_23: 'paymentResultBannerView',
    yike_4: 'yikeHomeView',
    yike_5: 'yikeEquipView',
    yike_7: 'yikeCashView'
};
const RESOURCE_CONTROL_MAP = {
    na_home: 'homeControls',
    homeTop: 'homeTopControlPanel',
    homeLight: 'homeLightControlPanel',
    na_mypage: 'myPageControls',
    na_feed: 'feedControls',
    dev_1_1_11: 'videoAudioShareControls',
    dev_1_1_12: 'tierBasedRewardsProductImagesControls',
    dev_1_1_15: 'membershipChannelCardControls',
    tierBasedRewardsProductImagesPage1: 'tierBasedRewardsProductImagesPage1ControlPanel',
    tierBasedRewardsProductImagesPage2: 'tierBasedRewardsProductImagesPage2ControlPanel',
    tierBasedRewardsProductImagesPage3: 'tierBasedRewardsProductImagesPage3ControlPanel',
    dev_1_1_9: 'membersChannelControls',
    membersChannelPage1: 'membersChannelPage1ControlPanel',
    membersChannelPage2: 'membersChannelPage2ControlPanel',
    membersChannelPage3: 'membersChannelPage3ControlPanel',
    dev_1_1_13: 'searchIconControls',
    dev_1_1_16: 'mySpaceControls',
    mySpace: 'mySpaceControlPanel',
    simpleScan: 'simpleScanControlPanel',
    dev_1_1_17: 'myActivityControls',
    dev_1_1_18: 'peerSharingControls',
    dev_1_1_19: 'peerSharingIconPushControls',
    dev_1_1_20: 'cloudStoreFeedLongBannerControls',
    dev_1_1_21: 'mallFeedWideBannerControls',
    mallFeedWideBannerPage1: 'mallFeedWideBannerPage1ControlPanel',
    mallFeedWideBannerPage2: 'mallFeedWideBannerPage2ControlPanel',
    dev_1_1_23: 'paymentResultBannerControls',
    yike_4: 'yikeHomeControls',
    yike_5: 'yikeEquipControls',
    yike_7: 'yikeCashControls'
};
const RESOURCE_PREVIEW_TARGET_MAP = {
    homeTop: 'topHomePageCanvas',
    homeLight: 'lightCanvas',
    dev_1_1_11: 'videoAudioSharePageCanvas',
    dev_1_1_12: 'tierBasedRewardsProductImagesView',
    dev_1_1_15: 'membershipChannelCardPageCanvas',
    tierBasedRewardsProductImagesPage1: 'tierBasedRewardsProductImagesPage1Canvas',
    tierBasedRewardsProductImagesPage2: 'tierBasedRewardsProductImagesPage2Canvas',
    tierBasedRewardsProductImagesPage3: 'tierBasedRewardsProductImagesPage3Canvas',
    membersChannelPage1: 'membersChannelPage1Canvas',
    membersChannelPage2: 'membersChannelPage2Canvas',
    membersChannelPage3: 'membersChannelPage3Canvas',
    mySpace: 'mySpacePageCanvas',
    simpleScan: 'simpleScanPageCanvas',
    dev_1_1_19: 'peerSharingIconPushPageCanvas',
    dev_1_1_20: 'cloudStoreFeedLongBannerPageCanvas',
    dev_1_1_21: 'mallFeedWideBannerView',
    mallFeedWideBannerPage1: 'mallFeedWideBannerPage1Canvas',
    mallFeedWideBannerPage2: 'mallFeedWideBannerPage2Canvas',
    dev_1_1_23: 'paymentResultBannerPageCanvas'
};
const VIEW_RESOURCE_MAP = {
    ...Object.fromEntries(Object.entries(RESOURCE_VIEW_MAP).map(([resource, viewId]) => [viewId, resource])),
    topHomePageCanvas: 'homeTop',
    lightCanvas: 'homeLight',
    videoAudioSharePageCanvas: 'dev_1_1_11',
    membershipChannelCardPageCanvas: 'dev_1_1_15',
    tierBasedRewardsProductImagesPage1Canvas: 'tierBasedRewardsProductImagesPage1',
    tierBasedRewardsProductImagesPage2Canvas: 'tierBasedRewardsProductImagesPage2',
    tierBasedRewardsProductImagesPage3Canvas: 'tierBasedRewardsProductImagesPage3',
    membersChannelPage1Canvas: 'membersChannelPage1',
    membersChannelPage2Canvas: 'membersChannelPage2',
    membersChannelPage3Canvas: 'membersChannelPage3',
    mySpacePageCanvas: 'mySpace',
    simpleScanPageCanvas: 'simpleScan',
    peerSharingIconPushPageCanvas: 'dev_1_1_19',
    cloudStoreFeedLongBannerPageCanvas: 'dev_1_1_20',
    mallFeedWideBannerPage1Canvas: 'mallFeedWideBannerPage1',
    mallFeedWideBannerPage2Canvas: 'mallFeedWideBannerPage2',
    paymentResultBannerPageCanvas: 'dev_1_1_23'
};
const RESOURCE_LIST_ACTIVE_MAP = {
    homeTop: 'na_home',
    homeLight: 'na_home',
    dev_1_1_11: 'dev_1_1_11',
    dev_1_1_12: 'dev_1_1_12',
    dev_1_1_15: 'dev_1_1_15',
    mySpace: 'dev_1_1_16',
    simpleScan: 'dev_1_1_16',
    peerSharingIconPushPageCanvas: 'dev_1_1_19',
    cloudStoreFeedLongBannerPageCanvas: 'dev_1_1_20',
    mallFeedWideBannerPage1: 'dev_1_1_21',
    mallFeedWideBannerPage2: 'dev_1_1_21',
    paymentResultBannerPageCanvas: 'dev_1_1_23',
    tierBasedRewardsProductImagesPage1: 'dev_1_1_12',
    tierBasedRewardsProductImagesPage2: 'dev_1_1_12',
    tierBasedRewardsProductImagesPage3: 'dev_1_1_12',
    membersChannelPage1: 'dev_1_1_9',
    membersChannelPage2: 'dev_1_1_9',
    membersChannelPage3: 'dev_1_1_9'
};
const RESOURCE_EXPORT_CHECKS = {
    na_home: ['chkTopHomePhone', 'chkTopHomeBanner', 'chkHomePhone', 'chkHomeBannerLight', 'chkHomeBannerDark', 'chkHomeKV'],
    na_mypage: ['chkMyPageBannerLight', 'chkMyPageBannerDark', 'chkMyPagePhone'],
    na_feed: ['chkFeedBannerExport', 'chkFeedPhone'],
    dev_1_1_11: ['chkVideoAudioShareIconExport', 'chkVideoAudioSharePageExport'],
    dev_1_1_12: ['chkTierBasedRewardsProductImagesExport', 'chkTierBasedRewardsProductImagesPage1Export', 'chkTierBasedRewardsProductImagesPage2Export', 'chkTierBasedRewardsProductImagesPage3Export'],
    dev_1_1_15: ['chkMembershipChannelCardExport', 'chkMembershipChannelCardPageExport'],
    dev_1_1_9: ['chkMembersChannelPage1Banner', 'chkMembersChannelPage1Page', 'chkMembersChannelPage2Banner', 'chkMembersChannelPage2Page', 'chkMembersChannelPage3Banner', 'chkMembersChannelPage3Page'],
    dev_1_1_13: ['chkSearchIconExport', 'chkSearchPageExport'],
    dev_1_1_17: ['chkMyActivityExport', 'chkMyActivityPageExport'],
    dev_1_1_18: ['chkPeerSharingExport', 'chkPeerSharingPageExport'],
    dev_1_1_19: ['chkPeerSharingIconPushExport', 'chkPeerSharingIconPushPageExport'],
    dev_1_1_20: ['chkCloudStoreFeedLongBannerExport'],
    dev_1_1_21: ['chkMallFeedWideBannerExport'],
    yike_4: ['chkYikeHomeExport', 'chkYikeHomePageExport'],
    yike_5: ['chkYikeEquipExport', 'chkYikeEquipPageExport'],
    yike_7: ['chkYikeCashExport', 'chkYikeCashPageExport']
};
let isAiResultPreviewMode = false;
let lastAiRecognizedModules = [];
let lastAiRenderOptions = {};
function normalizeDemandTextForMatch(str = '') {
    return String(str)
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/gi, ' ')
        .replace(/⼼/g, '心').replace(/⻚/g, '页').replace(/⽹/g, '网').replace(/⻛/g, '风').replace(/⾸/g, '首').replace(/⻔/g, '门')
        .replace(/\s+/g, ' ')
        .trim();
}
function compactDemandTextForMatch(str = '') {
    let text = normalizeDemandTextForMatch(str);
    for (let i = 0; i < 3; i++) {
        text = text.replace(/([\u4e00-\u9fff])\s+(?=[\u4e00-\u9fff])/g, '$1');
    }
    return text.replace(/([A-Za-z])\s+(?=[A-Za-z])/g, '$1');
}
function pruneConflictingResourceMatches(matched, normalized, compacted) {
    if (!matched.includes('na_feed') || !matched.includes('dev_1_1_21')) return matched;
    const hasStrongFeed10 = /A\s*1\.1\.4|首页运营\s*10\s*出\s*1|10\s*出\s*1/i.test(normalized) || /10\s*出\s*1/i.test(compacted);
    const hasExplicitMallWide = /A\s*1\.1\.21|商城\s*feed流\s*宽\s*banner|商城\s*feed.*宽\s*banner|mall[-_\s]?feed[-_\s]?wide[-_\s]?banner|mal[-_\s]?eed[-_\s]?wide[-_\s]?banner|522\s*[×x*]\s*336/i.test(normalized) || /522\s*[×x*]\s*336/i.test(compacted);
    if (hasStrongFeed10 && !hasExplicitMallWide) {
        return matched.filter(resource => resource !== 'dev_1_1_21');
    }
    return matched;
}
function inferResourcesFromDemandText(text) {
    const normalized = normalizeDemandTextForMatch(text);
    const compacted = compactDemandTextForMatch(text);
    if (!normalized) return [];
    const matched = [];
    AI_RESOURCE_MATCHERS.forEach(item => {
        if (item.patterns.some(pattern => pattern.test(normalized) || pattern.test(compacted))) matched.push(item.resource);
    });
    return pruneConflictingResourceMatches([...new Set(matched)], normalized, compacted);
}
function pickFirstTextMatch(text, patterns) {
    for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) return match.slice(1).filter(Boolean).map(item => String(item).trim());
    }
    return [];
}
function pickFirstTextMatchWithIndex(text, patterns) {
    for (let i = 0; i < patterns.length; i++) {
        const match = text.match(patterns[i]);
        if (match) {
            return {
                index: i,
                groups: match.slice(1).filter(Boolean).map(item => String(item).trim())
            };
        }
    }
    return { index: -1, groups: [] };
}
function cleanFallbackCopy(str = '', limit = 20) {
    return formatAndLimitText(normalizeRecognizedCopyText(String(str).replace(/[“”"'<>【】]/g, '').replace(/ios[:：]?.*$/i, '').trim()), limit);
}
function compactCopyForRole(str = '') {
    return String(str).replace(/[\s，,。；;:："'“”【】]/g, '').trim();
}
function isActionButtonCopy(str = '') {
    const text = compactCopyForRole(str);
    if (!text) return false;
    return /^(去创建|立即创建|去参与|立即参与|去查看|查看详情|了解更多|马上查看|去领取|立即领取|去开通|立即开通|去体验|立即体验|马上体验|去使用|立即使用|去看看)$/.test(text)
        || /^去.{1,3}$/.test(text)
        || /^立即.{1,3}$/.test(text)
        || /^马上.{1,3}$/.test(text);
}
function findFirstActionButtonCopy(text = '') {
    const compacted = compactCopyForRole(text);
    if (!compacted) return '';
    const match = compacted.match(/(去创建|立即创建|去参与|立即参与|去查看|查看详情|了解更多|马上查看|去领取|立即领取|去开通|立即开通|去体验|立即体验|马上体验|去使用|立即使用|去看看)/);
    return match ? match[1] : '';
}
function isNonContentNoiseCopy(str = '') {
    const text = compactCopyForRole(str);
    if (!text) return true;
    if (/^\d+(\.\d+)?\s*[KMG]?B$/i.test(text)) return true;
    if (/^[A-Za-z]{1,4}$/.test(text)) return true;
    if (/^[\d./_-]+$/.test(text)) return true;
    return false;
}
function normalizeRecognizedCopyText(str = '') {
    const text = String(str).replace(/[“”"'<>【】]/g, '').trim();
    return isNonContentNoiseCopy(text) ? '' : text;
}
function normalizeTextBannerCopy(item) {
    if (!item) return item;
    item.title = normalizeRecognizedCopyText(item.title);
    item.sub = normalizeRecognizedCopyText(item.sub);
    item.btn = normalizeRecognizedCopyText(item.btn);
    const titleIsAction = isActionButtonCopy(item.title);
    const subIsAction = isActionButtonCopy(item.sub);
    const btnIsAction = isActionButtonCopy(item.btn);
    if (titleIsAction && !btnIsAction) {
        const originalBtn = item.btn;
        item.btn = item.title;
        item.title = !subIsAction && item.sub ? item.sub : (!isNonContentNoiseCopy(originalBtn) && !btnIsAction ? originalBtn : '');
        item.sub = '';
        return item;
    }
    if (subIsAction && !btnIsAction) {
        item.btn = item.sub;
        item.sub = '';
    }
    return item;
}
function normalizeSquareBannerCopy(item) {
    if (!item) return item;
    item.title1 = normalizeRecognizedCopyText(item.title1);
    item.title2 = normalizeRecognizedCopyText(item.title2);
    item.sub = normalizeRecognizedCopyText(item.sub);
    item.btn = normalizeRecognizedCopyText(item.btn);
    const title1IsAction = isActionButtonCopy(item.title1);
    const title2IsAction = isActionButtonCopy(item.title2);
    const subIsAction = isActionButtonCopy(item.sub);
    const btnIsAction = isActionButtonCopy(item.btn);
    if (title1IsAction && !btnIsAction) {
        const originalTitle2 = item.title2;
        const originalSub = item.sub;
        item.btn = item.title1;
        item.title1 = !title2IsAction && originalTitle2 ? originalTitle2 : (!subIsAction && originalSub ? originalSub : '');
        item.title2 = !title2IsAction && originalTitle2 && !subIsAction && originalSub ? originalSub : '';
        item.sub = '';
        return item;
    }
    if (title2IsAction && !btnIsAction) {
        item.btn = item.title2;
        item.title2 = '';
    }
    if (subIsAction && !btnIsAction) {
        item.btn = item.sub;
        item.sub = '';
    }
    return item;
}
function normalizeHomeCopies(config) {
    if (!Array.isArray(config.home)) return;
    config.home = config.home
        .map(item => {
            if (!item) return item;
            item.line1 = normalizeRecognizedCopyText(item.line1);
            item.line2 = normalizeRecognizedCopyText(item.line2);
            if (isActionButtonCopy(item.line1) && !isActionButtonCopy(item.line2)) {
                const line1 = item.line1;
                item.line1 = item.line2;
                item.line2 = line1;
            }
            return item;
        })
        .filter(item => item && (item.line1 || item.line2));
    const actionItems = config.home.filter(item => isActionButtonCopy(item?.line2));
    if (actionItems.length > 0) {
        config.home = actionItems;
        return;
    }
    config.home = config.home.filter(item => !/大图|弹窗/.test(`${item?.line1 || ''}${item?.line2 || ''}`));
}
function normalizeRecognizedConfig(config) {
    normalizeHomeCopies(config);
    ['feed', 'mypage', 'myPage', 'mySpace', 'simpleScan', 'cloudStoreFeedLongBanner', 'mallFeedWideBanner', 'yikeEquip', 'membershipChannelCard', 'membersChannelPage1', 'membersChannelPage2', 'membersChannelPage3'].forEach(key => {
        if (Array.isArray(config[key])) config[key].forEach(normalizeTextBannerCopy);
    });
    ['activity', 'peerSharing'].forEach(key => {
        if (Array.isArray(config[key])) config[key].forEach(normalizeSquareBannerCopy);
    });
    return config;
}
function splitFallbackTitlePair(text = '') {
    const normalized = String(text).replace(/[，,、]/g, ' ').replace(/\s+/g, ' ').trim();
    const parts = normalized.split(' ').filter(Boolean);
    if (parts.length >= 2) return [parts[0], parts.slice(1).join('')];
    const mid = Math.ceil(normalized.length / 2);
    return [normalized.slice(0, mid), normalized.slice(mid)];
}
function ensureArrayConfig(config, key, fallbackItems) {
    if (Array.isArray(config[key]) && config[key].length > 0) return false;
    if (!fallbackItems || fallbackItems.length === 0) return false;
    config[key] = fallbackItems;
    return true;
}
function stripHomeLargeTitleBlock(text = '') {
    return String(text)
        .replace(/大图(?:主)?标题[:：]?[\s\S]{0,80}?(?=大图副标题|按钮|$)/g, ' ')
        .replace(/大图副标题[:：]?[\s\S]{0,80}?(?=按钮|$)/g, ' ');
}
function buildLocalFallbackConfigFromDemand(text, inferredResources) {
    const normalized = compactDemandTextForMatch(text);
    const guessedBtn = findFirstActionButtonCopy(normalized);
    const fallback = {};
    if (!normalized) return fallback;

    if (inferredResources.includes('na_home')) {
        const homeText = stripHomeLargeTitleBlock(normalized);
        let [line1, line2] = pickFirstTextMatch(homeText, [
            /首页\s*banner[\s\S]{0,220}主标题[“\"]?([^“”\"，,。；;\s]{2,12})[”\"]?[\s\S]{0,80}按钮[“\"]?([^“”\"，,。；;\s]{2,6})/i,
            /主标题[“\"]([^“”\"]{2,12})[”\"][\s\S]{0,80}按钮[“\"]([^“”\"]{2,6})[”\"]/i,
            /首页\s*banner[\s\S]{0,120}(宝宝相簿|宝宝相册)[\s\S]{0,120}(去创建|立即创建)/i
        ]);
        if (line1 || line2) fallback.home = [{ line1: cleanFallbackCopy(line1 || '宝宝相簿', 6), line2: cleanFallbackCopy(line2 || guessedBtn || '去创建', 4) }];
    }

    if (inferredResources.includes('na_feed')) {
        let [title, sub, btn] = pickFirstTextMatch(normalized, [
            /10\s*出\s*1[\s\S]{0,220}标题[:：]?([^，,。；;\s]{2,14})[\s\S]{0,80}副标题[:：]?([^。；;\n]{4,24})[\s\S]{0,50}按钮[:：]?([^，,。；;\s]{2,6})/i,
            /10\s*出\s*1[\s\S]{0,220}(留存宝宝记忆|留存宝.记忆|职场解压站|珍藏成长|创建宝宝相册|创建宝宝相簿)[\s\S]{0,100}(高清原图[，,]全家共享|指尖轻击[，,]释放日常压力|珍藏成长[，,]定格美好|珍藏童年[，,]全家共享)[\s\S]{0,60}(立即创建|去创建|去参与)/i
        ]);
        if (title || sub) fallback.feed = [{ title: cleanFallbackCopy(title, 7), sub: cleanFallbackCopy(sub, 10), btn: cleanFallbackCopy(btn || guessedBtn || '去查看', 4) }];
    }

    if (inferredResources.includes('na_mypage')) {
        let [title, sub, btn] = pickFirstTextMatch(normalized, [
            /我的(?:页面|页).*?banner[\s\S]{0,260}(留存宝宝记忆|留存宝.记忆|创建宝宝相册|创建宝宝相簿|点点解压赢积分)[\s\S]{0,120}(高清原图[，,]全家共享|珍藏童年[，,]全家共享|珍藏成长[，,]定格美好|珍藏成長[，,]定格美好|告别内耗赢取好礼)[\s\S]{0,60}(去创建|立即创建|去参与)/i,
            /我的(?:页面|页).*?标题[:：]?([^，,。；;\s]{2,14})[\s\S]{0,80}副标题[:：]?([^。；;\n]{4,24})[\s\S]{0,50}按钮[:：]?([^，,。；;\s]{2,6})/i
        ]);
        if (title || sub) fallback.mypage = [{ title: cleanFallbackCopy(title, 9), sub: cleanFallbackCopy(sub, 8), capsule: '', highlight: '', btn: cleanFallbackCopy(btn || guessedBtn || '去创建', 4) }];
    }

    if (inferredResources.includes('dev_1_1_16')) {
        const mySpacePatterns = [
            /(?:分享页\s*\/\s*任务中心|任务中心|我的空间)[\s\S]{0,260}(创建宝宝相簿|创建宝宝相册|留存宝宝记忆|点点解压赢积分|疯狂点点乐)[\s\S]{0,80}((?:去创建|立即创建|去参与|去查看|查看详情|了解更多|马上查看))[\s\S]{0,120}((?:珍藏童年[，,]全家共享|高清原图[，,]全家共享|告别内耗赢取好礼|珍藏成长[，,]定格美好|AI\s*智能整理[，,]轻松留存童真|无需费心排版[，,]仪式感轻松拉满|留住不可逆成长[，,]让美好永不褪色))/i,
            /(?:分享页\s*\/\s*任务中心|任务中心|我的空间)[\s\S]{0,260}(创建宝宝相簿|创建宝宝相册|留存宝宝记忆|点点解压赢积分|疯狂点点乐)[\s\S]{0,120}((?:珍藏童年[，,]全家共享|高清原图[，,]全家共享|告别内耗赢取好礼|珍藏成长[，,]定格美好|AI\s*智能整理[，,]轻松留存童真|无需费心排版[，,]仪式感轻松拉满|留住不可逆成长[，,]让美好永不褪色))[\s\S]{0,80}((?:去创建|立即创建|去参与|去查看|查看详情|了解更多|马上查看))/i
        ];
        const { index: mySpacePatternIndex, groups: mySpaceGroups } = pickFirstTextMatchWithIndex(normalized, mySpacePatterns);
        let title = '', sub = '', btn = '';
        if (mySpacePatternIndex === 0) {
            [title, btn, sub] = mySpaceGroups;
        } else if (mySpacePatternIndex === 1) {
            [title, sub, btn] = mySpaceGroups;
        }
        if (title || sub || btn) fallback.mySpace = [{ title: cleanFallbackCopy(title, 11), sub: cleanFallbackCopy(sub, 8), btn: cleanFallbackCopy(btn || guessedBtn || '去创建', 4) }];
    }

    if (inferredResources.includes('dev_1_1_15')) {
        let [title, sub, btn] = pickFirstTextMatch(normalized, [
            /会员频道大卡[\s\S]{0,260}(?:主标题|标题)[:：]?([^，,。；;\n]{2,16})[\s\S]{0,80}(?:副标题|次标题)[:：]?([^，,。；;\n]{2,18})[\s\S]{0,60}(?:按钮(?:文案)?|btn)[:：]?([^，,。；;\n]{2,8})/i,
            /membership[-_\s]?channel[-_\s]?card[\s\S]{0,260}(?:title)[:：]?([^，,。；;\n]{2,16})[\s\S]{0,80}(?:sub|subtitle)[:：]?([^，,。；;\n]{2,18})[\s\S]{0,60}(?:button|btn)[:：]?([^，,。；;\n]{2,8})/i,
            /会员频道大卡[\s\S]{0,220}(?:主标题|标题)[:：]?([^，,。；;\n]{2,16})[\s\S]{0,80}(?:按钮(?:文案)?|btn)[:：]?([^，,。；;\n]{2,8})/i
        ]);
        if (title && !btn && sub && isActionButtonCopy(sub)) {
            btn = sub;
            sub = '';
        }
        if (title || sub || btn) fallback.membershipChannelCard = [{ title: cleanFallbackCopy(title, 12), sub: cleanFallbackCopy(sub, 9), btn: cleanFallbackCopy(btn || guessedBtn || '去领取', 3) }];
    }

    const fillMembersChannelPage = (resource, key, titleLimit, options = {}) => {
        if (!inferredResources.includes(resource)) return;
        const patterns = options.withSub ? [
            new RegExp(`(?:会员频道|members?-?only-?channel)[\\s\\S]{0,260}(?:单列|双列|三列|page${options.pageIndex}|banner${options.pageIndex})[\\s\\S]{0,120}(?:主标题|标题)[:：]?([^，,。；;\\n]{2,16})[\\s\\S]{0,80}(?:副标题|次标题)[:：]?([^，,。；;\\n]{2,16})[\\s\\S]{0,60}(?:按钮(?:文案)?|btn)[:：]?([^，,。；;\\n]{2,8})`, 'i'),
            new RegExp(`(?:会员频道|members?-?only-?channel)[\\s\\S]{0,260}(?:单列|双列|三列|page${options.pageIndex}|banner${options.pageIndex})[\\s\\S]{0,120}(?:副标题|次标题)[:：]?([^，,。；;\\n]{2,16})[\\s\\S]{0,80}(?:主标题|标题)[:：]?([^，,。；;\\n]{2,16})[\\s\\S]{0,60}(?:按钮(?:文案)?|btn)[:：]?([^，,。；;\\n]{2,8})`, 'i')
        ] : [
            new RegExp(`(?:会员频道|members?-?only-?channel)[\\s\\S]{0,260}(?:单列|双列|三列|page${options.pageIndex}|banner${options.pageIndex})[\\s\\S]{0,120}(?:主标题|标题)[:：]?([^，,。；;\\n]{2,16})[\\s\\S]{0,60}(?:按钮(?:文案)?|btn)[:：]?([^，,。；;\\n]{2,8})`, 'i'),
            new RegExp(`(?:会员频道|members?-?only-?channel)[\\s\\S]{0,260}(?:单列|双列|三列|page${options.pageIndex}|banner${options.pageIndex})[\\s\\S]{0,120}(?:标题|主标题)[:：]?([^，,。；;\\n]{2,16})`, 'i')
        ];
        const match = pickFirstTextMatch(normalized, patterns);
        let title = '', sub = '', btn = '';
        if (options.withSub) {
            if (match.length >= 3) [title, sub, btn] = match;
        } else {
            if (match.length >= 2) [title, btn] = match;
            else if (match.length === 1) [title] = match;
        }
        if (!title && !sub && !btn) return;
        const item = { title: cleanFallbackCopy(title, titleLimit), btn: cleanFallbackCopy(btn || guessedBtn || '去查看', 4) };
        if (options.withSub) item.sub = cleanFallbackCopy(sub, 8);
        fallback[key] = [item];
    };
    fillMembersChannelPage('dev_1_1_9', 'membersChannelPage1', 11, { withSub: true, pageIndex: 1 });
    fillMembersChannelPage('dev_1_1_9', 'membersChannelPage2', 10, { pageIndex: 2 });
    fillMembersChannelPage('dev_1_1_9', 'membersChannelPage3', 10, { pageIndex: 3 });

    const fillSquareBanner = (resource, key) => {
        if (!inferredResources.includes(resource)) return;
        let title = '', sub = '', btn = '';
        const patterns = [
            /(?:活动中心|共享点对点|点对点)[\s\S]{0,260}([^\r\n。；;，,\s]{2,16})[\s\S]{0,120}((?:[^\r\n。；;，,\s]{2,12}(?:[，,、\s][^\r\n。；;，,\s]{2,12})+))[\s\S]{0,120}((?:去创建|立即创建|去参与|去查看|查看详情|了解更多|马上查看))/i
        ];
        const match = pickFirstTextMatch(normalized, patterns);
        if (match.length >= 3) {
            [sub, title, btn] = match;
        }
        if (!title && !sub) return;
        const [title1, title2] = splitFallbackTitlePair(title);
        fallback[key] = [{ title1: cleanFallbackCopy(title1, 7), title2: cleanFallbackCopy(title2, 7), sub: cleanFallbackCopy(sub, 8), btn: cleanFallbackCopy(btn || guessedBtn || '去创建', 4) }];
    };
    fillSquareBanner('dev_1_1_17', 'activity');
    fillSquareBanner('dev_1_1_18', 'peerSharing');

    if (inferredResources.includes('dev_1_1_19')) fallback.peerSharingIconPush = [{ matched: true }];
    if (inferredResources.includes('dev_1_1_20')) {
        const feedLongBannerPatterns = [
            /(?:网盘商城feed流长banner|long[-_\s]?banner[-_\s]?in[-_\s]?the[-_\s]?cloud[-_\s]?store[-_\s]?feed)[\s\S]{0,240}(?:第一行|主标题|title)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第二行|副标题|sub)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第三行|按钮|btn)[:：]?([^，,。；;\n]{1,10})/i,
            /(?:第一行|主标题|title)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第二行|副标题|sub)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第三行|按钮|btn)[:：]?([^，,。；;\n]{1,10})/i
        ];
        const match = pickFirstTextMatch(normalized, feedLongBannerPatterns);
        if (match.length >= 3) {
            fallback.cloudStoreFeedLongBanner = [{ title: cleanFallbackCopy(match[0], 8), sub: cleanFallbackCopy(match[1], 8), btn: cleanFallbackCopy(match[2] || guessedBtn || '按钮字', 3) }];
        } else {
            fallback.cloudStoreFeedLongBanner = [{ title: '主标题最多8个字', sub: '副标题最多8个字', btn: '按钮字' }];
        }
    }
    if (inferredResources.includes('dev_1_1_21')) {
        const mallWideBannerPatterns = [
            /(?:商城feed流宽banner|mall[-_\s]?feed[-_\s]?wide[-_\s]?banner|mal[-_\s]?eed[-_\s]?wide[-_\s]?banner)[\s\S]{0,240}(?:第一行|主标题|title)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第二行|副标题|sub)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第三行|按钮|btn)[:：]?([^，,。；;\n]{1,10})/i,
            /(?:第一行|主标题|title)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第二行|副标题|sub)[:：]?([^，,。；;\n]{1,20})[\s\S]{0,120}(?:第三行|按钮|btn)[:：]?([^，,。；;\n]{1,10})/i
        ];
        const match = pickFirstTextMatch(normalized, mallWideBannerPatterns);
        if (match.length >= 3) {
            fallback.mallFeedWideBanner = [{ title: cleanFallbackCopy(match[0], 8), sub: cleanFallbackCopy(match[1], 8), btn: cleanFallbackCopy(match[2] || guessedBtn || '按钮字', 3) }];
        } else {
            fallback.mallFeedWideBanner = [{ title: '主标题最多8个字', sub: '副标题最多8个字', btn: '按钮字' }];
        }
    }
    if (inferredResources.includes('dev_1_1_13')) fallback.searchIcon = [{ matched: true }];
    return normalizeRecognizedConfig(fallback);
}
function applyLocalFallbackConfig(config, fallback) {
    ensureArrayConfig(config, 'home', fallback.home);
    ensureArrayConfig(config, 'feed', fallback.feed);
    ensureArrayConfig(config, 'videoAudioShare', fallback.videoAudioShare);
    ensureArrayConfig(config, 'membershipChannelCard', fallback.membershipChannelCard);
    ensureArrayConfig(config, 'membersChannelPage1', fallback.membersChannelPage1);
    ensureArrayConfig(config, 'membersChannelPage2', fallback.membersChannelPage2);
    ensureArrayConfig(config, 'membersChannelPage3', fallback.membersChannelPage3);
    ensureArrayConfig(config, 'mypage', fallback.mypage);
    ensureArrayConfig(config, 'mySpace', fallback.mySpace);
    ensureArrayConfig(config, 'activity', fallback.activity);
    ensureArrayConfig(config, 'peerSharing', fallback.peerSharing);
    ensureArrayConfig(config, 'peerSharingIconPush', fallback.peerSharingIconPush);
    ensureArrayConfig(config, 'cloudStoreFeedLongBanner', fallback.cloudStoreFeedLongBanner);
    ensureArrayConfig(config, 'mallFeedWideBanner', fallback.mallFeedWideBanner);
    ensureArrayConfig(config, 'searchIcon', fallback.searchIcon);
}
function setLimitedInputValue(inputId, value, limit) {
    if (!value) return;
    const el = document.getElementById(inputId);
    if (el) el.value = formatAndLimitText(value, limit);
}
function getMallFeedWideBannerPagePrefix(page = 1) {
    return page === 2 ? 'mallFeedWideBannerPage2' : 'mallFeedWideBanner';
}
function getMallFeedWideBannerPageState(page = 1) {
    const prefix = getMallFeedWideBannerPagePrefix(page);
    const byId = suffix => document.getElementById(`${prefix}${suffix}`);
    return {
        title: byId('Title')?.value || '主标题最多8个字',
        sub: byId('Sub')?.value || '副标题最多8个字',
        btn: byId('BtnText')?.value || '按钮字',
        titleColor: byId('TitleColor')?.value || '#FFFFFF',
        subColor: byId('SubColor')?.value || '#FFFFFF',
        btnColor: byId('BtnColor')?.value || '#FFFFFF',
        grad1: byId('Grad1')?.value || (page === 2 ? '#00C2B8' : '#FF288F'),
        grad2: byId('Grad2')?.value || (page === 2 ? '#93E0FF' : '#FF993C'),
        gradAngle: byId('GradAngle')?.value || '90',
        gradAngleValId: `${prefix}GradAngleVal`,
    };
}
function applyMallFeedWideBannerPageState(page = 1, copy = {}) {
    const prefix = getMallFeedWideBannerPagePrefix(page);
    const byId = suffix => document.getElementById(`${prefix}${suffix}`);
    const assignText = (suffix, value, limit) => {
        if (value !== undefined && value !== null && value !== '') setLimitedInputValue(`${prefix}${suffix}`, value, limit);
    };
    assignText('Title', copy.title, 8);
    assignText('Sub', copy.sub, 8);
    assignText('BtnText', copy.btn, 3);
    const setValue = (suffix, value) => {
        const el = byId(suffix);
        if (el && value !== undefined && value !== null) el.value = value;
    };
    setValue('TitleColor', copy.titleColor);
    setValue('SubColor', copy.subColor);
    setValue('BtnColor', copy.btnColor);
    setValue('Grad1', copy.grad1);
    setValue('Grad2', copy.grad2);
    setValue('GradAngle', copy.gradAngle);
    const angleVal = byId('GradAngleVal');
    if (angleVal && copy.gradAngle !== undefined && copy.gradAngle !== null) angleVal.innerText = `${copy.gradAngle}°`;
}
function safeRenderABTestSwitcher(ctrlId, moduleKey) {
    try {
        renderABTestSwitcher(ctrlId, moduleKey);
    } catch (e) {
        console.warn(`AB方案切换器渲染失败: ${moduleKey}`, e);
    }
}
async function applyFastLocalFallbackPreview(fallbackConfig, inferredResources, demandText) {
    const modules = [...new Set(inferredResources)].filter(resource => RESOURCE_VIEW_MAP[resource]);
    if (modules.length === 0) return false;

    if (fallbackConfig.home?.length) {
        const first = fallbackConfig.home[0];
        window.abTestCopies.home = fallbackConfig.home;
        window.abTestActiveIndex.home = 0;
        setLimitedInputValue('textLine1', first.line1, 6);
        setLimitedInputValue('textLine2', first.line2, 4);
        safeRenderABTestSwitcher('homeControls', 'home');
    }
    if (fallbackConfig.feed?.length) {
        const first = fallbackConfig.feed[0];
        window.abTestCopies.feed = fallbackConfig.feed;
        window.abTestActiveIndex.feed = 0;
        setLimitedInputValue('feedTitle', first.title, 7);
        setLimitedInputValue('feedSubtitle', first.sub, 10);
        setLimitedInputValue('feedBtnText', first.btn, 4);
        safeRenderABTestSwitcher('feedControls', 'feed');
    }
    if (fallbackConfig.membershipChannelCard?.length) {
        const first = fallbackConfig.membershipChannelCard[0];
        window.abTestCopies.membershipChannelCard = fallbackConfig.membershipChannelCard;
        window.abTestActiveIndex.membershipChannelCard = 0;
        setLimitedInputValue('membershipChannelCardTitle', (first.title || '').slice(0, 6), 6);
        setLimitedInputValue('membershipChannelCardTitleLine2', (first.title || '').slice(6, 12), 6);
        setLimitedInputValue('membershipChannelCardSub', first.sub, 9);
        setLimitedInputValue('membershipChannelCardBtnText', first.btn, 3);
        safeRenderABTestSwitcher('membershipChannelCardControls', 'membershipChannelCard');
    }
    if (fallbackConfig.membersChannelPage1?.length) {
        const first = fallbackConfig.membersChannelPage1[0];
        window.abTestCopies.membersChannelPage1 = fallbackConfig.membersChannelPage1;
        window.abTestActiveIndex.membersChannelPage1 = 0;
        setLimitedInputValue('membersChannelPage1Title', first.title, 11);
        setLimitedInputValue('membersChannelPage1Sub', first.sub, 8);
        setLimitedInputValue('membersChannelPage1Btn', first.btn, 3);
        safeRenderABTestSwitcher('membersChannelControls', 'membersChannelPage1');
    }
    if (fallbackConfig.membersChannelPage2?.length) {
        const first = fallbackConfig.membersChannelPage2[0];
        window.abTestCopies.membersChannelPage2 = fallbackConfig.membersChannelPage2;
        window.abTestActiveIndex.membersChannelPage2 = 0;
        setLimitedInputValue('membersChannelPage2Title', first.title, 10);
        setLimitedInputValue('membersChannelPage2Btn', first.btn, 4);
        safeRenderABTestSwitcher('membersChannelControls', 'membersChannelPage2');
    }
    if (fallbackConfig.membersChannelPage3?.length) {
        const first = fallbackConfig.membersChannelPage3[0];
        window.abTestCopies.membersChannelPage3 = fallbackConfig.membersChannelPage3;
        window.abTestActiveIndex.membersChannelPage3 = 0;
        setLimitedInputValue('membersChannelPage3Title', first.title, 10);
        setLimitedInputValue('membersChannelPage3Btn', first.btn, 4);
        safeRenderABTestSwitcher('membersChannelControls', 'membersChannelPage3');
    }
    if (fallbackConfig.mypage?.length) {
        const first = fallbackConfig.mypage[0];
        window.abTestCopies.myPage = fallbackConfig.mypage;
        window.abTestActiveIndex.myPage = 0;
        setLimitedInputValue('myPageTitle', first.title, 9);
        setLimitedInputValue('myPageSubtitle', first.sub, 8);
        setLimitedInputValue('textCapsule', first.capsule, 4);
        setLimitedInputValue('myPageHighlight', first.highlight, 9);
        safeRenderABTestSwitcher('myPageControls', 'myPage');
    }
    if (fallbackConfig.mySpace?.length) {
        const first = fallbackConfig.mySpace[0];
        window.abTestCopies.mySpace = fallbackConfig.mySpace;
        window.abTestActiveIndex.mySpace = 0;
        setLimitedInputValue('mySpaceTitle', first.title, 11);
        setLimitedInputValue('mySpaceSub', first.sub, 8);
        setLimitedInputValue('mySpaceBtnText', first.btn, 4);
        safeRenderABTestSwitcher('mySpaceControls', 'mySpace');
    }
    if (fallbackConfig.activity?.length) {
        const first = fallbackConfig.activity[0];
        window.abTestCopies.activity = fallbackConfig.activity;
        window.abTestActiveIndex.activity = 0;
        setLimitedInputValue('myActivityTitle1', first.title1, 7);
        setLimitedInputValue('myActivityTitle2', first.title2, 7);
        setLimitedInputValue('myActivitySub', first.sub, 8);
        setLimitedInputValue('myActivityBtnText', first.btn, 4);
        safeRenderABTestSwitcher('myActivityControls', 'activity');
    }
    if (fallbackConfig.peerSharing?.length) {
        const first = fallbackConfig.peerSharing[0];
        window.abTestCopies.peerSharing = fallbackConfig.peerSharing;
        window.abTestActiveIndex.peerSharing = 0;
        setLimitedInputValue('peerSharingTitle1', first.title1, 7);
        setLimitedInputValue('peerSharingTitle2', first.title2, 7);
        setLimitedInputValue('peerSharingSub', first.sub, 8);
        setLimitedInputValue('peerSharingBtnText', first.btn, 4);
        safeRenderABTestSwitcher('peerSharingControls', 'peerSharing');
    }
    if (fallbackConfig.mallFeedWideBanner?.length) {
        const first = fallbackConfig.mallFeedWideBanner[0];
        const second = fallbackConfig.mallFeedWideBanner[1] || first;
        window.abTestCopies.mallFeedWideBanner = fallbackConfig.mallFeedWideBanner;
        window.abTestActiveIndex.mallFeedWideBanner = 0;
        applyMallFeedWideBannerPageState(1, first);
        applyMallFeedWideBannerPageState(2, second);
        await renderMallFeedWideBannerCanvas();
    }

    const targetBU = getDominantBusinessFromResources(modules);
    if (targetBU && targetBU !== currentBU) setActiveBusinessLine(targetBU, { preserveAiResult: true });
    const visibleModules = modules.filter(resource => getBusinessForResource(resource) === currentBU);
    const inferredDemandText = compactDemandTextForMatch(demandText);
    await showAiRecognizedPreview(visibleModules.length ? visibleModules : modules, {
        homeSmallOnly: true,
        foundMySpace: /任务中心|我的空间|分享页/.test(inferredDemandText),
        foundSimpleScan: /简单扫描/.test(inferredDemandText)
    });
    return true;
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
let currentTerminalId = 'NA';
let activeResourceValue = null;
// ==================== 🛠️ 2. Figma 级拖拽与缩放功能 ====================
let cvsScale = 1; let cvsTranslateX = 0; let cvsTranslateY = 0;
let isDraggingCanvas = false; let startDragX, startDragY;
const viewport = document.getElementById('viewport');
const container = document.getElementById('canvasContainer');
const zoomLevelText = document.getElementById('zoomLevel');
function updateCanvasTransform() {
    container.style.transform = `translate(${cvsTranslateX}px, ${cvsTranslateY}px) scale(${cvsScale})`;
    if (zoomLevelText) zoomLevelText.innerText = Math.round(cvsScale * 100) + '%';
}
// 自适应：把当前画板整体缩放到刚好放进可视区，居中显示，无需滑动
function fitCanvasToViewport() {
    if (container?.classList.contains('ai-result-preview-mode')) {
        cvsScale = 1;
        cvsTranslateX = 0;
        cvsTranslateY = 0;
        container.style.transform = 'none';
        if (zoomLevelText) zoomLevelText.innerText = '100%';
        return;
    }
    const activeView = container.querySelector('.view-section.active');
    // 先还原到 1:1 再测量内容真实尺寸
    container.style.transform = 'translate(0px, 0px) scale(1)';
    const vp = viewport.getBoundingClientRect();
    if (vp.width <= 0 || vp.height <= 0) return; // 可视区尚未布局，跳过本次
    const target = activeView || container;
    const r = target.getBoundingClientRect();
    const contentW = r.width, contentH = r.height;
    if (contentW <= 0 || contentH <= 0) return;
    const pad = 48;
    // 浮动"调整"面板打开时，为其在左侧保留空间，把页面推到面板右侧、避免被遮住
    const inset = (typeof window.__manualInsetLeft === 'number') ? window.__manualInsetLeft : 0;
    const availW = Math.max(1, vp.width - inset);
    let s = Math.min((availW - pad) / contentW, (vp.height - pad) / contentH);
    if (!isFinite(s) || s <= 0) s = 1;
    s = Math.min(s, 1); // 不放大，避免模糊
    cvsScale = s;
    // transform-origin 为 0 0，容器满屏；在 [inset, vp.width] 区间内水平居中
    cvsTranslateX = (inset + availW / 2) - (vp.width / 2) * s;
    cvsTranslateY = (vp.height / 2) * (1 - s);
    updateCanvasTransform();
}
function resetCanvasView() {
    fitCanvasToViewport();
}
// 画板固定展示：不再支持滚轮缩放 / 拖拽平移，仅自适应铺满可视区
// 用 ResizeObserver 监听可视区自身尺寸变化（窗口缩放、侧栏回流都能捕获），
// 保证任何情况下画板都完整可见、不会被遮住，且自适应不会“丢失”。
let __fitRafId = null;
function scheduleFit() {
    if (__fitRafId) cancelAnimationFrame(__fitRafId);
    __fitRafId = requestAnimationFrame(() => { __fitRafId = null; fitCanvasToViewport(); });
}
// 暴露给内联脚本：浮动调整面板开合时需要重新自适应
window.scheduleFit = scheduleFit;
window.fitCanvasToViewport = fitCanvasToViewport;
let __contentObserver = null;
if (typeof ResizeObserver !== 'undefined') {
    // 1) 监听可视区尺寸（窗口缩放 / 侧栏回流）
    new ResizeObserver(scheduleFit).observe(viewport);
    // 2) 监听画板内容尺寸变化：手机预览的 canvas / 图片是异步渲染的，
    //    渲染后内容会变高，若不重新自适应就会顶部/底部被裁切。
    //    transform 缩放不影响布局盒尺寸，故不会触发观察循环。
    __contentObserver = new ResizeObserver(scheduleFit);
    __contentObserver.observe(container);
    container.querySelectorAll('.view-section').forEach(v => __contentObserver.observe(v));
}
// 兜底：部分场景 ResizeObserver 不触发时，仍监听窗口尺寸与加载完成
window.addEventListener('resize', scheduleFit);
window.addEventListener('load', () => setTimeout(fitCanvasToViewport, 50));
// ==================== 🎨 3. 颜色主题与工具函数 ====================
const BRAND_THEMES = [
    { id: 'red', hue: 350, grad1: '#FFD9E2', grad2: '#FFF2F5', lightGrad: '#FFF0F3', solid: '#FFEAEF', btn1: '#FF5E7E', btn2: '#FF1A4B', textHighlight: '#FF1A4B', darkGrad1: '#FF3366', darkGrad2: '#D90036' },
    { id: 'yellow', hue: 45, grad1: '#FFF3B3', grad2: '#FFFCF0', lightGrad: '#FFFDF0', solid: '#FFF8DB', btn1: '#FFAA00', btn2: '#FF6600', textHighlight: '#FF6600', darkGrad1: '#FFAA00', darkGrad2: '#E65C00' },
    { id: 'green', hue: 130, grad1: '#D6F0D6', grad2: '#F0FFF0', lightGrad: '#F0FFF4', solid: '#EBF8E5', btn1: '#00D26A', btn2: '#00A344', textHighlight: '#00A344', darkGrad1: '#00D26A', darkGrad2: '#008A39' },
    { id: 'blue', hue: 210, grad1: '#D6EBFF', grad2: '#F0F8FF', lightGrad: '#F0F8FF', solid: '#E5F3FF', btn1: '#06A7FF', btn2: '#0066FF', textHighlight: '#0066FF', darkGrad1: '#06A7FF', darkGrad2: '#0052CC' },
    { id: 'purple', hue: 275, grad1: '#E6D4FF', grad2: '#F6F0FF', lightGrad: '#F8F0FF', solid: '#EFE5FF', btn1: '#B358FF', btn2: '#7B1BFF', textHighlight: '#7B1BFF', darkGrad1: '#B358FF', darkGrad2: '#6200E6' }
];
const AUTO_COLOR_RESOURCE_IDS = new Set([
    'na_home', 'na_mypage', 'na_feed', 'dev_1_1_15', 'dev_1_1_16',
    'dev_1_1_17', 'dev_1_1_18', 'dev_1_1_20', 'dev_1_1_21',
    'yike_4', 'yike_5', 'yike_7'
]);
function shouldAutoColorForResource(resource) {
    return AUTO_COLOR_RESOURCE_IDS.has(resource);
}
function setCheckedRadioValue(radios, value) {
    Array.from(radios || []).forEach(radio => { radio.checked = radio.value === value; });
}
function showOnlyModePanel(activePanel, panels) {
    panels.forEach(panel => panel?.classList.add('hidden'));
    activePanel?.classList.remove('hidden');
}
function switchWangpanAutoColorModesToGradient() {
    currentTopBgMode = 'gradient';
    setCheckedRadioValue(topBgModeRadios, 'gradient');
    showOnlyModePanel(topBgModeGradient, [topBgModeImage, topBgModeGradient, topBgModeSolid]);

    currentFeedBgMode = 'gradient';
    setCheckedRadioValue(feedBgModeRadios, 'gradient');
    showOnlyModePanel(feedBgModeGradient, [feedBgModeImage, feedBgModeGradient, feedBgModeSolid]);

    currentMySpaceBgMode = 'gradient';
    setCheckedRadioValue(mySpaceBgModeRadios, 'gradient');
    showOnlyModePanel(mySpaceBgModeGradient, [mySpaceBgModeSolid, mySpaceBgModeGradient]);

    currentSimpleScanBgMode = 'gradient';
    setCheckedRadioValue(simpleScanBgModeRadios, 'gradient');
    showOnlyModePanel(simpleScanBgModeGradient, [simpleScanBgModeSolid, simpleScanBgModeGradient]);
}
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
            'membershipChannelCardBgColor1': matchedTheme.grad1, 'membershipChannelCardBgColor2': matchedTheme.grad2, 'membershipChannelCardTextColor': '#102114',
            'mallFeedWideBannerGrad1': matchedTheme.btn2, 'mallFeedWideBannerGrad2': matchedTheme.btn1,
            'mallFeedWideBannerTitleColor': '#FFFFFF', 'mallFeedWideBannerSubColor': '#FFFFFF', 'mallFeedWideBannerBtnColor': '#FFFFFF',
            'mallFeedWideBannerPage2Grad1': matchedTheme.btn2, 'mallFeedWideBannerPage2Grad2': matchedTheme.btn1,
            'mallFeedWideBannerPage2TitleColor': '#FFFFFF', 'mallFeedWideBannerPage2SubColor': '#FFFFFF', 'mallFeedWideBannerPage2BtnColor': '#FFFFFF',
        },
        yike: {
            'yikeEquipGrad1': matchedTheme.grad1, 'yikeEquipGrad2': matchedTheme.grad2,
            'yikeCashGrad1': matchedTheme.grad1, 'yikeCashGrad2': matchedTheme.grad2,
            'yikeHomeTitleColor': '#000000', 'yikeHomeSubColor': '#000000', 'yikeHomeSubHighlightColor': matchedTheme.textHighlight,
        }
    };
    const colorMap = colorMapByBU[targetBU] || colorMapByBU.wangpan;
    if (targetBU === 'wangpan') {
        switchWangpanAutoColorModesToGradient();
    }
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
function getManagedViewElements() {
    return [...new Set([
        ...Object.values(RESOURCE_VIEW_MAP),
        ...Object.values(RESOURCE_PREVIEW_TARGET_MAP),
        'viewDevelopingPrompt'
    ])]
        .map(id => document.getElementById(id))
        .filter(Boolean);
}
function getManagedControlElements() {
    return [...new Set(Object.values(RESOURCE_CONTROL_MAP))]
        .map(id => document.getElementById(id))
        .filter(Boolean);
}
function markResourceListActive(resource) {
    document.querySelectorAll('.resource-item').forEach(el => el.classList.toggle('active', el.dataset.value === resource));
}
function isRenderableResource(resource) {
    return Boolean(RESOURCE_VIEW_MAP[resource] || RESOURCE_CONTROL_MAP[resource] || RESOURCE_PREVIEW_TARGET_MAP[resource]);
}
function getVisibleAiModulesForCurrentBusiness() {
    return lastAiRecognizedModules.filter(resource => getBusinessForResource(resource) === getActiveBusinessLineKey());
}
function setHomeAiPreviewCards(options = {}) {
    const topCard = document.getElementById('topHomePageCanvas')?.closest('.preview-card');
    const smallCard = document.getElementById('lightCanvas')?.closest('.preview-card');
    if (topCard) topCard.style.display = options.homeSmallOnly ? 'none' : '';
    if (smallCard) smallCard.style.display = '';
}
function resetConditionalPreviewCards() {
    setHomeAiPreviewCards({ homeSmallOnly: false });
    const spaceCard = document.getElementById('mySpacePageCanvas')?.closest('.preview-card');
    const scanCard = document.getElementById('simpleScanPageCanvas')?.closest('.preview-card');
    if (spaceCard) spaceCard.style.display = '';
    if (scanCard) scanCard.style.display = '';
}
function clearAiResultPreviewState() {
    isAiResultPreviewMode = false;
    lastAiRecognizedModules = [];
    lastAiRenderOptions = {};
    const canvasContainer = document.getElementById('canvasContainer');
    canvasContainer?.classList.remove('ai-result-preview-mode');
    const aiWorkspace = document.getElementById('viewport');
    aiWorkspace?.classList.remove('ai-result-workspace');
    if (aiWorkspace) { aiWorkspace.scrollLeft = 0; aiWorkspace.scrollTop = 0; }
    resetConditionalPreviewCards();
    getManagedViewElements().forEach(view => view.classList.remove('ai-preview-selected'));
}
function focusResourceControl(resource, options = {}) {
    const { scroll = true, highlight = true } = options;
    const ctrlEl = document.getElementById(RESOURCE_CONTROL_MAP[resource]);
    if (!ctrlEl) return;
    const controlGroupEl = ctrlEl.classList.contains('control-group') ? ctrlEl : ctrlEl.closest('.control-group');
    getManagedControlElements().forEach(ctrl => {
        ctrl.classList.remove('active');
        ctrl.style.boxShadow = 'none';
        ctrl.style.transform = 'scale(1)';
        ctrl.style.transition = '';
        delete ctrl.dataset.highlightToken;
    });
    if (controlGroupEl) controlGroupEl.classList.add('active');
    if (ctrlEl !== controlGroupEl) ctrlEl.classList.add('active');
    markResourceListActive(RESOURCE_LIST_ACTIVE_MAP[resource] || resource);
    getManagedViewElements().forEach(view => view.classList.remove('ai-preview-selected'));
    const viewEl = document.getElementById(RESOURCE_PREVIEW_TARGET_MAP[resource] || RESOURCE_VIEW_MAP[resource]);
    viewEl?.classList.add('ai-preview-selected');
    if (scroll) {
        const wrapEl = document.getElementById('manualControlsWrapper');
        if (wrapEl) {
            wrapEl.querySelectorAll('.control-group').forEach(g => { g.style.display = ''; });
            wrapEl.classList.add('open');
        }
        const devP = document.getElementById('developingPrompt');
        if (devP) devP.classList.add('hidden');
        const scroller = wrapEl || document.querySelector('.right-sidebar');
        const target = ctrlEl || controlGroupEl;
        if (scroller && target) {
            requestAnimationFrame(() => {
                const sbRect = scroller.getBoundingClientRect();
                const elRect = target.getBoundingClientRect();
                const top = scroller.scrollTop + (elRect.top - sbRect.top) - 16;
                scroller.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
            });
        }
    }
    if (highlight) {
        const highlightToken = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        ctrlEl.dataset.highlightToken = highlightToken;
        ctrlEl.style.transition = 'all 0.3s ease';
        ctrlEl.style.boxShadow = '0 0 0 2px #258AFF, 0 8px 24px rgba(37,138,255,0.2)';
        ctrlEl.style.transform = 'scale(1.01)';
        setTimeout(() => {
            if (ctrlEl.dataset.highlightToken !== highlightToken) return;
            ctrlEl.style.boxShadow = 'none';
            ctrlEl.style.transform = 'scale(1)';
            ctrlEl.style.transition = '';
            delete ctrlEl.dataset.highlightToken;
        }, 800);
    }
}
function relocateActionPanels() {
    const manualWrapper = document.getElementById('manualControlsWrapper');
    if (manualWrapper) {
        manualWrapper.classList.remove('bottom-manual-controls', 'open');
    }
}
function setManualControlsOpen(isOpen) {
    const manualWrapper = document.getElementById('manualControlsWrapper');
    if (manualWrapper) manualWrapper.classList.toggle('open', Boolean(isOpen));
}
function setSmartActionPanelExpanded(isOpen) {
    smartActionPanelExpanded = Boolean(isOpen);
    smartActionPanel?.classList.toggle('open', smartActionPanelExpanded);
    if (smartActionToggleBtn) {
        smartActionToggleBtn.textContent = smartActionPanelExpanded ? '收起' : '展开';
        smartActionToggleBtn.setAttribute('aria-expanded', String(smartActionPanelExpanded));
    }
}
function getSmartActionResource() {
    return activeResourceValue || document.querySelector('.resource-item.active')?.dataset.value || null;
}
function getSmartActionLabel(resource) {
    const activeItem = resource ? document.querySelector(`.resource-item[data-value="${resource}"]`) : document.querySelector('.resource-item.active');
    const rawText = activeItem?.textContent?.replace(/\s+/g, ' ').trim();
    if (!rawText) return '请选择资源位';
    const parts = rawText.split(' - ');
    return parts[parts.length - 1] || rawText;
}
function updateSmartActionTitle(resource = getSmartActionResource()) {
    if (smartActionTitle) smartActionTitle.textContent = getSmartActionLabel(resource);
}
function getControlGroupForResource(resource) {
    const ctrlEl = document.getElementById(RESOURCE_CONTROL_MAP[resource]);
    if (!ctrlEl) return null;
    return ctrlEl.classList.contains('control-group') ? ctrlEl : ctrlEl.closest('.control-group');
}
function getSmartInputLabel(input) {
    const group = input.closest('.input-group');
    const span = group?.querySelector('span');
    const raw = span?.textContent || input.labels?.[0]?.textContent || input.placeholder || input.id || '文案';
    return raw.replace(/[:：]\s*$/, '').trim();
}
function isSmartTextInput(input) {
    if (!input || input.disabled) return false;
    if (input.type === 'hidden' || input.type === 'file' || input.type === 'color' || input.type === 'range' || input.type === 'number') return false;
    if (input.closest('.hidden')) return false;
    const style = window.getComputedStyle(input);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    return input.tagName === 'TEXTAREA' || input.type === 'text';
}
function getSmartTextInputs(scope) {
    if (!scope) return [];
    return Array.from(scope.querySelectorAll('input, textarea')).filter(isSmartTextInput);
}
function getSmartTextGroups(resource) {
    const controlGroup = getControlGroupForResource(resource);
    if (!controlGroup) return [];
    const panelGroups = Array.from(controlGroup.querySelectorAll('.panel-group'));
    const groups = panelGroups.map((panel, index) => {
        const title = panel.querySelector('.panel-group-header')?.textContent?.trim() || `页面 ${index + 1}`;
        return { title, fields: getSmartTextInputs(panel) };
    }).filter(group => group.fields.length > 0);
    if (groups.length) return groups;
    const fallbackFields = getSmartTextInputs(controlGroup);
    return fallbackFields.length ? [{ title: getSmartActionLabel(resource), fields: fallbackFields }] : [];
}
function setSmartActionActive(action) {
    smartActionMode = action;
    document.querySelectorAll('.smart-action-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.smartAction === action);
    });
}
function createSmartTextRow(originalInput) {
    const row = document.createElement('div');
    row.className = 'smart-text-row';
    const label = document.createElement('label');
    label.textContent = getSmartInputLabel(originalInput);
    const input = document.createElement(originalInput.tagName === 'TEXTAREA' ? 'textarea' : 'input');
    if (input.tagName === 'INPUT') input.type = 'text';
    input.className = 'smart-text-input';
    input.value = originalInput.value || '';
    input.placeholder = originalInput.placeholder || '';
    if (originalInput.maxLength > 0) input.maxLength = originalInput.maxLength;
    input.addEventListener('input', () => {
        originalInput.value = input.value;
        originalInput.dispatchEvent(new Event('input', { bubbles: true }));
        const meta = row.querySelector('.smart-text-meta');
        if (meta && input.maxLength > 0) meta.textContent = `${input.value.length}/${input.maxLength}`;
    });
    row.appendChild(label);
    row.appendChild(input);
    if (originalInput.maxLength > 0) {
        const meta = document.createElement('div');
        meta.className = 'smart-text-meta';
        meta.textContent = `${input.value.length}/${originalInput.maxLength}`;
        row.appendChild(meta);
    }
    return row;
}
function renderSmartTextEditor(resource = getSmartActionResource(), pageIndex = 0) {
    if (!smartActionDetail) return;
    smartActionDetail.innerHTML = '';
    smartActionDetail.classList.add('active');
    const groups = getSmartTextGroups(resource);
    if (!groups.length) {
        const empty = document.createElement('div');
        empty.className = 'smart-action-empty';
        empty.textContent = '这个资源暂时没有可直接编辑的文案项。';
        smartActionDetail.appendChild(empty);
        return;
    }
    const safeIndex = Math.max(0, Math.min(pageIndex, groups.length - 1));
    smartActionPageIndex = safeIndex;
    const group = groups[safeIndex];
    const editor = document.createElement('div');
    editor.className = 'smart-text-editor';

    if (groups.length > 1) {
        const tabs = document.createElement('div');
        tabs.className = 'smart-text-tabs';
        groups.forEach((item, index) => {
            const tab = document.createElement('button');
            tab.type = 'button';
            tab.className = 'smart-text-tab';
            tab.textContent = item.title || `页面 ${index + 1}`;
            tab.classList.toggle('active', index === safeIndex);
            tab.addEventListener('click', () => renderSmartTextEditor(resource, index));
            tabs.appendChild(tab);
        });
        editor.appendChild(tabs);
    }

    const title = document.createElement('div');
    title.className = 'smart-text-editor-title';
    title.textContent = groups.length > 1 ? `当前：${group.title}` : '直接改这里，右侧预览会同步更新';
    editor.appendChild(title);

    const section = document.createElement('div');
    section.className = 'smart-text-section';
    const sectionHead = document.createElement('div');
    sectionHead.className = 'smart-text-section-head';
    const badge = document.createElement('span');
    badge.className = 'smart-text-section-badge';
    badge.textContent = groups.length > 1 ? `页面 ${safeIndex + 1}` : '文案';
    const heading = document.createElement('span');
    heading.className = 'smart-text-section-title';
    heading.textContent = group.title;
    sectionHead.appendChild(badge);
    sectionHead.appendChild(heading);
    section.appendChild(sectionHead);
    group.fields.forEach(originalInput => section.appendChild(createSmartTextRow(originalInput)));
    editor.appendChild(section);

    smartActionDetail.appendChild(editor);
}
function focusSmartActionTarget(action) {
    const resource = getSmartActionResource();
    if (!resource) return;
    updateSmartActionTitle(resource);
    setSmartActionActive(action);
    if (action === 'text') {
        setSmartActionPanelExpanded(true);
        setManualControlsOpen(false);
        renderSmartTextEditor(resource, 0);
        smartActionDetail?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }
    if (action === 'image') {
        setSmartActionPanelExpanded(false);
        setManualControlsOpen(false);
        if (baseGlobalPicArea) {
            baseGlobalPicArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
            baseGlobalPicArea.classList.add('smart-focus');
            setTimeout(() => baseGlobalPicArea.classList.remove('smart-focus'), 900);
        }
        document.getElementById('imageUpload')?.click();
        return;
    }
    const controlGroup = getControlGroupForResource(resource);
    if (!controlGroup) return;
    setSmartActionPanelExpanded(true);
    setManualControlsOpen(true);
    focusResourceControl(resource, { scroll: true, highlight: true });
    const selectorsByAction = {
        color: ['.color-picker-wrap', '.pcr-button', 'input[type="color"]'],
        advanced: ['input[type="range"]', 'input[type="number"]', '.panel-group', '.sidebar-section']
    };
    const selectors = selectorsByAction[action] || ['.panel-group', '.sidebar-section'];
    let target = null;
    for (const selector of selectors) {
        target = controlGroup.querySelector(selector);
        if (target) break;
    }
    if (target) {
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (typeof target.focus === 'function') target.focus({ preventScroll: true });
        }, 80);
    }
}
function bindSmartActionPanel() {
    document.querySelectorAll('.smart-action-btn').forEach(btn => {
        btn.addEventListener('click', () => focusSmartActionTarget(btn.dataset.smartAction));
    });
    smartActionToggleBtn?.addEventListener('click', () => setSmartActionPanelExpanded(!smartActionPanelExpanded));
    smartActionExportBtn?.addEventListener('click', () => document.getElementById('openExportModalBtn')?.click());
    updateSmartActionTitle();
    setSmartActionActive(null);
    setSmartActionPanelExpanded(false);
    smartActionPageIndex = 0;
    if (smartActionDetail) {
        smartActionDetail.classList.remove('active');
        smartActionDetail.innerHTML = '<div class="smart-action-placeholder">点“改文案”后，这里会按页面分开出现可编辑文案项。</div>';
    }
}
async function showAiRecognizedPreview(resources, options = {}) {
    const modules = [...new Set(resources)].filter(resource => RESOURCE_VIEW_MAP[resource]);
    if (!modules.length) return;
    isAiResultPreviewMode = true;
    lastAiRecognizedModules = modules;
    lastAiRenderOptions = { ...options };

    await renderResourceCanvases(modules, options);
    getManagedViewElements().forEach(view => view.classList.remove('active', 'ai-preview-selected'));
    getManagedControlElements().forEach(ctrl => ctrl.classList.remove('active'));
    developingPrompt.classList.add('hidden');

    const canvasContainer = document.getElementById('canvasContainer');
    const workspace = document.getElementById('viewport');
    canvasContainer?.classList.add('ai-result-preview-mode');
    workspace?.classList.add('ai-result-workspace');
    if (workspace) { workspace.scrollLeft = 0; workspace.scrollTop = 0; }
    canvasContainer.style.flexDirection = 'row';
    canvasContainer.style.flexWrap = 'nowrap';
    canvasContainer.style.alignItems = 'flex-start';
    canvasContainer.style.justifyContent = 'flex-start';
    canvasContainer.style.gap = '48px';
    canvasContainer.style.transform = 'none';
    document.querySelectorAll('.view-section').forEach(el => {
        el.style.width = 'auto';
        el.style.flexShrink = '0';
    });

    modules.forEach(resource => {
        const viewEl = document.getElementById(RESOURCE_VIEW_MAP[resource]);
        if (viewEl) viewEl.classList.add('active');
            if (resource === 'na_home') setHomeAiPreviewCards({ homeSmallOnly: options.homeSmallOnly !== false });
            if (resource === 'dev_1_1_11') {
                const videoAudioShareCard = document.getElementById('videoAudioSharePageCanvas')?.closest('.preview-card');
                if (videoAudioShareCard) videoAudioShareCard.style.display = '';
            }
            if (resource === 'dev_1_1_16') {

            const spaceCard = document.getElementById('mySpacePageCanvas')?.closest('.preview-card');
            const scanCard = document.getElementById('simpleScanPageCanvas')?.closest('.preview-card');
            const showBothA116 = !options.foundMySpace && !options.foundSimpleScan;
            if (spaceCard) spaceCard.style.display = (showBothA116 || options.foundMySpace) ? '' : 'none';
            if (scanCard) scanCard.style.display = (showBothA116 || options.foundSimpleScan) ? '' : 'none';
        }
    });
    focusResourceControl(modules[0], { scroll: false, highlight: false });
    fitCanvasToViewport();
    if (document.getElementById('exportModal')?.style.display === 'flex') autoSelectExportItems();
}
function bindCanvasClickToControl() {
    Object.keys(VIEW_RESOURCE_MAP).forEach(viewId => {
        const viewEl = document.getElementById(viewId);
        if (!viewEl) return;
        viewEl.addEventListener('mousedown', (e) => {
            if (viewEl.classList.contains('phone-canvas')) e.stopPropagation();
            // 若点击到的手机预览图本身已单独注册了点击映射，交给它自己的监听处理，容器不重复响应
            const clickedPhone = e.target.closest?.('.phone-canvas');
            if (!viewEl.classList.contains('phone-canvas') && clickedPhone
                && clickedPhone.id && VIEW_RESOURCE_MAP[clickedPhone.id]) return;
            const resource = VIEW_RESOURCE_MAP[viewId];
            // 弹窗尽量贴在实际点击的预览图旁边，没有则用整个视图
            const anchorEl = (clickedPhone || viewEl);
            focusResourceControl(resource, { anchorEl });
        });
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
    let switcherBox = ctrl.querySelector(`.ab-switcher-box[data-module-key="${moduleKey}"]`);
    if (!switcherBox) {
        switcherBox = document.createElement('div');
        switcherBox.className = 'ab-switcher-box';
        switcherBox.dataset.moduleKey = moduleKey;
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
    const localFallbackConfig = buildLocalFallbackConfigFromDemand(demandTextForMatch, inferredResources);
    let hasFastLocalPreview = false;
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
    if (inferredResources.length > 0) {
        try {
            hasFastLocalPreview = await applyFastLocalFallbackPreview(localFallbackConfig, inferredResources, demandTextForMatch);
            if (hasFastLocalPreview) btn.innerText = '✅ 本地识别已生成，AI继续优化中...';
        } catch (e) {
            console.warn('本地快速识别预览失败，继续走AI模型解析:', e);
            hasFastLocalPreview = false;
        }
    }
    console.log("🚀 即将发给 AI 的文本体 (给AI减负后的纯净版):", textPayload);
    const systemPrompt = `你是一个资深的UI设计助手。请从用户的表格或截图中，精准提取文案并分配到对应的 JSON 字段中。
【映射关系】(资源编号优先级最高，注意识别可能带有"-banner"或PDF提取错别字的情况):
- "A1.1.3" / "13.14首页顶部沉浸banner" / "首页沉浸" / "首页banner" / "420×282" -> "home"
  说明：home 只表示普通帧/小图状态；大图主标题、大图副标题、标题图替换素材不要拆成另一套 home 文案，也不要拿来覆盖 home 的 line1/line2。
- "A1.1.4" / "首页运营10出1" / "⾸⻚运营10出1banner" / "首页feed" -> "feed"
- "A1.1.5" / "我的页" / "我的⻚" / "我的页面banner" / "我的⻚轮播banner" -> "mypage"
- "A1.1.11" / "视频/音频/共享页右上icon" / "右上icon" / "video-audio-share" / "80×80" -> "videoAudioShare"
- "A1.1.13" / "搜索框icon" / "搜索词icon" / "搜索icon" / "204×204" -> "searchIcon"
- "A1.1.15" / "会员频道大卡" / "membership-channel-card" / "F4F476" / "83FFE6" -> "membershipChannelCard"
- "A1.1.16" + "任务中心" / "任务中⼼" / "任务中心-banner" / "分享页" / "我的空间" -> "mySpace"
- "A1.1.16" + "简单扫描" -> "simpleScan"
- "A1.1.17" / "活动中心" -> "activity"
- "A1.1.18" / "共享点对点" / "点对点" -> "peerSharing"
- "A1.1.9" / "会员频道下拉2楼" 是一个A级主题资源位，包含三种形态："单列" / "members-only-channel-page1" / "banner1" -> "membersChannelPage1"；"双列" / "members-only-channel-page2" / "banner2" -> "membersChannelPage2"；"三列" / "members-only-channel-page3" / "banner3" -> "membersChannelPage3"
- "B1.1.4" / "一刻相册NA端B1.1.4" / "一刻首页banner" -> "yikeHome"
- "B1.1.5" / "设备banner" / "设备" -> "yikeEquip"
- "B1.1.7" / "收银台banner" / "收银台" -> "yikeCash"
【提取与拆分铁律】(绝对服从):
1. 如果文档没有给出明确的按钮字（如“去查看”），btn 字段默认填 "去查看"。
2. 首页banner如果同时出现“主标题/按钮”和“大图主标题/大图副标题”：只提取“主标题 + 按钮”作为 home 的唯一小图方案；“大图主标题/大图副标题”对应外部导入的标题图素材，当前系统已通过标题图上传处理，JSON 中不要输出它。
3. 2-4个字的动作词通常是按钮，尤其是“去创建 / 立即创建 / 去查看 / 去参与 / 查看详情 / 了解更多”。这些词绝不能放进 title/sub；如果你发现 sub/title 只有这类短动作词，必须放到 btn。只要文案里能看到明确按钮字，即使它很短也要优先填到 btn。像 KB、MB、GB、尺寸、文件名这类短噪声也不要当正文。
4. 分享页/任务中心/我的空间这类横向 banner：中间大字一般不会只有3个字；“去创建”这种三个字一定是按钮。若文本顺序像“珍藏童年，不负美好时光 去创建 创建宝宝相簿”，应输出 title="创建宝宝相簿", sub="珍藏童年，不负美好时光", btn="去创建".
5. 【针对“活动中心 (activity)”和“共享点对点 (peerSharing)”的独家排版拆分算法】(⚠️绝不可错)：
  由于该卡片UI结构为：[最上方的副标题sub] + [中间特大主标题第一行title1] + [中间特大主标题第二行title2] + [底部按钮btn]。
  当文档只提供两行字（例如第一行是“创建宝宝相簿”，第二行是“珍藏童年，全家共享”）时，请严格按以下逻辑拆分：
  -> 寻找带有标点（逗号或空格）的那一行（如“珍藏童年，全家共享”），从标点处切断！前一半填入 "title1"，后一半填入 "title2"。绝不能把整句塞进一个字段！
  -> 将剩下的那行短字（如“创建宝宝相簿”）直接填入 "sub"。
  -> 绝对禁止重复填词！提取过的字不要再填到其他字段。
6. 会员频道下拉2楼有三页：单列页提取 title + sub + btn；双列页和三列页只提取 title + btn，sub 置空。btn 默认填 "去查看"。
7. 【多套方案支持】：如果你在某模块看到了多组不同的备选文案，请将它们作为数组的多个元素返回。如果没有明确写多套，切忌无中生有！
8. 如果你能识别到按钮短文案，哪怕只是 2 到 4 个字，也要单独放进 btn，不要和 title/sub 混在一起。
请只输出严格的JSON，不要解释。
JSON结构示例(所有模块必须是数组，没有的置为空数组 [] )：
{
    "theme": "blue", 
    "home": [ { "line1": "第一行主标题", "line2": "第二行按钮" } ],
    "mypage": [ { "capsule": "胶囊词", "title": "主标题", "highlight": "需要高亮的词", "sub": "副标题" } ],
    "feed": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "membershipChannelCard": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "mySpace": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "simpleScan": [ { "title": "主标题", "highlight": "高亮词", "sub": "副标题", "btn": "按钮文字" } ],
    "activity": [ { "title1": "中间大字第一行", "title2": "中间大字第二行", "sub": "最上面的副标题", "btn": "最下面的按钮字" } ],
    "peerSharing": [ { "title1": "中间大字第一行", "title2": "中间大字第二行", "sub": "最上面的副标题", "btn": "最下面的按钮字" } ],
    "cloudStoreFeedLongBanner": [ { "title": "主标题最多8个字", "sub": "副标题最多8个字", "btn": "按钮字" } ],
    "membersChannelPage1": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "membersChannelPage2": [ { "title": "主标题", "btn": "按钮文字" } ],
    "membersChannelPage3": [ { "title": "主标题", "btn": "按钮文字" } ],
    "searchIcon": [ { "matched": true } ],
    "peerSharingIconPush": [ { "matched": true } ],
    "yikeHome": [ { "title": "主标题", "sub": "副标题", "highlight": "高亮词", "titleColor": "#000000", "subColor": "#000000", "highlightColor": "#E63F00" } ],
    "yikeEquip": [ { "title": "主标题", "sub": "副标题", "btn": "按钮文字" } ],
    "yikeCash": [ { "title": "主标题", "highlight": "高亮词", "titleColor": "#000000", "highlightColor": "#EE3A31", "grad1": "#FFFAEF", "grad2": "#FEEFBA" } ]
}`;
    try {
        const requestAiData = async (modelName, timeoutMs) => {
            const controller = new AbortController();
            const aiTimeout = setTimeout(() => controller.abort(), timeoutMs);
            try {
                const response = await fetch(apiURL, {
                    method: 'POST',
                    signal: controller.signal,
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
                    body: JSON.stringify({
                        model: modelName,
                        messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userContent }],
                        temperature: 0.1
                    })
                });
                if (!response.ok) throw new Error(`[${response.status}] ${modelName} 服务器报错: ${await response.text()}`);
                return await response.json();
            } finally {
                clearTimeout(aiTimeout);
            }
        };
        let data;
        try {
            data = await requestAiData(selectedModel, hasFastLocalPreview ? 18000 : 45000);
        } catch (firstError) {
            if (selectedModel === 'auto-内部') throw firstError;
            console.warn(`${selectedModel} 请求失败，自动降级到 auto-内部 重试`, firstError);
            btn.innerText = hasFastLocalPreview ? '✅ 本地识别已生成，AI自动降级优化中...' : 'AI自动降级解析中...';
            data = await requestAiData('auto-内部', hasFastLocalPreview ? 12000 : 30000);
        }
        let aiResult = data.choices[0].message.content.trim();
        let jsonString = aiResult;
        const jsonMatch = aiResult.match(/\{[\s\S]*\}/);
        if (jsonMatch) jsonString = jsonMatch[0];
        const config = normalizeRecognizedConfig(JSON.parse(jsonString));
        applyLocalFallbackConfig(config, localFallbackConfig);
        normalizeRecognizedConfig(config);
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
        if (config.peerSharingIconPush && config.peerSharingIconPush.length > 0) {
            recognizedModules.add('dev_1_1_19');
        }
        if (config.cloudStoreFeedLongBanner && config.cloudStoreFeedLongBanner.length > 0) {
            recognizedModules.add('dev_1_1_20');
            window.abTestCopies['cloudStoreFeedLongBanner'] = config.cloudStoreFeedLongBanner; window.abTestActiveIndex['cloudStoreFeedLongBanner'] = 0;
            const first = config.cloudStoreFeedLongBanner[0];
            if (first.title) document.getElementById('cloudStoreFeedLongBannerTitle').value = formatAndLimitText(first.title, 8);
            if (first.sub) document.getElementById('cloudStoreFeedLongBannerSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('cloudStoreFeedLongBannerBtnText').value = formatAndLimitText(first.btn, 3);
            safeRenderABTestSwitcher('cloudStoreFeedLongBannerControls', 'cloudStoreFeedLongBanner');
        }
        if (config.mallFeedWideBanner && config.mallFeedWideBanner.length > 0) {
            recognizedModules.add('dev_1_1_21');
            window.abTestCopies['mallFeedWideBanner'] = config.mallFeedWideBanner; window.abTestActiveIndex['mallFeedWideBanner'] = 0;
            const first = config.mallFeedWideBanner[0];
            const second = config.mallFeedWideBanner[1] || first;
            applyMallFeedWideBannerPageState(1, first);
            applyMallFeedWideBannerPageState(2, second);
            await renderMallFeedWideBannerCanvas();
        }
        if (config.membershipChannelCard && config.membershipChannelCard.length > 0) {
            recognizedModules.add('dev_1_1_15');
            window.abTestCopies['membershipChannelCard'] = config.membershipChannelCard; window.abTestActiveIndex['membershipChannelCard'] = 0;
            const first = config.membershipChannelCard[0];
            if (first.title) {
                document.getElementById('membershipChannelCardTitle').value = formatAndLimitText(String(first.title).slice(0, 6), 6);
                document.getElementById('membershipChannelCardTitleLine2').value = formatAndLimitText(String(first.title).slice(6, 12), 6);
            }
            if (first.sub) document.getElementById('membershipChannelCardSub').value = formatAndLimitText(first.sub, 9);
            if (first.btn) document.getElementById('membershipChannelCardBtnText').value = formatAndLimitText(first.btn, 3);
            safeRenderABTestSwitcher('membershipChannelCardControls', 'membershipChannelCard');
        }
        if (config.home && config.home.length > 0) {
            recognizedModules.add('na_home');
            window.abTestCopies['home'] = config.home; window.abTestActiveIndex['home'] = 0;
            const first = config.home[0];
            if (first.line1) document.getElementById('textLine1').value = formatAndLimitText(first.line1, 6);
            if (first.line2) document.getElementById('textLine2').value = formatAndLimitText(first.line2, 4);
            currentTopBgMode = 'gradient'; document.querySelector('input[name="topBgMode"][value="gradient"]').checked = true;
            document.getElementById('topBgModeImage').classList.add('hidden'); document.getElementById('topBgModeSolid').classList.add('hidden'); document.getElementById('topBgModeGradient').classList.remove('hidden');
            safeRenderABTestSwitcher('homeControls', 'home');
        }
        if (config.mypage && config.mypage.length > 0) {
            recognizedModules.add('na_mypage');
            window.abTestCopies['myPage'] = config.mypage; window.abTestActiveIndex['myPage'] = 0;
            const first = config.mypage[0];
            if (first.capsule && first.capsule !== "null") document.getElementById('textCapsule').value = formatAndLimitText(first.capsule, 4);
            if (first.title) document.getElementById('myPageTitle').value = formatAndLimitText(first.title, 9);
            if (first.highlight) document.getElementById('myPageHighlight').value = formatAndLimitText(first.highlight, 9);
            if (first.sub) document.getElementById('myPageSubtitle').value = formatAndLimitText(first.sub, 8);
            safeRenderABTestSwitcher('myPageControls', 'myPage');
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
            safeRenderABTestSwitcher('feedControls', 'feed');
        }
        if (config.membersChannelPage1 && config.membersChannelPage1.length > 0) {
            recognizedModules.add('dev_1_1_9');
            window.abTestCopies['membersChannelPage1'] = config.membersChannelPage1; window.abTestActiveIndex['membersChannelPage1'] = 0;
            const first = config.membersChannelPage1[0];
            if (first.title) document.getElementById('membersChannelPage1Title').value = formatAndLimitText(first.title, 11);
            if (first.sub) document.getElementById('membersChannelPage1Sub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('membersChannelPage1Btn').value = formatAndLimitText(first.btn, 3);
            safeRenderABTestSwitcher('membersChannelControls', 'membersChannelPage1');
        }
        if (config.membersChannelPage2 && config.membersChannelPage2.length > 0) {
            recognizedModules.add('dev_1_1_9');
            window.abTestCopies['membersChannelPage2'] = config.membersChannelPage2; window.abTestActiveIndex['membersChannelPage2'] = 0;
            const first = config.membersChannelPage2[0];
            if (first.title) document.getElementById('membersChannelPage2Title').value = formatAndLimitText(first.title, 10);
            if (first.btn) document.getElementById('membersChannelPage2Btn').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('membersChannelControls', 'membersChannelPage2');
        }
        if (config.membersChannelPage3 && config.membersChannelPage3.length > 0) {
            recognizedModules.add('dev_1_1_9');
            window.abTestCopies['membersChannelPage3'] = config.membersChannelPage3; window.abTestActiveIndex['membersChannelPage3'] = 0;
            const first = config.membersChannelPage3[0];
            if (first.title) document.getElementById('membersChannelPage3Title').value = formatAndLimitText(first.title, 10);
            if (first.btn) document.getElementById('membersChannelPage3Btn').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('membersChannelControls', 'membersChannelPage3');
        }
        if (config.mySpace && config.mySpace.length > 0) {
            recognizedModules.add('dev_1_1_16'); foundMySpace = true;
            window.abTestCopies['mySpace'] = config.mySpace; window.abTestActiveIndex['mySpace'] = 0;
            const first = config.mySpace[0];
            if (first.title) document.getElementById('mySpaceTitle').value = formatAndLimitText(first.title, 11);
            if (first.sub) document.getElementById('mySpaceSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('mySpaceBtnText').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('mySpaceControls', 'mySpace');
        }
        if (config.simpleScan && config.simpleScan.length > 0) {
            recognizedModules.add('dev_1_1_16'); foundSimpleScan = true;
            window.abTestCopies['simpleScan'] = config.simpleScan; window.abTestActiveIndex['simpleScan'] = 0;
            const first = config.simpleScan[0];
            if (first.title) document.getElementById('simpleScanTitle').value = formatAndLimitText(first.title, 11);
            if (first.highlight) document.getElementById('simpleScanHighlight').value = formatAndLimitText(first.highlight, 6);
            if (first.sub) document.getElementById('simpleScanSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('simpleScanBtnText').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('mySpaceControls', 'simpleScan');
        }
        if (config.activity && config.activity.length > 0) {
            recognizedModules.add('dev_1_1_17');
            window.abTestCopies['activity'] = config.activity; window.abTestActiveIndex['activity'] = 0;
            const first = config.activity[0];
            if (first.title1) document.getElementById('myActivityTitle1').value = formatAndLimitText(first.title1, 7);
            if (first.title2) document.getElementById('myActivityTitle2').value = formatAndLimitText(first.title2, 7);
            if (first.sub) document.getElementById('myActivitySub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('myActivityBtnText').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('myActivityControls', 'activity');
        }
        if (config.peerSharing && config.peerSharing.length > 0) {
            recognizedModules.add('dev_1_1_18');
            window.abTestCopies['peerSharing'] = config.peerSharing; window.abTestActiveIndex['peerSharing'] = 0;
            const first = config.peerSharing[0];
            if (first.title1) document.getElementById('peerSharingTitle1').value = formatAndLimitText(first.title1, 7);
            if (first.title2) document.getElementById('peerSharingTitle2').value = formatAndLimitText(first.title2, 7);
            if (first.sub) document.getElementById('peerSharingSub').value = formatAndLimitText(first.sub, 8);
            if (first.btn) document.getElementById('peerSharingBtnText').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('peerSharingControls', 'peerSharing');
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
            safeRenderABTestSwitcher('yikeHomeControls', 'yikeHome');
        }
        if (config.yikeEquip && config.yikeEquip.length > 0) {
            recognizedModules.add('yike_5');
            window.abTestCopies['yikeEquip'] = config.yikeEquip; window.abTestActiveIndex['yikeEquip'] = 0;
            const first = config.yikeEquip[0];
            if (first.title) document.getElementById('yikeEquipTitle').value = formatAndLimitText(first.title, 9);
            if (first.sub) document.getElementById('yikeEquipSub').value = formatAndLimitText(first.sub, 12);
            if (first.btn) document.getElementById('yikeEquipBtnText').value = formatAndLimitText(first.btn, 4);
            safeRenderABTestSwitcher('yikeEquipControls', 'yikeEquip');
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
            safeRenderABTestSwitcher('yikeCashControls', 'yikeCash');
        }
        if (recognizedModules.size > 0) {
            const allModules = Array.from(recognizedModules).filter(mod => RESOURCE_VIEW_MAP[mod]);
            const targetBU = getDominantBusinessFromResources(allModules);
            if (targetBU && targetBU !== currentBU) {
                setActiveBusinessLine(targetBU, { preserveAiResult: true });
            }
            const sameBusinessModules = allModules.filter(mod => getBusinessForResource(mod) === currentBU);
            const modules = sameBusinessModules.length > 0 ? sameBusinessModules : allModules;
            await showAiRecognizedPreview(modules, { homeSmallOnly: true, foundMySpace, foundSimpleScan });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        btn.innerText = '🎉 解析成功，已生成多方案画板！';
        btn.style.background = '#10B981';
    } catch (error) {
        console.error("AI解析失败详情:", error);
        if (hasFastLocalPreview) {
            console.warn('AI 模型优化失败，已保留本地快速识别结果:', error);
            btn.innerText = '本地识别已生成，AI优化失败';
            btn.style.background = '#F59E0B';
        } else {
            alert("AI解析出错啦！\n" + error.message);
            btn.innerText = '解析失败，点击重试';
            btn.style.background = '#FF014D';
        }
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
function isImageSafeForCanvas(img) {
    if (!img || !img.width || !img.height) return false;
    const testCanvas = document.createElement('canvas');
    testCanvas.width = 1;
    testCanvas.height = 1;
    const testCtx = testCanvas.getContext('2d', { willReadFrequently: true });
    if (!testCtx) return false;
    try {
        testCtx.drawImage(img, 0, 0, 1, 1);
        testCtx.getImageData(0, 0, 1, 1);
        return true;
    } catch (e) {
        return false;
    }
}
async function getSafeHeroImageForExport() {
    if (userImgObj && isImageSafeForCanvas(userImgObj)) return userImgObj;
    const activeBU = getActiveBusinessLineKey();
    const uploadedSrc = businessUploadState[activeBU]?.src;
    if (uploadedSrc && uploadedSrc.startsWith('data:')) {
        const uploadedImg = await loadImage(uploadedSrc);
        if (uploadedImg && isImageSafeForCanvas(uploadedImg)) return uploadedImg;
    }
    const fallbackImg = await loadImage(config.heroImage);
    return fallbackImg && isImageSafeForCanvas(fallbackImg) ? fallbackImg : null;
}
function drawSharpenedImage(ctx, img, x, y, w, h, amount = 0.3) {
    const iw = Math.floor(w), ih = Math.floor(h), ix = Math.floor(x), iy = Math.floor(y);
    if (!img || !img.width || !isImageSafeForCanvas(img)) return;
    if (iw < 3 || ih < 3) { ctx.drawImage(img, ix, iy, iw, ih); return; }
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
        ctx.drawImage(off, ix, iy, iw, ih);
    } catch (e) {
        ctx.drawImage(img, ix, iy, iw, ih);
    }
}
async function loadImage(src) {
    if (!src) return null;
    if (globalImageCache[src]) return globalImageCache[src];

    const cacheAndResolve = (img, resolve) => {
        if (img && img.width) globalImageCache[src] = img;
        resolve(img || null);
    };

    const loadViaImage = (url, options = {}) => new Promise(resolve => {
        const img = new Image();
        let settled = false;
        const done = (result) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            cacheAndResolve(result, resolve);
        };
        const timer = setTimeout(() => done(null), options.timeout || 8000);
        if (options.crossOrigin) img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.onload = () => done(img);
        img.onerror = () => done(null);
        img.src = url;
    });

    if (src.startsWith('data:')) return await loadViaImage(src);

    const netSrc = cdnUrl(src);
    const isHttpSrc = /^https?:\/\//.test(netSrc);
    const isSameOrigin = !isHttpSrc || new URL(netSrc, window.location.href).origin === window.location.origin;

    if (isHttpSrc) {
        try {
            const response = await fetch(netSrc, { cache: 'force-cache', mode: 'cors' });
            if (response.ok) {
                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);
                const blobImg = await loadViaImage(objectUrl);
                URL.revokeObjectURL(objectUrl);
                if (blobImg && blobImg.width) {
                    globalImageCache[src] = blobImg;
                    return blobImg;
                }
            }
        } catch (e) {
            console.warn('图片安全加载失败，尝试同源路径或跳过:', src, e);
        }
        if (!isSameOrigin) {
            console.warn('跳过无法安全导出的外链图片:', src);
            return null;
        }
    }

    const directImg = await loadViaImage(netSrc);
    if (directImg && directImg.width) return directImg;

    return null;
}
function trimTransparentEdgesToCanvas(img, options = {}) {
    if (!img || !img.width || !img.height) return img || null;
    const threshold = options.threshold ?? 8;
    const padding = Math.max(0, options.padding ?? 4);
    const w = img.width;
    const h = img.height;
    const sourceCanvas = document.createElement('canvas');
    sourceCanvas.width = w;
    sourceCanvas.height = h;
    const sourceCtx = sourceCanvas.getContext('2d', { willReadFrequently: true });
    if (!sourceCtx) return img;
    try {
        sourceCtx.drawImage(img, 0, 0);
    } catch (e) {
        return img;
    }
    let data;
    try {
        data = sourceCtx.getImageData(0, 0, w, h).data;
    } catch (e) {
        return img;
    }
    const rowHasOpaque = y => {
        for (let x = 0, idx = (y * w * 4) + 3; x < w; x++, idx += 4) {
            if (data[idx] > threshold) return true;
        }
        return false;
    };
    let top = 0;
    while (top < h && !rowHasOpaque(top)) top++;
    if (top >= h) return img;
    let bottom = h - 1;
    while (bottom >= top && !rowHasOpaque(bottom)) bottom--;
    const colHasOpaque = x => {
        for (let y = top; y <= bottom; y++) {
            if (data[(y * w + x) * 4 + 3] > threshold) return true;
        }
        return false;
    };
    let left = 0;
    while (left < w && !colHasOpaque(left)) left++;
    let right = w - 1;
    while (right >= left && !colHasOpaque(right)) right--;
    if (left <= 0 && top <= 0 && right >= w - 1 && bottom >= h - 1) return img;
    const cropLeft = Math.max(0, left - padding);
    const cropTop = Math.max(0, top - padding);
    const cropRight = Math.min(w - 1, right + padding);
    const cropBottom = Math.min(h - 1, bottom + padding);
    const cropW = cropRight - cropLeft + 1;
    const cropH = cropBottom - cropTop + 1;
    if (cropW <= 0 || cropH <= 0 || (cropW >= w && cropH >= h)) return img;
    const out = document.createElement('canvas');
    out.width = cropW;
    out.height = cropH;
    const outCtx = out.getContext('2d');
    if (!outCtx) return img;
    setupHighQualityContext(outCtx);
    outCtx.drawImage(sourceCanvas, cropLeft, cropTop, cropW, cropH, 0, 0, cropW, cropH);
    out._trimmedTransparentEdges = { left: cropLeft, top: cropTop, right: cropRight, bottom: cropBottom };
    return out;
}
async function loadImageWithAutoTrim(src, options = {}) {
    const img = await loadImage(src);
    const trimmed = trimTransparentEdgesToCanvas(img, options);
    return trimmed || img;
}
async function loadColoredArrow(url, color) {
    let txt = globalSvgTextCache[url]; if (!txt) { try { const res = await fetch(url); if (!res.ok) return new Image(); txt = await res.text(); globalSvgTextCache[url] = txt; } catch (e) { return new Image(); } }
    let modified = txt.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    if (!modified.includes('xmlns=')) modified = modified.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    const dataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(modified))); return await loadImage(dataUri);
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
        const grad = buildGradientFromControls(ctx, { x: 0, y: 0, w: c.width, h: c.height }, {
            color1Id: 'topGradColor1',
            color2Id: 'topGradColor2',
            angleId: 'topGradAngle',
            stop1Id: 'topGradStop1',
            stop2Id: 'topGradStop2',
            defaultAngle: 90,
            defaultStop1: 0,
            defaultStop2: 100,
            defaultColor1: '#B4EC51',
            defaultColor2: '#429321'
        });
        ctx.fillStyle = grad; ctx.fillRect(0, 0, c.width, c.height);
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
        if (!ctx || !canvas) return;
        const targetColor = isDark ? '#141414' : (myPageColors[myPageColor] || '#F0FBFF');
        const elementColor = myPageElementColors[myPageColor] || '#0090FF';
        const currentCapsuleColor = isDark ? '#0090FF' : elementColor;
        canvas.width = 1182;
        canvas.height = 225;
        setupHighQualityContext(ctx);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = targetColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (kvImg && kvImg.width) { ctx.save(); const imgBoxX = 37, imgBoxY = 23, imgBoxW = 314, imgBoxH = 178; ctx.beginPath(); ctx.rect(imgBoxX, imgBoxY, imgBoxW, imgBoxH); ctx.clip(); const imgScale = Math.min(imgBoxW / kvImg.width, imgBoxH / kvImg.height), drawImgW = kvImg.width * imgScale, drawImgH = kvImg.height * imgScale, drawImgX = imgBoxX + (imgBoxW - drawImgW) / 2, drawImgY = imgBoxY + (imgBoxH - drawImgH) / 2; drawSharpenedImage(ctx, kvImg, drawImgX, drawImgY, drawImgW, drawImgH, 0.3); ctx.restore(); }
            const capsuleTxt = textCapsuleInput?.value || ''; const titleTxt = myPageTitle?.value || ''; const highlightTxt = myPageHighlight?.value || ''; const subtitleTxt = myPageSubtitle?.value || '';
            ctx.save(); ctx.globalAlpha = 0.15; ctx.fillStyle = currentCapsuleColor; drawRoundRect(ctx, 857, 62, 212, 100, 50); ctx.fill(); ctx.restore();
            ctx.save(); ctx.fillStyle = currentCapsuleColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = 'normal 38px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; ctx.fillText(capsuleTxt, 963, 111); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = 'normal 44px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif'; if ('letterSpacing' in ctx) ctx.letterSpacing = '1px'; const titleBaseColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#030B1A', titleHighlightColor = isDark ? 'rgba(255, 255, 255, 0.8)' : elementColor; drawDualColorText(ctx, titleTxt, highlightTxt, 388, 57, titleBaseColor, titleHighlightColor); ctx.restore();
            ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = ' 38px "FZLTHK", "PingFang SC", sans-serif'; if (isDark) ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; else { ctx.fillStyle = elementColor; ctx.globalAlpha = 0.75; } ctx.fillText(subtitleTxt, Math.floor(388), Math.floor(126)); ctx.restore();
    };
    await drawMyPageMode(myPageCanvas, myPageCtx, false); await drawMyPageMode(myPageDarkCanvas, myPageDarkCtx, true);
}
async function renderMyPageFullCanvas() {
    if (!myPageFullCanvas || !myPageFullCtx) return;
    try {
        const bgImg = await loadImage(config.myPageBg);
        const fullW = bgImg?.width || 1170;
        const fullH = bgImg?.height || 2532;
        myPageFullCanvas.width = fullW;
        myPageFullCanvas.height = fullH;
        setupHighQualityContext(myPageFullCtx);
        myPageFullCtx.clearRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height);
        if (bgImg && bgImg.width) {
            myPageFullCtx.drawImage(bgImg, 0, 0);
        } else {
            myPageFullCtx.fillStyle = '#F5F6FA';
            myPageFullCtx.fillRect(0, 0, myPageFullCanvas.width, myPageFullCanvas.height);
        }
        if (myPageCanvas.width > 0) { myPageFullCtx.save(); drawRoundRect(myPageFullCtx, config.myPageX + 24, config.myPageY, myPageCanvas.width - 48, myPageCanvas.height, 36); myPageFullCtx.clip(); myPageFullCtx.drawImage(myPageCanvas, Math.floor(config.myPageX), Math.floor(config.myPageY)); myPageFullCtx.restore(); }
        myPageFullCanvas._bannerBBox = { x: config.myPageX + 24, y: config.myPageY, w: myPageCanvas.width - 48, h: myPageCanvas.height };
    } catch (e) { }
}
async function createFeedBannerCanvas() {
    const canvas = document.createElement('canvas'); canvas.width = 561; canvas.height = 750; const ctx = canvas.getContext('2d'); setupHighQualityContext(ctx);
    if (currentFeedBgMode === 'image') { const bgBannerImg = feedBgBannerObj || await loadImage(config.feedBanner); if (bgBannerImg && bgBannerImg.width) ctx.drawImage(bgBannerImg, 0, 0, canvas.width, canvas.height); else { ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height); } }
    else if (currentFeedBgMode === 'gradient') { const grad = addTwoStopGradient(createGradientByAngle(ctx, { x: 0, y: 0, w: canvas.width, h: canvas.height }, feedGradAngle?.value || 180), feedGradColor1?.value || '#FFF099', feedGradStop1?.value || 0, feedGradColor2?.value || '#F2F5F8', feedGradStop2?.value || 100); ctx.fillStyle = grad; ctx.fillRect(0, 0, canvas.width, canvas.height); }
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
async function renderVideoAudioShareCanvas() {
    if (!videoAudioSharePageCanvas || !videoAudioSharePageCtx || !videoAudioShareExportCanvas || !videoAudioShareExportCtx) return;
    const bgImg = await loadImage(config.videoAudioSharePage);
    const defaultIcon = await loadImage(config.videoAudioShareImage);
    const iconImg = userImgObj || defaultIcon;
    const pageW = bgImg?.width || 1170;
    const pageH = bgImg?.height || 2532;
    videoAudioSharePageCanvas.width = pageW;
    videoAudioSharePageCanvas.height = pageH;
    setupHighQualityContext(videoAudioSharePageCtx);
    videoAudioSharePageCtx.clearRect(0, 0, pageW, pageH);
    if (bgImg && bgImg.width) {
        videoAudioSharePageCtx.drawImage(bgImg, 0, 0, pageW, pageH);
    } else {
        videoAudioSharePageCtx.fillStyle = '#F5F6FA';
        videoAudioSharePageCtx.fillRect(0, 0, pageW, pageH);
    }
    const targetX = 907;
    const targetY = 175;
    const targetW = 80;
    const targetH = 80;
    if (iconImg && iconImg.width) {
        videoAudioSharePageCtx.save();
        const scale = Math.min(targetW / iconImg.width, targetH / iconImg.height);
        const drawW = iconImg.width * scale;
        const drawH = iconImg.height * scale;
        const drawX = targetX + (targetW - drawW) / 2;
        const drawY = targetY + (targetH - drawH) / 2;
        drawSharpenedImage(videoAudioSharePageCtx, iconImg, drawX, drawY, drawW, drawH, 0.3);
        videoAudioSharePageCtx.restore();
    }
    videoAudioSharePageCanvas._bannerBBox = { x: targetX, y: targetY, w: targetW, h: targetH };

    const exportSize = 114;
    videoAudioShareExportCanvas.width = exportSize;
    videoAudioShareExportCanvas.height = exportSize;
    setupHighQualityContext(videoAudioShareExportCtx);
    videoAudioShareExportCtx.clearRect(0, 0, exportSize, exportSize);
    if (iconImg && iconImg.width) {
        const scale = Math.min(exportSize / iconImg.width, exportSize / iconImg.height);
        const drawW = iconImg.width * scale;
        const drawH = iconImg.height * scale;
        const drawX = (exportSize - drawW) / 2;
        const drawY = (exportSize - drawH) / 2;
        drawSharpenedImage(videoAudioShareExportCtx, iconImg, drawX, drawY, drawW, drawH, 0.3);
    }
}
async function renderMembershipChannelCardCanvas() {
    if (!membershipChannelCardPageCanvas || !membershipChannelCardPageCtx || !membershipChannelCardExportCanvas || !membershipChannelCardExportCtx) return;
    const exportW = 1092;
    const exportH = 597;
    const defaultImagePromise = loadImage(config.membershipChannelCardImage);
    const pageImgPromise = loadImage(config.membershipChannelCardPage);
    const defaultImage = await defaultImagePromise;
    const imageImg = userImgObj || defaultImage;
    const bgColor1 = membershipChannelCardBgColor1?.value || '#F4F476';
    const bgColor2 = membershipChannelCardBgColor2?.value || '#83FFE6';
    const textColor = membershipChannelCardTextColor?.value || '#102114';

    membershipChannelCardExportCanvas.width = exportW;
    membershipChannelCardExportCanvas.height = exportH;
    setupHighQualityContext(membershipChannelCardExportCtx);
    membershipChannelCardExportCtx.clearRect(0, 0, exportW, exportH);

    const exportGrad = addTwoStopGradient(
        createGradientByAngle(membershipChannelCardExportCtx, { x: 0, y: 0, w: exportW, h: exportH }, 90),
        bgColor1,
        0,
        bgColor2,
        100
    );
    membershipChannelCardExportCtx.fillStyle = exportGrad;
    membershipChannelCardExportCtx.fillRect(0, 0, exportW, exportH);

    // 配图安全区 395x330，顶边对齐
    const imageBox = { x: 100, y: 133, w: 395, h: 330 };
    if (imageImg && imageImg.width) {
        membershipChannelCardExportCtx.save();
        membershipChannelCardExportCtx.beginPath();
        membershipChannelCardExportCtx.rect(imageBox.x, imageBox.y, imageBox.w, imageBox.h);
        membershipChannelCardExportCtx.clip();
        const scale = Math.min(imageBox.w / imageImg.width, imageBox.h / imageImg.height);
        const drawW = imageImg.width * scale;
        const drawH = imageImg.height * scale;
        const drawX = imageBox.x + (imageBox.w - drawW) / 2;
        const drawY = imageBox.y;
        drawSharpenedImage(membershipChannelCardExportCtx, imageImg, drawX, drawY, drawW, drawH, 0.3);
        membershipChannelCardExportCtx.restore();
    }

    const textX = 566;
    membershipChannelCardExportCtx.textAlign = 'left';
    membershipChannelCardExportCtx.textBaseline = 'top';

    // 第一行 副标题：方正兰亭黑 39.66px，Top 142.19，≤9字
    membershipChannelCardExportCtx.fillStyle = textColor;
    membershipChannelCardExportCtx.font = 'normal 39.66px "FZLanTingHeiS-R-GB", "FZLanTingHeiS-R", sans-serif';
    membershipChannelCardExportCtx.fillText(membershipChannelCardSub?.value || '', textX, 142.19);

    // 第二、三行 主标题：方正兰亭中黑 66.11px，2 行独立
    membershipChannelCardExportCtx.fillStyle = textColor;
    membershipChannelCardExportCtx.font = 'normal 66.11px "FZLanTingHeiS-DB-GB", "FZLanTingHeiS-DB", sans-serif';
    const titleLines = [membershipChannelCardTitle?.value || '', membershipChannelCardTitleLine2?.value || ''];
    const titleTops = [199.79, 285.73];
    titleLines.forEach((line, idx) => {
        if (line) membershipChannelCardExportCtx.fillText(line, textX, titleTops[idx]);
    });

    // 第四行 描边按钮：W254.99 H77.44 Top391.52 Left566 Radius46.28 Border2.83 #074400
    const btnX = 566;
    const btnY = 391.52;
    const btnW = 254.99;
    const btnH = 77.44;
    const btnRadius = 46.28;
    const btnBorder = 2.83;
    const innerW = btnW - btnBorder;
    const innerH = btnH - btnBorder;
    const btnDrawRadius = Math.min(btnRadius, innerW / 2, innerH / 2);
    membershipChannelCardExportCtx.save();
    membershipChannelCardExportCtx.lineWidth = btnBorder;
    membershipChannelCardExportCtx.strokeStyle = textColor;
    drawRoundRect(membershipChannelCardExportCtx, btnX + btnBorder / 2, btnY + btnBorder / 2, innerW, innerH, btnDrawRadius);
    membershipChannelCardExportCtx.stroke();
    membershipChannelCardExportCtx.restore();

    // 按钮字：方正兰亭中黑 45.33px，基于按钮居中，≤3字
    membershipChannelCardExportCtx.fillStyle = textColor;
    membershipChannelCardExportCtx.font = 'normal 45.33px "FZLanTingHeiS-DB-GB", "FZLanTingHeiS-DB", sans-serif';
    membershipChannelCardExportCtx.textAlign = 'center';
    membershipChannelCardExportCtx.textBaseline = 'middle';
    membershipChannelCardExportCtx.fillText(membershipChannelCardBtnText?.value || '', btnX + btnW / 2, btnY + btnH / 2 + 1);

    const pageW = 1170;
    const pageH = 2533;
    membershipChannelCardPageCanvas.width = pageW;
    membershipChannelCardPageCanvas.height = pageH;
    setupHighQualityContext(membershipChannelCardPageCtx);
    const drawX = 36.74;
    const drawY = 852.06;
    const drawW = exportW;
    const drawH = exportH;
    const drawPreviewBanner = () => {
        membershipChannelCardPageCtx.save();
        drawRoundRect(membershipChannelCardPageCtx, drawX, drawY, drawW, drawH, 49.46);
        membershipChannelCardPageCtx.clip();
        membershipChannelCardPageCtx.drawImage(membershipChannelCardExportCanvas, drawX, drawY, drawW, drawH);
        membershipChannelCardPageCtx.restore();
    };
    membershipChannelCardPageCtx.clearRect(0, 0, pageW, pageH);
    membershipChannelCardPageCtx.fillStyle = '#F5F6FA';
    membershipChannelCardPageCtx.fillRect(0, 0, pageW, pageH);
    // 先把 banner 画出来，避免底图加载慢时整块空白
    drawPreviewBanner();
    const pageImg = await pageImgPromise;
    if (pageImg && pageImg.width) {
        membershipChannelCardPageCtx.clearRect(0, 0, pageW, pageH);
        membershipChannelCardPageCtx.drawImage(pageImg, 0, 0);
        drawPreviewBanner();
    }
    membershipChannelCardPageCanvas._bannerBBox = { x: drawX, y: drawY, w: drawW, h: drawH };
}
const TIER_BASED_REWARDS_LAYOUTS = {
    tierBasedRewardsProductImagesPage1: {
        pageSrc: config.tierBasedRewardsProductImagesPage1,
        pageCanvasId: 'tierBasedRewardsProductImagesPage1Canvas',
        pageCtxId: 'tierBasedRewardsProductImagesPage1Ctx',
        pageBox: { x: 936, y: 600, w: 108, h: 108 },
        imageBox: { x: 945.79, y: 610.42, w: 88.42, h: 88.42 },
        imageBg: '#FFD9AD',
        pageWidth: 1170,
        pageHeight: 2532
    },
    tierBasedRewardsProductImagesPage2: {
        pageSrc: config.tierBasedRewardsProductImagesPage2,
        pageCanvasId: 'tierBasedRewardsProductImagesPage2Canvas',
        pageCtxId: 'tierBasedRewardsProductImagesPage2Ctx',
        pageBox: { x: 56, y: 1862, w: 188, h: 188 },
        imageBox: { x: 72.95, y: 1880.04, w: 153.1, h: 153.1 },
        imageBg: '#F5F5F5',
        pageWidth: 1170,
        pageHeight: 2533
    },
    tierBasedRewardsProductImagesPage3: {
        pageSrc: config.tierBasedRewardsProductImagesPage3,
        pageCanvasId: 'tierBasedRewardsProductImagesPage3Canvas',
        pageCtxId: 'tierBasedRewardsProductImagesPage3Ctx',
        pageBox: { x: 35, y: 1676, w: 342, h: 342 },
        imageBox: { x: 66, y: 1709, w: 280, h: 280 },
        imageBg: '#FFFFFF',
        pageWidth: 1170,
        pageHeight: 2532
    }
};
async function renderTierBasedRewardsProductImagesCanvas() {
    if (!tierBasedRewardsProductImagesExportCanvas || !tierBasedRewardsProductImagesExportCtx) return;
    const defaultImg = await loadImage(config.tierBasedRewardsProductImagesImage);
    const iconImg = userImgObj || defaultImg;
    const exportSize = 342;
    tierBasedRewardsProductImagesExportCanvas.width = exportSize;
    tierBasedRewardsProductImagesExportCanvas.height = exportSize;
    setupHighQualityContext(tierBasedRewardsProductImagesExportCtx);
    tierBasedRewardsProductImagesExportCtx.clearRect(0, 0, exportSize, exportSize);
    if (iconImg && iconImg.width) {
        drawContainedImage(tierBasedRewardsProductImagesExportCtx, iconImg, { x: 31, y: 33, w: 280, h: 280 });
    }

    for (const [pageKey, layout] of Object.entries(TIER_BASED_REWARDS_LAYOUTS)) {
        const pageCanvas = document.getElementById(layout.pageCanvasId);
        const pageCtx = document.getElementById(layout.pageCtxId)?.getContext('2d') || pageCanvas?.getContext('2d');
        if (!pageCanvas || !pageCtx) continue;
        const pageImg = await loadImage(layout.pageSrc);
        const pageW = pageImg?.width || layout.pageWidth;
        const pageH = pageImg?.height || layout.pageHeight;
        pageCanvas.width = pageW;
        pageCanvas.height = pageH;
        setupHighQualityContext(pageCtx);
        pageCtx.clearRect(0, 0, pageW, pageH);
        if (pageImg && pageImg.width) {
            pageCtx.drawImage(pageImg, 0, 0, pageW, pageH);
        } else {
            pageCtx.fillStyle = '#F5F6FA';
            pageCtx.fillRect(0, 0, pageW, pageH);
        }
        if (iconImg && iconImg.width) {
            if (layout.imageBg) {
                pageCtx.fillStyle = layout.imageBg;
                pageCtx.fillRect(layout.imageBox.x, layout.imageBox.y, layout.imageBox.w, layout.imageBox.h);
            }
            drawContainedImage(pageCtx, iconImg, layout.imageBox);
        }
        pageCanvas._bannerBBox = { x: layout.pageBox.x, y: layout.pageBox.y, w: layout.pageBox.w, h: layout.pageBox.h };
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
        const grad = addTwoStopGradient(
            createGradientByAngle(ctx, { x: 0, y: 0, w: canvas.width, h: canvas.height }, opts.bgAngle ?? 135),
            opts.grad1 || '#E5F3FF',
            opts.bgStop1 ?? 0,
            opts.grad2 || '#FFFFFF',
            opts.bgStop2 ?? 100
        );
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
        const btnGrad = addTwoStopGradient(
            createGradientByAngle(btnCtx, { x: 0, y: 0, w: btnCanvas.width, h: btnCanvas.height }, opts.btnAngle ?? 90),
            opts.btnGrad1 || '#06A7FF',
            opts.btnStop1 ?? 0,
            opts.btnGrad2 || '#0066FF',
            opts.btnStop2 ?? 100
        );
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
        bgAngle: document.getElementById('mySpaceBgGradAngle')?.value || 135,
        bgStop1: document.getElementById('mySpaceBgGradStop1')?.value || 0,
        bgStop2: document.getElementById('mySpaceBgGradStop2')?.value || 100,
        title: mySpaceTitleInput?.value || '',
        highlight: '',
        highlightColor: '#000000',
        sub: mySpaceSubInput?.value || '',
        btnText: mySpaceBtnTextInput?.value || '',
        btnGrad1: mySpaceBtnGrad1?.value || '#06A7FF',
        btnGrad2: mySpaceBtnGrad2?.value || '#0066FF',
        btnAngle: document.getElementById('mySpaceBtnGradAngle')?.value || 90,
        btnStop1: document.getElementById('mySpaceBtnGradStop1')?.value || 0,
        btnStop2: document.getElementById('mySpaceBtnGradStop2')?.value || 100,
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
        bgAngle: document.getElementById('simpleScanBgGradAngle')?.value || 135,
        bgStop1: document.getElementById('simpleScanBgGradStop1')?.value || 0,
        bgStop2: document.getElementById('simpleScanBgGradStop2')?.value || 100,
        title: simpleScanTitleInput?.value || '',
        highlight: simpleScanHighlightInput?.value || '',
        highlightColor: simpleScanHighlightColor?.value || '#14B5FF',
        sub: simpleScanSubInput?.value || '',
        btnText: simpleScanBtnTextInput?.value || '',
        btnGrad1: simpleScanBtnGrad1?.value || '#06A7FF',
        btnGrad2: simpleScanBtnGrad2?.value || '#0066FF',
        btnAngle: document.getElementById('simpleScanBtnGradAngle')?.value || 90,
        btnStop1: document.getElementById('simpleScanBtnGradStop1')?.value || 0,
        btnStop2: document.getElementById('simpleScanBtnGradStop2')?.value || 100,
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
    let w = canvas.width, h = canvas.height;
    const exactGrad = buildGradientFromControls(ctx, { x: 0, y: 0, w, h }, {
        color1Id: 'myActivityGrad1',
        color2Id: 'myActivityGrad2',
        angleId: 'myActivityGradAngle',
        stop1Id: 'myActivityGradStop1',
        stop2Id: 'myActivityGradStop2',
        defaultAngle: 45,
        defaultStop1: 0,
        defaultStop2: 100,
        defaultColor1: '#E5F3FF',
        defaultColor2: '#FFFFFF'
    });
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
    let w = canvas.width, h = canvas.height;
    const exactGrad = buildGradientFromControls(ctx, { x: 0, y: 0, w, h }, {
        color1Id: 'peerSharingGrad1',
        color2Id: 'peerSharingGrad2',
        angleId: 'peerSharingGradAngle',
        stop1Id: 'peerSharingGradStop1',
        stop2Id: 'peerSharingGradStop2',
        defaultAngle: 45,
        defaultStop1: 0,
        defaultStop2: 100,
        defaultColor1: '#06A7FF',
        defaultColor2: '#0052CC'
    });
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
async function renderCloudStoreFeedLongBannerCanvas() {
    if (!cloudStoreFeedLongBannerPageCanvas || !cloudStoreFeedLongBannerPageCtx || !cloudStoreFeedLongBannerExportCanvas || !cloudStoreFeedLongBannerExportCtx) return;
    const exportW = 522;
    const exportH = 837;
    const outerRadius = 30;
    const safeBox = { x: 0, y: 0, w: 522, h: 522 };
    const pagePlacement = { x: 46, y: 1021 };

    if (!globalImageCache[config.cloudStoreFeedLongBannerBanner]) {
        globalImageCache[config.cloudStoreFeedLongBannerBanner] = await loadImage(config.cloudStoreFeedLongBannerBanner);
    }
    if (!globalImageCache[config.cloudStoreFeedLongBannerExampleImage]) {
        globalImageCache[config.cloudStoreFeedLongBannerExampleImage] = await loadImage(config.cloudStoreFeedLongBannerExampleImage);
    }
    if (config.cloudStoreFeedLongBannerPage && !globalImageCache[config.cloudStoreFeedLongBannerPage]) {
        globalImageCache[config.cloudStoreFeedLongBannerPage] = await loadImage(config.cloudStoreFeedLongBannerPage);
    }
    const bannerImg = globalImageCache[config.cloudStoreFeedLongBannerBanner];
    const imageImg = userImgObj || globalImageCache[config.cloudStoreFeedLongBannerExampleImage];
    const pageImg = config.cloudStoreFeedLongBannerPage ? globalImageCache[config.cloudStoreFeedLongBannerPage] : null;
    const titleText = cloudStoreFeedLongBannerTitle?.value || '主标题最多8个字';
    const subText = cloudStoreFeedLongBannerSub?.value || '副标题最多8个字';
    const btnText = cloudStoreFeedLongBannerBtnText?.value || '按钮字';
    const drawExportCanvas = (canvas, ctx) => {
        if (!canvas || !ctx) return;
        canvas.width = exportW;
        canvas.height = exportH;
        setupHighQualityContext(ctx);
        ctx.clearRect(0, 0, exportW, exportH);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, exportW, exportH);
        ctx.save();
        drawRoundRect(ctx, 0, 0, exportW, exportH, outerRadius);
        ctx.clip();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, exportW, exportH);
        if (bannerImg && bannerImg.width) {
            ctx.drawImage(bannerImg, 0, 0, exportW, exportH);
        } else {
            ctx.fillStyle = '#FC8825';
            drawRoundRect(ctx, 24.002, 695.002, 236.998, 85, 42.5);
            ctx.fill();
        }
        if (imageImg && imageImg.width) {
            drawContainedImage(ctx, imageImg, safeBox);
        }
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#000000';
        ctx.font = 'normal 46px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif';
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
        ctx.fillText(titleText, 23, 550);
        ctx.fillStyle = '#FC8825';
        ctx.font = 'normal 38px "FZLanTingHeiS-R-GB", "Microsoft YaHei", sans-serif';
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
        ctx.fillText(subText, 24.99, 621);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'normal 42px "FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(btnText, 142.5, 737.5);
        ctx.restore();
        canvas._bannerBBox = { x: 0, y: 0, w: exportW, h: exportH };
    };
    drawExportCanvas(cloudStoreFeedLongBannerExportCanvas, cloudStoreFeedLongBannerExportCtx);
    if (pageImg && pageImg.width) {
        cloudStoreFeedLongBannerPageCanvas.width = pageImg.width;
        cloudStoreFeedLongBannerPageCanvas.height = pageImg.height;
        setupHighQualityContext(cloudStoreFeedLongBannerPageCtx);
        cloudStoreFeedLongBannerPageCtx.clearRect(0, 0, pageImg.width, pageImg.height);
        cloudStoreFeedLongBannerPageCtx.drawImage(pageImg, 0, 0);
        cloudStoreFeedLongBannerPageCtx.save();
        drawRoundRect(cloudStoreFeedLongBannerPageCtx, pagePlacement.x, pagePlacement.y, exportW, exportH, outerRadius);
        cloudStoreFeedLongBannerPageCtx.clip();
        cloudStoreFeedLongBannerPageCtx.drawImage(cloudStoreFeedLongBannerExportCanvas, 0, 0, exportW, exportH, pagePlacement.x, pagePlacement.y, exportW, exportH);
        cloudStoreFeedLongBannerPageCtx.restore();
        cloudStoreFeedLongBannerPageCanvas._bannerBBox = { x: pagePlacement.x, y: pagePlacement.y, w: exportW, h: exportH };
    } else {
        drawExportCanvas(cloudStoreFeedLongBannerPageCanvas, cloudStoreFeedLongBannerPageCtx);
    }
}
async function renderMallFeedWideBannerCanvas() {
    if (!mallFeedWideBannerPage1Canvas || !mallFeedWideBannerPage1Ctx || !mallFeedWideBannerPage2Canvas || !mallFeedWideBannerPage2Ctx || !mallFeedWideBannerExportCanvas || !mallFeedWideBannerExportCtx || !mallFeedWideBannerPage1ExportCanvas || !mallFeedWideBannerPage1ExportCtx || !mallFeedWideBannerPage2ExportCanvas || !mallFeedWideBannerPage2ExportCtx) return;
    const exportW = 522;
    const exportH = 336;
    const bannerRadius = 28;
    const imageBox = { x: 313, y: 127, w: 180, h: 180 };
    const pageBoxes = [
        { canvas: mallFeedWideBannerPage1Canvas, ctx: mallFeedWideBannerPage1Ctx, pageSrc: config.mallFeedWideBannerPage1, x: 572.26, y: 1195, exportCanvas: mallFeedWideBannerPage1ExportCanvas, exportCtx: mallFeedWideBannerPage1ExportCtx, page: 1 },
        { canvas: mallFeedWideBannerPage2Canvas, ctx: mallFeedWideBannerPage2Ctx, pageSrc: config.mallFeedWideBannerPage2, x: 22, y: 1332, exportCanvas: mallFeedWideBannerPage2ExportCanvas, exportCtx: mallFeedWideBannerPage2ExportCtx, page: 2 }
    ];
    if (!globalImageCache[config.mallFeedWideBannerExampleImage]) {
        globalImageCache[config.mallFeedWideBannerExampleImage] = await loadImage(config.mallFeedWideBannerExampleImage);
    }
    for (const box of pageBoxes) {
        if (!globalImageCache[box.pageSrc]) globalImageCache[box.pageSrc] = await loadImage(box.pageSrc);
    }
    const visualImg = userImgObj || globalImageCache[config.mallFeedWideBannerExampleImage];

    const drawBanner = ({ exportCanvas, exportCtx, page }) => {
        if (!exportCanvas || !exportCtx) return;
        const pageState = getMallFeedWideBannerPageState(page);
        const prefix = getMallFeedWideBannerPagePrefix(page);
        exportCanvas.width = exportW;
        exportCanvas.height = exportH;
        setupHighQualityContext(exportCtx);
        exportCtx.clearRect(0, 0, exportW, exportH);
        exportCtx.fillStyle = '#FFFFFF';
        exportCtx.fillRect(0, 0, exportW, exportH);
        exportCtx.save();
        drawRoundRect(exportCtx, 0, 0, exportW, exportH, bannerRadius);
        exportCtx.clip();
        const grad = buildGradientFromControls(exportCtx, { x: 0, y: 0, w: exportW, h: exportH }, {
            color1Id: `${prefix}Grad1`,
            color2Id: `${prefix}Grad2`,
            angleId: `${prefix}GradAngle`,
            defaultAngle: 90,
            defaultColor1: pageState.grad1,
            defaultColor2: pageState.grad2
        });
        exportCtx.fillStyle = grad || pageState.grad1 || '#FF288F';
        exportCtx.fillRect(0, 0, exportW, exportH);
        if (visualImg && visualImg.width) {
            drawContainedImage(exportCtx, visualImg, imageBox);
        }
        exportCtx.textAlign = 'left';
        exportCtx.textBaseline = 'top';
        if ('letterSpacing' in exportCtx) exportCtx.letterSpacing = '0px';
        const fitFont = (text, maxWidth, startSize, minSize, fontFamily) => {
            let size = startSize;
            const safeText = String(text || '');
            while (size > minSize) {
                exportCtx.font = `normal ${size}px ${fontFamily}`;
                if (exportCtx.measureText(safeText).width <= maxWidth) break;
                size -= 1;
            }
            exportCtx.font = `normal ${size}px ${fontFamily}`;
        };
        const titleBox = { x: 29.58, y: 66, w: 272, h: 57.07060623168945 };
        const subBox = { x: 29.58, y: 131, w: 252, h: 44.054500579833984 };
        const btnBox = { x: 29.58, y: 217.55, w: 197.75460815429688, h: 61.999996185302734 };
        const btnTextBox = { x: 73.95, y: 227.8, w: 108, h: 42.052024841308594 };
        exportCtx.fillStyle = pageState.titleColor;
        fitFont(pageState.title, titleBox.w, 48, 30, '"FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif');
        if ('letterSpacing' in exportCtx) exportCtx.letterSpacing = '0px';
        exportCtx.fillText(pageState.title, titleBox.x, titleBox.y);
        exportCtx.fillStyle = pageState.subColor;
        fitFont(pageState.sub, subBox.w, 38, 24, '"FZLanTingHeiS-R-GB", "Microsoft YaHei", sans-serif');
        if ('letterSpacing' in exportCtx) exportCtx.letterSpacing = '0px';
        exportCtx.fillText(pageState.sub, subBox.x, subBox.y);
        exportCtx.save();
        drawRoundRect(exportCtx, btnBox.x, btnBox.y, btnBox.w, btnBox.h, Math.min(38.95, btnBox.h / 2, btnBox.w / 2));
        exportCtx.lineWidth = 2;
        exportCtx.strokeStyle = pageState.btnColor;
        exportCtx.stroke();
        exportCtx.restore();
        exportCtx.fillStyle = pageState.btnColor;
        fitFont(pageState.btn, btnTextBox.w, 36, 22, '"FZLanTingHeiS-DB-GB", "Microsoft YaHei", sans-serif');
        if ('letterSpacing' in exportCtx) exportCtx.letterSpacing = '0px';
        exportCtx.textAlign = 'center';
        exportCtx.textBaseline = 'middle';
        exportCtx.fillText(pageState.btn, btnTextBox.x + btnTextBox.w / 2, btnTextBox.y + btnTextBox.h / 2 + 0.5);
        exportCtx.restore();
    };

    const drawPagePreview = async ({ canvas, ctx, pageSrc, x, y, exportCanvas }) => {
        if (!canvas || !ctx || !exportCanvas) return;
        const pageImg = globalImageCache[pageSrc];
        canvas.width = pageImg?.width || 1125;
        canvas.height = pageImg?.height || 2436;
        setupHighQualityContext(ctx);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (pageImg && pageImg.width) {
            ctx.drawImage(pageImg, 0, 0);
        } else {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.save();
        drawRoundRect(ctx, x, y, exportW, exportH, bannerRadius);
        ctx.clip();
        ctx.drawImage(exportCanvas, 0, 0, exportW, exportH, x, y, exportW, exportH);
        ctx.restore();
        canvas._bannerBBox = { x, y, w: exportW, h: exportH };
    };

    drawBanner(pageBoxes[0]);
    drawBanner(pageBoxes[1]);
    if (mallFeedWideBannerExportCanvas && mallFeedWideBannerExportCtx) {
        mallFeedWideBannerExportCanvas.width = exportW;
        mallFeedWideBannerExportCanvas.height = exportH;
        setupHighQualityContext(mallFeedWideBannerExportCtx);
        mallFeedWideBannerExportCtx.clearRect(0, 0, exportW, exportH);
        if (mallFeedWideBannerPage1ExportCanvas?.width) {
            mallFeedWideBannerExportCtx.drawImage(mallFeedWideBannerPage1ExportCanvas, 0, 0, exportW, exportH, 0, 0, exportW, exportH);
        }
    }
    await drawPagePreview(pageBoxes[0]);
    await drawPagePreview(pageBoxes[1]);
}
async function renderPeerSharingIconPushCanvas() {
    if (!peerSharingIconPushPageCanvas || !peerSharingIconPushPageCtx || !peerSharingIconPushExportCanvas || !peerSharingIconPushExportCtx) return;
    const exportSize = 300;
    const pageBox = { x: 248, y: 1167, w: 167, h: 167 };
    if (!globalImageCache[config.peerSharingIconPushExampleImage]) {
        globalImageCache[config.peerSharingIconPushExampleImage] = await loadImage(config.peerSharingIconPushExampleImage);
    }
    if (!globalImageCache[config.peerSharingIconPushPage]) {
        globalImageCache[config.peerSharingIconPushPage] = await loadImage(config.peerSharingIconPushPage);
    }
    const iconImg = userImgObj || globalImageCache[config.peerSharingIconPushExampleImage];
    const pageImg = globalImageCache[config.peerSharingIconPushPage];

    peerSharingIconPushExportCanvas.width = exportSize;
    peerSharingIconPushExportCanvas.height = exportSize;
    setupHighQualityContext(peerSharingIconPushExportCtx);
    peerSharingIconPushExportCtx.clearRect(0, 0, exportSize, exportSize);
    if (iconImg && iconImg.width) {
        drawContainedImage(peerSharingIconPushExportCtx, iconImg, { x: 0, y: 0, w: exportSize, h: exportSize });
    }

    if (pageImg && pageImg.width) {
        peerSharingIconPushPageCanvas.width = pageImg.width;
        peerSharingIconPushPageCanvas.height = pageImg.height;
        setupHighQualityContext(peerSharingIconPushPageCtx);
        peerSharingIconPushPageCtx.clearRect(0, 0, peerSharingIconPushPageCanvas.width, peerSharingIconPushPageCanvas.height);
        peerSharingIconPushPageCtx.drawImage(pageImg, 0, 0);
        if (iconImg && iconImg.width) {
            drawContainedImage(peerSharingIconPushPageCtx, iconImg, pageBox);
        }
        peerSharingIconPushPageCanvas._bannerBBox = pageBox;
    }
}
function drawContainedImage(ctx, img, box) {
    if (!ctx || !img || !img.width || !box) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(box.x, box.y, box.w, box.h);
    ctx.clip();
    const scale = Math.min(box.w / img.width, box.h / img.height);
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    const drawX = box.x + (box.w - drawW) / 2;
    const drawY = box.y + (box.h - drawH) / 2;
    drawSharpenedImage(ctx, img, drawX, drawY, drawW, drawH, 0.3);
    ctx.restore();
}
function drawCoveredImage(ctx, img, box) {
    if (!ctx || !img || !img.width || !box) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(box.x, box.y, box.w, box.h);
    ctx.clip();
    const scale = Math.max(box.w / img.width, box.h / img.height);
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    const drawX = box.x + (box.w - drawW) / 2;
    const drawY = box.y + (box.h - drawH) / 2;
    drawSharpenedImage(ctx, img, drawX, drawY, drawW, drawH, 0.3);
    ctx.restore();
}
function clampGradientStop(value, fallback) {
    const num = parseFloat(value);
    if (Number.isNaN(num)) return fallback;
    return Math.min(Math.max(num, 0), 100);
}
function createGradientByAngle(ctx, box, angle) {
    const safeBox = box || { x: 0, y: 0, w: 0, h: 0 };
    const deg = parseFloat(angle) || 0;
    const rad = (deg - 90) * Math.PI / 180;
    const halfW = safeBox.w / 2;
    const halfH = safeBox.h / 2;
    const length = Math.abs(safeBox.w * Math.cos(rad)) + Math.abs(safeBox.h * Math.sin(rad));
    const x0 = safeBox.x + halfW - Math.cos(rad) * length / 2;
    const y0 = safeBox.y + halfH - Math.sin(rad) * length / 2;
    const x1 = safeBox.x + halfW + Math.cos(rad) * length / 2;
    const y1 = safeBox.y + halfH + Math.sin(rad) * length / 2;
    return ctx.createLinearGradient(x0, y0, x1, y1);
}
function addTwoStopGradient(grad, startColor, startStop, endColor, endStop) {
    const s1 = clampGradientStop(startStop, 0) / 100;
    const s2 = clampGradientStop(endStop, 100) / 100;
    const first = { stop: s1, color: startColor };
    const second = { stop: s2, color: endColor };
    [first, second].sort((a, b) => a.stop - b.stop).forEach(item => grad.addColorStop(item.stop, item.color));
    return grad;
}
function drawGradientPill(ctx, box, opts = {}) {
    if (!ctx || !box) return;
    ctx.save();
    const grad = addTwoStopGradient(
        createGradientByAngle(ctx, box, opts.angle ?? 90),
        opts.startColor ?? '#FFFDED',
        opts.startStop ?? 0,
        opts.endColor ?? '#FBF6F3',
        opts.endStop ?? 100
    );
    ctx.fillStyle = grad;
    drawRoundRect(ctx, box.x, box.y, box.w, box.h, opts.radius || 66);
    ctx.fill();
    ctx.restore();
}
function readGradientNumber(id, fallback) {
    const num = parseFloat(document.getElementById(id)?.value);
    return Number.isNaN(num) ? fallback : num;
}
function readGradientColor(id, fallback) {
    return document.getElementById(id)?.value || fallback;
}
function buildGradientFromControls(ctx, box, cfg) {
    if (!ctx || !box || !cfg) return null;
    return addTwoStopGradient(
        createGradientByAngle(ctx, box, readGradientNumber(cfg.angleId, cfg.defaultAngle ?? 90)),
        readGradientColor(cfg.color1Id, cfg.defaultColor1 || '#FFFFFF'),
        readGradientNumber(cfg.stop1Id, cfg.defaultStop1 ?? 0),
        readGradientColor(cfg.color2Id, cfg.defaultColor2 || '#FFFFFF'),
        readGradientNumber(cfg.stop2Id, cfg.defaultStop2 ?? 100)
    );
}
function updateGradientSliderLabel(id, value, suffix = '') {
    const el = document.getElementById(id);
    if (el) el.innerText = `${value}${suffix}`;
}
function bindGradientSlider(id, labelId, renderFn, suffix = '') {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', (e) => {
        updateGradientSliderLabel(labelId, e.target.value, suffix);
        renderFn();
    });
}
const MEMBERS_CHANNEL_LAYOUTS = {
    dev_1_1_9_1: {
        pageSrc: config.membersChannelPage1,
        bannerSrc: config.membersChannelBanner1,
        pageCanvasId: 'membersChannelPage1Canvas',
        pageCtxId: 'membersChannelPage1Ctx',
        exportCanvasId: 'membersChannelPage1ExportCanvas',
        exportCtxId: 'membersChannelPage1ExportCtx',
        titleInput: 'membersChannelPage1Title',
        subInput: 'membersChannelPage1Sub',
        btnInput: 'membersChannelPage1Btn',
        outputSize: { w: 1053, h: 438 },

        pageBox: { x: 19, y: 874, w: 713, h: 296.57550048828125 },
        imageBox: { x: 28, y: 29, w: 450, h: 380 },
        titleBox: { x: 993.46, y: 74, font: 'normal 54px "FZLanTingHeiS-DB-GB", sans-serif', align: 'right', color: '#FFFFFF' },
        subBox: { x: 994.31, y: 159, font: 'normal 42px "FZLanTingHeiS-R-GB", sans-serif', align: 'right', color: '#FFFFFF' },
        buttonBox: { x: 692.66, y: 255, w: 301.29, h: 109, radius: 66 },
        buttonText: { font: 'normal 36px "FZLanTingHeiS-DB-GB", sans-serif', color: '#434446', align: 'center', baseline: 'middle' }
    },
    dev_1_1_9_2: {
        pageSrc: config.membersChannelPage2,
        bannerSrc: config.membersChannelBanner2,
        pageCanvasId: 'membersChannelPage2Canvas',
        pageCtxId: 'membersChannelPage2Ctx',
        exportCanvasId: 'membersChannelPage2ExportCanvas',
        exportCtxId: 'membersChannelPage2ExportCtx',
        titleInput: 'membersChannelPage2Title',
        btnInput: 'membersChannelPage2Btn',
        outputSize: { w: 516, h: 435 },

        pageBox: { x: 23, y: 878, w: 340, h: 286.6278991699219 },
        imageBox: { x: 96, y: 10, w: 324, h: 229 },
        titleBox: { x: 258, y: 252, font: 'normal 42px "FZLanTingHeiS-DB-GB", sans-serif', align: 'center', color: '#FFFFFF' },
        buttonBox: { x: 107, y: 327, w: 301, h: 78, radius: 66 },
        buttonText: { font: 'normal 36px "FZLanTingHeiS-DB-GB", sans-serif', color: '#434446', align: 'center', baseline: 'middle' }
    },
    dev_1_1_9_3: {
        pageSrc: config.membersChannelPage3,
        bannerSrc: config.membersChannelBanner3,
        pageCanvasId: 'membersChannelPage3Canvas',
        pageCtxId: 'membersChannelPage3Ctx',
        exportCanvasId: 'membersChannelPage3ExportCanvas',
        exportCtxId: 'membersChannelPage3ExportCtx',
        titleInput: 'membersChannelPage3Title',
        btnInput: 'membersChannelPage3Btn',
        outputSize: { w: 405, h: 435 },

        pageBox: { x: 238, y: 872, w: 273, h: 293.22222900390625 },
        imageBox: { x: 44, y: 16, w: 317, h: 223 },
        titleBox: { x: 202.5, y: 252, font: 'normal 42px "FZLanTingHeiS-DB-GB", sans-serif', align: 'center', color: '#FFFFFF' },
        buttonBox: { x: 54.75, y: 329.43, w: 299.56, h: 77.63, radius: 65.68 },
        buttonText: { font: 'normal 36px "FZLanTingHeiS-DB-GB", sans-serif', color: '#434446', align: 'center', baseline: 'middle' }
    }
};
async function renderMembersChannelPage(resourceKey) {
    const layout = MEMBERS_CHANNEL_LAYOUTS[resourceKey];
    if (!layout) return;
    const pageCanvas = document.getElementById(layout.pageCanvasId);
    const pageCtx = document.getElementById(layout.pageCtxId)?.getContext('2d') || pageCanvas?.getContext('2d');
    const exportCanvas = document.getElementById(layout.exportCanvasId);
    const exportCtx = document.getElementById(layout.exportCtxId)?.getContext('2d') || exportCanvas?.getContext('2d');
    if (!pageCanvas || !pageCtx || !exportCanvas || !exportCtx) return;

    const bannerImg = await loadImage(layout.bannerSrc);
    if (!bannerImg || !bannerImg.width) return;

    const bannerCanvas = document.createElement('canvas');
    bannerCanvas.width = layout.outputSize?.w || bannerImg.width;
    bannerCanvas.height = layout.outputSize?.h || bannerImg.height;
    const bannerCtx = bannerCanvas.getContext('2d');
    setupHighQualityContext(bannerCtx);
    bannerCtx.clearRect(0, 0, bannerCanvas.width, bannerCanvas.height);
    if (resourceKey !== 'dev_1_1_9_2') bannerCtx.drawImage(bannerImg, 0, 0, bannerCanvas.width, bannerCanvas.height);

    if (resourceKey !== 'dev_1_1_9_1') {
        const pad = resourceKey === 'dev_1_1_9_3' ? 1.5 : 0.5;
        const radius = resourceKey === 'dev_1_1_9_3' ? 38 : 32;
        bannerCtx.save();
        drawRoundRect(bannerCtx, pad, pad, bannerCanvas.width - pad * 2, bannerCanvas.height - pad * 2, radius);
        bannerCtx.fillStyle = 'rgba(255,255,255,0.10)';
        bannerCtx.fill();
        bannerCtx.lineWidth = 1;
        bannerCtx.strokeStyle = 'rgba(255,255,255,0.26)';
        bannerCtx.stroke();
        bannerCtx.restore();
    }

    const exampleImg = userImgObj || await loadImage(config.feedExampleImage);
    drawContainedImage(bannerCtx, exampleImg, layout.imageBox);

    const titleValue = document.getElementById(layout.titleInput)?.value || '';
    bannerCtx.textAlign = layout.titleBox.align;
    bannerCtx.textBaseline = 'top';
    bannerCtx.fillStyle = layout.titleBox.color;
    bannerCtx.font = layout.titleBox.font;
    bannerCtx.fillText(titleValue, layout.titleBox.x, layout.titleBox.y);

    if (layout.subInput && layout.subBox) {
        const subValue = document.getElementById(layout.subInput)?.value || '';
        bannerCtx.textAlign = layout.subBox.align;
        bannerCtx.textBaseline = 'top';
        bannerCtx.fillStyle = layout.subBox.color;
        bannerCtx.font = layout.subBox.font;
        bannerCtx.fillText(subValue, layout.subBox.x, layout.subBox.y);
    }

    drawGradientPill(bannerCtx, layout.buttonBox, {
        startColor: membersChannelBtnGrad1?.value || '#FFFDED',
        endColor: membersChannelBtnGrad2?.value || '#FBF6F3',
        angle: membersChannelBtnGradAngle?.value || 90,
        startStop: membersChannelBtnGradStop1?.value || 0,
        endStop: membersChannelBtnGradStop2?.value || 100,
        radius: Math.min(layout.buttonBox.radius || 66, layout.buttonBox.w / 2, layout.buttonBox.h / 2)
    });
    const buttonValue = document.getElementById(layout.btnInput)?.value || '';
    bannerCtx.textAlign = layout.buttonText.align;
    bannerCtx.textBaseline = layout.buttonText.baseline;
    bannerCtx.fillStyle = layout.buttonText.color;
    bannerCtx.font = layout.buttonText.font;
    bannerCtx.fillText(buttonValue, layout.buttonBox.x + layout.buttonBox.w / 2, layout.buttonBox.y + layout.buttonBox.h / 2);

    exportCanvas.width = bannerCanvas.width;
    exportCanvas.height = bannerCanvas.height;
    setupHighQualityContext(exportCtx);
    exportCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    exportCtx.drawImage(bannerCanvas, 0, 0);

    const pageImg = await loadImage(layout.pageSrc);
    if (pageImg && pageImg.width) {
        pageCanvas.width = pageImg.width;
        pageCanvas.height = pageImg.height;
        setupHighQualityContext(pageCtx);
        pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageCtx.drawImage(pageImg, 0, 0);
        pageCtx.drawImage(bannerCanvas, layout.pageBox.x, layout.pageBox.y, layout.pageBox.w, layout.pageBox.h);
        pageCanvas._bannerBBox = { x: layout.pageBox.x, y: layout.pageBox.y, w: layout.pageBox.w, h: layout.pageBox.h };
    }
}
async function renderMembersChannelPage1Canvas() { await renderMembersChannelPage('dev_1_1_9_1'); }
async function renderMembersChannelPage2Canvas() { await renderMembersChannelPage('dev_1_1_9_2'); }
async function renderMembersChannelPage3Canvas() { await renderMembersChannelPage('dev_1_1_9_3'); }
async function renderAllMembersChannelPages() {
    await renderMembersChannelPage1Canvas();
    await renderMembersChannelPage2Canvas();
    await renderMembersChannelPage3Canvas();
}
// ==================== 🛠️ 一刻相册：设备Banner (SS级) ====================
async function renderYikeEquipCanvas() {
    if (!yikeEquipPageCtx || !yikeEquipExportCtx) return;
    const bannerW = 1125, bannerH = 270;
    yikeEquipExportCanvas.width = bannerW; yikeEquipExportCanvas.height = bannerH;

    // 渐变底板
    const grad = buildGradientFromControls(yikeEquipExportCtx, { x: 0, y: 0, w: bannerW, h: bannerH }, {
        color1Id: 'yikeEquipGrad1',
        color2Id: 'yikeEquipGrad2',
        angleId: 'yikeEquipGradAngle',
        stop1Id: 'yikeEquipGradStop1',
        stop2Id: 'yikeEquipGradStop2',
        defaultAngle: 90,
        defaultStop1: 0,
        defaultStop2: 100,
        defaultColor1: '#AFF000',
        defaultColor2: '#E6FAB2'
    });
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

    const grad = buildGradientFromControls(yikeCashExportCtx, { x: 0, y: 0, w: bannerW, h: bannerH }, {
        color1Id: 'yikeCashGrad1',
        color2Id: 'yikeCashGrad2',
        angleId: 'yikeCashGradAngle',
        stop1Id: 'yikeCashGradStop1',
        stop2Id: 'yikeCashGradStop2',
        defaultAngle: 90,
        defaultStop1: 0,
        defaultStop2: 100,
        defaultColor1: '#FFFAEF',
        defaultColor2: '#FEEFBA'
    });
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
function updateResourceDropdown(terminalId, options = {}) {
    const resourceList = document.getElementById('resourceList');
    if (!resourceList) return;
    resourceList.innerHTML = '';
    let dirData = PAGE_DIRECTORY;
    let buKey = 'wangpan';
    if (currentBU === 'yike') { dirData = YIKE_PAGE_DIRECTORY; buKey = 'yike'; }
    if (currentBU === 'chuhai') { dirData = CHUHAI_PAGE_DIRECTORY; buKey = 'chuhai'; }
    if (currentBU === 'wenku') { dirData = WENKU_PAGE_DIRECTORY; buKey = 'wenku'; }
    currentTerminalId = terminalId || 'NA';
    const priorityList = IMPLEMENTED_RESOURCE_PRIORITY[buKey]?.[currentTerminalId] || [];
    const rawGroups = dirData[currentTerminalId] || [];
    const groups = rawGroups.length && Array.isArray(rawGroups[0]?.items)
        ? rawGroups
        : [{ title: currentTerminalId, items: rawGroups }];
    const pages = groups.flatMap(group => group.items || []);
    const restoredValue = options.selectedResource || activeResourceValue;
    const activeValue = pages.some(page => page.value === restoredValue)
        ? restoredValue
        : (priorityList.find(value => pages.some(page => page.value === value)) || pages[0]?.value);
    groups.forEach(group => {
        if (!group?.items?.length) return;
        const section = document.createElement('section');
        section.className = 'resource-directory';
        const title = document.createElement('div');
        title.className = 'resource-directory-title';
        title.textContent = group.title || currentTerminalId;
        const items = document.createElement('div');
        items.className = 'resource-directory-items';
        group.items.forEach((page) => {
            const item = document.createElement('div');
            item.className = 'resource-item';
            if (page.value === activeValue) item.classList.add('active');
            if (page.placeholder) item.classList.add('placeholder');
            item.dataset.value = page.value;
            item.innerHTML = `<div class="resource-item-text" title="${page.text}">${page.text}</div>`;
            item.addEventListener('click', () => {
                document.querySelectorAll('.resource-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                if (page.placeholder) {
                    activeResourceValue = page.value;
                    updateSmartActionTitle(page.value);
                    markResourceListActive(page.value);
                    return;
                }
                switchResourceView(page.value);
                resetCanvasView();
            });
            items.appendChild(item);
        });
        section.appendChild(title);
        section.appendChild(items);
        resourceList.appendChild(section);
    });
    const activeItem = resourceList.querySelector('.resource-item.active') || resourceList.querySelector('.resource-item');
    if (activeItem) {
        const activeResource = activeItem.dataset.value;
        if (isRenderableResource(activeResource)) {
            switchResourceView(activeResource, { preserveAiResult: options.preserveAiResult });
        } else {
            activeResourceValue = activeResource;
            updateSmartActionTitle(activeResource);
            switchResourceView(null, { preserveAiResult: options.preserveAiResult });
            markResourceListActive(activeResource);
        }
    } else {
        switchResourceView(null, { preserveAiResult: options.preserveAiResult });
    }
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
    if (renderedPages.videoAudioShare) await renderVideoAudioShareCanvas();
    if (renderedPages.membershipChannelCard) await renderMembershipChannelCardCanvas();
    if (renderedPages.tierBasedRewardsProductImages) await renderTierBasedRewardsProductImagesCanvas();
    if (renderedPages.membersChannelPage1) await renderMembersChannelPage1Canvas();
    if (renderedPages.membersChannelPage2) await renderMembersChannelPage2Canvas();
    if (renderedPages.membersChannelPage3) await renderMembersChannelPage3Canvas();
    if (renderedPages.searchIcon) await renderSearchIcon();
    if (renderedPages.mySpace) { await renderMySpaceCanvas(); await renderSimpleScanCanvas(); }
    if (renderedPages.myActivity) await renderMyActivityCanvas();
    if (renderedPages.peerSharing) await renderPeerSharingCanvas();
    if (renderedPages.peerSharingIconPush) await renderPeerSharingIconPushCanvas();
    if (renderedPages.cloudStoreFeedLongBanner) await renderCloudStoreFeedLongBannerCanvas();
    if (renderedPages.mallFeedWideBanner) await renderMallFeedWideBannerCanvas();
}
async function renderResourceCanvases(resources, options = {}) {
    const uniqueResources = [...new Set(resources)];
    for (const resource of uniqueResources) {
        if (resource === 'na_home') { await renderHomeCanvas(); renderedPages.home = true; }
        else if (resource === 'na_mypage') { await renderMyPage(); renderedPages.myPage = true; }
        else if (resource === 'na_feed') { await renderFeedCanvas(); renderedPages.feed = true; }
        else if (resource === 'dev_1_1_11') { await renderVideoAudioShareCanvas(); renderedPages.videoAudioShare = true; }
        else if (resource === 'dev_1_1_15') { await renderMembershipChannelCardCanvas(); renderedPages.membershipChannelCard = true; }
        else if (resource === 'dev_1_1_12') { await renderTierBasedRewardsProductImagesCanvas(); renderedPages.tierBasedRewardsProductImages = true; }
        else if (resource === 'dev_1_1_9') {
            await renderMembersChannelPage1Canvas();
            await renderMembersChannelPage2Canvas();
            await renderMembersChannelPage3Canvas();
            renderedPages.membersChannelPage1 = true;
            renderedPages.membersChannelPage2 = true;
            renderedPages.membersChannelPage3 = true;
        }
        else if (resource === 'dev_1_1_13') { await renderSearchIcon(); renderedPages.searchIcon = true; }
        else if (resource === 'dev_1_1_16') {
            const showBoth = !options.foundMySpace && !options.foundSimpleScan;
            if (showBoth || options.foundMySpace) await renderMySpaceCanvas();
            if (showBoth || options.foundSimpleScan) await renderSimpleScanCanvas();
            renderedPages.mySpace = true;
        } else if (resource === 'dev_1_1_17') { await renderMyActivityCanvas(); renderedPages.myActivity = true; }
        else if (resource === 'dev_1_1_18') { await renderPeerSharingCanvas(); renderedPages.peerSharing = true; }
        else if (resource === 'dev_1_1_19') { await renderPeerSharingIconPushCanvas(); renderedPages.peerSharingIconPush = true; }
        else if (resource === 'dev_1_1_20') { await renderCloudStoreFeedLongBannerCanvas(); renderedPages.cloudStoreFeedLongBanner = true; }
        else if (resource === 'dev_1_1_21') { await renderMallFeedWideBannerCanvas(); renderedPages.mallFeedWideBanner = true; }
        else if (resource === 'yike_4') { await renderYikeHomeCanvas(); renderedPages.yikeHome = true; }
        else if (resource === 'yike_5') { await renderYikeEquipCanvas(); renderedPages.yikeEquip = true; }
        else if (resource === 'yike_7') { await renderYikeCashCanvas(); renderedPages.yikeCash = true; }
    }
}
async function switchResourceView(selected, options = {}) {
    activeResourceValue = selected || null;
    updateSmartActionTitle(selected);
    if (smartActionMode === 'text') renderSmartTextEditor(selected, 0);
    else if (smartActionDetail) {
        smartActionDetail.classList.remove('active');
        smartActionDetail.innerHTML = '<div class="smart-action-placeholder">点“改文案”后，这里会出现当前资源可直接编辑的文案项。</div>';
    }
    if (!options.preserveAiResult) clearAiResultPreviewState();
    [homeControls, myPageControls, feedControls, videoAudioShareControls, membershipChannelCardControls, tierBasedRewardsProductImagesControls, membersChannelControls, searchIconControls, mySpaceControls, myActivityControls, peerSharingControls, peerSharingIconPushControls, cloudStoreFeedLongBannerControls, mallFeedWideBannerControls, mallFeedWideBannerPage1ControlPanel, mallFeedWideBannerPage2ControlPanel, yikeEquipControls, yikeCashControls, yikeHomeControls].forEach(ctrl => ctrl?.classList.remove('active'));
    [homeView, myPageView, feedView, videoAudioShareView, membershipChannelCardView, tierBasedRewardsProductImagesView, membersChannelView, searchIconView, mySpaceView, myActivityView, peerSharingView, peerSharingIconPushView, cloudStoreFeedLongBannerView, mallFeedWideBannerView, yikeEquipView, yikeCashView, yikeHomeView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
    developingPrompt.classList.add('hidden');
    const container = document.getElementById('canvasContainer');
    container.style.flexDirection = 'column'; container.style.flexWrap = 'nowrap'; container.style.alignItems = 'center'; container.style.gap = '0px';
    document.querySelectorAll('.view-section').forEach(el => { el.style.width = '100%'; el.style.flexShrink = '1'; });
    syncCurrentBusinessUploadState(selected);
    const spaceCard = document.getElementById('mySpacePageCanvas')?.closest('.preview-card');
    const scanCard = document.getElementById('simpleScanPageCanvas')?.closest('.preview-card');
    if (spaceCard) spaceCard.style.display = '';
    if (scanCard) scanCard.style.display = '';
    if (['na_home', 'na_mypage', 'na_feed', 'dev_1_1_11', 'dev_1_1_15', 'dev_1_1_12', 'dev_1_1_9', 'dev_1_1_13', 'dev_1_1_16', 'dev_1_1_17', 'dev_1_1_18', 'dev_1_1_19', 'dev_1_1_20', 'dev_1_1_21', 'yike_4', 'yike_5', 'yike_7'].includes(selected)) {
        baseGlobalPicArea.style.display = 'flex';
    } else {
        baseGlobalPicArea.style.display = 'none';
    }
    if (selected === 'na_home') {
        homeControls.classList.add('active'); homeView.classList.add('active');
        if (!renderedPages.home) { await renderHomeCanvas(); renderedPages.home = true; }
    } else if (selected === 'dev_1_1_11') {
        videoAudioShareControls.classList.add('active'); videoAudioShareView.classList.add('active');
        if (!renderedPages.videoAudioShare) { await renderVideoAudioShareCanvas(); renderedPages.videoAudioShare = true; }
    } else if (selected === 'dev_1_1_15') {
        membershipChannelCardControls?.classList.add('active'); membershipChannelCardView?.classList.add('active');
        if (!renderedPages.membershipChannelCard) { await renderMembershipChannelCardCanvas(); renderedPages.membershipChannelCard = true; }
    } else if (selected === 'dev_1_1_12') {
        tierBasedRewardsProductImagesControls.classList.add('active'); tierBasedRewardsProductImagesView.classList.add('active');
        if (!renderedPages.tierBasedRewardsProductImages) { await renderTierBasedRewardsProductImagesCanvas(); renderedPages.tierBasedRewardsProductImages = true; }
    } else if (selected === 'na_mypage') {
        myPageControls.classList.add('active'); myPageView.classList.add('active');
        if (!renderedPages.myPage) { await renderMyPage(); renderedPages.myPage = true; }
    } else if (selected === 'na_feed') {
        feedControls.classList.add('active'); feedView.classList.add('active');
        if (!renderedPages.feed) { await renderFeedCanvas(); renderedPages.feed = true; }
    } else if (selected === 'dev_1_1_9') {
        membersChannelControls?.classList.add('active'); membersChannelView?.classList.add('active');
        if (!renderedPages.membersChannelPage1) { await renderMembersChannelPage1Canvas(); renderedPages.membersChannelPage1 = true; }
        if (!renderedPages.membersChannelPage2) { await renderMembersChannelPage2Canvas(); renderedPages.membersChannelPage2 = true; }
        if (!renderedPages.membersChannelPage3) { await renderMembersChannelPage3Canvas(); renderedPages.membersChannelPage3 = true; }
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
    } else if (selected === 'dev_1_1_19') {
        peerSharingIconPushControls.classList.add('active'); peerSharingIconPushView.classList.add('active');
        if (!renderedPages.peerSharingIconPush) { await renderPeerSharingIconPushCanvas(); renderedPages.peerSharingIconPush = true; }
    } else if (selected === 'dev_1_1_20') {
        cloudStoreFeedLongBannerControls?.classList.add('active'); cloudStoreFeedLongBannerView?.classList.add('active');
        if (!renderedPages.cloudStoreFeedLongBanner) { await renderCloudStoreFeedLongBannerCanvas(); renderedPages.cloudStoreFeedLongBanner = true; }
    } else if (selected === 'dev_1_1_21') {
        mallFeedWideBannerControls?.classList.add('active'); mallFeedWideBannerPage1ControlPanel?.classList.add('active'); mallFeedWideBannerPage2ControlPanel?.classList.add('active'); mallFeedWideBannerView?.classList.add('active');
        if (!renderedPages.mallFeedWideBanner) { await renderMallFeedWideBannerCanvas(); renderedPages.mallFeedWideBanner = true; }

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
function setActiveBusinessLine(bu, options = {}) {
    if (!options.preserveAiResult) clearAiResultPreviewState();
    const targetBtn = document.querySelector(`.bu-btn[data-bu="${bu}"]`);
    if (!targetBtn) return;
    buBtns.forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');
    currentBU = bu;

    Object.keys(renderedPages).forEach(key => { renderedPages[key] = false; });
    syncCurrentBusinessUploadState();

    if (currentBU === 'wangpan' || currentBU === 'yike' || currentBU === 'chuhai' || currentBU === 'wenku') {
        document.documentElement.style.setProperty('--primary-color', '#258AFF');
        wangpanWorkspace.classList.remove('hidden'); emptyWorkspace.classList.add('hidden');
        updateResourceDropdown(document.querySelector('.terminal-btn.active').dataset.terminal, { preserveAiResult: options.preserveAiResult });
        if (document.getElementById('exportModal')?.style.display === 'flex') autoSelectExportItems();
    } else {
        document.documentElement.style.setProperty('--primary-color', '#87B4FF');
        wangpanWorkspace.classList.add('hidden'); emptyWorkspace.classList.remove('hidden');
        [homeView, myPageView, feedView, videoAudioShareView, tierBasedRewardsProductImagesView, searchIconView, mySpaceView, myActivityView, peerSharingView, peerSharingIconPushView, yikeEquipView, yikeCashView, yikeHomeView, viewDevelopingPrompt].forEach(view => view?.classList.remove('active'));
    }
}
buBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setActiveBusinessLine(e.currentTarget.dataset.bu);
    });
});
const terminalPicker = document.getElementById('terminalPicker');
const terminalTrigger = document.getElementById('terminalTrigger');
const terminalTriggerText = document.getElementById('terminalTriggerText');
const terminalMenu = document.getElementById('terminalMenu');
const terminalBtns = document.querySelectorAll('.terminal-btn');

function setTerminalMenuOpen(isOpen) {
    if (!terminalPicker || !terminalTrigger || !terminalMenu) return;
    terminalPicker.classList.toggle('open', isOpen);
    terminalMenu.classList.toggle('hidden', !isOpen);
    terminalTrigger.setAttribute('aria-expanded', String(isOpen));
}

function syncTerminalTriggerLabel() {
    const activeBtn = document.querySelector('.terminal-btn.active');
    if (activeBtn && terminalTriggerText) {
        terminalTriggerText.textContent = activeBtn.textContent.trim();
    }
}

syncTerminalTriggerLabel();
setTerminalMenuOpen(false);

terminalTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    setTerminalMenuOpen(!terminalPicker?.classList.contains('open'));
});

terminalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        terminalBtns.forEach(b => b.classList.remove('active'));
        const currentBtn = e.currentTarget;
        currentBtn.classList.add('active');
        syncTerminalTriggerLabel();
        setTerminalMenuOpen(false);
        updateResourceDropdown(currentBtn.dataset.terminal);
    });
});

document.addEventListener('click', (e) => {
    if (terminalPicker && !terminalPicker.contains(e.target)) {
        setTerminalMenuOpen(false);
    }
});
const detailModal = document.getElementById('detailModal');
const detailImagesBox = document.getElementById('detailImagesBox');
const detailModalTitle = document.getElementById('detailModalTitle');
function openDetailModal(targetType) {
    detailImagesBox.classList.remove('dark-floor');
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
    } else if (targetType === 'videoAudioShare') {
        detailModalTitle.innerText = 'A1.1.11 NA - 视频/音频/共享页右上icon - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (114x114)</div><img src="${videoAudioShareExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'membershipChannelCard') {
        detailModalTitle.innerText = 'A1.1.15 NA - 会员频道大卡 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (1092x597)</div><img src="${membershipChannelCardExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'tierBasedRewardsProductImages') {
        detailModalTitle.innerText = 'A1.1.12 NA - 等级福利商品图 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (342x342)</div><img src="${tierBasedRewardsProductImagesExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'searchIcon') {
        detailModalTitle.innerText = '搜索框 icon - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (204x204)</div><img src="${searchIconExportCanvas.toDataURL()}" style="max-height: 204px; width: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'membersChannelPage1') {
        detailImagesBox.classList.add('dark-floor');
        detailModalTitle.innerText = '会员频道 2 楼 - 单列 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图</div><img src="${membersChannelPage1ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    } else if (targetType === 'membersChannelPage2') {
        detailImagesBox.classList.add('dark-floor');
        detailModalTitle.innerText = '会员频道 2 楼 - 双列 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图</div><img src="${membersChannelPage2ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
    } else if (targetType === 'membersChannelPage3') {
        detailImagesBox.classList.add('dark-floor');
        detailModalTitle.innerText = '会员频道 2 楼 - 三列 - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图</div><img src="${membersChannelPage3ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto;">`;
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
    } else if (targetType === 'dev_1_1_19') {
        detailModalTitle.innerText = 'A1.1.19 NA - 共享点对点icon（push） - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (300x300)</div><img src="${peerSharingIconPushExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'dev_1_1_20') {
        detailModalTitle.innerText = 'A1.1.20 NA - 网盘商城feed流长banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">独立切图 (522x837, JPG)</div><img src="${cloudStoreFeedLongBannerExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'mallFeedWideBannerPage1') {
        detailModalTitle.innerText = 'A1.1.21 NA - 商城feed流宽banner - 页面1 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">页面1 独立切图 (522x336, JPG)</div><img src="${mallFeedWideBannerPage1ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'mallFeedWideBannerPage2') {
        detailModalTitle.innerText = 'A1.1.21 NA - 商城feed流宽banner - 页面2 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">页面2 独立切图 (522x336, JPG)</div><img src="${mallFeedWideBannerPage2ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
    } else if (targetType === 'dev_1_1_21') {
        detailModalTitle.innerText = 'A1.1.21 NA - 商城feed流宽banner - 纯净图';
        detailImagesBox.innerHTML = `<div class="banner-label">页面1 独立切图 (522x336, JPG)</div><img src="${mallFeedWideBannerPage1ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;"><div class="banner-label" style="margin-top: 16px;">页面2 独立切图 (522x336, JPG)</div><img src="${mallFeedWideBannerPage2ExportCanvas.toDataURL()}" style="max-width: 100%; height: auto; border: 1px dashed #ccc;">`;
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
textCapsuleInput?.addEventListener('input', renderMyPage);
myPageTitle?.addEventListener('input', renderMyPage);
myPageHighlight?.addEventListener('input', renderMyPage);
myPageSubtitle?.addEventListener('input', renderMyPage);
membershipChannelCardBgColor1?.addEventListener('input', renderMembershipChannelCardCanvas);
membershipChannelCardBgColor2?.addEventListener('input', renderMembershipChannelCardCanvas);
membershipChannelCardTextColor?.addEventListener('input', renderMembershipChannelCardCanvas);
membershipChannelCardTitle?.addEventListener('input', renderMembershipChannelCardCanvas);
membershipChannelCardTitleLine2?.addEventListener('input', renderMembershipChannelCardCanvas);
membershipChannelCardSub?.addEventListener('input', renderMembershipChannelCardCanvas);
membershipChannelCardBtnText?.addEventListener('input', renderMembershipChannelCardCanvas);
topBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentTopBgMode = e.target.value; topBgModeImage.classList.add('hidden'); topBgModeGradient.classList.add('hidden'); topBgModeSolid.classList.add('hidden');
    if (currentTopBgMode === 'image') topBgModeImage.classList.remove('hidden'); else if (currentTopBgMode === 'gradient') topBgModeGradient.classList.remove('hidden'); else if (currentTopBgMode === 'solid') topBgModeSolid.classList.remove('hidden');
    await renderHomeCanvas();
}));
topGradColor1?.addEventListener('input', renderHomeCanvas); topGradColor2?.addEventListener('input', renderHomeCanvas); topSolidColor?.addEventListener('input', renderHomeCanvas);
bindGradientSlider('topGradAngle', 'topGradAngleVal', renderHomeCanvas, '°');
bindGradientSlider('topGradStop1', 'topGradStop1Val', renderHomeCanvas, '%');
bindGradientSlider('topGradStop2', 'topGradStop2Val', renderHomeCanvas, '%');
feedBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentFeedBgMode = e.target.value; feedBgModeImage.classList.add('hidden'); feedBgModeGradient.classList.add('hidden'); feedBgModeSolid.classList.add('hidden');
    if (currentFeedBgMode === 'image') feedBgModeImage.classList.remove('hidden'); else if (currentFeedBgMode === 'gradient') feedBgModeGradient.classList.remove('hidden'); else if (currentFeedBgMode === 'solid') feedBgModeSolid.classList.remove('hidden');
    await renderFeedCanvas();
}));
feedGradColor1?.addEventListener('input', renderFeedCanvas); feedGradColor2?.addEventListener('input', renderFeedCanvas); feedSolidColor?.addEventListener('input', renderFeedCanvas);
feedGradAngle?.addEventListener('input', (e) => { feedGradAngleVal.innerText = e.target.value + '°'; renderFeedCanvas(); });
feedGradStop1?.addEventListener('input', (e) => { feedGradStop1Val.innerText = e.target.value + '%'; renderFeedCanvas(); });
feedGradStop2?.addEventListener('input', (e) => { feedGradStop2Val.innerText = e.target.value + '%'; renderFeedCanvas(); });
feedTitleColor?.addEventListener('input', renderFeedCanvas); feedSubtitleColor?.addEventListener('input', renderFeedCanvas);
membersChannelBtnGrad1?.addEventListener('input', renderAllMembersChannelPages); membersChannelBtnGrad2?.addEventListener('input', renderAllMembersChannelPages);
membersChannelBtnGradAngle?.addEventListener('input', (e) => { membersChannelBtnGradAngleVal.innerText = e.target.value + '°'; renderAllMembersChannelPages(); });
membersChannelBtnGradStop1?.addEventListener('input', (e) => { membersChannelBtnGradStop1Val.innerText = e.target.value + '%'; renderAllMembersChannelPages(); });
membersChannelBtnGradStop2?.addEventListener('input', (e) => { membersChannelBtnGradStop2Val.innerText = e.target.value + '%'; renderAllMembersChannelPages(); });
mySpaceBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentMySpaceBgMode = e.target.value; mySpaceBgModeSolid.classList.add('hidden'); mySpaceBgModeGradient.classList.add('hidden');
    if (currentMySpaceBgMode === 'solid') mySpaceBgModeSolid.classList.remove('hidden'); else mySpaceBgModeGradient.classList.remove('hidden');
    await renderMySpaceCanvas();
}));
mySpaceSolidColor?.addEventListener('input', renderMySpaceCanvas); mySpaceGradColor1?.addEventListener('input', renderMySpaceCanvas); mySpaceGradColor2?.addEventListener('input', renderMySpaceCanvas);
bindGradientSlider('mySpaceBgGradAngle', 'mySpaceBgGradAngleVal', renderMySpaceCanvas, '°');
bindGradientSlider('mySpaceBgGradStop1', 'mySpaceBgGradStop1Val', renderMySpaceCanvas, '%');
bindGradientSlider('mySpaceBgGradStop2', 'mySpaceBgGradStop2Val', renderMySpaceCanvas, '%');
mySpaceBtnGrad1?.addEventListener('input', renderMySpaceCanvas); mySpaceBtnGrad2?.addEventListener('input', renderMySpaceCanvas);
bindGradientSlider('mySpaceBtnGradAngle', 'mySpaceBtnGradAngleVal', renderMySpaceCanvas, '°');
bindGradientSlider('mySpaceBtnGradStop1', 'mySpaceBtnGradStop1Val', renderMySpaceCanvas, '%');
bindGradientSlider('mySpaceBtnGradStop2', 'mySpaceBtnGradStop2Val', renderMySpaceCanvas, '%');
simpleScanBgModeRadios.forEach(r => r.addEventListener('change', async e => {
    currentSimpleScanBgMode = e.target.value; simpleScanBgModeSolid.classList.add('hidden'); simpleScanBgModeGradient.classList.add('hidden');
    if (currentSimpleScanBgMode === 'solid') simpleScanBgModeSolid.classList.remove('hidden'); else simpleScanBgModeGradient.classList.remove('hidden');
    await renderSimpleScanCanvas();
}));
simpleScanSolidColor?.addEventListener('input', renderSimpleScanCanvas); simpleScanGradColor1?.addEventListener('input', renderSimpleScanCanvas); simpleScanGradColor2?.addEventListener('input', renderSimpleScanCanvas);
bindGradientSlider('simpleScanBgGradAngle', 'simpleScanBgGradAngleVal', renderSimpleScanCanvas, '°');
bindGradientSlider('simpleScanBgGradStop1', 'simpleScanBgGradStop1Val', renderSimpleScanCanvas, '%');
bindGradientSlider('simpleScanBgGradStop2', 'simpleScanBgGradStop2Val', renderSimpleScanCanvas, '%');
simpleScanHighlightColor?.addEventListener('input', renderSimpleScanCanvas); simpleScanBtnGrad1?.addEventListener('input', renderSimpleScanCanvas); simpleScanBtnGrad2?.addEventListener('input', renderSimpleScanCanvas);
bindGradientSlider('simpleScanBtnGradAngle', 'simpleScanBtnGradAngleVal', renderSimpleScanCanvas, '°');
bindGradientSlider('simpleScanBtnGradStop1', 'simpleScanBtnGradStop1Val', renderSimpleScanCanvas, '%');
bindGradientSlider('simpleScanBtnGradStop2', 'simpleScanBtnGradStop2Val', renderSimpleScanCanvas, '%');
myActivityGrad1?.addEventListener('input', renderMyActivityCanvas); myActivityGrad2?.addEventListener('input', renderMyActivityCanvas);
bindGradientSlider('myActivityGradAngle', 'myActivityGradAngleVal', renderMyActivityCanvas, '°');
bindGradientSlider('myActivityGradStop1', 'myActivityGradStop1Val', renderMyActivityCanvas, '%');
bindGradientSlider('myActivityGradStop2', 'myActivityGradStop2Val', renderMyActivityCanvas, '%');
myActivitySubColor?.addEventListener('input', renderMyActivityCanvas); myActivityTitle1Color?.addEventListener('input', renderMyActivityCanvas); myActivityTitle2Color?.addEventListener('input', renderMyActivityCanvas); myActivityBtnColor?.addEventListener('input', renderMyActivityCanvas);
peerSharingGrad1?.addEventListener('input', renderPeerSharingCanvas); peerSharingGrad2?.addEventListener('input', renderPeerSharingCanvas);
bindGradientSlider('peerSharingGradAngle', 'peerSharingGradAngleVal', renderPeerSharingCanvas, '°');
bindGradientSlider('peerSharingGradStop1', 'peerSharingGradStop1Val', renderPeerSharingCanvas, '%');
bindGradientSlider('peerSharingGradStop2', 'peerSharingGradStop2Val', renderPeerSharingCanvas, '%');
peerSharingSubColor?.addEventListener('input', renderPeerSharingCanvas); peerSharingTitle1Color?.addEventListener('input', renderPeerSharingCanvas); peerSharingTitle2Color?.addEventListener('input', renderPeerSharingCanvas); peerSharingBtnColor?.addEventListener('input', renderPeerSharingCanvas);
['mallFeedWideBannerGrad1', 'mallFeedWideBannerGrad2', 'mallFeedWideBannerTitleColor', 'mallFeedWideBannerSubColor', 'mallFeedWideBannerBtnColor', 'mallFeedWideBannerTitle', 'mallFeedWideBannerSub', 'mallFeedWideBannerBtnText'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderMallFeedWideBannerCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderMallFeedWideBannerCanvas); }
});
bindGradientSlider('mallFeedWideBannerGradAngle', 'mallFeedWideBannerGradAngleVal', renderMallFeedWideBannerCanvas, '°');
['mallFeedWideBannerPage2Grad1', 'mallFeedWideBannerPage2Grad2', 'mallFeedWideBannerPage2TitleColor', 'mallFeedWideBannerPage2SubColor', 'mallFeedWideBannerPage2BtnColor', 'mallFeedWideBannerPage2Title', 'mallFeedWideBannerPage2Sub', 'mallFeedWideBannerPage2BtnText'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderMallFeedWideBannerCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderMallFeedWideBannerCanvas); }
});
bindGradientSlider('mallFeedWideBannerPage2GradAngle', 'mallFeedWideBannerPage2GradAngleVal', renderMallFeedWideBannerCanvas, '°');
// 绑定一刻设备 Banner 参数实时监听
['yikeEquipGrad1', 'yikeEquipGrad2', 'yikeEquipTitleColor', 'yikeEquipSubColor', 'yikeEquipBtnBgColor', 'yikeEquipBtnTextColor'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeEquipCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderYikeEquipCanvas); }
});
bindGradientSlider('yikeEquipGradAngle', 'yikeEquipGradAngleVal', renderYikeEquipCanvas, '°');
bindGradientSlider('yikeEquipGradStop1', 'yikeEquipGradStop1Val', renderYikeEquipCanvas, '%');
bindGradientSlider('yikeEquipGradStop2', 'yikeEquipGradStop2Val', renderYikeEquipCanvas, '%');
['yikeCashGrad1', 'yikeCashGrad2', 'yikeCashTitleColor', 'yikeCashHighlightColor'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeCashCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderYikeCashCanvas); }
});
bindGradientSlider('yikeCashGradAngle', 'yikeCashGradAngleVal', renderYikeCashCanvas, '°');
bindGradientSlider('yikeCashGradStop1', 'yikeCashGradStop1Val', renderYikeCashCanvas, '%');
bindGradientSlider('yikeCashGradStop2', 'yikeCashGradStop2Val', renderYikeCashCanvas, '%');

['yikeHomeTitleColor', 'yikeHomeSubColor', 'yikeHomeSubHighlightColor', 'yikeHomeSubHighlight'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeHomeCanvas); if (el._pickrInstance) el._pickrInstance.on('change', renderYikeHomeCanvas); }
});
['yikeHomeTitle', 'yikeHomeSub'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', renderYikeHomeCanvas); }
});
bindUploadEvents('yikeHomeBgUploadDropZone', 'yikeHomeBgUpload', 'yikeHomeBgPreviewImg', async src => { yikeHomeBgBannerObj = await loadImageWithAutoTrim(src, { padding: 4, threshold: 8 }); if (yikeHomeBgBannerObj) yikeHomeBgBannerObj._src = src; await renderYikeHomeCanvas(); });

const MATERIAL_CATEGORY_ORDER = [
    { key: '主视觉/横幅', label: '主视觉 / 横幅' },
    { key: '背景底板', label: '背景底板' },
    { key: '图标/按钮', label: '图标 / 按钮' },
    { key: '会员/福利', label: '会员 / 福利' },
    { key: '装饰元素', label: '装饰元素' },
    { key: '其他', label: '其他' }
];
const BUILTIN_MATERIAL_LIBRARY = [
    { key: 'assets/materials/reward-treasure-chest.png', name: '宝箱', path: 'assets/materials/reward-treasure-chest.png', src: 'assets/materials/reward-treasure-chest.png', category: '会员/福利' },
    { key: 'assets/materials/decor-yellow-starfish.png', name: '黄色海星', path: 'assets/materials/decor-yellow-starfish.png', src: 'assets/materials/decor-yellow-starfish.png', category: '装饰元素' },
    { key: 'assets/materials/reward-gold-medallion.png', name: '金币徽章', path: 'assets/materials/reward-gold-medallion.png', src: 'assets/materials/reward-gold-medallion.png', category: '会员/福利' },
    { key: 'assets/materials/education-open-book.png', name: '打开的书', path: 'assets/materials/education-open-book.png', src: 'assets/materials/education-open-book.png', category: '图标/按钮' },
    { key: 'assets/materials/decor-green-cloud.png', name: '绿色云朵', path: 'assets/materials/decor-green-cloud.png', src: 'assets/materials/decor-green-cloud.png', category: '装饰元素' },
    { key: 'assets/materials/decor-orange-starfish.png', name: '橙色海星', path: 'assets/materials/decor-orange-starfish.png', src: 'assets/materials/decor-orange-starfish.png', category: '装饰元素' },
    { key: 'assets/materials/tool-pencil-cup-orange.png', name: '橙色笔筒', path: 'assets/materials/tool-pencil-cup-orange.png', src: 'assets/materials/tool-pencil-cup-orange.png', category: '图标/按钮' },
    { key: 'assets/materials/reward-vip-pouch.png', name: '会员钱袋', path: 'assets/materials/reward-vip-pouch.png', src: 'assets/materials/reward-vip-pouch.png', category: '会员/福利' },
    { key: 'assets/materials/decor-palm-tree.png', name: '棕榈树', path: 'assets/materials/decor-palm-tree.png', src: 'assets/materials/decor-palm-tree.png', category: '装饰元素' },
    { key: 'assets/materials/decor-green-cushion.png', name: '绿色靠垫', path: 'assets/materials/decor-green-cushion.png', src: 'assets/materials/decor-green-cushion.png', category: '装饰元素' },
    { key: 'assets/materials/decor-gold-disc.png', name: '金色圆盘', path: 'assets/materials/decor-gold-disc.png', src: 'assets/materials/decor-gold-disc.png', category: '装饰元素' },
    { key: 'assets/materials/package-cardboard-box.png', name: '纸箱', path: 'assets/materials/package-cardboard-box.png', src: 'assets/materials/package-cardboard-box.png', category: '背景底板' },
    { key: 'assets/materials/tool-pencil-cup-green.png', name: '绿色笔筒', path: 'assets/materials/tool-pencil-cup-green.png', src: 'assets/materials/tool-pencil-cup-green.png', category: '图标/按钮' },
    { key: 'assets/materials/decor-swim-ring.png', name: '游泳圈', path: 'assets/materials/decor-swim-ring.png', src: 'assets/materials/decor-swim-ring.png', category: '装饰元素' },
    { key: 'assets/materials/decor-paper-plane.png', name: '纸飞机', path: 'assets/materials/decor-paper-plane.png', src: 'assets/materials/decor-paper-plane.png', category: '装饰元素' },
    { key: 'assets/materials/device-retro-tv.png', name: '复古电视', path: 'assets/materials/device-retro-tv.png', src: 'assets/materials/device-retro-tv.png', category: '图标/按钮' },
    { key: 'assets/materials/decor-crescent-moon.png', name: '月亮', path: 'assets/materials/decor-crescent-moon.png', src: 'assets/materials/decor-crescent-moon.png', category: '装饰元素' },
    { key: 'assets/materials/decor-blue-sofa.png', name: '蓝色沙发', path: 'assets/materials/decor-blue-sofa.png', src: 'assets/materials/decor-blue-sofa.png', category: '装饰元素' },
    { key: 'assets/materials/device-yellow-camera.png', name: '黄色相机', path: 'assets/materials/device-yellow-camera.png', src: 'assets/materials/device-yellow-camera.png', category: '图标/按钮' },
    { key: 'assets/materials/tool-green-pencil.png', name: '绿色铅笔', path: 'assets/materials/tool-green-pencil.png', src: 'assets/materials/tool-green-pencil.png', category: '图标/按钮' },
    { key: 'assets/materials/decor-gold-shell.png', name: '金色贝壳', path: 'assets/materials/decor-gold-shell.png', src: 'assets/materials/decor-gold-shell.png', category: '装饰元素' },
    { key: 'assets/materials/decor-flat-stone.png', name: '扁石', path: 'assets/materials/decor-flat-stone.png', src: 'assets/materials/decor-flat-stone.png', category: '装饰元素' }
];
const MATERIAL_DISPLAY_NAME_MAP = new Map([
    ['assets/materials/reward-treasure-chest.png', '宝箱'],
    ['assets/materials/decor-yellow-starfish.png', '黄色海星'],
    ['assets/materials/reward-gold-medallion.png', '金币徽章'],
    ['assets/materials/education-open-book.png', '打开的书'],
    ['assets/materials/decor-green-cloud.png', '绿色云朵'],
    ['assets/materials/decor-orange-starfish.png', '橙色海星'],
    ['assets/materials/tool-pencil-cup-orange.png', '橙色笔筒'],
    ['assets/materials/reward-vip-pouch.png', '会员钱袋'],
    ['assets/materials/decor-palm-tree.png', '棕榈树'],
    ['assets/materials/decor-green-cushion.png', '绿色靠垫'],
    ['assets/materials/decor-gold-disc.png', '金色圆盘'],
    ['assets/materials/package-cardboard-box.png', '纸箱'],
    ['assets/materials/tool-pencil-cup-green.png', '绿色笔筒'],
    ['assets/materials/decor-swim-ring.png', '游泳圈'],
    ['assets/materials/decor-paper-plane.png', '纸飞机'],
    ['assets/materials/device-retro-tv.png', '复古电视'],
    ['assets/materials/decor-crescent-moon.png', '月亮'],
    ['assets/materials/decor-blue-sofa.png', '蓝色沙发'],
    ['assets/materials/device-yellow-camera.png', '黄色相机'],
    ['assets/materials/tool-green-pencil.png', '绿色铅笔'],
    ['assets/materials/decor-gold-shell.png', '金色贝壳'],
    ['assets/materials/decor-flat-stone.png', '扁石']
]);
function getMaterialDisplayName(item = {}) {
    const directName = String(item.displayName || item.name || '').trim();
    if (/[\u4e00-\u9fff]/.test(directName)) return directName;
    const rawText = [item.key, item.path, item.src, directName]
        .filter(Boolean)
        .map(value => String(value).split('?')[0])
        .join(' ');
    for (const [materialPath, displayName] of MATERIAL_DISPLAY_NAME_MAP.entries()) {
        const fileName = materialPath.split('/').pop();
        const fileStem = fileName.replace(/\.[^.]+$/, '');
        if (rawText.includes(materialPath) || rawText.includes(fileName) || rawText.includes(fileStem)) {
            return displayName;
        }
    }
    return '未命名素材';
}
function getMaterialThemeHint(item = {}) {
    const rawText = [item.displayName, item.name, item.key, item.path, item.src]
        .filter(Boolean)
        .map(value => String(value).split('?')[0])
        .join(' ')
        .toLowerCase();
    if (/(绿色|green|草绿|浅绿|深绿|墨绿|翠绿|薄荷绿)/i.test(rawText)) return 'green';
    if (/(蓝色|blue|天蓝|浅蓝|深蓝|海蓝|湖蓝)/i.test(rawText)) return 'blue';
    if (/(紫色|purple|violet|lavender|薰衣草)/i.test(rawText)) return 'purple';
    if (/(红色|red|玫红|粉红|粉色|桃红)/i.test(rawText)) return 'red';
    if (/(黄色|金色|橙色|yellow|gold|orange|琥珀|琥珀色)/i.test(rawText)) return 'orange';
    return '';
}
if (materialLibraryItems.length === 0) {
    materialLibraryItems = BUILTIN_MATERIAL_LIBRARY.map(item => ({ ...item, image: null, width: 0, height: 0 }));
}
function normalizeMaterialText(text = '') {
    return String(text)
        .replace(/\.[^.]+$/, '')
        .replace(/[\\/_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}
function inferMaterialCategory(file, img) {
    const fullPath = normalizeMaterialText(file?.webkitRelativePath || '');
    const fileName = normalizeMaterialText(file?.name || '');
    const text = `${fullPath} ${fileName}`.trim();
    const w = img?.width || 0;
    const h = img?.height || 0;
    const ratio = w && h ? w / h : 1;
    if (/(会员|svip|vip|福利|等级|月卡|权益|礼包|宝箱|勋章|徽章|奖|会员购|会员卡)/i.test(text)) return '会员/福利';
    if (/(背景|底板|底图|底色|bg|background|skin|wallpaper|pagebg)/i.test(text)) return '背景底板';
    if (/(主图|hero|banner|kv|海报|横幅|大图|封面|头图|视觉)/i.test(text) || ratio >= 2.4 || ratio <= 0.42) return '主视觉/横幅';
    if (/(icon|logo|图标|button|btn|箭头|arrow|按钮|badge|标识|search|控件)/i.test(text)) return '图标/按钮';
    if (/(装饰|decor|element|元素|spark|star|moon|cloud|leaf|flower|gift|宝石|气泡|光效|粒子|小图|pencil|camera|box|moon|sun)/i.test(text) || Math.max(w, h) <= 260) return '装饰元素';
    return '其他';
}
function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = ev => resolve(ev.target.result);
        reader.onerror = () => reject(new Error('读取文件失败'));
        reader.readAsDataURL(file);
    });
}
async function importMaterialFiles(fileList) {
    const files = Array.from(fileList || []).filter(file => file && file.type && file.type.startsWith('image/'));
    if (!files.length) return;
    const existingKeys = new Set(materialLibraryItems.map(item => item.key));
    for (const file of files) {
        const key = `${file.webkitRelativePath || file.name}|${file.size}|${file.lastModified}`;
        if (existingKeys.has(key)) continue;
        try {
            const src = await readFileAsDataUrl(file);
            const loaded = await loadImageWithAutoTrim(src, { padding: 4, threshold: 8 });
            const previewSrc = loaded && typeof loaded.toDataURL === 'function' ? loaded.toDataURL('image/png') : src;
            const item = {
                key,
                name: file.name || '未命名素材',
                path: file.webkitRelativePath || file.name || '',
                src: previewSrc,
                image: loaded,
                width: loaded?.width || 0,
                height: loaded?.height || 0,
                category: inferMaterialCategory(file, loaded)
            };
            materialLibraryItems.unshift(item);
            existingKeys.add(key);
        } catch (e) {
            console.warn('素材导入失败:', file?.name, e);
        }
    }
    renderMaterialLibrary();
}
async function applyMaterialItem(item) {
    if (!item) return;
    const activeBU = getActiveBusinessLineKey();
    const selectedResource = document.querySelector('.resource-item.active')?.dataset.value;
    const materialImage = item.image || await loadImage(item.src);
    if (materialImage && !item.image) item.image = materialImage;
    userImgObj = materialImage || null;
    businessUploadState[activeBU] = { src: item.src, img: materialImage || null };
    syncCurrentBusinessUploadState();
    if (materialImage && shouldAutoColorForResource(selectedResource)) {
        const hintedThemeId = getMaterialThemeHint(item);
        const detectedThemeId = hintedThemeId || detectBrandThemeFromImage(materialImage);
        if (detectedThemeId) triggerThemeSwitch(detectedThemeId, activeBU);
    }
    await renderActiveBusinessCanvases();
}
function renderMaterialLibrary() {
    if (!materialLibGrid) return;
    const totalCount = materialLibraryItems.length;
    if (materialLibCount) materialLibCount.innerText = totalCount ? `${totalCount} 个` : '0 个';
    if (!totalCount) {
        materialLibGrid.innerHTML = '<div class="material-empty">把素材文件夹拖进来，或点击上方导入。命名不标准也会先按图片特征分组。</div>';
        return;
    }
    const groups = new Map(MATERIAL_CATEGORY_ORDER.map(meta => [meta.key, []]));
    materialLibraryItems.forEach(item => {
        const bucket = groups.get(item.category) || groups.get('其他');
        bucket.push(item);
    });
    materialLibGrid.innerHTML = '';
    MATERIAL_CATEGORY_ORDER.forEach(meta => {
        const items = groups.get(meta.key) || [];
        if (!items.length) return;
        const group = document.createElement('section');
        group.className = 'material-category';
        const title = document.createElement('div');
        title.className = 'material-category-title';
        const name = document.createElement('span');
        name.textContent = meta.label;
        const count = document.createElement('span');
        count.className = 'material-category-count';
        count.textContent = `${items.length} 张`;
        title.appendChild(name);
        title.appendChild(count);
        const grid = document.createElement('div');
        grid.className = 'material-category-grid';
        items.forEach(item => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'material-item';
            const displayName = getMaterialDisplayName(item);
            card.title = `${displayName}，点击放入当前画板主图`;
            const thumb = document.createElement('img');
            thumb.className = 'material-thumb';
            thumb.src = item.src;
            thumb.alt = getMaterialDisplayName(item);
            const label = document.createElement('div');
            label.className = 'material-name';
            label.textContent = getMaterialDisplayName(item);
            card.appendChild(thumb);
            card.appendChild(label);
            card.addEventListener('click', () => applyMaterialItem(item));
            grid.appendChild(card);
        });
        group.appendChild(title);
        group.appendChild(grid);
        materialLibGrid.appendChild(group);
    });
}
if (materialLibPanel) {
    materialLibPanel.addEventListener('dragover', e => { e.preventDefault(); materialLibPanel.classList.add('drag-over'); });
    materialLibPanel.addEventListener('dragleave', e => { e.preventDefault(); materialLibPanel.classList.remove('drag-over'); });
    materialLibPanel.addEventListener('drop', e => {
        e.preventDefault();
        materialLibPanel.classList.remove('drag-over');
        if (e.dataTransfer?.files?.length > 0) importMaterialFiles(e.dataTransfer.files);
    });
}
if (materialFileInput) materialFileInput.addEventListener('change', e => { importMaterialFiles(e.target.files); e.target.value = ''; });
if (materialFolderInput) materialFolderInput.addEventListener('change', e => { importMaterialFiles(e.target.files); e.target.value = ''; });
renderMaterialLibrary();
// ==================== 文件上传与取色 ====================
function handleFileUpload(file, callback) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader(); reader.onload = async ev => { const src = ev.target.result; await callback(src); }; reader.readAsDataURL(file);
}
function bindUploadEvents(dropZoneId, inputId, previewId, processFn) {
    const dz = document.getElementById(dropZoneId), input = document.getElementById(inputId), prev = document.getElementById(previewId);
    const runUpload = async src => {
        if (prev) prev.src = src;
        await processFn(src);
    };
    if (input) input.addEventListener('change', e => handleFileUpload(e.target.files[0], runUpload));
    if (dz) {
        dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); }); dz.addEventListener('dragleave', e => { e.preventDefault(); dz.classList.remove('drag-over'); });
        dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('drag-over'); if (e.dataTransfer.files.length > 0) handleFileUpload(e.dataTransfer.files[0], runUpload); });
    }
}
function rgbToHsl(r, g, b) { r /= 255; g /= 255; b /= 255; let max = Math.max(r, g, b), min = Math.min(r, g, b); let h, s, l = (max + min) / 2; if (max == min) { h = s = 0; } else { let d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min); switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; }h /= 6; } return [h * 360, s, l]; }
function clamp01(value) { return Math.max(0, Math.min(1, value)); }
function hueDistance(a, b) { const diff = Math.abs(a - b) % 360; return diff > 180 ? 360 - diff : diff; }
function bandScore(hue, start, peak, end) {
    if (hue < start || hue > end) return 0;
    const span = Math.max(peak - start, end - peak) || 1;
    return clamp01(1 - Math.abs(hue - peak) / span);
}
function greenHueScore(hue, sat, light) {
    const base = bandScore(hue, 66, 124, 176);
    if (!base) return 0;
    const satBoost = sat < 0.12 ? 0.7 : sat < 0.28 ? 0.92 : 1;
    const lightBoost = light > 0.9 ? 0.82 : light < 0.22 ? 0.78 : 1;
    return clamp01(base * satBoost * lightBoost);
}
function yellowHueScore(hue, sat, light) {
    const base = bandScore(hue, 18, 50, 86);
    if (!base) return 0;
    const satBoost = sat < 0.18 ? 0.74 : 1;
    const lightBoost = light > 0.9 ? 0.82 : 1;
    return clamp01(base * satBoost * lightBoost);
}
function detectBrandThemeFromImage(img) {
    if (!img || !img.width || !img.height) return 'blue';
    const sampleSize = Math.max(48, Math.min(128, Math.round(Math.sqrt(img.width * img.height) / 4)));
    const canvas = document.createElement('canvas');
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return 'blue';
    setupHighQualityContext(ctx);
    ctx.clearRect(0, 0, sampleSize, sampleSize);
    ctx.drawImage(img, 0, 0, sampleSize, sampleSize);
    let data;
    try {
        data = ctx.getImageData(0, 0, sampleSize, sampleSize).data;
    } catch (e) {
        return 'blue';
    }
    const edgePad = Math.max(1, Math.round(sampleSize * 0.08));
    const themeScores = new Map(BRAND_THEMES.map(theme => [theme.id, 0]));
    let colorPixelCount = 0;
    let dominantTheme = 'blue';
    let dominantScore = 0;
    let greenSignal = 0;
    let yellowSignal = 0;
    const centerWeight = (x, y) => {
        const dx = Math.abs((x + 0.5) - sampleSize / 2) / (sampleSize / 2);
        const dy = Math.abs((y + 0.5) - sampleSize / 2) / (sampleSize / 2);
        const dist = Math.max(dx, dy);
        return clamp01(1 - dist * 0.9);
    };
    for (let y = edgePad; y < sampleSize - edgePad; y++) {
        for (let x = edgePad; x < sampleSize - edgePad; x++) {
            const idx = (y * sampleSize + x) * 4;
            const alpha = data[idx + 3] / 255;
            if (alpha < 0.18) continue;
            const [hue, sat, light] = rgbToHsl(data[idx], data[idx + 1], data[idx + 2]);
            const chroma = sat * (1 - Math.abs(light - 0.52) * 1.5);
            const greenScore = greenHueScore(hue, sat, light);
            const yellowScore = yellowHueScore(hue, sat, light);
            if (chroma < 0.055 && !greenScore && !yellowScore) continue;
            colorPixelCount++;
            const weight = alpha * Math.max(chroma, greenScore > 0 || yellowScore > 0 ? 0.06 : 0.05) * (0.6 + centerWeight(x, y));
            greenSignal += weight * greenScore;
            yellowSignal += weight * yellowScore;
            for (const theme of BRAND_THEMES) {
                let bucketWeight = Math.max(0, 1 - hueDistance(hue, theme.hue) / 96);
                if (theme.id === 'green') bucketWeight = Math.max(bucketWeight, greenScore * 1.15);
                if (theme.id === 'yellow') bucketWeight = Math.max(bucketWeight, yellowScore * 1.1);
                if (bucketWeight <= 0) continue;
                const score = weight * bucketWeight;
                const nextScore = (themeScores.get(theme.id) || 0) + score;
                themeScores.set(theme.id, nextScore);
                if (nextScore > dominantScore) {
                    dominantScore = nextScore;
                    dominantTheme = theme.id;
                }
            }
        }
    }
    if (colorPixelCount < 20) return 'blue';
    const sortedScores = [...themeScores.entries()].sort((a, b) => b[1] - a[1]);
    const topScore = sortedScores[0]?.[1] || 0;
    const secondScore = sortedScores[1]?.[1] || 0;
    const greenThemeScore = themeScores.get('green') || 0;
    const yellowThemeScore = themeScores.get('yellow') || 0;
    const greenConfidence = greenThemeScore + greenSignal * 0.75;
    const yellowConfidence = yellowThemeScore + yellowSignal * 0.75;
    if (greenConfidence >= 0.16 && greenConfidence >= yellowConfidence * 1.08) return 'green';
    if (topScore < 0.12) return 'blue';
    if (topScore < secondScore * 1.08) return dominantTheme || 'blue';
    const matchedThemeId = sortedScores[0]?.[0] || dominantTheme || 'blue';
    return matchedThemeId === 'yellow' ? 'orange' : matchedThemeId;
}
bindUploadEvents('uploadDropZone', 'imageUpload', 'uploadPreviewImg', async src => {
    const activeBU = getActiveBusinessLineKey();
    const selectedResource = document.querySelector('.resource-item.active')?.dataset.value;
    const loadedImg = await loadImageWithAutoTrim(src, { padding: 4, threshold: 8 });
    businessUploadState[activeBU] = { src, img: loadedImg };
    userImgObj = loadedImg;
    syncCurrentBusinessUploadState();
    if (shouldAutoColorForResource(selectedResource)) {
        const detectedThemeId = detectBrandThemeFromImage(loadedImg);
        if (detectedThemeId) {
            triggerThemeSwitch(detectedThemeId, activeBU);
        }
    }
    await renderActiveBusinessCanvases();
});
bindUploadEvents('topBgUploadDropZone', 'topBgImageUpload', 'topBgUploadPreviewImg', async src => { topBgBannerObj = await loadImageWithAutoTrim(src, { padding: 4, threshold: 8 }); if (topBgBannerObj) topBgBannerObj._src = src; await renderHomeCanvas(); });
bindUploadEvents('feedBgUploadDropZone', 'feedBgImageUpload', 'feedBgUploadPreviewImg', async src => { feedBgBannerObj = await loadImageWithAutoTrim(src, { padding: 4, threshold: 8 }); if (feedBgBannerObj) feedBgBannerObj._src = src; await renderFeedCanvas(); });
bindUploadEvents('topBannerTitleDropZone', 'topBannerTitleUpload', 'topBannerTitlePreviewImg', async src => { userTopBannerTitleObj = await loadImageWithAutoTrim(src, { padding: 4, threshold: 8 }); if (userTopBannerTitleObj) userTopBannerTitleObj._src = src; await renderHomeCanvas(); });
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
function checkExportIds(ids) {
    ids.forEach(id => {
        const chk = document.getElementById(id);
        if (chk) chk.checked = true;
    });
}
function selectExportChecksForResources(resources, options = {}) {
    resources.forEach(resource => {
        if (resource === 'na_home') {
            const homeSmallOnly = options.homeSmallOnly !== false;
            if (homeSmallOnly) checkExportIds(['chkHomePhone', 'chkHomeBannerLight', 'chkHomeBannerDark', 'chkHomeKV']);
            else checkExportIds(RESOURCE_EXPORT_CHECKS[resource] || []);
            return;
        }
        if (resource === 'dev_1_1_16') {
            const showBoth = !options.foundMySpace && !options.foundSimpleScan;
            if (showBoth || options.foundMySpace) checkExportIds(['chkMySpaceExport', 'chkMySpacePageExport']);
            if (showBoth || options.foundSimpleScan) checkExportIds(['chkSimpleScanExport', 'chkSimpleScanPageExport']);
            return;
        }
        checkExportIds(RESOURCE_EXPORT_CHECKS[resource] || []);
    });
}
function autoSelectExportItems() {
    const visibleChecks = syncExportModalByBusinessLine();
    document.querySelectorAll('.export-item-chk').forEach(chk => chk.checked = false);
    const aiModulesForCurrentBU = getVisibleAiModulesForCurrentBusiness();
    if (isAiResultPreviewMode && aiModulesForCurrentBU.length > 0) {
        selectExportChecksForResources(aiModulesForCurrentBU, lastAiRenderOptions);
        const selectAllChk = document.getElementById('selectAllExport');
        if (selectAllChk && visibleChecks.length > 0) { selectAllChk.checked = visibleChecks.every(c => c.checked); }
        else if (selectAllChk) { selectAllChk.checked = false; }
        return;
    }
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
    if (document.getElementById('videoAudioShareView')?.classList.contains('active')) {
        ['chkVideoAudioShareIconExport', 'chkVideoAudioSharePageExport'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('membershipChannelCardView')?.classList.contains('active')) {
        ['chkMembershipChannelCardExport', 'chkMembershipChannelCardPageExport'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('tierBasedRewardsProductImagesView')?.classList.contains('active')) {
        ['chkTierBasedRewardsProductImagesExport', 'chkTierBasedRewardsProductImagesPage1Export', 'chkTierBasedRewardsProductImagesPage2Export', 'chkTierBasedRewardsProductImagesPage3Export'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('searchIconView')?.classList.contains('active')) {
        ['chkSearchIconExport', 'chkSearchPageExport'].forEach(id => {
            if (document.getElementById(id)) document.getElementById(id).checked = true;
        });
    }
    if (document.getElementById('membersChannelView')?.classList.contains('active')) {
        checkExportIds(RESOURCE_EXPORT_CHECKS.dev_1_1_9 || []);
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
    if (document.getElementById('cloudStoreFeedLongBannerView')?.classList.contains('active')) {
        ['chkCloudStoreFeedLongBannerExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }
    if (document.getElementById('mallFeedWideBannerView')?.classList.contains('active')) {
        ['chkMallFeedWideBannerExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
    }
    if (document.getElementById('mallFeedWideBannerView')?.classList.contains('active')) {
        ['chkMallFeedWideBannerExport'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = true; });
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
async function canvasToJpegBlob(canvas, maxBytes = 100 * 1024) {
    const qualities = [0.92, 0.82, 0.72, 0.62, 0.52, 0.42, 0.32];
    let lastBlob = null;
    for (const quality of qualities) {
        const blob = await new Promise((resolve, reject) => {
            try {
                canvas.toBlob(b => { if (b) resolve(b); else reject(new Error('画布已被污染无法生成')); }, 'image/jpeg', quality);
            } catch (e) {
                reject(e);
            }
        });
        lastBlob = blob;
        if (!maxBytes || blob.size <= maxBytes) return blob;
    }
    return lastBlob;
}
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
    if (!force) {
        if (!chkEl || !chkEl.checked) return false;
    }
    if (!canvas || !folder) return false;

    const logSkip = (reason, err) => {
        console.warn(`跳过无法导出的资源: ${baseName}${reason ? ` (${reason})` : ''}`, err);
    };

    let exported = false;
    const chunks = window.abTestCopies ? window.abTestCopies[testKey] : null;
    inputRefs = inputRefs || [];
    if (chunks && chunks.length > 1) {
        const backups = inputRefs.map(ref => document.getElementById(ref.id).value);
        for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i];
            try {
                inputRefs.forEach(ref => {
                    const val = chunk[ref.key];
                    if (val !== undefined) {
                        if (ref.id === 'textCapsule') document.getElementById(ref.id).value = formatAndLimitText(val || '去查看', 4);
                        else document.getElementById(ref.id).value = formatAndLimitText(val, ref.limit || 99);
                    }
                });
                if (typeof renderFn === 'function') await renderFn();
                const blob = await canvasToBlob(canvas);
                if (blob) {
                    folder.file(`${baseName}-方案${i + 1}.png`, blob);
                    exported = true;
                } else {
                    logSkip(`方案${i + 1}`, new Error('未生成 blob'));
                }
            } catch (e) {
                logSkip(`方案${i + 1}`, e);
            }
        }
        inputRefs.forEach((ref, idx) => { document.getElementById(ref.id).value = backups[idx]; });
        if (typeof renderFn === 'function') await renderFn();
    } else {
        try {
            if (typeof renderFn === 'function') await renderFn();
            const blob = await canvasToBlob(canvas);
            if (blob) {
                folder.file(`${baseName}.png`, blob);
                exported = true;
            } else {
                logSkip('', new Error('未生成 blob'));
            }
        } catch (e) {
            logSkip('', e);
        }
    }
    return exported;
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
                await exportCanvasOrMulti('chkHomeBannerLight', lightBannerCanvas, `首页-小图状态Banner(日间)-${homeColor}`, 'home', bannerFolder, homeRefs, renderHomeCanvas);
                await exportCanvasOrMulti('chkHomeBannerDark', darkBannerCanvas, `首页-小图状态Banner(夜间)-${homeColor}`, 'home', bannerFolder, homeRefs, renderHomeCanvas);
                await exportCanvasOrMulti('chkHomePhone', lightCanvas, `首页-小图状态预览-${homeColor}`, 'home', previewFolder, homeRefs, renderHomeCanvas);

                // ✨✨✨ 单独导出纯透明底的配图切图 (只保留 420x282) ✨✨✨
                const kvImg = await getSafeHeroImageForExport();
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
            // == 我的页面：只要勾选就先渲染再写文件，不依赖当前视图状态 ==
            {
                const myPageLightChk = document.getElementById('chkMyPageBannerLight')?.checked;
                const myPageDarkChk = document.getElementById('chkMyPageBannerDark')?.checked;
                const myPagePhoneChk = document.getElementById('chkMyPagePhone')?.checked;
                if (myPageLightChk || myPageDarkChk || myPagePhoneChk) await renderMyPage();
                if (myPageLightChk && myPageCanvas) bannerFolder.file(`我的页面-Banner(日间)-${myPageColor}.png`, await canvasToBlob(myPageCanvas));
                if (myPageDarkChk && myPageDarkCanvas) bannerFolder.file(`我的页面-Banner(夜间)-${myPageColor}.png`, await canvasToBlob(myPageDarkCanvas));
                if (myPagePhoneChk && myPageFullCanvas) previewFolder.file(`我的页面-页面预览-${myPageColor}.png`, await canvasToBlob(myPageFullCanvas));
            }
            // == 视频音频共享页：导出前先渲染，避免未浏览过的页面画布空白 ==
            {
                const iconChk = document.getElementById('chkVideoAudioShareIconExport')?.checked;
                const pageChk = document.getElementById('chkVideoAudioSharePageExport')?.checked;
                if (iconChk || pageChk) await renderVideoAudioShareCanvas();
                if (iconChk && videoAudioShareExportCanvas) bannerFolder.file(`视频音频共享页-右上icon独立切图(114x114).png`, await canvasToBlob(videoAudioShareExportCanvas));
                if (pageChk && videoAudioSharePageCanvas) previewFolder.file(`视频音频共享页-页面预览.png`, await canvasToBlob(videoAudioSharePageCanvas));
            }
            // == 会员频道大卡：导出前先渲染 ==
            {
                const cardChk = document.getElementById('chkMembershipChannelCardExport')?.checked;
                const cardPageChk = document.getElementById('chkMembershipChannelCardPageExport')?.checked;
                if (cardChk || cardPageChk) await renderMembershipChannelCardCanvas();
                if (cardChk && membershipChannelCardExportCanvas) bannerFolder.file(`会员频道大卡-独立切图(1092x597).png`, await canvasToBlob(membershipChannelCardExportCanvas));
                if (cardPageChk && membershipChannelCardPageCanvas) previewFolder.file(`会员频道大卡-页面预览.png`, await canvasToBlob(membershipChannelCardPageCanvas));
            }
            // == 等级福利商品图：导出前先渲染 ==
            {
                const trExport = document.getElementById('chkTierBasedRewardsProductImagesExport')?.checked;
                const trP1 = document.getElementById('chkTierBasedRewardsProductImagesPage1Export')?.checked;
                const trP2 = document.getElementById('chkTierBasedRewardsProductImagesPage2Export')?.checked;
                const trP3 = document.getElementById('chkTierBasedRewardsProductImagesPage3Export')?.checked;
                if (trExport || trP1 || trP2 || trP3) await renderTierBasedRewardsProductImagesCanvas();
                if (trExport && tierBasedRewardsProductImagesExportCanvas) bannerFolder.file(`等级福利商品图-独立切图(342x342).png`, await canvasToBlob(tierBasedRewardsProductImagesExportCanvas));
                if (trP1 && tierBasedRewardsProductImagesPage1Canvas) previewFolder.file(`等级福利商品图-页面1预览.png`, await canvasToBlob(tierBasedRewardsProductImagesPage1Canvas));
                if (trP2 && tierBasedRewardsProductImagesPage2Canvas) previewFolder.file(`等级福利商品图-页面2预览.png`, await canvasToBlob(tierBasedRewardsProductImagesPage2Canvas));
                if (trP3 && tierBasedRewardsProductImagesPage3Canvas) previewFolder.file(`等级福利商品图-页面3预览.png`, await canvasToBlob(tierBasedRewardsProductImagesPage3Canvas));
            }
            // == 会员频道下拉2楼：三种列布局，导出前分别渲染 ==
            {
                const p1b = document.getElementById('chkMembersChannelPage1Banner')?.checked;
                const p1p = document.getElementById('chkMembersChannelPage1Page')?.checked;
                if (p1b || p1p) await renderMembersChannelPage1Canvas();
                if (p1b && membersChannelPage1ExportCanvas) bannerFolder.file(`会员频道下拉2楼-单列-独立切图.png`, await canvasToBlob(membersChannelPage1ExportCanvas));
                if (p1p && membersChannelPage1Canvas) previewFolder.file(`会员频道下拉2楼-单列-页面预览.png`, await canvasToBlob(membersChannelPage1Canvas));
            }
            {
                const p2b = document.getElementById('chkMembersChannelPage2Banner')?.checked;
                const p2p = document.getElementById('chkMembersChannelPage2Page')?.checked;
                if (p2b || p2p) await renderMembersChannelPage2Canvas();
                if (p2b && membersChannelPage2ExportCanvas) bannerFolder.file(`会员频道下拉2楼-双列-独立切图.png`, await canvasToBlob(membersChannelPage2ExportCanvas));
                if (p2p && membersChannelPage2Canvas) previewFolder.file(`会员频道下拉2楼-双列-页面预览.png`, await canvasToBlob(membersChannelPage2Canvas));
            }
            {
                const p3b = document.getElementById('chkMembersChannelPage3Banner')?.checked;
                const p3p = document.getElementById('chkMembersChannelPage3Page')?.checked;
                if (p3b || p3p) await renderMembersChannelPage3Canvas();
                if (p3b && membersChannelPage3ExportCanvas) bannerFolder.file(`会员频道下拉2楼-三列-独立切图.png`, await canvasToBlob(membersChannelPage3ExportCanvas));
                if (p3p && membersChannelPage3Canvas) previewFolder.file(`会员频道下拉2楼-三列-页面预览.png`, await canvasToBlob(membersChannelPage3Canvas));
            }
            // == 搜索icon：独立切图 + 页面预览 ==
            {
                const searchIconChecked = document.getElementById('chkSearchIconExport')?.checked;
                const searchPageChecked = document.getElementById('chkSearchPageExport')?.checked;
                if (searchIconChecked || searchPageChecked) await renderSearchIcon();
                if (searchIconChecked && searchIconExportCanvas) bannerFolder.file(`搜索icon-独立切图(204x204).png`, await canvasToBlob(searchIconExportCanvas));
                if (searchPageChecked && searchPageCanvas) previewFolder.file(`搜索icon-页面预览.png`, await canvasToBlob(searchPageCanvas));
            }
            // == 网盘商城feed流宽banner：独立切图(JPG) ==
            if (document.getElementById('chkMallFeedWideBannerExport')?.checked && mallFeedWideBannerPage1ExportCanvas && mallFeedWideBannerPage2ExportCanvas) {
                await renderMallFeedWideBannerCanvas();
                bannerFolder.file(`网盘商城feed流宽banner-页面1-独立切图(522x336).jpg`, await canvasToJpegBlob(mallFeedWideBannerPage1ExportCanvas));
                bannerFolder.file(`网盘商城feed流宽banner-页面2-独立切图(522x336).jpg`, await canvasToJpegBlob(mallFeedWideBannerPage2ExportCanvas));
            }
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
            await exportCanvasOrMulti('chkPeerSharingIconPushExport', peerSharingIconPushExportCanvas, `共享点对点icon-独立切图(300x300)`, 'peerSharingIconPush', bannerFolder, [], renderPeerSharingIconPushCanvas);
            await exportCanvasOrMulti('chkPeerSharingIconPushPageExport', peerSharingIconPushPageCanvas, `共享点对点icon-页面预览`, 'peerSharingIconPush', previewFolder, [], renderPeerSharingIconPushCanvas);
            if (document.getElementById('chkCloudStoreFeedLongBannerExport')?.checked && cloudStoreFeedLongBannerExportCanvas) {
                await renderCloudStoreFeedLongBannerCanvas();
                bannerFolder.file(`网盘商城feed流长banner-独立切图(522x837).jpg`, await canvasToJpegBlob(cloudStoreFeedLongBannerExportCanvas));
            }

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
        } catch (e) {
            console.error('导出失败:', e);
            alert('导出失败：页面里有图片来源不安全，浏览器禁止导出。请刷新页面后重试；如果仍失败，请重新上传本地图片，不要直接拖入网页上的外链图片。\n' + e);
        } finally { confirmExportBtn.innerText = originalText; confirmExportBtn.disabled = false; }
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
    relocateActionPanels();
    bindSmartActionPanel();
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
