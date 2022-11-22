import HomePage from "@/page/HomePage.vue"
import ThreadShow from "@/page/ThreadShow.vue"
import ForumPage from "@/page/ForumPage.vue"
import NotFound from "@/page/NotFound.vue"
import { createRouter, createWebHistory } from "vue-router"
import CategoryPageVue from "@/page/CategoryPage.vue"
import ProfilePageVue from "@/page/ProfilePage.vue"
import ForgotPasswordPageVue from "@/page/ForgotPasswordPage.vue"
import RegisterPageVue from "@/page/RegisterPage.vue"
import LoginPageVue from "@/page/LoginPage.vue"
import store from "@/store"
import ThreadCreateVue from "@/page/ThreadCreate.vue"

const routes = [{
    name: "Home",
    path: "/",
    component: HomePage,
    meta: {
        title: "Home",
        requiresAuth: false,
    },
},
{
    name: "Profile",
    path: "/me",
    component: ProfilePageVue,
    props: true
},
{
    path: '/me/edit',
    name: 'ProfileEdit',
    component: ProfilePageVue,
    props: { edit: true },
    meta: { requiresAuth: true }
},

{
    path: "/login",
    name: "Login",
    component: LoginPageVue,
    meta: {
        title: "Login",
        requiresAuth: false,
    },
},
{
    path: "/register",
    name: "Register",
    component: RegisterPageVue,
    meta: {
        title: "Register",
        requiresAuth: false,
    },
},
{
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPasswordPageVue,
    meta: {
        title: "Forgot Password",
        requiresAuth: false,
    },
},
{
    name: "Forum",
    path: "/forum/:id",
    component: ForumPage,
    props: true
},
{
    name: "Category",
    path: "/category/:id",
    component: CategoryPageVue,
    props: true
},
{
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShow,
    props: true
},
{
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: ThreadCreateVue,
    props: true,
    meta: { requiresAuth: true }
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

router.beforeEach(async (to, from) => {
    await store.dispatch('auth/initAuthentication')
    // store.dispatch('unsubscribeAllSnapshots')
    if (to.meta.requiresAuth && !store.state.auth.authId) {
        return { name: 'Login' }
    }

})