import * as getters from './getters';

import {filterByFilterCriteria} from '../../../../utils/filter-types';
import {SearchCriteria} from "../search/search";

export interface State {
    all: any[];
    displayedTypes: any[];
}

const state: State = {
    all: [],
    displayedTypes: []
};

const mutations = {
    RECEIVE_TYPES(state: State, types: any) {
        state.all = types;
        state.displayedTypes = types;
    },
    UPDATE_DISPLAYED_TYPES(state: State, searchCriteria: SearchCriteria) {
        state.displayedTypes = filterByFilterCriteria(state.all, searchCriteria);
    }
};

export default {
    getters,
    state,
    mutations
};
