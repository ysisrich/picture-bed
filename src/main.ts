import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import { createPinia } from "pinia"

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import {
  // create naive ui
  create,
  // component
  NButton,
  NUpload,
  NIcon,
  NUploadDragger,
  NP,
  NText,
  NAlert,
  NConfigProvider,
  NMessageProvider, 
  NDialogProvider,
  NLoadingBarProvider,
  NSpace,
  NLayout,  
  NLayoutHeader,  
  NLayoutContent,  
  NLayoutFooter, 
  NMenu
} from 'naive-ui'

const naive = create({
  components: [
		NButton,
		NUpload,
		NIcon,
		NUploadDragger,
		NP,
		NText,
		NAlert,
		NConfigProvider,
		NMessageProvider, 
		NDialogProvider,
    NLoadingBarProvider,
		NSpace,
		NLayout,  
		NLayoutHeader,  
		NLayoutContent,  
		NLayoutFooter,
		NMenu
	]
})

const app = createApp(App)

app.use(router)
// 创建根存储库并将其传递给应用程序
app.use(createPinia())
app.use(naive)



app.mount('#app')
