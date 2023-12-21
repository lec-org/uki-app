import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginForArco } from '@arco-plugins/vite-react'
		
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vitePluginForArco()],
	server: {
		cors: true, // 默认启用并允许任何源
		proxy: {
			'/api': {
				target: 'http://47.108.119.44:8080/api/', //目标url
				changeOrigin: true, //支持跨域
				rewrite: (path) => path.replace(/^\/api/, ''),
				//重写路径,替换/api
			},
		},
	},
})
