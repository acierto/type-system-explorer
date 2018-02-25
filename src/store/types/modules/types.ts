import * as R from 'ramda';

import {filterByAdvancedFilter} from '../../../utils/filter-types';

export interface AdvancedSearch {
    interfaces: string[],
    superTypes: string[],
    propertyNames: string[]
}

export interface State {
    all: any[],
    advancedSearch: { applied: AdvancedSearch, staged: AdvancedSearch },
    displayedTypes: any[],
    selectedProperty: any,
    selectedType: any,
    token: string
}

const initialSearch = {
    interfaces: [],
    superTypes: [],
    propertyNames: []
};

const state: State = {
    all: [],
    advancedSearch: {
        applied: initialSearch,
        staged: initialSearch
    },
    displayedTypes: [],
    selectedProperty: '',
    selectedType: '',
    token: ''
};

const mutations = {
    APPLY_ADVANCED_FILTER(state: State) {
        const applied = R.clone(state.advancedSearch.staged);
        state.advancedSearch = {
            applied,
            staged: initialSearch
        };
        state.displayedTypes = filterByAdvancedFilter(state.all, state.advancedSearch.applied);
        mutations.CLEAR_SELECTIONS(state);
    },
    CHANGE_SEARCH_TOKEN(state: State, token: string) {
        state.token = token;

        if (token) {
            const filterItem = (item: string) => item.toLowerCase().indexOf(token.toLowerCase()) > -1;
            const matched = R.propSatisfies(filterItem, 'type');
            state.displayedTypes = R.filter(matched, state.all);
        } else {
            state.displayedTypes = state.all;
        }
        mutations.CLEAR_SELECTIONS(state);
    },
    CLEAR_SELECTIONS(state: State) {
        if (R.isEmpty(state.displayedTypes)) {
            state.selectedProperty = '';
            state.selectedType = '';
        }
    },
    RECEIVE_TYPES(state: State, types: any) {
        state.all = types;
        state.displayedTypes = types;
    },
    RESET_STAGED_ADVANCED_FILTER(state: State) {
        const staged = R.clone(state.advancedSearch.applied);
        state.advancedSearch = {
            applied: staged,
            staged
        }
    },
    SELECT_PROPERTY(state: State, propertyName: string) {
        state.selectedProperty = R.find(R.propEq('name', propertyName), state.selectedType.properties);
    },
    SELECT_TYPE(state: State, type: string) {
        state.selectedProperty = '';
        state.selectedType = R.find(R.propEq('type', type), state.all);
    },
    UPDATE_ADVANCED_SEARCH_INTERFACES(state: State, interfaces: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'interfaces'], interfaces, state.advancedSearch);
    },
    UPDATE_ADVANCED_SEARCH_PROPERTY_NAMES(state: State, propertyNames: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'propertyNames'], propertyNames, state.advancedSearch);
    },
    UPDATE_ADVANCED_SEARCH_SUPERTYPES(state: State, superTypes: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'superTypes'], superTypes, state.advancedSearch);
    }
};

export default {
    state,
    mutations
}
