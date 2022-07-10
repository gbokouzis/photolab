<template>
    <Head title="Index" />

    <Link href="/categories/create" class="">
        New Category
    </Link>

    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-auto"
    v-for="category in categories" :key="category.id">
        <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
        <div class="px-6 py-4 m-4">
            <div class="text-xl mb-2">
                <Link :href="route('categories.show', category.id)"> 
                    <h1>
                        {{ category.content }}
                    </h1>
                </Link>
            </div>
        </div>
        <div>
            <Link :href="route('categories.edit', category.id)" class="m-4 px-2 py-1 bg-blue-600 text-white rounded font-bold">Edit</Link>
            <button v-on:click="destroy(category)" type="button" class="m-4 px-2 py-1 bg-red-600 text-white rounded font-bold">
                Delete {{category.id}}
            </button>
        </div>
    </div>
</template>


<script>
import { Inertia } from '@inertiajs/inertia'
export default {
    props: {
        categories: Object
    },
    setup() {
        const destroy = (category) => {
            if (confirm('Are you sure?')) {
                Inertia.delete(route('categories.destroy', category))
            }
        }

        return { destroy }
    }
}
</script>

<style>

</style>