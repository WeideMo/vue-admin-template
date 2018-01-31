// 这里是index.html导入的主入口js
// 通过import [变量名] from [相对路径或node_modules包名]引入
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import VueRes from 'vue-resource'
import VueResource from 'vue-resource'
import filters from "@/components/_common/_filter";
Vue.use(filters);
//开发环境中的提示开关，下面是生产环境中报错关闭
Vue.config.productionTip = false;
Vue.use(VueResource);
// 初始化Vue实例，这里和我们以前不同，单页面只有这个实例入口（唯一的）
new Vue({
  el: '#J_container',
  // store为store:store的缩写，是引入的状态管理模块，对应在/src/store/index.js中
  store,
  // router为router:router的缩写，是引入的路由管理模块，对应在router/index.js中
  router,
  // 模板使用APP组件，即上述引入的App from './App.vue'
  template: '<App/>',
  //组件依赖，就是上述的App变量
  components: {
    App
  }
})
