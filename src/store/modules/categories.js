import { fetchAll } from "@/shared";


export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {},
    actions: {
        fetchCategories({ commit }) {
            fetchAll(commit, "categories");
        },
    },
    mutations: {
        setItems(state, categories) {
            state.items = categories
        }
    }
}


