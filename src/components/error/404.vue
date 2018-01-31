<template>
        <div class="error-container" id="J_container">
            <header class="topBar">
                <div class="topHeader" type="show">
                    
                </div>
            </header>
            <div class="error-main">
                <div class="sky"></div>
                <div class="sea">
                    <div class="error-content error-404">
                        <div class="code-404"><div class="find"></div></div>
                        <div class="error-text">很抱歉，您所访问的页面不存在...</div>
                        <div class="btn-wrap">
                            <div class="btn-error-reback"
                                    @click="goBack">返回</div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'v-login',
    props: [],      
    computed: mapState({
            loginAddress : state => state.user.loginAddress
    }),
    data() {
       return {
           textStatus: true
       }
    },
    methods: {
		backToMain(){
			window.location.href=window.domain+"login";
			
		},
		goBack(){
			document.referrer === '' ?
			this.backToMain() :
			window.history.go(-1);
		}
    },
    watch:{
        
    },
    mounted() {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@charset "UTF-8";
.error-container {
	min-width: 1024px;
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	.topBar {
		.topHeader {
			background-color: #fff;
			box-shadow: none;
			height: 64px;			
			.title {
				cursor:pointer;
				top: 18px;
				left:178px;
				font-size: 20px;
				color: #00469b;
				position: absolute;
			}
		}
		.helpCenter {
			height: 100%;
			line-height: 64px;
			float: right;
			cursor: pointer;
			margin-right: 59px;
			em {
				background-repeat: no-repeat;
				display: inline-block;
				-webkit-transform: scale(.5);
				-moz-transform: scale(.5);
				-ms-transform: scale(.5);
				-o-transform: scale(.5);
				transform: scale(.5);
				margin-bottom: -12px;
				margin-right: -10px;
				cursor: pointer;
				&.helpIcon {
					width: 36px;
					height: 36px;
				}
			}
		}
	}
	.error-main {
		height: 100%;
		width: 100%;
		overflow: hidden;		
		.sea {
			height: 60%;
			background: -webkit-linear-gradient(#69acff, #3872ff);
			background: -o-linear-gradient(#69acff, #3872ff);
			background: -moz-linear-gradient(#69acff, #3872ff);
			background: linear-gradient(#69acff, #3872ff);
			position: relative;
			background-color:#3872ff;
		}
		.error-content {
			position: absolute;
			left: 0;
			text-align: center;
			height: 100%;
			width: 100%;
			&.error-404 {
				top: -158px;
			}
			&.error-netError {
				top: -158px;
			}
			&.error-500 {
				top: -243px;
			}
			&.error-unauthor {
				top: -218px;
			}
			&.error-unknow {
				top: -218px;
			}
			.code-404 {
				background: url(../../assets/img/common/404-code.png) no-repeat;
				background-size: cover;
				background-position: 50% 0;
				width: 268px;
				height: 245px;
				margin: 0 auto;
				position: relative;
				.find {
					background: url(../../assets/img/common/404-find.png) no-repeat;
					background-size: cover;
					background-position: 50% 0;
					width: 170px;
					height: 170px;
					position: absolute;
					top: -52px;
					right: -48px;
				}
			}			
			.error-text {
				font-size: 36px;
				color: #ffffff;
				margin: 24px 0 62px;
			}
			.btn-wrap {
				box-sizing: border-box;
				text-align: center;
				.btn-error-reback {
					display: inline-block;
					margin: 0 auto;
					cursor: pointer;
					width: 110px;
					height: 32px;
					text-align: center;
					border: none;
					box-shadow: none;
					font-size: 20px;
					color: #ffffff;
					background-color: #ffa615;
					border-radius: 4px;
					padding:1px;
					&:hover,
					&:focus,
					&:active,
					&:visited {
						background-color: #f79d0a;
						border: none;
						box-shadow: none;
						outline: none;
					}
				}
			}
		}
		.error-footer {
			font-size: 12px;
			color: #ffffff;
			position: absolute;
			bottom: 55px;
			left: 0;
			text-align: center;
			width: 100%;
			height: 62px;
		}
	}
}
</style>
