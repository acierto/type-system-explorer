import * as R from 'ramda';
import {Commit, Action} from 'vuex'
import api from '../../api/fixtures'

export interface State {
    type: any[]
}

export const getTypes: Action<State, any> = (context: { commit: Commit }) => {
    api.getTypes((types: any) => {
        const sortByTypeName = R.sortBy(R.compose(R.toLower, R.prop('type')));
        context.commit('RECEIVE_TYPES', sortByTypeName(types));
    })
};
