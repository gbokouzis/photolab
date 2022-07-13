<template>
    <h1>
        Username is: {{ user.name }} 
    </h1>

    <div>
        <Link as="button" :href="`/${$page.props.auth.user.name}/follow/${user.id}`" method="POST"> 
            Follow               
        </Link>

        <Link as="button" :href="`/${$page.props.auth.user.name}/unfollow/${user.id}`" method="DELETE"> 
            Unfollow               
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