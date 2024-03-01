// import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'
// import data from "../data/routerData";
// import { listToRouter } from "../utils/";
import { createRouter, createWebHashHistory } from "vue-router";
// import { useUserStore  } from "../store/pinias/user";

let routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'root',
        redirect: "/index"
    },
    {
        path: '/index',  
        name: 'index',
        component: () => import('../components/index.vue'),
    },
]

const router = createRouter({ history: createWebHashHistory(), routes })

export { router }