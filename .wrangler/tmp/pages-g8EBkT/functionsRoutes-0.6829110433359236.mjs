import { onRequestGet as __api_chat_js_onRequestGet } from "/Users/wushuxun/Desktop/7.13/ziyuanwei/functions/api/chat.js"
import { onRequestPost as __api_chat_js_onRequestPost } from "/Users/wushuxun/Desktop/7.13/ziyuanwei/functions/api/chat.js"
import { onRequestPost as __api_image_js_onRequestPost } from "/Users/wushuxun/Desktop/7.13/ziyuanwei/functions/api/image.js"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_chat_js_onRequestGet],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_js_onRequestPost],
    },
  {
      routePath: "/api/image",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_image_js_onRequestPost],
    },
  ]