import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(vuex)
export default new vuex.Store({
    plugins:[createPersistedState({
        storage: window.sessionStorage
    })],
    state:{
        // 菜单栏展示状态
        menuVisible: true,
        menuList:[
            {
                title:"一级菜单1",
                url:"/",
                icon:"el-icon-menu",
                secondMenuList:[
                    {title:"二级菜单1",url:"/",icon:"el-icon-menu"},
                ]
            },
            {
                title:"一级菜单2",
                url:"/",
                icon:"el-icon-menu",
                secondMenuList:[
                    {title:"二级菜单3",url:"/login",icon:"el-icon-menu"},
                    {title:"二级菜单4",url:"/page",icon:"el-icon-menu"},
                ]
            },
        ],
    },
    mutations:{
        changeMenuVisible(state){
            state.menuVisible=!state.menuVisible;
        }
    },
    actions:{
        changeMenuVisible(context){
            context.commit('changeMenuVisible');
        }
    }
})