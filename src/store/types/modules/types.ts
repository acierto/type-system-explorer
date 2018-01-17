import * as R from 'ramda';

export interface State {
    all: any[],
    displayed: any[],
    selectedType: string,
    token: string
}

const state: State = {
    all: [],
    displayed: [],
    selectedType: '',
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
    },
    SELECT_TYPE(state: State, type: string) {
        state.selectedType = type;
    }
};

export default {
    state,
    mutations
}
