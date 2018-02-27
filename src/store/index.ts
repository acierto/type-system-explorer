import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Vuex from 'vuex';
import search from './types/modules/search';
import selections from './types/modules/selections';
import types from './types/modules/types';
import * as actions from './types/actions';
import * as getters from './types/getters'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuex);
Vue.use(BootstrapVue);

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        search,
        selections,
        types
    },
    strict: true
})
