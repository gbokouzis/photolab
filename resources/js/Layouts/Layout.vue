<template>
    <section>
        <NavLayout/>
    </section>

    <section>
        <slot />
    </section>
</template>

<script>
import NavLayout from './NavLayout.vue'

export default {
    components: { NavLayout },
}
</script>

<style>

</style>