import HomePageVue from "@/components/HomePage.vue"
import ThreadShowPageVue from "@/components/ThreadShowPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [{
    name: "",
    path: "/",
    component: HomePageVue
},
{
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShowPageVue,
    props: true
}
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})