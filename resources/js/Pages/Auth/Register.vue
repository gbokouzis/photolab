<template>
    <Head title="Create User" />

    <form @submit.prevent="submit" class="max-w-md mx-auto p-4">
        <div class="mb-8">
            <svg class="mx-auto h-12 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>

            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-700">Create your account</h2>
        </div>
        
        <div class="mb-6">
            <label class="block mb-2 font-bold text-gray-700" for="Name">
                Name
            </label>
            <input v-model="form.name" class="border rounded-md border-gray-400 p-2 w-full"
                type="text"
                name="name"
                id="name"
            >
            <div v-if="form.errors.name" v-text="form.errors.name" 
                class="text-red-500 text-xs mt-1" />
        </div>

        <div class="mb-6">
            <label class="block mb-2 font-bold text-gray-700" for="Email">
                Email
            </label>
            <input v-model="form.email" class="border rounded-md border-gray-400 p-2 w-full"
                type="email"
                name="email"
                id="email"
            >
            <div v-if="form.errors.email" v-text="form.errors.email" 
                class="text-red-500 text-xs mt-1" />
        </div>

        <div class="mb-6">
            <label class="block mb-2 font-bold text-gray-700" for="Password">
                Password
            </label>
            <input v-model="form.password" class="border rounded-md border-gray-400 p-2 w-full"
                type="password"
                name="password"
                id="password"
            >
        </div>
        <div class="mb-6">
            <label class="block mb-2 font-bold text-gray-700" for="Password_confirmation">
                Password Confirmation
            </label>
            <input v-model="form.password_confirmation" class="border rounded-md border-gray-400 p-2 w-full"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
            >
            <div v-if="form.errors.password" v-text="form.errors.password" 
                class="text-red-500 text-xs mt-1" />
        </div>

        <div class="mp-6">
            <button type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                Register
            </button>  
        </div> 

        <div class="flex justify-center items-center mt-6">
            <a href="#" target="_blank" class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                <span class="ml-2">
                    You have an account?
                    <a href="/login" class="text-xs ml-2 text-indigo-500 font-semibold">
                        Login here
                    </a>
                </span>
            </a>
        </div>

    </form>

</template>

<script>
    export default {
        layout: null
    }
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
    name: '',
    email: '',
    password:'',
    password_confirmation:''
})

let submit = () => {
    form.post('/register', form)
}

</script>

<style>

</style>