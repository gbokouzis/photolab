<template>
    <div class="relative flex-grow-0 w-10 ml-2 sm:ml-4 lg:ml-8">
        <div @click="imgMenuShow = !imgMenuShow">
            <div>
                <button type="button" 
                    class="flex rounded-full focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                >
                    <img v-if="$page.props.auth.user.img" 
                        :src="$page.props.auth.user.img.imgPath" alt=""
                        class="w-10 h-10 object-cover rounded-full"  
                    >
                    <img v-else 
                        src="/storage/images/profile_image.png" alt=""
                        class="w-10 h-10 object-cover rounded-full" 
                    >
                </button>
            </div>
        </div>
        <div v-if="imgMenuShow" 
            class="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
        >
            <Link :href="`/users/${$page.props.auth.user.name}`"
                class="block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900" 
                role="menuitem" tabindex="-1" id="user-menu-item-0"
            >
                Your Profile
            </Link>
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

    <PopUp v-if="showPopup" 
        @close="showPopup = false"
        @actionBtn="destroy($page.props.auth.user.name)"
        :title="title"
        :description="description"
        :buttonName="buttonName"
        :colorBtn="colorBtn"
        :colorBgIcon="colorBgIcon"
    />
</template>

<script>
import { Inertia } from '@inertiajs/inertia';
import PopUp from '../PopUp.vue';

export default {
    components: { 
        PopUp
    },
    data() {
        return {
            imgMenuShow: false,
            showPopup: false,
            title: 'Delete account',
            description: `Are you sure you want to delete your account? After this move you can't go back.`,
            buttonName: 'Delete',
            colorBtn: 'bg-red-500 hover:bg-red-700',
            colorBgIcon: 'bg-red-100',
        };
    },
    setup() {
        const destroy = (name) => {
            if (confirm('Are you sure?')) {
                Inertia.delete(route('users.destroy', name))
            }
        }

        return { destroy }
    }
}
</script>

<style>

</style>