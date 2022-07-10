<template>
    <Head title="Show" />

    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-auto"
        v-for="post in posts" :key="post.id"
    >
        <div class="px-6 py-4 m-4">
            <div class="text-xl mb-2">
                <Link :href="route('posts.show', post.id)"> 
                    Username: geor
                </Link>
                <p>
                    By: {{ post.user.name }}
                </p>
            </div>
            <p v-if="post.description" class="text-gray-700 text-base">
                description: {{ post.description }}
            </p>
            <p v-if="post.camera" class="text-gray-700 text-base">
                camera: {{ post.camera }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        </div>
        <div>
            <Link :href="route('posts.edit', post.id)" :headers="{ id: post.id }" class="m-4 px-2 py-1 bg-blue-600 text-white rounded font-bold">Edit</Link>
            <button v-on:click="destroy(post)" type="button" class="m-4 px-2 py-1 bg-red-600 text-white rounded font-bold">
                Delete {{post.id}}
            </button>
        </div>
    </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
export default {
    props: {
        posts: Object
    },
    setup() {
        const destroy = (post) => {
            if (confirm('Are you sure?')) {
                Inertia.delete(route('posts.destroy', post))
            }
        }

        return { destroy }
    }
}
</script>

<style>

</style>