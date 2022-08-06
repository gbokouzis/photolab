<template>
    <form id="profile-form" class="" @submit.prevent="submit">
        <div class="relative inline-block h-40 w-40">
            <input type="file" accept="image/*" class="hidden" ref="file" @input="form.avatar = $event.target.files[0]" @change="change">
            <img v-if="profileImg" :src="src" alt="Avatar" class="h-40 w-40 object-cover rounded-full">
            <img v-else :src="src" alt="Avatar" class="h-40 w-40 object-cover rounded-full">
            <div class="absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex items-center justify-center">
                <!-- <button v-if="file" @click="remove()" type="button" class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(40,40,40,1)"/></svg>
                </button> -->
                <div v-if="form.avatar">
                    <button v-if="file" @click="remove(), form.avatar= !form.avatar" type="button" class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(40,40,40,1)"/></svg>
                    </button>
                    <button v-if="file" type="submit" class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>
                    </button>
                </div>
                <button v-else @click="browse()" type="button" class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="rgba(40,40,40,1)"/></svg>
                </button>
            </div>
        </div>
        <!-- <form>
            <div v-if="file" form="profile" :loading="form.processing" class="w-full mx-auto flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(40,40,40,1)"/></svg>
            </div>
        </form> -->
    </form>
    <!-- <form id="profile-form" class="p-5" @submit.prevent="submit">
        <div class="relative inline-block">
            <input type="file" accept="image/*" class="hidden" ref="file" @change="change">
            <img :src="src" alt="Avatar" class="h-full w-full rounded-full object-cover">
            <div class="absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex items-center justify-center">
                <button @click="browse()" type="button" class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="rgba(40,40,40,1)"/></svg>
                </button>
                <button v-if="value" @click="remove()" type="button" class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L19.586 21zm-14-14H4v12h13.586l-2.18-2.18A5.5 5.5 0 0 1 7.68 9.094L5.586 7zm3.524 3.525a3.5 3.5 0 0 0 4.865 4.865L9.11 10.525zM22 17.785l-2-2V7h-3.828l-2-2H9.828l-.307.307-1.414-1.414L9 3h6l2 2h4a1 1 0 0 1 1 1v11.786zM11.263 7.05a5.5 5.5 0 0 1 6.188 6.188l-2.338-2.338a3.515 3.515 0 0 0-1.512-1.512l-2.338-2.338z" fill="rgba(40,40,40,1)"/></svg>
                </button>
            </div>
        </div>
    </form> -->
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-vue3'

export default {
    props: {
        user: Object,
        profileImg: Object,
    },
    data() {
        return {
            src: null,
            file: null,
            img: '/storage/images/profile_image.png',
            // form: {
            //     image: null,
            // }
            // form: {
            //     image: null,
            // }
        }
    },
    mounted() {
        if (this.profileImg)   {
            this.src = this.profileImg.path
            this.file = null
        } else {
            this.src = this.img
        }
            
    },
    methods: {
        browse() {
            this.$refs.file.click()
            console.log('change', this.src, this.file)
        },
        remove() {
            if (this.profileImg)   {
                this.src = this.profileImg.path
            } else {
                this.src = this.img
            }
            this.file = null
            // this.$emit('input', this.file)
            console.log('change', this.src, this.file)

        },
        change(e) {
            this.file = e.target.files[0]
            // this.$emit('input', this.file)
            let render = new FileReader()
            render.readAsDataURL(this.file)
            render.onload = (e) => {
                this.src = e.target.result
            }
            // this.form.image = this.file

            console.log('change', this.src, this.form, this.file)

        },
        // submit() {
        //     // console.log('submitting', this.form)
        //     Inertia.post(`/users/avatar`, {
        //         _method: 'put',
        //         avatar: this.file,
        //     })
        // submit() {
        //     // console.log('submitting', this.form)
        //     this.form.post('/users/avatar', {
        //         onError: (e) => {
        //             console.log(e)
        //         }
        //     })
        // }
        // }
    },
    setup() {
        const form = useForm({
            avatar: null,
        })

        const submit = () => {
            console.log(form)
            form.post('/users/avatar', {
                form,
                onSuccess: () => form.reset('avatar')
            })
        }

        return { form, submit }
    },
    

}
</script>

<style>

</style>