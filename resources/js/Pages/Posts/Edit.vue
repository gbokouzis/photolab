<template>
    <Head title="Edit" />


    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-md">
        <form @submit.prevent="form.put(route('posts.update', form.id))">
            <div>
                <div>
                    <label for="description" class="block font-medium text-sm text-gray-700">
                        Description
                    </label>
                    <input v-model="form.description" type="text" id="description" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <div v-if="errors.description" class="text-red-600">
                        {{ errors.description }}
                    </div>
                </div>

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
            </div>

            <div class="py-4">
                <button type="submit" :disabled="form.processing" class="inline-block px-4 py-3 bg-blue-500 text-white rounded">
                    Save post
                </button>
                <Link :href="route('posts.index')" class="ml-2 inline-block px-4 py-3 bg-gray-100 rounded">
                    Cancel
                </Link>
            </div>
        </form>
        </div>
    </div>

</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3"
import { ref } from '@vue/reactivity'

export default {
    props: {
        post: Object,
        errors: Object
    },
    setup(props) {
        const form = useForm(props.post)

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

        return { form, handleEnter, deleteTag }
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
