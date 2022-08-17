import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import postCssPxToViewport from 'postcss-px-to-viewport'

// https://vitejs.dev/config/ //所有的JS组件文件都要以.jsx结尾
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // IP
    port: 82, //端口号
    open: false, // 是否自动打开浏览器
    // vite 脚手架独有的跨域配置方式
    proxy: {
      '/api': { // 遇见/api1前缀的请求，就会触发该代理配置
        // target: 'http://localhost:5000', // //请求转发给谁, 服务端的IP和端口
        target: 'https://api.github.com', // //请求转发给谁
        changeOrigin: true, //控制服务器收到的请求头中Host的值
        rewrite: path => path.replace(/^\/api1/, '') //重写请求路径(必须)
      }
    }
  },
  // 用于 postcss-px-to-viewport 移动端屏幕适配
  css: {
    postcss: {
      plugins: [
        postCssPxToViewport({
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: undefined,
          include: undefined,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
        })
      ]
    }
  }
})
