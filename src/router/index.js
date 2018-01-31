// 引入依赖包和依赖组件
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

//  @被解析为src路径下，在webpack.base.conf.js定义
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import compare from '@/components/compare/compare'
const Error404 = resolve => require(['@/components/error/404'], resolve);

// 通过下面的方式定义一个异步插件，及打包的时候不会加载到总的依赖包中，后续通过异步js的方式获取
const feture = resolve => require(['@/components/feture/feture'], resolve);
const vueRouter = resolve => require(['@/components/vueRouter/vueRouter'], resolve);
const vuex = resolve => require(['@/components/vuex/vuex'], resolve);
const vueVerify = resolve => require(['@/components/vueVerify/vueVerify'], resolve);

// 引用vue-router
Vue.use(Router)

//  定义路由实例
const router = new Router({
  // 定义history方式，可以让单页面拥有后退和前进的浏览器能力
  mode: 'history',
  // 定义路由规则，具体如下
  routes: [
    // 默认路由：/
    {
      path: '/',
      redirect: '/compare',
      components: {
        default: "",
        sidebar: Sidebar,
        header: Header
      }
    },
    //未授权
    {
      path: '/error/404',
      name: 'error404',
      components: {
        default: Error404,
        sidebar: "",
        header: ""
      },
      meta: {
        module: 'error'
      }
    },
    //Vue框架对比
    {
      path: '/compare',
      name: 'compare',
      components: {
        default: compare,
        sidebar: Sidebar,
        header: Header
      },
      meta: {
        module: 'compare'
      }
    },
    //Vue框架特性
    {
      path: '/feture',
      name: 'feture',
      components: {
        default: feture,
        sidebar: Sidebar,
        header: Header
      },
      meta: {
        module: 'feture'
      }
    },
    //Vue-router路由
    {
      path: '/vueRouter',
      name: 'vueRouter',
      components: {
        default: vueRouter,
        sidebar: Sidebar,
        header: Header
      },
      meta: {
        module: 'vueRouter'
      }
    },
    //Vuex状态管理
    {
      path: '/vuex',
      name: 'vuex',
      components: {
        default: vuex,
        sidebar: Sidebar,
        header: Header
      },
      meta: {
        module: 'vuex'
      }
    },
    //Vuex权限拦截
    {
      path: '/vueVerify',
      name: 'vueVerify',
      components: {
        default: vueVerify,
        sidebar: Sidebar,
        header: Header
      },
      meta: {
        module: 'vueVerify'
      }
    },
  ]
})

//这里是处理权限，即所有路由跳转之前都必须先经过这个hook钩子
//切换路由前
router.beforeEach((to, from, next) => {
  //  ###########解除下面注释后后，校验失败会跳到404页#############
  // if(to.path !=='/error/404')  {
  //   Vue.http.get('common/routeVerify', {
  //     params: {
  //       path: to.path
  //     },
  //     before(request) {
  //       if (Vue["proviousRequest_routeVerify"]) {
  //         Vue["proviousRequest_routeVerify"].abort();
  //       }
  //       Vue["proviousRequest_routeVerify"] = request;
  //     }
  //   }).then(d => {
  //     alert("校验成功");
  //   }, () => {
      
  //     next('/error/404');
  //   })
  // }
  next();
})
// 导出路由实例
export default router;
