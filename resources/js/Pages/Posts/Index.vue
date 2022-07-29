<template>
    <Head title="Index" />

    <Link href="/posts/create" class="">
        New Post
    </Link>

    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-auto"
    v-for="post in dataPosts.data" :key="post.id">
        <div class="px-6 py-4 m-4">
            <div v-if="post.image">
                <img :src="post.image.path" alt="">
            </div>

            <div class="text-xl mb-2">
                <Link :href="route('posts.show', post.id)"> 
                    Username: geor
                </Link>
                <p>
                    By: {{ post.user.name }}
                </p>
            </div>
            <p v-if="post.description" class="text-gray-700 text-base">
                description: {{ post.description }}
            </p>
            <p v-if="post.camera" class="text-gray-700 text-base">
                camera: {{ post.camera }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        </div>
        <div>
            <!-- TODO na do :headers an xriazonte  -->
            <Link :href="route('posts.edit', post.id)" :headers="{ id: post.id }" class="m-4 px-2 py-1 bg-blue-600 text-white rounded font-bold">Edit</Link>
            <button v-on:click="destroy(post)" type="button" class="m-4 px-2 py-1 bg-red-600 text-white rounded font-bold">
                Delete {{post.id}}
            </button>
            <div v-if="$page.props.auth">
                <Link v-if="post.liked"
                    preserve-scroll 
                    method="POST" 
                    as="button"
                    :href="`/posts/${post.id}/unlike`"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"/>
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="rgba(79,70,229,1)"/>
                    </svg>
                </Link>
                <Link v-else
                    preserve-scroll 
                    method="POST" 
                    as="button"
                    :href="`/posts/${post.id}/like`"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(79,70,229,1)"/>
                    </svg>
                </Link>
                
            <!-- <svg v-if="post.likes_count" @click="buttonUnlike(post.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"/>
              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="rgba(79,70,229,1)"/>
            </svg>
            <svg v-else @click="buttonLike(post.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(79,70,229,1)"/>
            </svg> -->

            </div>

        </div>
    </div>




    
<div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 max-w-screen-2xl mx-auto sm:p-4 lg:p-6 xl:p-8">
  <!-- <div class="relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-ss" src="https://source.unsplash.com/random/1">
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
    <img class="w-full rounded-sm" src="https://source.unsplash.com/random/3">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-sm" src="https://source.unsplash.com/random/4">
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
  
  <!-- <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/6">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/7">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/8">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/9">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/10">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/11">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/12">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/13">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/14">
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
  </div>
  
  <div class="inline-block relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/15">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/16">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/17">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/18">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/19">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/20">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/21">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/22">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/23">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/24">
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
  </div>
  
  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/25">
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
</div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import { debounce } from "lodash/function"
import axios from 'axios';

export default {
    props: {
        posts: Object
    },
    data() {
        return {
            dataPosts: this.posts
        }
    },

    mounted() {
        console.log()
        window.addEventListener('scroll', debounce((e) => {
            let pixelsFromBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight;
            if (pixelsFromBottom < 200 ) {
                // console.log(pixelsFromBottom)
                if (this.dataPosts.next_page_url != null) {
                    
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
        const destroy = (post) => {
            if (confirm('Are you sure?')) {
                Inertia.delete(route('posts.destroy', post))
            }
        }

        return { destroy }
    }
}
</script>

<style>

</style>