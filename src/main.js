import { createApp } from 'vue'
import { createPinia } from 'pinia'
import apolloProvider from "./apollo/provider";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(apolloProvider)
app.use(router)

app.mount('#app')
