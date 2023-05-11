import axios from "axios"

export default {
    GET_AUTHORS_FROM_API({ commit }) {
        return axios('http://localhost:3000/authors', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_AUTHORS', response.data)
            })
    },
    GET_PUBLICATIONS_FROM_API({ commit }) {
        return axios('http://localhost:3000/publications', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_PUBLICATIONS', response.data)
            })
    },
    GET_THEMES_FROM_API({ commit }) {
        return axios('http://localhost:3000/themes', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_THEMES', response.data)
            })
    },
    getUserById({ state }, data) {
        return state.listOfAuthors.find(x => x.id == data)
    }
}