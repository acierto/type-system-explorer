import * as R from 'ramda';

export interface AdvancedSearch {
    interfaces: string[],
    superTypes: string[],
    propertyNames: string[],
    [key: string]: string[]
}

export interface Search {
    advancedSearch: { applied: AdvancedSearch, staged: AdvancedSearch },
    token: string
}

const initialSearch = {
    interfaces: [],
    superTypes: [],
    propertyNames: []
};

const state: Search = {
    advancedSearch: {
        applied: initialSearch,
        staged: initialSearch
    },
    token: ''
};

const mutations = {
    APPLY_ADVANCED_FILTER(state: Search) {
        const applied = R.clone(state.advancedSearch.staged);
        state.advancedSearch = {
            applied,
            staged: initialSearch
        };
    },
    CHANGE_SEARCH_TOKEN(state: Search, token: string) {
        state.token = token;
    },
    RESET_STAGED_ADVANCED_FILTER(state: Search) {
        const staged = R.clone(state.advancedSearch.applied);
        state.advancedSearch = {
            applied: staged,
            staged
        }
    },
    UPDATE_ADVANCED_SEARCH_INTERFACES(state: Search, interfaces: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'interfaces'], interfaces, state.advancedSearch);
    },
    UPDATE_ADVANCED_SEARCH_PROPERTY_NAMES(state: Search, propertyNames: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'propertyNames'], propertyNames, state.advancedSearch);
    },
    UPDATE_ADVANCED_SEARCH_SUPERTYPES(state: Search, superTypes: string[]) {
        state.advancedSearch = R.assocPath(['staged', 'superTypes'], superTypes, state.advancedSearch);
    }
};

export default {
    state,
    mutations
}
