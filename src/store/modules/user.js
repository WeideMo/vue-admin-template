import * as types from '../mutation-types'

//左侧菜单
const sider = [
  {
    name: "vue框架对比",
    href: "/compare",
    active: false,
    icon: "icon-f-index"
  },
  {
    name: "Vue框架特性",
    href: "/feture",
    active: false,
    icon: "icon-f-index"
  },
  {
    name: "Vue-router路由",
    href: "/vueRouter",
    active: false,
    icon: "icon-f-index"
  },
  {
    name: "Vuex状态管理",
    href: "/vuex",
    active: false,
    icon: "icon-f-index"
  },
  {
    name: "Vue权限拦截",
    href: "/vueVerify",
    active: false,
    icon: "icon-f-index"
  }
]

const state = {
  sider,
  user: {
    name:"莫莫童鞋"
  }
}


// getters
const getters = {
    animationend: state => state.animationend,
    appLoading: state => state.appLoading
}

// actions
const actions = {
  
}

// mutations
const mutations = {
  //重置动画状态为false
  setAnimationend (state, type){
    state.animationend = type;
  },  
  setUserName (state, name){
    state.user.name = name;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
