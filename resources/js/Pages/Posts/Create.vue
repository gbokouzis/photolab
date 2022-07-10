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
                <div class="mb-5">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                    <select id="countries" 
                        class="bg-gray-50 border 
                            border-gray-300 
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5"
                        v-model="form.category_id"
                        >
                        <!-- <v-select
                            :options="options"
                            :value="person.country"
                            @input="(country) => updateCountry(person, country)"
                        /> -->
                        <option selected>Choose a category</option>
                        <option v-for="category in categories" :value="category.id">{{category.content}}</option>
                    </select>
                </div>
                <div v-if="form.errors.tags" v-text="form.errors.category_id" 
                    class="text-red-500 text-xs mt-1" />
                <!-- tags -->
                <div class="mb-5">
                    <label>Tags (hit enter to add a tag):</label>
                    <input 
                        v-model="tag" 
                        type="text"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"                        
                        @keydown.enter.prevent="handleEnter"
                    >
                    <div v-for="tag in form.tags" :key="tag" @click="deleteTag(tag)" class="tag cursor-pointer">
                        #{{ tag }}
                    </div>
                    <div v-if="form.errors.tags" v-text="form.errors.tags" 
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
            camera: '',
            tags: [],
            category_id: ''
        })


        let submit = () => {
            // console.log(form)
            form.post('/posts', form)
        }

        return { form, submit, tag, handleEnter, deleteTag }
    }
}
</script>

<style>
.tag {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}

</style>