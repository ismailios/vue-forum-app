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
        fetchThreads({ commit }) {
            fetchAll(commit, "threads")
        },
        async createThread({ commit, state, dispatch, rootState }, { content, title, forumId }) {
            console.log(content, title, forumId)
            const userId = rootState.auth.authId
            console.log(userId)
            const publishedAt = Date.now()
            const thread = { forumId, title, publishedAt, userId }
            const docRef = await addDoc(collection(db, "threads"), thread);
            const userRef = doc(db, "users", userId);
            await updateDoc(userRef, {
                threads: arrayUnion(docRef.id)
            });
            const forumRef = doc(db, "forums", forumId);
            await updateDoc(forumRef, {
                threads: arrayUnion(docRef.id)
            });

            await dispatch('posts/createPost', { text: content, threadId: docRef.id }, { root: true })
            return state.items.find((thread) => thread.id == docRef.id)
        },

    },
    mutations: {
        setItems(state, threads) {
            state.items = threads
        },
        appendPostToThread(state, { postId, threadId }) {
            const thread = state.items.find((thread) => thread.id === threadId)
            if (thread) {
                thread.posts.push(postId)
            }

        },
    }
}