import * as getters from './getters';
import * as R from 'ramda';

import {filterByAdvancedFilter} from '../../../../utils/filter-types';
import {AdvancedSearch} from "../search/search";

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
    UPDATE_DISPLAYED_TYPES_BY_TOKEN(state: State, token: string) {
        if (token) {
            const filterItem = (item: string) => item.toLowerCase().indexOf(token.toLowerCase()) > -1;
            const matched = R.propSatisfies(filterItem, 'type');
            state.displayedTypes = R.filter(matched, state.all);
        } else {
            state.displayedTypes = state.all;
        }
    },
    UPDATE_DISPLAYED_TYPES_BY_ADVANCED_SEARCH(state: State, advancedSearch: AdvancedSearch) {
        state.displayedTypes = filterByAdvancedFilter(state.all, advancedSearch);
    }
};

export default {
    getters,
    state,
    mutations
};
