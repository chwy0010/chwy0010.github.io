import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/reset.css';

import Antd from 'ant-design-vue';
import App from './App.vue'
import { router } from "./router";
// import { pinia } from "./store";

const app = createApp(App)

app.use(Antd)
// .use(pinia)
.use(router)
.mount('#app')

