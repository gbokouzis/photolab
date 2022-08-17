<template>
    <Head title="Edit" />

    <div class="flex items-center justify-center p-12">
        <!-- {{ form }} -->
        <div class="mx-auto w-full max-w-md">
        <form @submit.prevent="form.put(route('categories.update', form.id))">
            <div>
                <div>
                    <label for="category" class="block font-medium text-sm text-gray-700">
                        Category
                    </label>
                    <input v-model="form.name" type="text" id="category" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <div v-if="errors.name" class="text-red-600">
                        {{ errors.name }}
                    </div>
                </div>
            </div>

            <div class="py-4">
                <button type="submit" :disabled="form.processing" class="inline-block px-4 py-3 bg-blue-500 text-white rounded">
                    Save category
                </button>
                <Link :href="route('categories.index')" class="ml-2 inline-block px-4 py-3 bg-gray-100 rounded">
                    Cancel
                </Link>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3'
export default {
    props: {
        category: Object,
        errors: Object
    },
    setup(props) {
        const form = useForm(props.category)

        return { form }
    }
}
</script>

<style>

</style>