import { createStore } from 'vuex'
import dataSource from "../data.json";
const store = createStore({
    state() {
        return {
            threads: dataSource.threads,
            forums: dataSource.forums,
            categories: dataSource.categories,
            users: dataSource.users,
            posts: dataSource.posts,
        }
    },
    getters: {


    },
    actions: {
        createPost(context, post) {
            console.log("postff", post)
            post.id = "dddddezdezdd" + Math.random()
            context.commit("setPost", { post })
            context.commit("appendPostToThread", {
                postId: post.id,
                threadId: post.threadId
            })
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post)
        },
        appendPostToThread(state, { postId, threadId }) {
            const thread = state.threads.find((thread) => thread.id === threadId)
            thread.posts.push(postId)
        }
    },
})

export default store