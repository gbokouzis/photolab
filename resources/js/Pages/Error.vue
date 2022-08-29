<template>
    <div class="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
        <div class="">
            <Link href="/" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(23,23,23,1)"/></svg>
            </Link>
        </div>
        <h1 class="text-9xl font-black text-neutral-100 tracking-widest">
            {{ title.errorCode }}
        </h1>
        <h1 class="text-3xl font-bold text-neutral-100">
            {{ title.message }}
        </h1>
        <p class="mt-4">
            {{ description }}
        </p>
        <button class="mt-5 px-8 py-3 font-medium bg-indigo-600 hover:bg-indigo-700 rounded-lg border border-gray-900">
            <Link href="/">
                Go Home
            </Link>
        </button>
    </div>

</template>
  
  <script>
  export default {
    layout: null,
    props: {
        status: Number,
    },
    computed: {
        title() {
            return {
                503: {
                    errorCode: '503',
                    message: 'Service Unavailable',
                },
                500: {
                    errorCode: '500',
                    message: 'Server Error',
                },
                404: {
                    errorCode: '404',
                    message: 'Not Found',
                },
                403: {
                    errorCode: '403',
                    message: 'Forbidden',
                },
            }[this.status]
        },
        description() {
            return {
                503: 'Sorry, we are doing some maintenance. Please check back soon.',
                500: 'Whoops, something went wrong on our servers.',
                404: 'Sorry, the page you are looking for could not be found.',
                403: 'Sorry, you are forbidden from accessing this page.',
            }[this.status]
        },
    },
  }
  </script>