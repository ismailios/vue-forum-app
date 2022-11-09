import HomePage from "@/page/HomePage.vue"
import ThreadShow from "@/page/ThreadShow.vue"
import NotFound from "@/page/NotFound.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [{
    name: "Home",
    path: "/",
    component: HomePage
},
{
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShow,
    props: true
},
{
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: NotFound,
}
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})