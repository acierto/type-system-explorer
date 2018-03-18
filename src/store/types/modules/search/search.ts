import * as R from 'ramda';
import * as getters from './getters';

export interface AdvancedSearch {
    interfaces: string[];
    superTypes: string[];
    propertyNames: string[];

    [key: string]: string[];
}

export interface SearchCriteria {
    advancedSearch: { applied: AdvancedSearch, staged: AdvancedSearch };
    token: string;
}

const initialSearch = {
    interfaces: [],
    superTypes: [],
    propertyNames: []
};

const state: SearchCriteria = {
    advancedSearch: {
        applied: initialSearch,
        staged: initialSearch
    },
    token: ''
};

const mutations = {
    APPLY_ADVANCED_FILTER(state: SearchCriteria) {
        const applied = R.clone(state.advancedSearch.staged);
        state.advancedSearch = {
            applied,
            staged: initialSearch
        };
    },
    CHANGE_SEARCH_TOKEN(state: SearchCriteria, token: string) {
        state.token = token;
    },
    RESET_STAGED_ADVANCED_FILTER(state: SearchCriteria) {
        const staged = R.clone(state.advancedSearch.applied);
        state.advancedSearch = {
            applied: staged,
            staged
        };
    },
    UPDATE_ADVANCED_SEARCH_INTERFACES(state: SearchCriteria, interfaces: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'interfaces'], interfaces, state.advancedSearch);
    },
    UPDATE_ADVANCED_SEARCH_PROPERTY_NAMES(state: SearchCriteria, propertyNames: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'propertyNames'], propertyNames, state.advancedSearch);
    },
    UPDATE_ADVANCED_SEARCH_SUPERTYPES(state: SearchCriteria, superTypes: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'superTypes'], superTypes, state.advancedSearch);
    }
};

export default {
    getters,
    state,
    mutations
};
