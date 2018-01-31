/*
    utils js逻辑
    公共方法集
*/
var Utils = {
	//vue get 公共函数
    vueGet:function(vm,url,params,callback,name,sendPara,failCallback){
         vm.$http.get(window.domain+url,{
            params: params,
            before(request) {
				if(name){
					if (vm["previousRequest_"+name]) {
						vm["previousRequest_"+name].abort();
					}
					vm["previousRequest_"+name] = request;
				}
            }
        }).then(d=>{            
            callback(d.body,(sendPara)?sendPara:'');
        },d=>{
            if(failCallback){
                failCallback(d.body);
            }
        });
    },
	//vue post 公共函数
    vuePost:function(vm,url,params,callback,name,sendPara,failCallback){
        vm.$http.post(window.domain+url,params, {
            before(request) {
                if (vm["previousRequest_"+name]) {
                    vm["previousRequest_"+name].abort();
                }
                vm["previousRequest_"+name] = request;
            }
        }).then(d=>{            
            callback(d.body,(sendPara)?sendPara:'');
        },d=>{
            if(failCallback){
                failCallback(d.body);
            }
        });
    }
}
module.exports = window.Utils = Utils;
