import * as R from 'ramda';

export interface State {
    all: any[],
    displayed: any[],
    token: string
}

const state: State = {
    all: [],
    displayed: [],
    token: ''
};

const mutations = {
    CHANGE_SEARCH_TOKEN(state: State, token: string) {
        state.token = token;

        if (token) {
            const filterItem = (item: string) => item.toLowerCase().indexOf(token.toLowerCase()) > -1;
            const matched = R.propSatisfies(filterItem, 'type');
            state.displayed = R.filter(matched, state.all);
        } else {
            state.displayed = state.all;
        }
    },
    RECEIVE_TYPES(state: State, types: any) {
        state.all = types;
        state.displayed = types;
    }
};

export default {
    state,
    mutations
}
