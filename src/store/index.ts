import { StoreShape } from '@/types';
import { createStore } from 'vuex'
import dataSource from "../data.json";



const store = createStore({
    state(): StoreShape {
        return {
            threads: dataSource.threads,
            forums: dataSource.forums,
            categories: dataSource.categories,
            users: dataSource.users,
            posts: dataSource.posts,
            authId: "ALXhxjwgY9PinwNGHpfai6OWyDu2"
        }
    },
    getters: {
        authUser: (state: StoreShape) => {
            const user = state.users.find((user) => user.id === state.authId)
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
        createPost(context, post) {
            post.id = "dddddezdezdd" + Math.random()
            context.commit("setPost", { post })
            context.commit("appendPostToThread", {
                postId: post.id,
                threadId: post.threadId
            })
        },
        updateUser(context, { user, userId }) {
            context.commit("setUser", { user, userId })
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post)
        },
        appendPostToThread(state, { postId, threadId }) {
            const thread = state.threads.find((thread) => thread.id === threadId)
            if (thread) {
                thread.posts.push(postId)
            }

        },
        setUser(state, { user, userId }) {
            const userIndex = state.users.findIndex((user) => user.id === userId)
            state.users[userIndex] = user

        }
    },
})

export default store