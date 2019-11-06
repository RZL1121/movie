<template>
    <div id='home'>
    
        <Banner></Banner>
             
             <div class="sexbox">
                 <span to=""
                  v-for="lis in list"
                  :key="lis.id"
                  :title="lis.chan"
                  @click="title=lis.chan,zhuti=lis.zhuti"
                 :class="{active:lis.chan=== title}"
                
                 > {{lis.sex}}</span>
             </div> 
             <div>
                 <Reader :title="title" :zhuti="zhuti"></Reader>
             </div>
          <!-- <button @click="findmusic">找音乐</button> -->
          
            
             <Tarbarr></Tarbarr>
    </div>
</template>

<script>

import Tarbarr from "@/components/tarbarr";
import Banner from "@/components/banner";
import Reader from "./reader"
export default {
 
    data(){
        return{
            title:"male",
            zhuti:"玄幻",
            list:[
                {id:1,sex:"男生",chan:"male",zhuti:"玄幻"},
                {id:2,sex:"女生",chan:"female",zhuti:"同人"}
            ],
           kw:'female'
         
        }
    },
    // methods:{
    //             //120.78.3.11:3000/precise/category
    //            findmusic(){
    //                  this.$http.get('api/precise/category',{
    //                    params:{
    //                        gender:this.kw
                          
    //                    }
    //                }).then(res=>{
                       
    //                    console.log(11)
    //                })
    //            }
    // },
    components:{
        Tarbarr,Banner,Reader
    }
}
</script>

<style scoped lang='scss'>
.sexbox{
    width:100%;
    height:60px;
    display:flex;
    background:skyblue;
    justify-content: space-evenly;
    align-items: center;
    
    font-size:18px;
    
}
.active{
    color:#FFF;
}
.reader{
    margin-bottom: 50px;
}
  
</style>