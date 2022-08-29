<template>
<nav class="bg-neutral-50">
    <div class="relative w-full flex h-16">
        <!-- Logo -->
        <div class="flex flex-grow-0 items-center justify-start px-2 sm:px-4 lg:px-8">
            <div class="flex-shrink-0 flex items-center">
                <Link href="/" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(23,23,23,1)"/></svg>
                </Link>
            </div>
        </div>

        <!-- Search -->
        <Search />
        

        <!-- Right -->
        <div v-if="$page.props.auth" 
            class="flex flex-shrink items-center px-2 sm:px-4 lg:px-8"
        >
            <!-- Upload -->
            <button type="button" class="block p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900">
                <Link href="/posts/create" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z" fill="rgba(23,23,23,1)"/></svg>
                </Link>
            </button>

            <!-- Profile dropdown -->
            <AvatarDropdown />

        </div>
        <div v-else class="flex flex-shrink items-center px-2 sm:px-4 lg:px-8">
            <Link :href="route('login')" as="button" class="inline-block px-6 py-2 border border-gray-400 text-gray-600 
                font-medium text-sm leading-tight rounded-xl bg-white hover:border-neutral-900 hover:text-neutral-900"
            >
                Login/Register
            </Link>
        </div>
    </div>
    
    <div class="relative w-full flex sm:h-12 shadow-sm items-center">
        <div class="w-full flex justify-center flex-col sm:flex-row items-center px-6 py-4 mx-auto">
            <ul class="flex flex-col sm:flex-row sm:space-x-2 md:space-x-5 w-full items-center justify-center sm:text-lg">
                <li>
                    <Link href="/" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Posts/Index' }"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/following" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Posts/Following' }"
                    >
                        Following
                    </Link>
                </li>
                <li>
                    <Link href="/categories" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Categories/Index' }"
                    >
                        Categories
                    </Link>
                </li>
                <li v-if="$page.props.auth.user.is_admin">
                    <Link href="/users/banned" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Profile/Index' }"
                    >
                        Banned Users
                    </Link>
                </li>
            </ul>
        </div>
        <div v-if="$page.props.auth" class="hidden flex-shrink-0 sm:block">
            <span class="text-gray-700 font-medium flex items-center justify-end mx-2 md:mx-4 lg:mx-8">
                Hi {{$page.props.auth.user.name}}!
            </span>
        </div>
    </div>

</nav>

</template>

<script>
import Search from '../Components/Nav/Search.vue';
import AvatarDropdown from '../Components/Nav/AvatarDropdown.vue';

export default {
    components: { 
        Search,
        AvatarDropdown
    },
    data() {
        return {
            selectShow: false,
        };
    },
}
</script>

<style>

</style>