import Vue from 'vue'
import TypeList from './components/TypeList.vue'
import store from './store'
import 'font-awesome/css/font-awesome.css';

new Vue({
    el: '#app',
    store,
    render: h => h(TypeList)
});
