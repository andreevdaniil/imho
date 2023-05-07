// import { createStore } from 'vuex'
import Vue from 'vue';
import Vuex from 'vuex';
import Users from './modules/users/'
import AdminFilters from './modules/AdminFilters';
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Users,
        AdminFilters
    }
})
export default store