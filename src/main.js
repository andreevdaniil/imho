import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import VCalendar from 'v-calendar';
import "@/assets/styles/style.css"

Vue.use(VCalendar)
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')