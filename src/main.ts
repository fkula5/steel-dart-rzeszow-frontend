import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from "vue-query";
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin);
app.use(router)

app.mount('#app')
