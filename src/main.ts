import Vue from 'vue'
import TypeList from './components/TypeList.vue'
import store from './store'

new Vue({
    el: '#app',
    store,
    render: h => h(TypeList)
});
