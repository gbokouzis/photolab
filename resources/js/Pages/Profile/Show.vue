<template>
    <h1>
        Username is: {{ user.name }} 
    </h1>

    <div class="text-xl mb-2">
        <Link :href="route('users.followers', user.name)"> 
            Followers: {{ user.name }}                
        </Link>
    </div>

    <div class="text-xl mb-2">
        <Link :href="route('users.following', user.name)"> 
            Following: {{ user.name }}                
        </Link>
    </div>
    
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style>

</style>