<template>
    <Head title="Index" />

    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-auto"
    v-for="user in users" :key="user.id">
        <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
        <div class="px-6 py-4 m-4">
            <div class="text-xl mb-2">
                <Link :href="route('users.show', user.name)"> 
                    Username: {{ user.name }}
                </Link>
            </div>
        </div>
    </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
export default {
    props: {
        users: Object
    },
}
</script>

<style>

</style>