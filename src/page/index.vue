<template>
    <el-container>
        <el-header class="header" style="vertical-align: center;line-height: 60px;padding: 0;border-bottom: 1px solid rgba(0, 0, 0, .04)">
            <el-row>
                <el-col :span="3" style="width: 200px">
                    <span style="width: 200px">管理员</span>
                </el-col>
                <el-col :span="1" style="text-align: left">
                    <i class="el-icon-menu" @click="menuVisibleSwitch"></i>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside style="width: auto">
                <el-menu
                        :unique-opened=true
                        class="el-menu-vertical-demo"
                        :collapse="menuVisible"
                        default-active="1"
                        :open="handleOpen"
                        :close="handleClose"
                        align="left">
                    <el-submenu :index="item.title" v-for="item in $store.state.menuList" :key="item.title">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span><router-link :to="item.url">{{item.title}}</router-link></span>
                        </template>
                        <el-menu-item v-for="secondItem in item.secondMenuList" :key="secondItem.title">
                            <template slot="title"><router-link :to="secondItem.url">{{secondItem.title}}</router-link></template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container class="body">
                <router-view></router-view>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                menuVisible: this.$store.state.menuVisible,
            }
        },
        methods:{
            handleOpen(key) {
                console.log(key);
            },
            handleClose(key) {
                console.log(key);
            },
            menuVisibleSwitch(){
                // alert(this.$store.state.menuVisible);
                this.$store.commit("changeMenuVisible");
                this.menuVisible=this.$store.state.menuVisible;
            },
        }
    }
</script>

<style scoped>
    /*.slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(-200px);
        opacity: 0;
    }*/
    .body {
        margin-left: 10px;
      }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 400px;
    }
</style>