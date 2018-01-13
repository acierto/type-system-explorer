import {Commit, Action} from 'vuex'
import api from '../../api/fixtures'

export interface State {
    type: any[]
}

export const getTypes: Action<State, any> = (context: { commit: Commit }) => {
    api.getTypes((types: any) => {
        context.commit('RECEIVE_TYPES', types)
    })
};
