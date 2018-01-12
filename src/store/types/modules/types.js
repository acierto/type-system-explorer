const state = {
    all: []
};

const mutations = {
    RECEIVE_TYPES(state, types) {
        state.all = types
    }
};

export default {
    state,
    mutations
}
