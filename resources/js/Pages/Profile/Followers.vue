<template>
    <h1>Followers: {{ profile.user.name }}</h1>
</template>

<script>
export default {
    props: {
        profile: Object,
        followers: Array
    }
}
</script>

<style>

</style>