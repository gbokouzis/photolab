<template>
    <div>
        <h1 v-if="post.description">Description: {{ post.description }}</h1>
        <h1 v-if="post.camera">Camera: {{ post.camera }}</h1>
        <p v-if="post.user.name">By: {{ post.user.name }}</p>
        <div v-if="post.comments">
            <h1>Comments</h1>
            <div class="m-4" v-for="comment in post.comments" :key="comment.id">
                <h3>
                    From: {{ comment.user.name }}
                </h3>
                <p>
                    {{ comment.content }}
                </p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>

</style>