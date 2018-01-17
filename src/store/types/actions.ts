import * as R from 'ramda';
import {Commit, Action} from 'vuex'
import api from '../../api/fixtures'
import debounce from 'debounce';

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

export const changeSearchToken: Action<State, any> = (context: { commit: Commit }, event: any) => {
    function action() {
        context.commit('CHANGE_SEARCH_TOKEN', event.target.value);
    }
    debounce(action, 500)();
};