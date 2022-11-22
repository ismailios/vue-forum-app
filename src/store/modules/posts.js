import { db } from "@/config/firebase";
import { fetchAll } from "@/shared";
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {},
    actions: {
        fetchPosts({ commit }) {
            fetchAll(commit, "posts")

        },
        async createPost(context, post) {
            const docRef = await addDoc(collection(db, "posts"), post);
            const threadsPostRef = doc(db, "threads", post.threadId);
            await updateDoc(threadsPostRef, {
                posts: arrayUnion(docRef.id)
            });
            // context.commit("setPost", { post })
            // context.commit("threads/appendPostToThread", {
            //     postId: post.id,
            //     threadId: post.threadId
            // }, { root: true })
        },
        updateUser({ commit }, { user, userId }) {
            commit("setUser", { user, userId })
        },
    },
    mutations: {
        setItems(state, posts) {
            state.items = posts
        },
        setPost(state, { post }) {
            state.items.push(post)
        },

    }
}