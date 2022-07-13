<template>
    <div>
        <Link :href="`/users/${profile.user.name}/followers`" class="w-1/2 py-2 font-bold text-center text-gray-700 hover:bg-blue-700">
            Followers
        </Link>

        <Link :href="`/users/${profile.user.name}/followings`" class="w-1/2 py-2 font-bold text-center text-gray-700 hover:bg-blue-700">
            Following
        </Link>
    </div>
</template>

<script>
export default {
    props: {
        profile: Object,
    }
}
</script>

<style>

</style>