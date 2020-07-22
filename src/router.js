import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './page/login';
import Index from './page/index';
import Page from './page/Page';

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/index',component: Index},
        {path:'/login',component: Login },
        {path:'/page',component: Page },
    ]
})