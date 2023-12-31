import axios from 'axios'
import { vm } from '@/main'
export default {
    auth({ state, commit }, data) {
        // Тут должен быть запрос на сервер
        return new Promise((resolve, reject) => {
            const errors = {
                loginIsError: false,
                passwordIsError: false
            }
            const user = state.listOfUsers.find(user => user.login == data.login) || state.listOfUsers.find(user => user.email == data.login);
            if (user == undefined) {
                errors.loginIsError = true
                reject(errors)
            } else if (user.password != data.password) {
                errors.passwordIsError = true
                reject(errors)
            } else {
                commit('changeCurrentUser', user)
                localStorage.setItem('user', JSON.stringify(user))
                resolve(true)
            }
        })
    },
    logout({ commit }) {
        commit('changeCurrentUser', null)
        localStorage.clear()
        vm.$router.push({ name: 'Login' })
    },
    GET_USERS_FROM_API({ commit }) {
        return axios('http://localhost:3000/users', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_USERS', response.data)

            })
    },
    CREATE_USER({ state }, user) {
        axios.post('http://localhost:3000/users', user).then(() => {

        alert('Успешно')
        }).catch(error => {
            console.log(state);

            console.error(error);
        });
    },
    CHANGE_USER({ s }, user) {
        console.log(s);
        fetch(`http://localhost:3000/users`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => console.log(res))
            .then(json => console.log(json))
    }
}