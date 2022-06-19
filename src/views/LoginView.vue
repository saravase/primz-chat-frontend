<template>
<div class="chat-app">
  <transition>
    <ShowNotif v-if="notification.show" :notification="notification" :show="notification.show" />
  </transition>
  <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <div class="container py-12 px-6 h-full">
      <div class="flex justify-center items-center h-full">
        <div class="flex flex-col items-center space-y-4 py-8 px-4 block bg-white border border-solid border-[#028dde] rounded-md">
        <div class="mb-4 py-1">
          <img class="w-14 h-14 object-cover rounded-full" src="../assets/logo.jpg" />
        </div>
        <div>
          <input type="email" v-model="user.email" name="email" id="email" placeholder="Email" class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " />
        </div>
        <div>
          <input type="password" v-model="user.password" name="password" id="password" placeholder="Password" class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " />
        </div>
        <div class="py-1 mb-12">
          <button @click="signin" class="inline-block px-6 py-2.5 text-white bg-[#028dde]/50 leading-tight font-bold text-xs uppercase rounded shadow-md hover:bg-[#028dde]/100 hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Signin</button>
        </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>

import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'LoginView',
  components: {
  },
  setup: () => {
    const user = reactive({ email: '', password: '' })
    const store = useStore()

    const signin = () => {
      store.dispatch('auth/signin', user)
    }

    const notification = ref(
      computed(() => {
        if (store.state.notification.notification) {
          return store.state.notification.notification
        } else {
          return {
            message: '',
            type: '',
            show: false
          }
        }
      })
    )

    return {
      user,
      signin,
      notification
    }
  }

}
</script>

<style >
</style>
