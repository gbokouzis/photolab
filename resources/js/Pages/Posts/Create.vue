<template>
    <Head title="Create" />
    
    <h1>Create</h1>

    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-md">
            <form @submit.prevent="submit">
                
                <!-- description -->
                <div class="mb-5">
                    <label
                        for="description"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Description
                    </label>
                    <input
                        v-model="form.description"
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <div v-if="form.errors.description" v-text="form.errors.description" 
                        class="text-red-500 text-xs mt-1" />
                </div>

                <!-- camera -->
                <div class="mb-5">
                    <label
                        for="camera"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Camera
                    </label>
                    <input
                        v-model="form.camera"
                        type="text"
                        name="camera"
                        id="camera"
                        placeholder="Type your camera"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <div v-if="form.errors.camera" v-text="form.errors.camera" 
                        class="text-red-500 text-xs mt-1" />
                </div>
                <div>
                    <button
                        :disabled="form.processing"
                        type="submit"
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

    let form = useForm({
        description: '',
        camera: '',
    })

    let submit = () => {
        form.post('/posts', form)
    }

</script>

<style>

</style>