<template>
    <div id='audio'>
       <Search></Search>
        <Tarbarr></Tarbarr>
        <router-view></router-view>
    </div>
</template>

<script>
import Tarbarr from "@/components/tarbarr";
import Search from "@/components/search";
export default {

    components:{
       Search, Tarbarr
    }
}
</script>

<style scoped lang="scss">
// .mint-searchbar-inner{}
</style>