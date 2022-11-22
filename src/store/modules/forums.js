
import { fetchAll } from "@/shared";


export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {},
    actions: {
        fetchForums({ commit }) {
            fetchAll(commit, "forums");
        },
    },
    mutations: {
        setItems(state, forums) {
            state.items = forums
        }
    }
}