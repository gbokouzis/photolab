<template>
    <!-- <h1>
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
    
    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-md">
            <form @submit.prevent="submit">
                
                image
                <div class="mb-5">
                    <input type="file" @input="form.image = $event.target.files[0]" />
                    <div v-if="form.errors.image" v-text="form.errors.image" 
                        class="text-red-500 text-xs mt-1" />
                </div>
                <div>
                    <button
                        :disabled="form.processing"
                        type="submit"
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div> -->

<header>

    <!-- <div id="profile-form" class="p-5" @submit.prevent="submit">
        <profile-avatar class="h-40 w-40 rounded-full"  v-model="form.avatar" :defaulte-src="img"></profile-avatar>
    </div> -->

    
    <div class="max-w-6xl mx-auto px-4">
        <div class="profile mr-4 lg:mr-16">

            <div class="profile-image">
                <ProfileAvatar :user="user" :profileImg="profileImg" />
			</div>
            
			<div class="profile-user-settings">
				<h1 class="inline-block text-4xl font-normal text-neutral-700">
                    {{ $page.props.auth.user.username }} <span class="font-light">@{{ $page.props.auth.user.name }}</span>
                </h1>

				<button class="btn btn-edit-follow-unfollow">Edit Profile</button>
				<!-- <button class="btn btn-edit-follow-unfollow">Follow</button>
				<button class="btn btn-edit-follow-unfollow">Unfollow</button> -->
			</div>

			<div class="profile-stats">
				<ul>
					<li><span class="profile-stat-count">164</span> posts</li>
					<li><span class="profile-stat-count">188</span> followers</li>
					<li><span class="profile-stat-count">206</span> following</li>
				</ul>
			</div>

			<div class="profile-bio">
				<p>
                    <span class="">
                        Jane Doe
                    </span> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                </p>
			</div>
		</div>
	</div>
</header>

<main>
	<div class="mx-auto px-4">
        <Masonry :posts="posts" />
		<!-- <div class="loader"></div> -->
	</div>
</main>


</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Masonry from '../../Components/Masonry.vue'
import ProfileAvatar from '../../Components/ProfileAvatar.vue'

export default {
    components: {
        Masonry,
        ProfileAvatar
    },
    props: {
        user: Object,
        posts: Object,
        profileImg: Object
    },
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

/* Profile Section */

.profile {
    padding: 5rem 0;
}

.profile::after {
    content: "";
    display: block;
    clear: both;
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

/* .profile-user-name {
    display: inline-block;
    font-size: 2.8rem;
    font-weight: 300;
} */

.btn-edit-follow-unfollow {
    font-size: 1.4rem;
    line-height: 1.8;
    border: 0.1rem solid #4b5563;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-top: 1rem;
    margin-left: 2rem;
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

    .profile::after {
        display: none;
    }

    .profile-image,
    .profile-user-settings,
    .profile-bio,
    .profile-stats {
        float: none;
        width: auto;
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

/*

The following code will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox & floated styling. 

*/

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

        .profile-image {
            grid-row: 1 / 2;
        }

        .profile-user-settings {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
        }

        .btn-edit-follow-unfollow,
        .profile-stats,
        .profile-bio {
            grid-column: 1 / -1;
        }

        .profile-user-settings,
        .btn-edit-follow-unfollow,
        .profile-settings-btn,
        .profile-bio,
        .profile-stats {
            margin: 0;
        }
    }
}


</style>

