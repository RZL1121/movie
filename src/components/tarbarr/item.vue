<template>
     <div id='item' @click="change" :class="{active:flag}">
       
             {{title}}
      
      

     </div>

  
</template>

<script>
export default {
    props:["mark","title","select"],
   
    computed:{
         flag(){
                if(this.mark == this.select){
                        return true
                     
                 }else{ 
                      return false
                 }
               
         }
    },

    methods:{
        change(){
            
         this.$router.push("/"+this.mark)
           console.log(this.mark)
               console.log(this.select)
        }
    }
}
</script>

<style scoped lang="scss">
   .active{
       color:red;
   }
</style>