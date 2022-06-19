<template>
<div class="chat-app">
  <div class="flex">
    <div class="w-14 h-screen bg-slate-50 flex flex-col items-center justify-between space-y-4">
      <div class="pt-4 flex-none">
        <a>
          <img src="../assets/logo.jpg" class="w-8 h-8 object-cover" />
        </a>
      </div>
      <div class="flex flex-col flex-none">
        <a class="cursor-pointer p-2 mt-4 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" @click='changeSelected(0)' >
          <svg class="w-6 h-6 " fill="none" :stroke="`${selected == 0 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </a>
        <a class="cursor-pointer p-2 mt-4 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" @click='changeSelected(1)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 1 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </a>
        <a class="cursor-pointer p-2 mt-4 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" @click='changeSelected(2)'>
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 2 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
        </a>
        <a class="cursor-pointer p-2 mt-4 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" @click='changeSelected(3)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 3 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </a>
        <a class=" cursor-pointer p-2 mt-4 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" @click='changeSelected(4)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 4 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </a>
      </div>
      <div class="pb-4 ">
        <a class="cursor-pointer" @click='changeSelected(5)' >
          <svg class="w-6 h-6" fill="none" :stroke="`${selected == 5 ? '#028dde': '#a6a6a6'}`" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </a>
      </div>
    </div>
    <div class="w-72 h-screen bg-gray-100 flex flex-col px-3 py-3 space-y-3 ">
      <div class="text-xl text-left font-bold">Chats</div>
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
              <div v-if="contact.online" class="absolute w-4 h-4 left-5 top-6 bg-white rounded-full flex justify-center items-center">
                <div class="w-2 h-2 rounded-full" :class="`${contact.online ? 'bg-green-500': ''}`"></div>
              </div>
            </div>
            <div class="text-sm flex-grow text-gray-500 truncate  flex-auto">{{contact.name}}</div>
          </a>
        </div>
      </div>
      <div class="flex flex-col space-y-3 overflow-y-auto h-full mb-3">
        <div class="flex bg-slate-50 rounded-md p-3 justify-center relative shadow-sm" v-for='(contact, index) in state.contactList' :key='index'>
          <div class="w-1/5 flex-none relative">
            <img class="w-10 h-10 object-cover rounded-full" src="../assets/logo.jpg" />
            <div v-if="contact.online" class="absolute w-4 h-4 right-0 bottom-0 bg-white rounded-full flex justify-center items-center">
                <div class="w-2 h-2 rounded-full" :class="`${contact.online ? 'bg-green-500': ''}`"></div>
            </div>
          </div>
          <div class="w-4/5 flex-grow flex flex-col space-y-1">
            <div class="flex flex-row justify-between items-center">
              <div class="text-sm font-bold text-black-500 truncate">{{contact.name}}</div>
              <div class="text-xs text-gray-300 font-medium flex-none">04:00 PM</div>
            </div>
            <div class="text-sm text-gray-500 text-left truncate">Hi, I How are you!!!</div>
          </div>
          <div v-if="contact.unread > 0" class="w-4 h-4 top-0 right-0 rounded-full absolute text-xs text-white" style="background-color: #028dde">{{contact.unread}}</div>
        </div>
      </div>
    </div>
    <div class="flex-grow h-screen bg-slate-50 flex flex-col overflow-y-hidden">
      <div class="w-full h-16  flex justify-between px-8 py-2 border border-b">
        <div class="flex justify-center space-x-3">
          <div class="flex-none relative">
            <img class="w-10 h-10 object-cover rounded-full" src="../assets/logo.jpg" />
            <div class="absolute w-4 h-4 right-0 bottom-0 bg-white rounded-full flex justify-center items-center">
                <div class="w-2 h-2 rounded-full" :class="`${true ? 'bg-green-500': ''}`"></div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="text-sm font-bold text-black-500 truncate">{{state.contactList[0].name}}</div>
            <div class="text-sm text-gray-500 text-left truncate">online</div>
          </div>
        </div>
        <div class="flex justify-center items-center space-x-3">
          <a class="cursor-pointer p-2 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" >
             <svg class="w-6 h-6 flex-none cursor-pointer" fill="none" stroke="#a6a6a6"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </a>
          <a class="cursor-pointer p-2 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" >
            <svg class="w-6 h-6" fill="none" stroke="#a6a6a6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
          </a>
        </div>
      </div>
      <div class="w-full flex-grow flex-auto  bg-slate-50 overflow-y-auto p-3 " >
        <div class="flex flex-col space-y-4">
          <div v-for='(message, index) in  state.contactList[0].messages' :key='message.id'>
            <div class="flex justify-start items-end space-x-3" v-if="message.sender !== state.currentUser.name">
              <div class="flex-none relative" v-if=" state.contactList[0].messages.length-1 === index  || state.contactList[0].messages.length > index+1 &&
                state.contactList[0].messages[index+1].sender === state.currentUser.name">
                <img class="w-10 h-10 object-cover rounded-full" src="../assets/logo.jpg" />
                <div class="absolute w-4 h-4 right-0 bottom-0 bg-white rounded-full flex justify-center items-center">
                  <div class="w-2 h-2 rounded-full" :class="`${true ? 'bg-green-500': ''}`"></div>
                </div>
              </div>
              <div class="ml-10" v-else></div>
              <div class="w-3/6 bg-gray-100 p-4 text-gray-500 rounded-tl-lg rounded-tr-lg rounded-br-lg" >{{message.content}}</div>
            </div>
            <div class="flex justify-end items-end space-x-3" v-else>
              <div class="w-3/6 p-4 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg" style="background-color: #028dde">{{message.content}}</div>
              <div class="flex-none relative" v-if="state.contactList[0].messages.length-1 === index ||  state.contactList[0].messages.length > index+1 &&
                state.contactList[0].messages[index+1].sender !== state.currentUser.name">
                <img class="w-10 h-10 object-cover rounded-full" src="../assets/logo.jpg" />
                <div class="absolute w-4 h-4 right-0 bottom-0 bg-white rounded-full flex justify-center items-center">
                  <div class="w-2 h-2 rounded-full" :class="`${true ? 'bg-green-500': ''}`"></div>
                </div>
              </div>
              <div class="mr-10" v-else></div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-16 flex bg-slate-50 items-center justify-start space-x-3 px-3">
          <button class="flex-none flex flex-col items-center justify-center cursor-pointer outline-none w-10 h-10 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" >
            <svg class="w-5 h-5" fill="none" stroke="#a6a6a6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          </button>
          <textarea  class="flex-grow outline-none border rounded p-2 shadow-lg  focus:border-blue-600  hover:border-blue-600 w-full h-12" ></textarea>
          <button class="flex-none flex flex-col items-center justify-center cursor-pointer outline-none w-10 h-10 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" >
            <svg class="w-5 h-5" fill="none" stroke="#a6a6a6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
          </button>
          <button class="flex-none flex flex-col items-center justify-center cursor-pointer outline-none w-10 h-10 hover:bg-gray-200 hover:rounded-full focus:bg-gray-200 focus:rounded-full" >
            <svg class="w-5 h-5" fill="none" stroke="#a6a6a6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
          <button class="flex-none flex flex-col bg-blue-500 hover:bg-blue-700 items-center justify-center cursor-pointer outline-none w-10 h-10 rounded-full" style="transform: rotate(45deg)" >
            <svg class="w-5 h-5" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
      </div>
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
        {
          name: 'Sourav',
          online: true,
          unread: 2,
          messages: [
            {
              id: 1,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'Who’s that woman in a red dress next to Reema?',
              time: '09:00',
              read: true
            },
            {
              id: 2,
              sender: 'Raunak',
              receiver: 'Sourav',
              content: 'That’s her friend Sourav. Didn’t you meet her at the picnic last month?',
              time: '05:00',
              read: true
            },
            {
              id: 3,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'No, I couldn’t make it to the picnic, my mother was not well at that time.',
              time: '05:01',
              read: true
            },
            {
              id: 4,
              sender: 'Raunak',
              receiver: 'Sourav',
              content: 'Oh! Yes, I forgot that. Then let me introduce you to her now. Sourav, this is my friend Sourav.',
              time: '05:04',
              read: true
            },
            {
              id: 5,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'Hi, Sourav. Nice to meet you, hope you are doing fine.',
              time: '05:04',
              read: true
            },
            {
              id: 6,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'Yes, hope you are well too. Would you like to have some coffee?',
              time: '05:04',
              read: true
            },
            {
              id: 7,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'Sure, let’s go get and have two cups of espresso.',
              time: '05:04',
              read: true
            },
            {
              id: 8,
              sender: 'Raunak',
              receiver: 'Sourav',
              content: 'Hi, Sourav, it’s Raunak. How are you? What are your plans for today?',
              time: '05:04',
              read: true
            },
            {
              id: 9,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'Oh, hi, Raunak! I was just thinking about giving you a call. Well, I am free today, what about you?',
              time: '07:03',
              read: false
            },
            {
              id: 10,
              sender: 'Sourav',
              receiver: 'Raunak',
              content: 'That’s nice. I was wondering if you’d like to go to a dinner party tonight',
              time: '07:04',
              read: false
            }
          ]
        },
        {
          name: 'Sam',
          online: false,
          unread: 0,
          messages: [
            {}
          ]
        },
        {
          name: 'Williams',
          online: true,
          unread: 1,
          messages: [
            {}
          ]
        },
        {
          name: 'James',
          online: true,
          unread: 0,
          messages: [
            {}
          ]
        },
        {
          name: 'Jessy',
          online: false,
          unread: 0,
          messages: [
            {}
          ]
        },
        {
          name: 'Hena',
          online: true,
          unread: 0,
          messages: [
            {}
          ]
        }
      ],
      currentUser: {
        name: 'Raunak',
        online: true,
        unread: 0
      }
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
