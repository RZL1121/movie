<template>
    <div>
            <mt-header  fixed>
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                  
                </router-link>
             
            </mt-header>
                
             <div class="bookdetail">
                  <div class='img'><img :src="book.cover" alt=""></div>
                  <div class="reda">
                       <span>《{{book.title}}》</span>
                       <span>作者：{{book.author}}</span>
                       <span>最近更新：{{book.lastChapter}}</span>
                       <span>类型：{{book.minorCate}}</span>
                       <span>字数：{{book.wordCount}}</span>

                  </div>
                  <div>
                      <p>简介：</p>
                      <span>{{book.longIntro}}</span>
                  </div>
             </div>

              <ul class="lisbox"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
              
                  <li 
                  v-for="ls in list"
                  :key="ls.id"
                  
                  ><router-link :to="{name:'linkbook',params:{id:ls.link}}">{{ls.title}}</router-link ></li>
              </ul>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui';
export default {

 
    

    data(){
        return{
            page:0,
            limit:10,
            hasMore:true,
            loading:false,
            list:[],
            id:this.$route.params.id,
            book:[]
           

        }
    },
    methods:{          //http://120.78.3.11:3000/precise/info
         getbook(){   
            this.$http.get('/api/precise/info',{
                params:{
                    id:this.id
                }
            }
           
            ).then(res=>{
                this.book = res.data
                
                
            })
         },

        readbook(){
            this.loading = true;
                    Indicator.open('你瞅啥...');
            this.$http.get('/api/precise/chapters',{
                params:{
                    page:this.page,
                    limit:this.limit,
                    id:this.id
                }
            }).then(res=>{
                 this.list = this.list.concat(res.data)
                this.loading = false;
                   Indicator.close();
                console.log(this.list)
                if(this.page*this.limit >= this.total){
                    this.hasMore = false
                    return false
                }
                this.page++
            })
        },
        loadMore() {
            if(!this.hasMore){
                this.loading = true;
                return false
            }

             this.readbook()
        }
    },

     created(){
        this.getbook()
  
     }
}
</script>
<style scoped lang="scss">

   .lisbox{
       li{
            height:50px;
            border-bottom:1px solid grey;
           span{  
              display:block;
               width:100%;
               height:100%;
               line-height:50px;
               
               font-size:18px;
         
              
           }
       }
   }
   .bookdetail{
       width:100%;
       height:400px;
      margin-top:41px;
       overflow: hidden;
       .img{
           width:45%;
           height:250px;
           float: left;
           margin-top:20px;
           img{
               width:100%;
               height:100%;
           }
       }

       .reda{
           margin-top:20px;
         
        width:54%;
        height:250px;
        float:right;
      
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
       }
   }
</style>