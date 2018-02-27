import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'font-awesome/css/font-awesome.css';

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
