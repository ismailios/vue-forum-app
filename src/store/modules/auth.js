
import { auth } from "@/config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

export default {
    namespaced: true,
    state: {
        authId: null,
    },
    getters: {
        authUser: (state, getters, rootState, rootGetters) => {
            return rootGetters['users/user'](state.authId)
        }
    },
    actions: {
        async registerUserWithEmailAndPassword({ dispatch, commit }, { avatar = null, email, name, username, password }) {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            commit("setAuthId", result.user.uid)
            avatar = await dispatch('uploadAvatar', { authId: result.user.uid, file: avatar })
            await dispatch('users/createUser', { id: result.user.uid, email, name, username, avatar }, { root: true })
        },
        async uploadAvatar() {
            //TODO : Firebase image storage
            const image = "https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg"
            return image
        },
        async signInWithEmailAndPassword({ commit }, { email, password }) {
            const result = await signInWithEmailAndPassword(auth, email, password)
            commit('setAuthId', result.user.uid)
        },
        async signOut({ commit }) {
            await signOut(auth)
            commit('setAuthId', null)
        },
        initAuthentication({ dispatch }) {
            return new Promise((resolve) => {
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        await dispatch('fetchAuthUser')
                        resolve(user)
                    } else {
                        resolve(null)
                    }
                })

            })
        },
        fetchAuthUser: async ({ commit }) => {
            const userId = auth.currentUser?.uid
            if (!userId) return
            // await dispatch('fetchItem', {
            //     resource: 'users',
            //     id: userId,
            //     handleUnsubscribe: (unsubscribe) => {
            //         commit('setAuthUserUnsubscribe', unsubscribe)
            //     }
            // },
            //     { root: true }
            // )
            commit('setAuthId', userId)
        },

    },
    mutations: {
        setAuthId(state, authId) {
            state.authId = authId
        },
    }

}