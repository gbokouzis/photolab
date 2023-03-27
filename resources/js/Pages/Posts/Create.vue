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
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-neutral-700 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <div v-if="form.errors.description" v-text="form.errors.description"
                        class="text-red-500 text-base mt-1" />
                </div>
                <!-- location country -->
                <div class="mb-5">
                    <label
                        for="country"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Country
                    </label>
                    <input
                        v-model="form.country"
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Country"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-neutral-700 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                    <div v-if="form.errors.country" v-text="form.errors.country"
                        class="text-red-500 text-base mt-1" />
                <!-- location city -->
                <div class="mb-5">
                    <label
                        for="city"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        City or Vilage
                    </label>
                    <input
                        v-model="form.city"
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-neutral-700 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <div v-if="form.errors.city" v-text="form.errors.city"
                        class="text-red-500 text-base mt-1" />
                </div>
                <!-- categories -->
                <div class="mb-5">
                    <label for="categories" class="block mb-2 text-base font-medium text-neutral-700">Select an option</label>
                    <select id="categories"
                        class="bg-gray-50 border
                            border-gray-300
                            text-gray-900 text-sm rounded-lg
                            focus:ring-indigo-600
                            focus:border-indigo-600 block w-full p-2.5
                            outline-none"
                        v-model="form.category"
                    >
                        <option selected>Choose a category</option>
                        <option v-for="category in categories" :value="category.name">{{category.name}}</option>
                    </select>
                    <div v-if="form.errors.category" v-text="form.errors.category"
                        class="text-red-500 text-base mt-1" />
                </div>
                <!-- tags -->
                <div class="mb-5">
                    <label class="text-base font-medium text-neutral-700">Tags (hit enter to add a tag):</label>
                    <input
                        v-model="tag"
                        type="text"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-neutral-700 outline-none focus:border-[#6A64F1] focus:shadow-md"
                        @keydown.enter.prevent="handleEnter"
                    >
                    <div v-for="tag in form.tags" :key="tag" @click="deleteTag(tag)"
                        class="inline-block mx-0 my-2 mr-1 p-2 bg-gray-200 text-neutral-700 rounded-2xl cursor-pointer"
                    >
                        #{{ tag }}
                    </div>
                    <div v-if="form.errors.tags" v-text="form.errors.tags"
                        class="text-red-500 text-xs mt-1" />
                </div>

                <div class="mb-5">
                    <div class="flex items-center justify-center bg-gray-100">
                        <label for="input-image"
                            class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed bg-white p-6 text-center"
                            :class="{
                                'border-neutral-700': form.image === null,
                                'border-indigo-600': form.image != null
                            }"
                        >
                            <span v-if="form.image === null">
                                <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z" fill="rgba(64,64,64,1)"/></svg>
                                <h2 class="mt-4 text-xl font-medium text-gray-700">Click to upload</h2>
                            </span>
                            <span v-else>
                                <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z" fill="rgba(79,70,229,1)"/></svg>
                                <h2 class="mt-4 text-xl font-medium text-gray-700">Image selected</h2>
                            </span>
                            <p class="mt-2 text-gray-600">Upload image JPG or JPEG. (min: 512mb) </p>

                            <input @input="form.image = $event.target.files[0]"
                                id="input-image"
                                type="file"
                                class="hidden"
                            />
                        </label>
                    </div>
                    <div v-if="form.errors.image" v-text="form.errors.image"
                        class="text-red-500 text-xs mt-1"
                    />
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

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from '@vue/reactivity';

export default {
    props: {
        categories: Object
    },
    setup() {
        const tag = ref('')

        const handleEnter = () => {
            tag.value = tag.value.replace(/\s/g,'')
            if (!form.tags.includes(tag.value) && tag.value.length !== 0) {
                form.tags.push(tag.value)
            }
            tag.value = ''
        }

        const deleteTag = (tag) => {
            form.tags = form.tags.filter((item) => {
                return tag !== item
            })
        }

        let form = useForm({
            description: '',
            country: '',
            city: '',
            tags: [],
            category: '',
            image: null,
        })


        let submit = () => {
            form.post('/posts', form)
        }



        return { form, submit, tag, handleEnter, deleteTag }
    }
}
</script>

<style>

</style>
