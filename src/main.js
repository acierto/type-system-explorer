import Vue from 'vue'
import TypeList from './components/TypeList'
import store from './store'

new Vue({
    el: '#type-system',
    store,
    render: h => h(TypeList)
});
