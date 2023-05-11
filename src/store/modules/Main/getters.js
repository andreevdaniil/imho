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
            return state.listOfAuthors.find((x) => x.id == id)
        }
    },
    getRange(state) {
        return state.rangeForPeriod
    },
    getTextForPeriod(state) {
        return state.textForPeriod
    }
}