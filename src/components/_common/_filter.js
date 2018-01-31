import Vue from 'vue';
/**
 * @百分比过滤器
 * @param {float} value - 传入格式化数据.
 * @param {int} t - 是否保留2位小数.
 * 
 */
Vue.filter('formatRate', function (value,t) {
    if(value==='-'){
        return value;
    }
    if (!value && value!==0) return ''  ;   
    if(t===-1) {
        return parseFloat(Math.abs(value*100)) + "%";
    }    
    return parseFloat(Math.abs(value*100).toFixed(2)) + "%";
});

export default {
    formatRate: Vue.filter('formatRate')
}

