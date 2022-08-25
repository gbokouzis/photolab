<template>
    <Head title="Edit" />


    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-md">
        <form @submit.prevent="submit">
            <!-- Description -->
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

            <!-- Tags  -->
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

            <!-- Save and Cansel buttons -->
            <div class="py-4">
                <button type="submit" 
                    :disabled="form.processing" 
                    class="inline-block px-4 py-3 bg-blue-500 text-white rounded"
                >
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
        const form = useForm({
            description: props.post.description,
            tags: props.post.tags,
        })
        
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


        let submit = () => {
            // console.log(form)
            form.put(route('posts.update', props.post.id))
        }

        return { form, submit, tag, handleEnter, deleteTag }
    }
}
</script>

<style>
 
</style>
