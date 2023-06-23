import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import VCalendar from 'v-calendar';
import "@/assets/styles/style.css"
import i18n from './i18n'
import axios from 'axios'


const lang = 'en'
axios.defaults.headers['Accept-Language'] = lang
console.log(axios.defaults.headers);
Vue.use(VCalendar)
Vue.config.productionTip = false

const vm = new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
export {vm}