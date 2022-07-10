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

                <div class="mt-4">
                    <label for="camera" class="block font-medium text-sm text-gray-700">
                        Camera
                    </label>
                    <textarea v-model="form.camera" id="camera" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    <div v-if="errors.camera" class="text-red-600">
                        {{ errors.camera }}
                    </div>
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

export default {
    props: {
        post: Object,
        errors: Object
    },
    setup(props) {
        const form = useForm(props.post)

        return { form }
    }
}
</script>
