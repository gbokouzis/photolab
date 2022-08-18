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
                        {{ category.name }}
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

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        <div 
            v-for="category in categories" :key="category.id"
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true" data-mdb-ripple-color="dark"
        > 
            <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                class="w-full transition duration-300 ease-linear align-middle" />
            <Link :href="route('categories.show', category.id)"> 
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                        <h5 class="text-lg font-bold text-white m-6">
                            {{ category.name }}
                        </h5>
                    </div>
                </div>
                <div>
                    <div
                        class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    ></div>
                </div>
            </Link>
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
    .zoom:hover img {
        transform: scale(1.1);
    }
</style>