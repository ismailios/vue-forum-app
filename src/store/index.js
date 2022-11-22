import { createStore } from 'vuex'
import auth from './modules/auth'
import categories from './modules/categories'
import forums from './modules/forums'
import threads from './modules/threads'
import users from './modules/users'
import posts from './modules/posts'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'



const store = createStore({
    modules: {
        auth,
        categories,
        forums,
        threads,
        users,
        posts,
    },
    getters,
    actions,
    mutations
})




export default store