<template>
    <Head title="Create" />

    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-md">
            <form @submit.prevent="submit">
                
                <!-- category -->
                <div class="mb-5">
                    <label
                        for="category"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Category
                    </label>
                    <input
                        v-model="form.name"
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <div v-if="form.errors.name" v-text="form.errors.name" 
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

export default {
    setup() {
        const form = useForm({
            name: '',
        })

        const submit = () => {
            // console.log(form)
            form.post('/categories', form)
        }

        return { form, submit }
    }
}
</script>

<style>

</style>