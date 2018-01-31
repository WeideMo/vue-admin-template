<template>
    <section class="contentMain" id="J_contentMain">
        <section class="main" id="J_main">
            <div class="title-wrap">
                <span class="title">Vue框架对比</span>
                <span class="author">讲师：{{ user.name}}</span>
            </div>
            <div class="content-wrap">
                <p><span class="red">Angular</span>，是三巨头中真正称的上是框架的一款，其自身拥有最系统化的组件集成，但版本从1.x，2再到4甚至5，版本更新迭代过快，意味着升级框架会伴随着更高的成本。
            </p>
                <p><span class="red">Vue</span>，是主要负责的是视图层的框架，三巨头中目前渲染机制和效能最高的，伴随着社区发展，vue技术的配套更加成熟，路由和状态管理上的使用更得心应手。</p>
                <p><span class="red">React</span>，也是视图层渲染的框架，但由于Facebook的光环，社区异常繁盛，在组件配搭上能开发者有更多的选择，但这同时意味着新接触的玩家会背负这更高的学习成本和开发时间。
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