<template>
	<header class="topBar" id="J_topBar">
		<div class="logo">
        <i class="icon-f-logo"></i>
        <div class="logo-title">Vue-admin</div>
    </div>    
    <v-user></v-user>
    <span class="line"></span>
    <a href="javascript:;"><i class="icon-f-logout"></i></a>
	</header>
</template>

<script>
import vUser from '@/components/_common/User.vue';
export default {
	name: 'Header',
	data() {
		return {

		}
	},
	components: {
    'v-user': vUser
	},
	watch: {
	},
	created() {
	},
	methods: {

	},
	mounted() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@charset "UTF-8";
@import "../assets/css/sass/_layout.scss";
.topBar {
  top:0;
  height: $header-height;
  width: 100%;
  min-width: 1024px;
  position: fixed;
  z-index: 5000;
  background-color: $header-background;
  color: $header-color;
  -webkit-box-shadow: $header-shadow;
  -moz-box-shadow: $header-shadow;
  box-shadow: $header-shadow;
  .logo{
    width: 183px;
    height: 60px;
    background: #4fc08d;
    box-shadow: 0 0 4px 0 #4B61D9;
    position: absolute;
    left: 0;
    top: 0;    
    i.icon-f-logo{
      position: absolute;
      left: 18px;
      top: 14px;
      width: 30px;
      height: 30px;
      color: #fff;
      font-size: 32px;
      &:before{
        color:#fff;
      }
    }
    .logo-title{
      width: 100px;
      font-size: 18px;
      color: #FFFFFF;
      margin: 18px 41px 20px 70px;
    }
  }
  .checkBtn{
    position: absolute;
    right:160px;
    top: 10px;
    width: 128px;
  }
  .line{
    position: absolute;
    width: 2px;
    height: 30px;
    background-color:#A2B3C0;
    right:46px;
    top: 14px;
  }
  i.icon-f-logout{
    position: absolute;
    right: 16px;
    top: 20px;
    &:before{
      color:#F2480B;
      font-size: 16px;
    }
  }
}

</style>
