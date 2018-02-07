import * as R from 'ramda';

export interface State {
    all: any[],
    displayedTypes: any[],
    selectedProperty: any,
    selectedType: any,
    token: string
}

const state: State = {
    all: [],
    displayedTypes: [],
    selectedProperty: '',
    selectedType: '',
    token: ''
};

const mutations = {
    CHANGE_SEARCH_TOKEN(state: State, token: string) {
        state.token = token;

        if (token) {
            const filterItem = (item: string) => item.toLowerCase().indexOf(token.toLowerCase()) > -1;
            const matched = R.propSatisfies(filterItem, 'type');
            state.displayedTypes = R.filter(matched, state.all);
        } else {
            state.displayedTypes = state.all;
        }
    },
    RECEIVE_TYPES(state: State, types: any) {
        state.all = types;
        state.displayedTypes = types;
    },
    SELECT_PROPERTY(state: State, propertyName: string) {
        state.selectedProperty = R.find(R.propEq('name', propertyName), state.selectedType.properties);
    },
    SELECT_TYPE(state: State, type: string) {
        state.selectedProperty = '';
        state.selectedType = R.find(R.propEq('type', type), state.all);
    }
};

export default {
    state,
    mutations
}
