<template>
    <el-col :offset="9" :span="6" class="login-form-body">
        <el-header><span class="login-fom-title">登录</span></el-header>
        <el-row class="input-row">
            <el-col :span="16" :offset="4"><el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input></el-col>
        </el-row>
        <el-row class="input-row">
            <el-col :span="16" :offset="4"><el-input v-model="password" placeholder="请输入密码" show-password prefix-icon="el-icon-lock"></el-input></el-col>
        </el-row>
        <el-row class="input-row">
            <el-col :span="9" :offset="4">
                <el-input v-model="captcha" placeholder="验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-image :src="genCaptchaUrl" @click="genCaptcha" id="genCaptcha1"></el-image>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="4">
                <el-checkbox class="remember-me">记住账号</el-checkbox>
            </el-col>
        </el-row>
        <el-row class="input-row">
            <el-col :span="16" :offset="4" >
                <el-button class="submit-btn" @click="submit" v-on:keyup.enter="submit">立即提交</el-button>
            </el-col>
        </el-row>
    </el-col>
</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return{
                username:'',
                password:'',
                captcha:'',
                genCaptchaUrl:'http://47.105.172.81:8084/genCaptcha?t='+Math.random()
            }
        },
        methods:{
            genCaptcha:function(){
                this.genCaptchaUrl=this.genCaptchaUrl+Math.random();
            },
            submit:function(){
                alert("提交表单")
            },
        }
    }
</script>

<style scoped>
    .login-fom-title{
        font-size: 1.5rem;
    }
    .login-form-body{
        /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
    }
    .input-row{
        margin-top: 0.4rem;
        text-align: right;
        vertical-align: center;
        line-height: 2.5rem;
    }
    .remember-me{
        color: grey;
    }
    .submit-btn{
        width: 100%;
    }
</style>