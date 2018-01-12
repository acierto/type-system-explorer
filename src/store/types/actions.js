import api from '../../api/fixtures'

export const getTypes = ({commit}) => {
    api.getTypes(types => {
        commit('RECEIVE_TYPES', types)
    })
};
