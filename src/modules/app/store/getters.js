export const getters = {
    /**
     * @param {AppState} state
     * @return {string}
     */
    language(state) {
        return state.language;
    },
    /**
     * @param {AppState} state
     * @return {string}
     */
    theme(state) {
        return state.theme;
    },
    /**
     * @param {AppState} state
     * @return {string}
     */
    txStatus(state) {
        return state.txStatus;
    },
};
