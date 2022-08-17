<template>
    <Head title="Following" />

    <Link href="/posts/create" class="">
        New Post
    </Link>

    <Masonry :posts="posts"/>

  
</template>

<script>
import Masonry from '../../Components/Masonry.vue'

export default {
    components: { 
        Masonry
    },
    props: {
        posts: Object
    },

}
</script>

<style>

</style>