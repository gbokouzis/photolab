<template>
    <h1>Show tag</h1>
    <Masonry :posts="posts"/>
</template>

<script>
import Masonry from '../../Components/Masonry.vue'

export default {
    components:{
        Masonry
    },
    props: {
        posts: Object
    }
}
</script>

<style>

</style>