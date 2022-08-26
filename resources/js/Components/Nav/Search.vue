<template>
    <!-- Search -->
    <div class="flex w-full items-center">
        <div class="flex flex-1 h-10 w-28 pl-2">

            <button @click="selectShow = !selectShow"  
                class=" flex-shrink-0 z-10 inline-flex items-center px-2 text-sm font-medium text-center text-gray-900 bg-neutral-50 border border-gray-300 rounded-l-full hover:bg-neutral-100" 
                type="button"
            >
                <span class="hidden sm:inline-block pl-2">
                    {{ selectSearch }}
                </span>
                <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>

            
            <div v-if="selectShow" class="origin-top-left mt-10 absolute z-10 w-24 rounded-xl divide-y shadow bg-white" 
                role="menu" tabindex="-1"
            >
                <ul class="py-1 text-sm text-gray-700">
                    <li>
                        <button @click="selectSearch = 'Users'" type="button" class="inline-flex py-2 px-4 w-full hover:text-neutral-900 hover:bg-gray-100">Users</button>
                    </li>
                    <li>
                        <button @click="selectSearch = 'Tags'" type="button" class="inline-flex py-2 px-4 w-full hover:text-neutral-900 hover:bg-gray-100">Tags</button>
                    </li>
                    <li>
                        <button @click="selectSearch = 'Location'" type="button" class="inline-flex py-2 px-4 w-full hover:text-neutral-900 hover:bg-gray-100">Location</button>
                    </li>
                </ul>
            </div>

            
            <div class="relative w-full">
                <input @focus="showSearchData = true" @focusout="showSearchData = false" v-model="search" type="text" :placeholder="'Search ' + selectSearch" 
                    class="block focus:outline-0 h-10 px-2 w-full z-20 text-sm rounded-r-full border-l-gray-50 border-l-2 border border-gray-300"      
                >
                <div v-if="showSearchData" class="flex justify-center overflow-auto mr-12">
                    <ul class="z-10 overflow-auto max-h-40 bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                        <li v-if="selectSearch === 'Users'" 
                            v-for="item in searchData" :key="item.id"
                            class="flex items-center px-6 border-t border-gray-200 w-full hover:bg-gray-100"
                        >
                            <p @mousedown="showUser(item.name)" 
                                class="cursor-pointer w-full py-2"
                            >
                                {{ item.username }} <span class="pl-1">(@{{ item.name }})</span>
                            </p>
                        </li>
                        <li v-if="selectSearch === 'Tags'" 
                            v-for="item in searchData" :key="item.id"
                            class="flex items-center px-6 border-t border-gray-200 w-full hover:bg-gray-100"
                        >
                            <p @mousedown="showTag(item.name)" 
                                class="cursor-pointer w-full py-2"
                            >
                                {{ item.name }}
                            </p>
                        </li>
                        <li v-if="selectSearch === 'Location'" 
                            v-for="item in searchData" :key="item.id"
                            class="flex items-center px-6 border-t border-gray-200 w-full hover:bg-gray-100"
                        >
                            <p @mousedown="showLocation(item.country_city)" 
                                class="cursor-pointer w-full py-2"
                            >
                                {{ item.country }} {{ item.city }}
                            </p>
                        </li>
                        <li v-if="search&&!searchData.length"
                            class="px-6 py-2 border-t border-gray-200 w-full hover:bg-gray-100 font-semibold"
                        >
                            No results found!
                        </li>
                    </ul>
                </div>
                <button type="submit" class="absolute top-0 right-0 px-4 h-10 text-sm font-medium rounded-r-full border border-gray-300 ">
                    <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default {
    data() {
        return {
            selectSearch: 'Users',
            selectShow: false,
            showSearchData: false,
            search: null,
            searchData: []
        }
    },

    watch: {
        search() {
            // console.log('changed ' + value)
            if(this.search != null && this.search.length > 0) {
                if (this.selectSearch === 'Users') {
                    this.getUsers()
                } else {
                    this.getTags()
                }
            } else {
                this.searchData = []
            }
        }
    },
    methods: {
        async getUsers() {
            await axios.get('/search/users', { params: { q: this.search } })
                .then(res => this.searchData = res.data)
        },
        async getTags() {
            await axios.get('/search/tags', { params: { q: this.search } })
                .then(res => this.searchData = res.data)
        },
        async getTags() {
            await axios.get('/search/locations', { params: { q: this.search } })
                .then(res => this.searchData = res.data)
        },
        click() {
            console.log('fgfgf')
        }
    },
    setup() {
        const showUser = (userName) => {
            Inertia.get(route('users.show', userName))
        }
        const showTag = (tagName) => {
            Inertia.get(route('tags.show', tagName))
        }
        const showLocation = (location) => {
            // console.log(location)
            Inertia.get(route('locations.show', location))
        }

        return { showUser, showTag, showLocation }
    }

}

</script>

<style>

</style>