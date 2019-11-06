<template>
     <div class="reader"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
     >
           
            <router-link
            :to="{name:'bookdetail',params:{id:ls._id}}"    
             class="box"
               v-for="ls in list"
               :key="ls.id"
               
            >
                 <div class="img"><img :src='ls.cover' alt=""></div>
                 <div class="say">
                     <span>《{{ls.title}}》</span>
                     <span>作者：{{ls.author}}</span>
                     <span>最新章节：{{ls.lastChapter}}</span>
                     <span>类型：{{ls.minorCate}}</span>
                 </div>
            </router-link>
     </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
 
    props:["title","zhuti"],

    watch:{
        title(val){        //监听传过来的属性 title的变化  男 女  val内容
           
             this.list = [];
             this.page = 1;
              this.findmusic();
             
        }
    },

   data(){
     
       return{
            page:1,
            limit:10,
            list:[],
            loading:false,
            hasMore:true
       }
   },
   methods:{
         findmusic(){
                    this.loading = true,
                    Indicator.open('加载中...');
                     this.$http.get("/api/precise/category",{
                   params:{
                      page:this.page,
                      gender:this.title,
                      major:this.zhuti
                     
                   }
               }).then(res=>{
                    this.list = this.list.concat(res.data.books)
                       this.loading = false
                       Indicator.close();
                         
                //   console.log(this.list)
                //   console.log(res)
                    if(this.page*this.limit >= res.total) {
                        this.hasMore = false;
                        return false
                    }
                     this.page++
                   })
               },

        loadMore() {
             if(!this.hasMore){
                 this.loading = true;
             }
            this.findmusic()

        }
   },
       
    created(){
       this.findmusic()
  
     
   },
  
  
}
</script>

<style lang="scss" scoped>
 .box{
     height:180px;
     width:100%;
     margin-top:1px;
     border-top:1px solid cadetblue;
   
     display:flex;
     .img{
         height:100%;
         width:150px;
         img{
             width:100%;
             height:100%;
         }
     
     }
     .say{
         width:230px;
         height:180px;
      
         display:flex;
        flex-direction: column;
        font-size:16px;
         justify-content:space-around;

     }
 }
</style>