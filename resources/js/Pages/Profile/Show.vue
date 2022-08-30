<template>
    <div>
        <button v-if="$page.props.auth.user.is_admin && !user.is_admin" 
            @click="showPopup = true"
            type="button"
            class="m-4 py-1 px-4 rounded-md border-2 font-medium transition duration-200 ease-linear align-middle text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-gray-100"
        >
            Ban
        </button>

        
            <div class="max-w-6xl mx-auto px-4">
            <div class="profile mr-4 lg:mr-16">

                <div class="profile-image">
                    <ProfileAvatar :user="user" :profileImg="profileImg" />
                </div>
                
                <div class="profile-user-settings">
                    <div>
                        <h1 class="md:inline-block pb-2 text-4xl font-normal text-neutral-700">
                            {{ user.username }} 
                        </h1>
                        <h2 class="sm:pl-2 md:inline-block pb-2 font-light text-3xl shrink-1">
                            @{{ user.name }}
                        </h2>
                    </div>
                
                    <!-- <Link as="button" 
                        v-if="user.name === $page.props.auth.user.name"
                        :href="`#`"
                        class="btn btn-edit-follow-unfollow"
                    >
                        Edit Profile
                    </Link> -->
                    <Link as="button" 
                        v-if="isFollower && user.name !== $page.props.auth.user.name" 
                        :href="`/${$page.props.auth.user.name}/unfollow/${user.id}`" method="DELETE" 
                        class="btn btn-edit-follow-unfollow"
                    >
                        Unfollow
                    </Link>
                    <Link as="button" 
                        v-if="!isFollower && user.name !== $page.props.auth.user.name" 
                        :href="`/${$page.props.auth.user.name}/follow/${user.id}`" method="POST" 
                        class="btn btn-edit-follow-unfollow block"
                    >
                        Follow
                    </Link>
                </div>

                <div class="profile-stats">
                    <ul>
                        <li><span class="profile-stat-count">{{ countPosts }}</span> posts</li>
                        <li><span class="profile-stat-count">{{ countFollowers }}</span> followers</li>
                        <li><span class="profile-stat-count">{{ countFollowings }}</span> following</li>
                    </ul>
                </div>

                <div class="profile-bio">
                    <p v-if="user.bio">
                        {{ user.bio }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <main>
        <div class="mx-auto px-4">
            <Masonry :posts="posts" />
            <!-- <div class="loader"></div> -->
        </div>
    </main>

    <PopUp v-if="showPopup" 
        @close="showPopup = false"
        @actionBtn="ban(user.name)"
        :title="title"
        :description="description"
        :buttonName="buttonName"
        :colorBtn="colorBtn"
        :colorBgIcon="colorBgIcon"
    />

</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Masonry from '../../Components/Masonry.vue'
import ProfileAvatar from '../../Components/ProfileAvatar.vue'
import PopUp from '../../Components/PopUp.vue'
import { Inertia } from '@inertiajs/inertia';

export default {
    components: {
        Masonry,
        ProfileAvatar,
        PopUp
    },
    props: {
        user: Object,
        posts: Object,
        profileImg: Object,
        isFollower: Boolean,
        countFollowers: Number,
        countFollowings: Number,
        countPosts: Number
    },
    data() {
        return {
            showPopup: null,
            title: 'Ban account',
            description: 'Are you sure you want to ban this account?',
            buttonName: 'Ban',
            colorBtn: 'bg-indigo-600 hover:bg-indigo-800',
            colorBgIcon: 'bg-indigo-100',
        };
    },
    setup() {
        const ban = (name) => {
            console.log(name)
            if (confirm('Are you sure?')) {
                Inertia.delete(route('users.ban', name))
            }
        }

        return { ban }
    }
}
</script>

<style scoped>

img {
    display: block;
}

.btn {
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

.btn:focus {
    outline: 0.5rem auto rgb(75, 85, 99);
}


.profile {
    padding: 5rem 0;
}

.profile-image {
    float: left;
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
}

.profile-image img {
    border-radius: 50%;
}

.profile-user-settings,
.profile-stats,
.profile-bio {
    float: left;
    width: calc(66.666% - 2rem);
}

.profile-user-settings {
    margin-top: 1.1rem;
}

.btn-edit-follow-unfollow {
    font-size: 1.4rem;
    line-height: 1.8;
    border: 0.1rem solid #4b5563;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-top: 1rem;
    margin-left: 0rem;
}


.profile-stats {
    margin-top: 2.3rem;
}

.profile-stats li {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
}

.profile-stats li:last-of-type {
    margin-right: 0;
}

.profile-bio {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2.3rem;
}

/* Loader */

.loader {
    width: 5rem;
    height: 5rem;
    border: 0.6rem solid #999;
    border-bottom-color: transparent;
    border-radius: 50%;
    margin: 0 auto;
    animation: loader 500ms linear infinite;
}

/* Media Query */

@media screen and (max-width: 46rem) {
    .profile {
        display: flex;
        flex-wrap: wrap;
        padding: 4rem 0;
    }

    .profile-image img {
        width: 7.7rem;
    }

    .profile-user-settings {
        flex-basis: calc(100% - 10.7rem);
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    .btn-edit-follow-unfollow {
        order: 1;
        padding: 0;
        text-align: center;
        margin-top: 1rem;
    }

    .btn-edit-follow-unfollow {
        margin-left: 0;
    }

    .profile-bio {
        font-size: 1.4rem;
        margin-top: 1.5rem;
    }

    .btn-edit-follow-unfollow,
    .profile-bio,
    .profile-stats {
        flex-basis: 100%;
    }

    .profile-stats {
        order: 1;
        margin-top: 1.5rem;
    }

    .profile-stats ul {
        display: flex;
        text-align: center;
        padding: 1.2rem 0;
        border-top: 0.1rem solid #dadada;
        border-bottom: 0.1rem solid #dadada;
    }

    .profile-stats li {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
    }

    .profile-stat-count {
        display: block;
    }
}

/* Spinner Animation */

@keyframes loader {
    to {
        transform: rotate(360deg);
    }
}

@supports (display: grid) {
    .profile {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 3rem;
        align-items: center;
    }

    .profile-image {
        grid-row: 1 / -1;
    }

    .profile-image,
    .profile-user-settings,
    .profile-stats,
    .profile-bio
    {
        width: auto;
        margin: 0;
    }

    @media (max-width: 46rem) {
        .profile {
            grid-template-columns: auto 1fr;
            grid-row-gap: 1.5rem;
        }

        .btn-edit-follow-unfollow,
        .profile-stats,
        .profile-bio {
            grid-column: 1 / -1;
        }
    }
}


</style>

