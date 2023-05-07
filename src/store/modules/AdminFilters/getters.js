export default {
    getAvailableCountries(state) {
        return state.availableCountries
    },
    getAuthors(state) {
        console.log(state.listOfAuthors);
        return state.listOfAuthors
    },
    getPublications(state) {
        return state.listOfPublications
    },
    getThemes(state) {
        return state.listOfThemes
    },
    getAuthorById(state) {
        return (id) => {
            console.log(state.listOfAuthors);
            console.log(state.listOfAuthors.find((x) => x.id == id))
            return state.listOfAuthors.find((x) => x.id == id)
        }
    }
}