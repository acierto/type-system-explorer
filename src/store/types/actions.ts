import * as R from 'ramda';
import {Commit, Action} from 'vuex'
import api from '../../api/fixtures'
import debounce from 'debounce';

let debounceSearch: any;

const DEBOUNCE_WAIT_TIME = 300;

export interface State {
    searchToken: '',
    type: any[]
}

export const getTypes: Action<State, any> = (context: { commit: Commit }) => {
    api.getTypes((types: any) => {
        const sortByTypeName = R.sortBy(R.compose(R.toLower, R.prop('type')));
        context.commit('RECEIVE_TYPES', sortByTypeName(types));
    })
};

export const searchByToken: Action<State, any> = (context: { commit: Commit }, event: any) => {
    if (debounceSearch) {
        debounceSearch.clear();
    }

    function action() {
        context.commit('CHANGE_SEARCH_TOKEN', event.target.value);
    }

    debounceSearch = debounce(action, DEBOUNCE_WAIT_TIME);
    debounceSearch();
};

export const selectType: Action<State, any> = (context: { commit: Commit }, event: any) => {
    context.commit('SELECT_TYPE', event.target.attributes['data-value'].value);
};
