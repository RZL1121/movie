<template>
    <div id='tabbar'>

         <Item v-for="nav in navs"
            :key="nav.id" :mark="nav.mark" :title="nav.title" :select="select"
             @click='change'
            >
               
            </Item>  
    </div>
</template>

<script>
import Item from "./item";
export default {
  
    data(){
       
        return{ 
            select:this.$route.name,
            navs:[
                {id:1,title:"首页",mark:"home"},
                {id:2,title:"音影",mark:"audio"},
                {id:3,title:"我的",mark:"mine"},
            ]
               
        }
    },


    methods:{
        change(){
            console.log(111)
        }
    },
         components:{
        Item
    }
}
</script>

<style scoped lang=scss>
   #tabbar{
       height:50px;
       width:100%;
       position: fixed;
       bottom:0;
       display:flex;
       justify-content: space-evenly;
 
       align-items:  center ;
       background:skyblue;
   }
</style>