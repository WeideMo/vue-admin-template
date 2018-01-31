<template>
    <div class="user">
        <template v-if="$route.meta.module==='admin'">
            <i class="icon-f-adminUser"></i>
        </template>
        <template v-else>
            <i class="icon-f-user"></i>
        </template>
        <span class="name" :title="user.name">{{user.name}}</span>       
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'v-user',
    props: [],
    data() {
        return {}
    },
    computed:mapState({
        user : state => state.user.user
    }),
    methods: {
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user{
    top: 16px;
    position: absolute;
    right: 60px;
    &>i{        
        cursor: pointer;   
        display: inline-block;
        vertical-align: middle;    
        &:before{
            font-size: 26px;
            color: #008080;
        }
        
    }
    .name{
        max-width: 60px;
        font-size: 14px;
        color: #4C5764;  
        display: inline-block;
        vertical-align: middle;    
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;  
        .isAdmin{
            cursor: pointer;
        }
    }
    .tooltip{
            width: 150px;
            display: none;
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
            border-radius: 8px;
            font-size: 18px;
            color: #000;
            padding: 16px 18px;
            position: absolute;
            top: 26px;
            right: -40px;        
        }
       &:hover{
        .tooltip{
            display: block;
            &:hover{
                background: #ECF0FF;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
    
}

</style>
