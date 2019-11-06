<template>
    <div id='mine'>
        <Header></Header>
          <div 
          class="lk"
            v-for="bk in cars"
            :key="bk._id"
          >
                <div class="img">
                      {{bk.cover}}
                    <!-- <img src="http://img2.boting.co/Uploadfiles/Book/2016/2/2/201602027145_240.jpg" alt=""> -->
                </div>
              
          </div>
    </div>
</template>
 
<script>
import Header from "@/components/hander";

import {mapState,mapActions} from "vuex"
export default {
    computed:{
        ...mapState({
            cars:state=>state.booklist.book
        })
               
    },
    components:{
        Header
    },
    methods:{
        ...mapActions(["seebooklist"])
    },
    created(){
        console.log(this.cars)
    }
  
}
</script>

<style scoped lang="scss">
 .lk{
     width:100%;
     height:200px;

     margin-top:30px;
   
     background:pink;
     .img{
         width:150px;
         height:100%;
         img{
             width:100%;
             height:100%;
         }
     }
     

 }
</style>