<template>
  <section class="container" id="J_container">
    <!-- header view start -->
    <router-view name="header"></router-view>
    <!-- header end -->
    <section class="content" id="J_content">
      <!-- sidebar view start -->
      <router-view name="sidebar"></router-view>
      <!-- sidebar view end -->        
      <!-- default view start -->      
      <router-view></router-view>  
      <!-- default view end -->              
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'app',
  data() {
    return {}
  },
  computed: mapState({
    appLoading: state => state.user.appLoading,
    animationend: state => state.user.animationend
  }),
  methods: {
    afterEnter() {    
      this.$store.commit('setAnimationend',true);
    }
  },
  components: {
  },
  mounted() {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss">
@import './assets/css/sass/main.scss';

.slide-enter-active {
  animation: slide .2s;
}

// .slide-leave-active {
//   animation: slide .5s reverse;
// }
@keyframes slide {
  0% {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  50% {
    width: 50%;
    height: 50%;
    overflow: hidden;
  }
  75% {
    width: 75%;
    height: 75%;
    overflow: hidden;
  }
  99% {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  100% {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
}

.slide {
  -webkit-animation-name: slide;
  animation-name: slide;
}
.main{
  padding: 30px 15px;
  .title-wrap{
    .title{
      font-size: 40px;
      font-weight: bold;
    }
    .author{
      margin-left: 30px;
      font-size: 30px;
    }
  }
  .content-wrap{
    p{
      text-indent: 2em;
      font-size: 24px;
      .red{
        color: red;
      }
    }
    pre{
      background:#000;
      padding: 15px 30px;
      color: #FFF;
      font-size: 24px;
      font-family: Microsoft YaHei;
      margin: 0 40px
    }
  }
}
</style>
