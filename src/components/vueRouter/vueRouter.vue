<template>
    <section class="contentMain" id="J_contentMain">
        <section class="main" id="J_main">
            <div class="title-wrap">
                <span class="title">Vue-router路由管理</span>
                <span class="author">讲师：{{ user.name}}</span>
            </div>
            <div class="content-wrap">
                <p>
                    <span class="red">结构划分</span>,通过对业务中的展示页面进行结构划分
                </p>
                <p>
                    <span class="red">视图划分</span>,通过上一阶段的结构划分，将页面划分成N个视图，每个视图都作为一个独立的视口进行渲染
                </p>
                <p>
                    <span class="red">路由划分</span>,即定义每个访问的URL对应跳转的视图，如果一个URL下有多个router-view，那么路由表中需要清晰定义每个路由需要展示的组件
                </p>
                <p>
                    <span class="red">定义组件</span>,根据路由定义的规则，将自定义的组件填充到每个需要展示的路由视图(router-view)中
                </p>
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
        
    },
    mounted () {

    }
}
</script>

<style lang="scss" scoped>
</style>