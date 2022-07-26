<template>
    <!-- <nav
      class="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center  px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto"
    >
        <div>
            <h2 class="text-3xl font-bold ml-2 mr-5">
                <a>My <span class="text-blue-600">B</span>rand</a>
            </h2>
        </div>
        <div class="mt-5 md:mt-0">
            <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center">
                <li>
                        <Link href="/home" class="font-semibold tracking-tight block cursor-pointer p-2 
                            hover:text-blue-500 hover:underline transition-colors duration-300"
                            :class="{ 'font-bold underline': $page.component === 'Welcome' }"
                        >
                            Home
                        </Link>
                </li>
                <li>
                        <Link href="/posts" class="font-semibold tracking-tight block cursor-pointer p-2 
                            hover:text-blue-500 hover:underline transition-colors duration-300"
                            :class="{ 'font-bold underline': $page.component === 'Posts/Index' }"
                        >
                            Posts
                        </Link>
                </li>
                <li>
                        <Link href="/users" class="font-semibold tracking-tight block cursor-pointer p-2 
                            hover:text-blue-500 hover:underline transition-colors duration-300"
                            :class="{ 'font-bold underline': $page.component === 'Profile/Index' }"
                        >
                            Users
                        </Link>
                </li>
                <li>
                        <Link href="/categories" class="font-semibold tracking-tight block cursor-pointer p-2 
                            hover:text-blue-500 hover:underline transition-colors duration-300"
                            :class="{ 'font-bold underline': $page.component === 'Categories/Index' }"
                        >
                            Categories
                        </Link>
                </li>
                <li>
                    <Link href="/register" class="font-semibold tracking-tight block cursor-pointer p-2 
                        hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                        Register
                    </Link>
                </li>
                <li>
                    <Link href="/login" class="font-semibold tracking-tight block cursor-pointer p-2 
                        hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                        Login
                    </Link>
                </li>
            </ul>
            <div class="">
                <Link href="/logout" method="post"
                        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4">
                    Log out
                </Link>
            </div>
        </div>
    
    </nav> -->

<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.827 21.763L14.31 14l3.532 6.117A9.955 9.955 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237zM7.89 21.12A10.028 10.028 0 0 1 2.458 15h8.965L7.89 21.119zM2.05 13a9.964 9.964 0 0 1 2.583-7.761L9.112 13H2.05zm4.109-9.117A9.955 9.955 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10 6.159 3.883zM16.11 2.88A10.028 10.028 0 0 1 21.542 9h-8.965l3.533-6.119zM21.95 11a9.964 9.964 0 0 1-2.583 7.761L14.888 11h7.064z"/></svg> -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg> -->





<nav class="bg-neutral-50">
    <div class="relative w-full flex h-16">
        <!-- Logo -->
        <div class="flex flex-grow-0 items-center justify-start px-2 sm:px-4 lg:px-8">
            <div class="flex-shrink-0 flex items-center">
                <!-- <svg class="block lg:hidden h-10 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg> -->
                <svg class="lg:block h-11 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
            </div>
        </div>

        <!-- Search -->
        <div class="flex w-full items-center">
            <!-- <a href="#" class="text-gray-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Team</a> -->
            <input v-model="search" type="text" placeholder="Search" class="flex-1 border h-10 px-2 rounded-full">
        </div>

        <!-- Right -->
        <div v-if="$page.props.auth" class="flex flex-shrink items-center px-2 sm:px-4 lg:px-8">
            <!-- Upload -->
            <button type="button" class="block p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900">
                <Link href="/posts/create" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9v6h-4V9H5l7-7 7 7h-5z"/></svg>
                </Link>
            </button>

            <!-- Profile dropdown -->
            <div class="relative flex-grow-0 w-8 ml-2 sm:ml-4 lg:ml-8">
                <div @click="imgMenuShow = !imgMenuShow">
                    <div>
                        <button type="button" class="bg-gray-800 flex rounded-full focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <img class="w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </button>
                    </div>
                </div>
                <div v-if="imgMenuShow" class="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <Link href="/logout" method="post"
                            class="block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900" role="menuitem" tabindex="-1" id="user-menu-item-2">
                        Log out
                    </Link>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-shrink items-center px-2 sm:px-4 lg:px-8">
            <button type="button" class="inline-block px-6 py-2 border border-gray-400 text-gray-600 
                font-medium text-sm leading-tight rounded-xl bg-white hover:border-neutral-900 hover:text-neutral-900"
            >
                Login/Register
            </button>
        </div>
    </div>
    
    <div class="relative w-full flex sm:h-12">
        <div class="w-full flex justify-center flex-col sm:flex-row items-center  px-6 py-4 shadow-sm  mx-auto">
            <ul class="flex flex-col sm:flex-row md:space-x-5 w-full items-center justify-center md:text-lg">
                <li>
                    <Link href="/home" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Welcome' }"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/posts" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Posts/Index' }"
                    >
                        Posts
                    </Link>
                </li>
                <li>
                    <Link href="#" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === '' }"
                    >
                        Following
                    </Link>
                </li>
                <li>
                    <Link href="/users" class="font-semibold tracking-tight block cursor-pointer p-2 
                        text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300"
                        :class="{ 'font-bold underline': $page.component === 'Profile/Index' }"
                    >
                        Users
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
            </ul>
        </div>
        <div v-if="$page.props.auth" class="hidden flex-shrink-0 sm:block">
            <span class="flex items-center justify-end mx-2 sm:mx-4 lg:mx-8">Hi {{$page.props.auth.user.name}}!</span>
        </div>
    </div>

</nav>

</template>

<script>
export default {
    data() {
        return { 
            imgMenuShow: false
        }
    }
}
</script>

<style>

</style>