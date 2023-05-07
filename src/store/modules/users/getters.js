export default {
    getCurrentUser(state) {
        return state.currentUser || undefined
    },
    getCountries(state){
        return state.listOfCountries || undefined
    },
    getListOfUsers(state) {
        return state.listOfUsers
    },
    getUserById(state) {
        console.log(state.listOfUsers);
        return (id) => {
            return state.listOfUsers.find((e) => e.id = id)
        }
    }
}