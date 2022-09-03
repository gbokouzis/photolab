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
            class="relative mb-4">
            <div v-if="post.image" class="hover:scale-105 transition duration-200 ease-linear align-middle">

                <img class="w-full rounded-sm" :src="post.image.path">
            
                <div class="hover:scale-105 transition duration-200 ease-linear align-middle absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100">
                    
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
    <div v-if="dataPosts.next_page_url" class="my-40 w-full mx-auto flex justify-center">
        <div role="status" class="">
            <svg class="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
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