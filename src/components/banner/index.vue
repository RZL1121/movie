<template>
    <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class= "swiper-slide"
                 v-for="navs in nav"
                 :key="navs.id"
                > <img :src="navs.cover" alt=""></div>
            
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            nav:[],
            type:3
        }
    },
       methods:{
           banner(){
               this.$http.get("/api/precise/category",{
                   params:{
                       type:this.type
                   }
               }).then(res=>{
                  this.nav = res.data.books
                 
                  this.$nextTick(()=>{
                             var mySwiper = new Swiper ('.swiper-container', {
                           
                                loop: true, // 循环模式选项
                                                    
                                   spaceBetween: 30,
                                    centeredSlides: true,
                                    autoplay: {
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    },
                                    pagination: {
                                        el: '.swiper-pagination',
                                        clickable: true,
                                    }
                                                                                    
                                                
                            })        
                  })
               })
           }
       },
       created(){
           this.banner()
       }

}
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 100%;
    height: 300px;
    background:skyblue;
    img{
        width:100%;
        height:100%;
    }
} 
</style>