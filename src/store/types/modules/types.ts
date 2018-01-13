export interface State {
    all: any[]
}

const state: State = {
    all: []
};

const mutations = {
    RECEIVE_TYPES(state: State, types: any) {
        state.all = types
    }
};

export default {
    state,
    mutations
}
