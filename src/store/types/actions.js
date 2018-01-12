import api from 'src/api/fixtures'

export const getTypes = ({commit}) => {
    api.getTypes(types => {
        commit('RECEIVE_TYPES', types)
    })
};
