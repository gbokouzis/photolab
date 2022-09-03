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
                <!-- <img src="https://source.unsplash.com/75x75/?portrait" alt="" 
                    class="flex-shrink-0 w-18 h-18 border rounded-full justify-self-start bg-gray-500 border-gray-700"
                > -->
                <img v-if="user.image" 
                        :src="user.image.path" alt=""
                        class="my-auto flex-shrink-0 w-16 h-16 border rounded-full justify-self-start bg-gray-500 border-gray-700"  
                    >
                <img v-else 
                    src="/storage/images/profile_image.png" alt=""
                    class="my-auto flex-shrink-0 w-16 h-16 border rounded-full justify-self-start bg-gray-500 border-gray-700" 
                >
                <div class="flex flex-col">
                    <h4 class="text-lg font-semibold text-left">{{ user.username }}</h4>
                    <p class="text-neutral-600">@{{ user.name }}</p>
                    <p class="text-neutral-600">{{ user.email }}</p>
                </div>
            </div>
            <div class="flex items-center">
                <button @click="showPopup = user.id" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z" fill="rgba(79,70,229,1)"/></svg>
                </button>
            </div>
        </div>
    </div>

    <PopUp v-if="showPopup" 
        @close="showPopup = null"
        @actionBtn="restore(showPopup)"
        :title="title"
        :description="description"
        :buttonName="buttonName"
        :colorBtn="colorBtn"
        :colorBgIcon="colorBgIcon"
    />

</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import PopUp from '../../Components/PopUp.vue'

export default {
    components: { 
        PopUp
    },
    props: {
        users: Object
    },
    data() {
        return {
            showPopup: null,
            title: 'Restore account',
            description: 'Are you sure you want to restore your account?',
            buttonName: 'Restore',
            colorBtn: 'bg-indigo-600 hover:bg-indigo-800',
            colorBgIcon: 'bg-indigo-100',
        };
    },
    setup() {

        const restore = (id) => {
            if (confirm('Are you sure?')) {
                Inertia.put(route('users.restore', id))
            }
        }

        return { restore }
    }
}
</script>

<style>

</style>