<template>
    <section class="contentMain" id="J_contentMain">
        <section class="main" id="J_main">
            <div class="title-wrap">
                <span class="title">Vue 权限拦截</span>
                <span class="author">讲师：{{ user.name}}</span>
            </div>
            <div class="content-wrap">
                <p>
                    <span class="red">全局路由守护</span>
                </p>
                <pre>
                const router = new VueRouter({ ... })
                    router.beforeEach((to, from, next) => {
                    // ...do some verify
                })
                </pre>
                <p>
                    <span class="red">基于HTTP的拦截守护</span>
                </p>
                <pre>
                Vue.http.interceptors.push((request, next) => { 
                    request.method = 'POST';
                    　next((response) => {
                                response.body = '...';  
                        　　return response;  
                        });  
                });
                </pre>
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