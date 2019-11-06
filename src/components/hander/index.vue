<template>
    <div id="header">
            <mt-header>
                <router-link to="/" slot="left">
                    <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"> </mt-button>
            </mt-header>

    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>