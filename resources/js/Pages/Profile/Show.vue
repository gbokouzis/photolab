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
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props: {
        user: Object
    },
    setup() {
        let form = useForm({
            image: null,
        })

        let submit = () => {
            // console.log(form)
            // form.post('/posts', form)
        }

        return { form, submit }
    }
}
</script>

<style>

</style>

