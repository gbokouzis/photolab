<template>
    <h1>Followers: {{ profile.user.name }}</h1>

    <following-header :profile="profile"></following-header>
    {{ followers }}
</template>

<script>
import FollowingHeader from '../../Components/FollowingHeader.vue'

export default {
    components: { FollowingHeader },
    props: {
        followers: Object,
        profile: Object,
    }
}
</script>

<style>

</style>