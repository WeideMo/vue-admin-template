<template>
    <section class="contentMain" id="J_contentMain">
        <section class="main" id="J_main">
            <div class="title-wrap">
                <span class="title">Vue框架特性</span>
                <span class="author">讲师：{{ user.name}}</span>
            </div>
            <div class="content-wrap">
                <p>
                    <span class="red">组件化（component）开发</span>，代替模块化（model）开发
                </p>
                <p>
                    <span class="red">声明式（declarative style）渲染</span>，代替命令式（command style）渲染
                </p>
                <p>
                    <span class="red">单文件（single-file）开发，代替多文件(multi-file)开发</span>
                </p>
            </div>
        </section>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {};
  },
  computed: mapState({
    user: state => state.user.user
  }),
  components: {
      
  },
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>