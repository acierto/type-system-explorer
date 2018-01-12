import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView'
import CounterView from '../views/CounterView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: HomeView
    }]
})
