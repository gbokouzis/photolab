<template>
    <!-- <div>
        <h1 v-if="post.description">Description: {{ post.description }}</h1>
        <h1 v-if="post.camera">Camera: {{ post.camera }}</h1>
        <p v-if="post.user.name">By: {{ post.user.name }}</p>
        <div v-if="post.comments">
            <h1>Comments</h1>
            <div class="m-4" v-for="comment in post.comments" :key="comment.id">
                <h3>
                    From: {{ comment.user.name }}
                </h3>
                <p>
                    {{ comment.content }}
                </p> 
            </div>
        </div>
    </div> -->





<main class="py-6">
	<div class="max-w-4xl mx-auto p-4 shadow-lg rounded-lg">
        <div class="flex py-2">
                <div class="w-auto h-auto border-2 border-indigo-600 rounded-full">
                    <img class='object-cover w-12 h-12 border-2 rounded-full shadow cursor-pointer border-white-500' alt='User avatar' src='https://source.unsplash.com/nBJHO6wmRWw/200x200j'>
            </div>
            <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class='text-sm font-semibold text-gray-600'>Ninas Coffee</div>
                <div class='flex w-full mt-1'>
                <div class='mr-1 text-xs text-indigo-600 cursor-pointer font-base'>
                    Saint Paul, MN
                </div>
                <div class='text-xs font-thin text-gray-400'>
                    • 30 seconds ago
                </div>
                </div>
        </div>
        </div>
		<div class="">
			<img src="https://source.unsplash.com/random/1" alt="" class="pxHeight w-full object-scale-down rounded-lg" loading="lazy">
		</div>
        <dl class="mt-4 text-xs font-medium flex items-center row-start-2">
        <dt class="sr-only">Reviews</dt>
        <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"/>
            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="rgba(79,70,229,1)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(79,70,229,1)"/>
        </svg>
            <span>100</span>
        </dd>
        <dt class="sr-only">Location</dt>
        <dd class="flex items-center">
            <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
            <circle cx="1" cy="1" r="1" />
            </svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Collingwood, Ontario
        </dd>
        </dl>
        <div class="mt-4 col-start-1 row-start-3 self-center ">
            <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
        </div>
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
        This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
        </p>
    </div>
</main>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>
    @media screen and (min-height: 1536px) {
        .pxHeight {
            max-height: 1280px;
        }
    }
    @media screen and (max-height: 1536px) {
        .pxHeight {
            max-height: 1020px;
        }
    }
    @media screen and (max-height: 1280px) {
        .pxHeight {
            max-height: 960px;
        }
    }
    @media screen and (max-height: 1024px) {
        .pxHeight {
            max-height: 720px;
        }
    }
    @media screen and (max-height: 768px) {
        .pxHeight {
            max-height: 600px;
        }
    }
    @media screen and (max-height: 640px) {
        .pxHeight {
            max-height: 400px;
        }
    }


</style>