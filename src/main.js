import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import store from './store'




const app = createApp(App)
app.use(store)
app.use(router)
const requireComponent = require.context(
    './components',
    false,
    /App[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName =
        fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
    app.component(
        componentName,
        componentConfig.default || componentConfig
    )
})



app.mount('#app')
