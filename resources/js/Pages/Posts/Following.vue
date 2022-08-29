<template>
    <Head title="Following" />

    <!-- <Link href="/posts/create" class="">
        New Post
    </Link> -->

    <div v-if="posts.data != 0" class="mx-auto px-4">
        <Masonry :posts="posts" />
	</div>
    <div v-else 
        class="pt-20 flex flex-col justify-center items-center text-gray-700"
    >
        <h1 class="text-3xl font-bold">
            No photos to display
        </h1>
        <p class="mt-4">
            Follow some photographers or the photographers you follow have no photos.
        </p>   
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