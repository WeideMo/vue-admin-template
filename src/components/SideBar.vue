<template>
	<!--sidebar left start-->
	<aside class="siderBar" id="J_siderBar">
		<ul>
			<li v-for="(item,index) in sider" :key="index">
				<template v-if="item.menu">
					<div class="siderMenu" :class="{'actived':filter(item.menu)}" @click="slided(index)">
						<i :class="item.icon"></i>
						<span>{{item.name}}</span>
						<i :class="[{'icon-f-up':item.slide,'icon-f-down':!item.slide}]"></i>
					</div>
					<ul class="siderSubList" :style="{display:(item.slide?'block':'none')}">
						<li v-for="(itm,idx) in item.menu" :class="['siderSubMenu',{'active':$route.meta.module === itm.href}]" :key="idx">
							<router-link v-cloak :to="itm.href">{{itm.name}}</router-link>
						</li>
					</ul>
				</template>
				<template v-else>
					<router-link v-cloak :to="item.href">
						<div class="siderMenu" :class="{'active':('/'+$route.meta.module) === item.href}">
							<i :class="item.icon"></i>
							<span>{{item.name}}</span>
						</div>
					</router-link>
				</template>
			</li>
		</ul>
	</aside>
	<!--sidebar left end-->
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'v-sider',
	computed: {
	
	},
	data() {
		return {

		}
	},
	computed: mapState({
            sider : state => state.user.sider
    }),
	methods: {
		slided(index){
			this.sider[index].slide = !this.sider[index].slide;
        },
        filter(menu) {
            let _this = this;
            let flag = false;
                flag = menu.some((value)=>{
                    if(value.href === ('/'+_this.$route.meta.module)){
                        return true;
                    }
                })
            return flag;
        }
	},
	created() {
	},
	components: {
		// 'v-curPro': CurPro
	},
	watch: {
	},
	mounted() {
		// alert(this.$route.name);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@charset "UTF-8";
@import "../assets/css/sass/_layout.scss";
/* sidebar start */
.siderBar {
    position: fixed;
    z-index: 4000;
    top: $header-height;
    overflow: hidden;
    width: $sidebar-width;
    height: $sidebar-height;
    // background-color: $sidebar-background;
    background-color: #4fc08d;
    -webkit-box-shadow: $sidebar-shadow;
    -moz-box-shadow: $sidebar-shadow;
    box-shadow: $sidebar-shadow;
    /* siderMenu start */
    .siderList {
        position: relative;
        width:100%;
        &>li {
            min-height: 60px;
            width: 100%;
        }
        &.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{
            right: 0;
        }
        &.ps > .ps__scrollbar-y-rail{
            opacity: 0;
        }
        &:hover{
            &.ps > .ps__scrollbar-y-rail{
                opacity: 0.6;
            }
        }
    }
    .siderMenu {
        position: relative;
        display: block;
        height: $sidebar-item-height;
        line-height: $sidebar-item-height;
        margin-top: $sidebar-item-margin;
        padding-left: 36px;
        font-size: $sidebar-title-fontSize;
        // color: $sidebar-title-color;
        color: #FFF;
        cursor: pointer;
        border-left: 6px solid transparent;
        &>i{
            position: absolute;
            top: 18px;
            &.circle{
                height:16px;
                width:16px;
                -webkit-border-radius:50%;
                -o-border-radius:50%;
                -ms-border-radius:50%;
                border-radius:50%;
                background: #A2B3C0;
            }
            &.icon-f-down,&.icon-f-up{
                right: 10px;
                &:before{
                    color: #D8DBE2;
                }
            }
            &:first-child {
                top: 18px;
                left: 12px;
                &:before{
                    font-size: 16px;
                    color: $sidebar-title-color;
                }
            }
        }
        &.active,
        &.slide {
            // border-left:6px solid #839DFF;
            background: #008080;
            font-weight: bold;
            color: #fff;
            &>i{
                &.circle{
                    background: #fff;
                }
                &:first-child {
                    &:before{
                        color: #fff;
                    }
                }
            }
        }
        &.actived {
            background: $sidebar-active-background;
            font-weight: bold;
            color: $sidebar-active-color;
            &>i{
                &:first-child {
                    &:before{
                        color: $sidebar-active-color;
                    }
                }
            }
        }
        &:hover {
            background: #008080;
            font-weight: bold;
        }
    }
    /* siderMenu end */
    /* siderSubList start */
    .siderSubList {
        display: none;
        .siderSubMenu {
            display: block;
            height: 48px;
            font-size: $sidebar-subTitle-fontSize;
            color: #fff;
            background: $sidebar-background;
            padding: 0;
            text-align: left;
            a {
                display: block;
                width: 100%;
                height: 42px;
                padding-left: 42px;
                text-align: left;
                line-height: 42px;
                border-left: 6px solid transparent;
            }
            &.active{
                a {
                    border-left:6px solid #839DFF;
                    color:#96ACFF;
                    font-weight: bold;
                    background-color: $sidebar-active-background;
                }
            }
            &:hover {
                a {
                    font-weight: bold;
                    background-color: $sidebar-active-background;
                }
            }
        }
    }
    /* siderSubList end */
}

</style>
