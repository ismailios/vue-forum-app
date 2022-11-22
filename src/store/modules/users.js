
import { db } from "@/config/firebase";
import { fetchAll } from "@/shared";
import { doc, setDoc } from "firebase/firestore";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        user: (state, getters, rootState) => {
            return (id) => {
                // console.log("id", id)
                // console.log("state.items", state.items)
                const user = state.items.find((user) => user.id === id)
                if (!user) return null
                return {
                    ...user,
                    get posts() {
                        return rootState.posts.items.filter(post => post.userId === user.id)
                    },
                    get postsCount() {
                        return user.postsCount || 0
                    },
                    get threads() {
                        return rootState.threads.items.filter(post => post.userId === user.id)
                    },
                    get threadIds() {
                        return user.threads
                    },
                    get threadsCount() {
                        return user.threads?.length || 0
                    }
                }
            }
        },
        authUser: (state, rootState) => {
            const user = state.items.find((user) => user.id === rootState.authId)
            if (!user) return null
            return {
                ...user,
                get posts() {
                    return state.posts.filter((post) => post.userId === user.id)
                },
                get postsCount() {
                    return this.posts.length
                },
                get threads() {
                    return state.threads.filter((thread) => thread.userId === user.id)
                },
                get threadsCount() {
                    return this.threads.length
                }
            }
        }
    },
    actions: {
        async createUser({ commit }, { id, email, name, username, avatar = null }) {
            const usernameLower = username.toLowerCase()
            email = email.toLowerCase()
            const user = { avatar, email, name, username, usernameLower }
            await setDoc(doc(db, "users", id), user);
        },
        fetchUsers({ commit }) {
            fetchAll(commit, "users")
        },


    },
    mutations: {
        setItems(state, users) {
            state.items = users
        }
    }
}