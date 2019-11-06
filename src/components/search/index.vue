<template>
<div class="boss">
     <div class="box">
         <div class="scarch">
             <input type="text" placeholder="请输入书名/作者" ref="input" ><i class="mintui mintui-search" @click="this.findbook"></i>
         </div>
       
     
    </div> 
    
        <ul  
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        
            <li v-for="res in result"
            :key="res._id">
            

             <div class="left">
                 <img :src="res.cover" alt="">
             </div >
             <div class="right">
                  <span>《{{res.title}}》</span>
                <span> 最新章节：{{res.lastChapter}}</span>
                <span>作者：{{res.author}}</span>
                <span>类型：{{res.majorCate}}</span>
                  <div class="rb">
                        <button>立即阅读</button>
                        <button @click="addInCars(res)">加入书架</button>
                  </div>
                  
             </div>
           </li>
        </ul>
    
    
</div>
</template>

<script>
import {mapActions} from "vuex"
import { Indicator } from 'mint-ui';
export default {
    watch:{
        value(val){
            console.log(222)
            this.result = [];
         
        }
    },
    data(){
        return{
                value:null,
                result:[],
                loading:false,
                hasMore:true,
                page:0,
                limit:8,
               

        }
    },
    methods:{
          ...mapActions(["addInCars"]) ,
          findbook(){
              this.loading = true
              Indicator.open('加载中...');
              this.value = this.$refs.input.value
      
            //http://120.78.3.11:3000/precise/bookname?key=%22%E8%BF%99%22

            this.$http.get("/api/precise/bookname",{
                params:{
                      page:this.page,
                    limit:this.limit,
                    key:this.value
                }
            }).then(res=>{
                
                if(this.page === 0){
                      console.log(111);
                        Indicator.close();
                    
                }else{
                   
                        this.result =this.result.concat( res.data.books)
                        this.loading = false;
                        Indicator.close();
                   
                        if(this.page*this.limit >= res.total){
                            this.hasMore = false
                            return false
                        }
                    
                        
                }
              this.page++
                
            })
      
           
          },
          loadMore() {
             if(!this.hasMore){
                 this.loading = true;
                 return false
             }
            this.findbook()

        }
    }
  
}
</script>
<style scoped lang="scss">
.boss{
      overflow: hidden;
        .box{
        width:100%;
        height:30px;
        background:#999;
        display:flex;
        position:fixed;
    
    
        padding-left:36px;
        .scarch{
            background:#fff;
            width:300px;
        }
        input{
            border:none;
            width:270px;
            height:30px;
        }
        i{
            height:30px;
            width:30px;
        }
    }
    ul{
        margin-top:30px;
        li{ 
            display:flex;
            width:100%;
            height: 150px;
            margin-bottom:2px;
            .left{
                width:200px;
                height:100%;
                float:left;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .right{
                width:100%;
                height:100%;
                
                float:right;
                display:flex;
                flex-direction: column;
                justify-content: space-evenly;
              
            }
        }
    }
}

</style>