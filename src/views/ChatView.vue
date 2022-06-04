<template>
<div class="chat-app">
  <div class="flex">
    <div class="w-14 h-screen bg-white flex flex-col items-center justify-between space-y-4">
      <div class="pt-4 flex-none">
        <a>
          <img src="../assets/logo.jpg" class="w-8 h-8 object-cover" />
        </a>
      </div>
      <div class="flex flex-col flex-none">
        <a class="cursor-pointer p-2   mt-4" @click='changeSelected(0)' >
          <svg class="w-6 h-6 " fill="none" :stroke="`${selected == 0 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </a>
        <a class="cursor-pointer p-2   mt-4" @click='changeSelected(1)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 1 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </a>
        <a class="cursor-pointer p-2  mt-4" @click='changeSelected(2)'>
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 2 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
        </a>
        <a class="cursor-pointer p-2  mt-4" @click='changeSelected(3)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 3 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </a>
        <a class=" cursor-pointer p-2  mt-4" @click='changeSelected(4)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 4 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </a>
      </div>
      <div class="pb-4 flex-none">
        <a class="cursor-pointer" @click='changeSelected(5)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 5 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </a>
      </div>
    </div>
    <div class="w-72 h-screen bg-gray-100 flex flex-col px-3 py-3 space-y-3 ">
      <div class="text-xl text-left">Chats</div>
      <div class="flex flex-row bg-gray-200 justify-between items-center rounded-md p-1">
        <input class="text-sm focus:outline-none w-10/12 bg-gray-200 text-gray-500 p-2" type="text" placeholder="Search for messages or users ..." />
        <div class="w-2/12 flex justify-center items-center">
          <svg class="w-4 h-4 flex-none cursor-pointer" fill="none" stroke="#a6a6a6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
      <div class="h-20 min-h-max">
        <div class=" flex overflow-x-auto space-x-2 bg-slate-100 w-full ">
          <a class="flex flex-col justify-center items-center p-1 w-16 space-y-1" v-for='(contact, index) in state.contactList' :key='index'>
            <div class="relative flex-none">
              <img class="w-8 h-8 object-cover " src="../assets/logo.jpg" />
              <div class="absolute w-3 h-3 right-0 bottom-0 bg-gray-200 rounded-full flex justify-center items-center">
                <div class="w-2 h-2 rounded-full" :class="`${contact.online ? 'bg-green-500': ''}`"></div>
              </div>
            </div>
            <div class="text-sm flex-grow text-gray-500 truncate w-full flex-auto">{{contact.name}}</div>
          </a>
        </div>
      </div>
      <div class="flex flex-col space-y-3 overflow-y-auto h-full mb-3">
        <div class="flex bg-slate-50 rounded-md p-3 justify-center" v-for='(contact, index) in state.contactList' :key='index'>
          <div class="w-1/5 flex-none">
            <img class="w-10 h-10 object-cover rounded-full" src="../assets/logo.jpg" />
          </div>
          <div class="w-4/5 flex-grow flex flex-col space-y-1">
            <div class="flex flex-row justify-between items-center">
              <div class="text-sm font-bold text-black-500 truncate">{{contact.name}}</div>
              <div class="text-xs text-gray-300 font-medium flex-none">04:00 PM</div>
            </div>
            <div class="text-sm text-gray-500 text-left truncate">Hi, I Love you!! I Love you!! I Love you!!</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow h-screen bg-blue-100">
    </div>
  </div>
</div>
</template>

<script>

import { reactive, ref } from 'vue'

export default {
  name: 'ChatView',
  components: {
  },
  setup: () => {
    const selected = ref(2)

    const state = reactive({
      contactList: [
        { name: 'kasthoori', online: true },
        { name: 'saravava', online: false },
        { name: 'kasthoori', online: true },
        { name: 'kasthoori', online: true },
        { name: 'saravava', online: false },
        { name: 'kasthoori', online: true }
      ]
    })

    const changeSelected = (value) => {
      selected.value = value
    }

    return {
      state,
      selected,
      changeSelected
    }
  }

}
</script>

<style >
</style>
