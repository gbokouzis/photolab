<template>
    <Head title="Index" />

    <div v-for="user in users" :key="user.id"
        class="max-w-lg mt-4 mx-auto"
    >
        <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
        <!-- <div class="px-6 py-4 m-4">
            <div class="text-xl mb-2">
                <Link :href="route('users.show', user.name)"> 
                    Username: {{ user.name }}
                </Link>
            </div>
        </div> -->

        <div class="my-4 px-12 py-6 rounded overflow-hidden shadow-lg flex justify-between hover:bg-gray-100 bg-gray-50 text-neutral-600">
            <div class="flex space-y-0 space-x-6 flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" 
                    class="flex-shrink-0 w-18 h-18 border rounded-full justify-self-start bg-gray-500 border-gray-700"
                >
                <div class="flex flex-col">
                    <h4 class="text-lg font-semibold text-left">Leroy Jenkins</h4>
                    <p class="text-neutral-600">Leroy Jenkins</p>
                    <p class="text-neutral-600">Leroy Jenkins</p>
                </div>
            </div>
            <div class="flex items-center">
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z" fill="rgba(79,70,229,1)"/></svg>
                </button>
            </div>
        </div>
    </div>


<div class="max-w-lg mt-10 mx-auto w-full items-center justify-center">
  <ul class="flex flex-col w-full">
    <li v-for="user in users" :key="user.id"
        class="my-4 flex flex-row rounded overflow-hidden shadow-lg ">
        <div class="cursor-pointer flex flex-1 items-center p-4 bg-gray-50 hover:bg-gray-100 text-neutral-600">
            <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" class="block relative">
                    <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" class="mx-auto object-cover rounded-full h-10 w-10" />
                </a>
            </div>
            <div class="flex-1 pl-1">
                <div class="font-medium dark:text-white">
                    Jean Marc
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-sm">
                    Developer
                </div>
                </div>
            <div class="flex flex-row justify-center">
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
            </div>
        </div>
    </li> 
  </ul>
</div>


</template>

<script>
import { Inertia } from '@inertiajs/inertia'
export default {
    props: {
        users: Object
    },
}
</script>

<style>

</style>