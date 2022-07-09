<template>
    <nav
      class="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center  px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto"
    >
        <!-- Logo -->
        <div>
            <h2 class="text-3xl font-bold ml-2 mr-5">
                <a>My <span class="text-blue-600">B</span>rand</a>
            </h2>
        </div>
        <!-- /End Logo -->
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
    
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>