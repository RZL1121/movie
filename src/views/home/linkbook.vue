<template>
    <div>
        <Hander>{{bookdetail}}</Hander>
     {{book}}
    </div>
</template>

<script>
import Hander from "../../components/hander";
export default {
    data(){
        return{
            id:this.$route.params.id,
            book:[]
        }
    },
    methods:{
        bookdetail(){
            this.$http.get("/api/precise/details",{
                params:{
                    link:this.id
                }
            }).then(res=>{
               this.book = res.data.chapter.body
              
            })
        }
    },
    created(){
       this.bookdetail()
           
    },
    components:{
        Hander
    }

   
}

</script>

<style scoped >

</style>