<template>
    <section class="contentMain" id="J_contentMain">
        <section class="main" id="J_main">
            <div class="title-wrap">
                <span class="title">Vuex状态集中管理</span>
                <span class="author">讲师：{{ user.name}}</span>
            </div>
            <div class="content-wrap">
                <p>
                    <span class="red">读取状态：</span>state,getter(compued)
                </p>
                <p>
                    <span class="red">写入状态：</span>action(async)，mutation 
                </p>
                <p><span class="red">分模块：</span>根据业务类型划分状态类型</p>
                <!-- demo start -->
                <div class="searchInput-wrap">
                    <input type="text" spellcheck="false" v-model="userName" @keyup.enter="setUserName(userName)"> 
                    <i class="icon-f-search"></i>
                </div>
                <!-- demo end -->
            </div>
        </section>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'index',
    data() {       
        return { 
           userName:"输入任意名称，enter后可以更改用户名！！！" 
        }
    }, 
    computed: mapState({
        user: state => state.user.user
    }),   
    components: {       
    },
    watch: {
       
    },
    methods: {
        setUserName (name) {
            this.$store.commit('setUserName',name)
        }
    },
    mounted () {

    }
}
</script>

<style lang="scss" scoped>
.searchInput-wrap{
    -webkit-border-radius: 100px;
    -ms-border-radius: 100px;
    -o-border-radius: 100px;
    border-radius: 100px;
    padding: 0 16px 0 35px;
    height:30px;
    line-height: 30px;
    width:290px;
    font-size: 14px;
    color: #4B61D9;
    text-align:left;
    position: relative;
    margin-bottom: 8px;
    margin-left: 60px;
    border: 1px solid transparent;
    input {
        width: 100%;
        height: 100%;
        border: 1px solid #4C5764;
        border-radius: 100px;
        padding:2px 30px 0 45px;
        background-color: transparent;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        color: #4C5764;
        font-size: 12px;
        &::-ms-clear{
            display:none;
        }
        &:focus{
            border-color: #839DFF;
            &+i.icon-f-search{
                &:before {
                    color: #6B7C83;
                }
                &:hover{
                    &:before {
                        color: #839DFF;
                    }
                }
            }
        }
    }
    i.icon-f-search {
        position: absolute;
        left: 12px;
        top: 7px;
        z-index: 1;
        cursor: pointer;
        &:before {
            color: #6B7C83;
            font-size: 18px;
        }
        &:hover{
            &:before {
                color: #839DFF;
            }
        }
    }
    i.icon-f-clear{
        position: absolute;
        right: 11px;
        top: 8px;
        cursor: pointer;
        z-index: 1;
        &:before{
            color: #8898A5;
        }
        &:hover{
            &:before{
                color: #839DFF;
            }
        }

    }
    label.placeholder {
        position: absolute;
        top: 0px;
        padding-left:15px;
        width: 100%;
        height: 100%;
        line-height: 30px;
        color: #A2B3C0;
    }
    &:active{
        border: 1px solid #4B61D9;
        -webkit-box-shadow: 0 0 4px 0 #4B61D9;
        -o-box-shadow: 0 0 4px 0 #4B61D9;
        -ms-box-shadow: 0 0 4px 0 #4B61D9;
        box-shadow: 0 0 4px 0 #4B61D9;
        .icon-f-search{
            &:before{
                color:#4B61D9;
            }
        }
    }
}
</style>