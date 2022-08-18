<template>
    <Head title="Following" />

    <Link href="/posts/create" class="">
        New Post
    </Link>

    <div class="mx-auto px-4">
        <Masonry :posts="posts" />
	</div>

  
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