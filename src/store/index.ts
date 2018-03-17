import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueLocale from 'vue-ts-locale';
import search from './types/modules/search/search';
import selections from './types/modules/selections/selections';
import types from './types/modules/types/types';
import * as actions from './types/actions';
import {localeMessages} from '../lang/type-system-explorer-lang';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.use(VueLocale,
    {
        language: 'en',
        currency: 'EUR',
        messages: localeMessages
    });

export default new Vuex.Store({
    actions,
    modules: {
        search,
        selections,
        types
    },
    strict: true
});
