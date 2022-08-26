<template>
    <div class="relative flex-grow-0 w-10 ml-2 sm:ml-4 lg:ml-8">
        <div @click="imgMenuShow = !imgMenuShow">
            <div>
                <button type="button" class="flex rounded-full focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                >
                    <img v-if="$page.props.auth.user.img" class="w-10 h-10 object-cover rounded-full" :src="$page.props.auth.user.img.imgPath" alt="">
                    <img v-else class="w-10 h-10 object-cover rounded-full" src="/storage/images/profile_image.png" alt="">
                </button>
            </div>
        </div>
        <div v-if="imgMenuShow" 
            class="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
        >
            <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <!-- <Link href="/logout" method="post"
                class="block px-4 py-2 text-sm text-red-600 hover:text-red-500"
                role="menuitem" tabindex="-1" 
                id="user-menu-item-2"
            >
                Delete Profile
            </Link> -->
            <p @click="showPopup = true"
                class="block px-4 py-2 text-sm text-red-600 hover:text-red-500 cursor-pointer">
                Delete Profile
            </p>
            <Link href="/logout" method="post"
                class="block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900"
                role="menuitem" tabindex="-1" 
                id="user-menu-item-2"
            >
                Log out
            </Link>
        </div>
    </div>




<div v-if="showPopup" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

            <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Deactivate account</h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button 
                        type="button" 
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Delete
                    </button>
                    <button @click="showPopup = false" 
                        type="button" 
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>



    <!-- <PopUp /> -->
</template>

<script>
import PopUp from './PopUp.vue';

export default {
    components: { 
        PopUp
    },
    data() {
        return {
            imgMenuShow: false,
            showPopup: false
        };
    },
}
</script>

<style>

</style>