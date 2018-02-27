import * as R from 'ramda';
import {Commit, Action} from 'vuex'
import api from '../../api/fixtures'
import debounce from 'debounce';
import {State} from "./modules/types";

let debounceSearch: any;

const DEBOUNCE_WAIT_TIME = 300;

export const getTypes: Action<State, any> = (context: { commit: Commit }) => {
    api.getTypes((types: any) => {
        const sortByTypeName = R.sortBy(R.compose(R.toLower, R.prop('type')));
        context.commit('RECEIVE_TYPES', sortByTypeName(types));
    })
};

export const applyAdvancedFilter: Action<State, any> = (context: { commit: Commit, rootState: any }, event: any) => {
    context.commit('APPLY_ADVANCED_FILTER', event);
    context.commit('UPDATE_DISPLAYED_TYPES_BY_ADVANCED_SEARCH', context.rootState.search.advancedSearch.applied);
    if (R.isEmpty(context.rootState.types.displayedTypes)) {
        context.commit('CLEAR_SELECTIONS', event);
    }
};

export const resetStagedAdvancedFilter: Action<State, any> = (context: { commit: Commit }, event: any) => {
    context.commit('RESET_STAGED_ADVANCED_FILTER', event);
};

export const updateAdvancedSearchPropertyNames: Action<State, any> = (context: { commit: Commit }, event: any) => {
    context.commit('UPDATE_ADVANCED_SEARCH_PROPERTY_NAMES', event);
};

export const updateAdvancedSearchInterfaces: Action<State, any> = (context: { commit: Commit }, event: any) => {
    context.commit('UPDATE_ADVANCED_SEARCH_INTERFACES', event);
};

export const updateAdvancedSearchSuperTypes: Action<State, any> = (context: { commit: Commit }, event: any) => {
    context.commit('UPDATE_ADVANCED_SEARCH_SUPERTYPES', event);
};

export const searchByToken: Action<State, any> = (context: { commit: Commit, rootState: any }, event: any) => {
    if (debounceSearch) {
        debounceSearch.clear();
    }

    function action() {
        const token = event.target.value;
        context.commit('CHANGE_SEARCH_TOKEN', token);
        context.commit('UPDATE_DISPLAYED_TYPES_BY_TOKEN', token);
        if (R.isEmpty(context.rootState.types.displayedTypes)) {
            context.commit('CLEAR_SELECTIONS', event);
        }
    }

    debounceSearch = debounce(action, DEBOUNCE_WAIT_TIME);
    debounceSearch();
};

export const selectType: Action<State, any> = (context: { commit: Commit, rootState: any }, event: any) => {
    const type = event.target.attributes['data-value'].value;
    context.commit('SELECT_TYPE', R.find(R.propEq('type', type), context.rootState.types.all));
};

export const selectProperty: Action<State, any> = (context: { commit: Commit }, event: any) => {
    context.commit('SELECT_PROPERTY', event.target.attributes['data-value'].value);
};
