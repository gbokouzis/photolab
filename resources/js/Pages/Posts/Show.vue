<template>
<main class="py-6">
	<div class="max-w-4xl mx-auto p-4 shadow-lg rounded-lg">
        <div class="flex py-2">
            <div @click="showUser(post.user.name)"
                class="w-auto flex-shrink-0 h-auto border-2 border-indigo-600 rounded-full"
            >
                <img v-if="post.user.image"
                    :src="post.user.image.path" alt=""
                    class="object-cover w-12 h-12 border-2 rounded-full shadow cursor-pointer border-white-500"
                >
                <img v-else
                    src="/storage/images/profile_image.png" alt=""
                    class="object-cover w-12 h-12 border-2 rounded-full shadow cursor-pointer border-white-500"
                >
            </div>
            <div class="w-full flex flex-col mt-1 mb-2 ml-4">
                <div @click="showUser(post.user.name)" class='text-sm font-semibold text-gray-600 cursor-pointer'>{{ post.user.username }}</div>
                <div class='flex w-full mt-1'>
                    <div @click="showUser(post.user.name)" class='mr-1 text-xs text-indigo-600 cursor-pointer font-normal'>
                        @{{ post.user.name }}
                    </div>
                    <div class='text-xs font-thin text-gray-400'>
                        {{ fromNow }}
                    </div>
                </div>
            </div>
            <div v-if="$page.props.auth.user.name === post.user.name" class="relative flex justify-end">



                <div class="relative flex-grow-0 w-8 ml-2 sm:ml-4 lg:ml-8">
                    <div @click="imgMenuShow = !imgMenuShow">
                        <div>
                            <button type="button" class="p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div v-if="imgMenuShow" class="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="post-menu-button" tabindex="-1">
                        <!-- TODO na do :headers an xriazonte  -->
                        <Link :href="route('posts.edit', post.id)" :headers="{ id: post.id }" class="block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900" role="menuitem" tabindex="-1" id="user-menu-item-2">
                            Edit
                        </Link>
                        <button @click="destroy(post)" type="button" class="px-4 py-2 text-sm text-gray-600 hover:text-neutral-900">
                            Delete {{post.id}}
                        </button>
                    </div>
                </div>

            </div>
        </div>
		<div class="">
			<img :src="post.image.path" alt="" class="pxHeight w-full object-scale-down rounded-lg" loading="lazy">
		</div>
        <div class="text-indigo-600 font-medium flex items-center px-2 mt-2">
            <LikeUnlike :post="post" />
            <span v-if="post.likes !== 0" class="px-2 text-sm">{{ post.likes }}</span>
            <span v-else class="px-2 text-sm">Ηas no likes</span>
        </div>
        <div v-if="post.tags" class="font-medium flex flex-wrap">
            <Link v-for="tag in post.tags" :key="tag.id"
                :href="route('tags.show', tag.name)"
                class="tag"
            >
                #{{ tag.name }}
            </Link>
        </div>

        <p class="mt-2 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-neutral-700">
            {{ post.description }}
        </p>
        <div class="mt-4 text-neutral-700">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(74,74,74,1)"/></svg>
                <span class="px-2">
                    {{ post.location.country }}, {{ post.location.city }}
                </span>
            </div>
            <div v-if="post.camera" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="rgba(74,74,74,1)"/></svg>
                <span class="px-2">
                    {{ post.camera }}
                </span>
            </div>
            <div v-if="post.iso" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" fill="rgba(74,74,74,1)"/></svg>
                <span class="px-2">
                    {{ post.iso }}
                </span>
            </div>
            <div v-if="post.aperture" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.858 19.71L12 16H5.07a8.018 8.018 0 0 0 4.788 3.71zM4.252 14h4.284L5.07 7.999A7.963 7.963 0 0 0 4 12c0 .69.088 1.36.252 2zm2.143-7.708L8.535 10 12 4a7.974 7.974 0 0 0-5.605 2.292zm7.747-2.002L12 8h6.93a8.018 8.018 0 0 0-4.788-3.71zM19.748 10h-4.284l3.465 6.001A7.963 7.963 0 0 0 20 12c0-.69-.088-1.36-.252-2zm-2.143 7.708L15.465 14 12 20a7.974 7.974 0 0 0 5.605-2.292zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2-1.154-2z" fill="rgba(74,74,74,1)"/></svg>
                <span class="px-2">
                    {{ post.aperture }}
                </span>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zm-7 12v-2h3v-3h2v5h-5zM11 7v2H8v3H6V7h5z" fill="rgba(74,74,74,1)"/></svg>
                <span class="px-2">
                    {{ post.width }} x {{ post.height }}
                </span>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z" fill="rgba(74,74,74,1)"/></svg>
                <span class="px-2">
                    Free License
                </span>
            </div>
        </div>
    </div>

</main>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import LikeUnlike from '../../Components/LikeUnlike.vue'
import moment from "moment";

export default {
    components: {
        LikeUnlike
    },
    props: {
        post: Object
    },
    data() {
        return {
            imgMenuShow: false,
        }
    },
    computed: {
        fromNow() {
            return moment(this.post.created_at).fromNow();
        }
    },
    setup() {
        const destroy = (post) => {
            if (confirm('Are you sure?')) {
                Inertia.delete(route('posts.destroy', post))
            }
        }

        const showUser = (userName) => {
            Inertia.get(route('users.show', userName))
        }

        return { destroy, showUser }
    }
}
</script>

<style>
    @media screen and (min-height: 1536px) {
        .pxHeight {
            max-height: 1280px;
        }
    }
    @media screen and (max-height: 1536px) {
        .pxHeight {
            max-height: 1020px;
        }
    }
    @media screen and (max-height: 1280px) {
        .pxHeight {
            max-height: 960px;
        }
    }
    @media screen and (max-height: 1024px) {
        .pxHeight {
            max-height: 720px;
        }
    }
    @media screen and (max-height: 768px) {
        .pxHeight {
            max-height: 600px;
        }
    }
    @media screen and (max-height: 640px) {
        .pxHeight {
            max-height: 400px;
        }
    }

    .tag {
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #404040;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }

</style>
