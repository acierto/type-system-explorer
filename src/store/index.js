import Vue from 'vue'
import Vuex from 'vuex'
import types from './types/modules/types'
import * as actions from './types/actions'
// import * as getters from './types/getters'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    // getters,
    modules: {
        types
    },
    strict: debug
})
