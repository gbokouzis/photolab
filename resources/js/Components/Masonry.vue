<template>
    <div class="columns-1 sm:columns-2 lg:columns-3 mx-auto sm:p-4 lg:p-6 xl:p-8"
        :class="{
            'xl:columns-4 max-w-screen-2xl': 
                $page.component === 'Posts/Index' 
                || $page.component === 'Posts/Following'
                || $page.component === 'Tags/Show'
                || $page.component === 'Locations/Show',
            'max-w-screen-lg': $page.component === 'Profile/Show'
        }"

    >
        <div v-for="post in dataPosts.data" :key="post.id" 
            class="relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <div v-if="post.image">
                
                <img class="w-full rounded-sm" :src="post.image.path">
            
                <div class="test__body absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100">
                    <!-- <div class="relative">
                        <a class="test__link absolute inset-0" target="_blank" href="/"></a>
                        <h1 class="test__title text-3xl font-bold mb-3">Title post</h1>
                        <p class="test__author font-sm font-light">Author</p>
                    </div> -->
                    
                        <Link 
                            as="button"
                            :href="route('posts.show', post.id)"
                            class="m-auto w-28 h-1/6 flex justify-center shrink-0 opacity-50 translate-y-2/4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z" fill="rgba(0,0,0,1)"/></svg>
                        </Link>
                    

                    <div class="mt-auto shrink">
                        <LikeUnlike :post="post"/>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import { debounce } from "lodash/function"
import axios from 'axios';
import LikeUnlike from './LikeUnlike.vue';

export default {
    components: { 
        LikeUnlike
    },
    props: {
        posts: Object
    },
    data() {
        return {
            dataPosts: this.posts
        }
    },

    mounted() {
        // console.log()
        window.addEventListener('scroll', debounce((e) => {
            let pixelsFromBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight;
            if (this.dataPosts.next_page_url != null) {
                if (pixelsFromBottom < 200 ) {
                    // console.log(pixelsFromBottom)
                        
                    axios.get(this.dataPosts.next_page_url).then(response => {
                        this.dataPosts = {
                            ...response.data,
                            data: [...this.dataPosts.data, ...response.data.data]
                        }
                    });

                }
            }
        }, 100));
    },
    watch: {
        posts(newPosts) {
            this.dataPosts = newPosts
        }
    },
    setup() {
      const showPost = (post) => {
        Inertia.get(route('posts.show', post.id))
      }

      return { showPost }
    }
}
</script>

<style>

</style>