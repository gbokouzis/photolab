<template>
    <h1>Followings: {{ profile.user.name }}</h1>

    <following-header :profile="profile"></following-header>
    {{ followings }}
</template>

<script>
import FollowingHeader from '../../Components/FollowingHeader.vue'

export default {
    components: { FollowingHeader },
    props: {
        followings: Object,
        profile: Object,
    }

}
</script>

<style>

</style>