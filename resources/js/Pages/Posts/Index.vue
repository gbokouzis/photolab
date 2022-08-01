<template>
    <Head title="Index" />

    <Link href="/posts/create" class="">
        New Post
    </Link>

    <Masonry :posts="posts"/>
  <!-- <div class="relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-sm" src="https://source.unsplash.com/random/2">
    <div class="test__body absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100">
      <div class="relative">
        <a class="test__link absolute inset-0" target="_blank" href="/"></a>
        <h1 class="test__title text-3xl font-bold mb-3">Title post</h1>
        <p class="test__author font-sm font-light">Author</p>
      </div>
      <div class="mt-auto">
        <span class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
      </div>
    </div>
  </div>
  
  
  
  <div class="relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-sm" src="https://source.unsplash.com/random/5">
    <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
      <div class="relative">
        <a class="test__link absolute inset-0" target="_blank" href="/"></a>
        <h1 class="test__title text-3xl font-bold mb-3">Title post</h1>
        <p class="test__author font-sm font-light">Author</p>
      </div>
      <div class="mt-auto">
        <span class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
      </div>
    </div>
  </div> -->
  
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