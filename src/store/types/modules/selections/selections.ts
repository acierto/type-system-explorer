import * as R from 'ramda';

export interface State {
    selectedProperty: any;
    selectedType: any;
}

const state: State = {
    selectedProperty: '',
    selectedType: ''
};

const mutations = {
    CLEAR_SELECTIONS(state: State) {
        state.selectedProperty = '';
        state.selectedType = '';
    },
    SELECT_PROPERTY(state: State, propertyName: string) {
        state.selectedProperty = R.find(R.propEq('name', propertyName), state.selectedType.properties);
    },
    SELECT_TYPE(state: State, type: any) {
        state.selectedProperty = '';
        state.selectedType = type;
    }
};

export default {
    state,
    mutations
};
