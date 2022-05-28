<template>
  <div class="div_chat_app">
    <div class="flex flex-row h-screen">
      <div class="flex flex-col justify-between items-center w-16 bg-gray-200 p-2">
        <div class="flex flex-col space-y-4">
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
        <div class="flex flex-col space-y-4">
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div class="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
      </div>
      <div class="w-64 bg-white-200 p-2 flex flex-col flex-none space-y-4">
        <div class="flex flex-row justify-between items-center mb-4">
          <h1 class="font-semibold text-2xl">Inbox</h1>
          <svg class="flex-none w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <div class="h-64 bg-red-200"></div>
        <div class="h-64 bg-red-200"></div>
      </div>
      <div class="flex flex-row flex-auto bg-white-200 rounded-tl-xl border-l shadow-xl">
        <div class="flex flex-col  w-1/5">
          <div class="flex-none  bg-red-200 h-24">top</div>
          <div class="flex-auto overflow-y-auto">
            <a class="block border-b" v-for='index in 10' :key='index'>
              <div :class="{'border-transparent hover:bg-gray-100' : index != 1}" class=" border-blue-500 border-l-2 p-2 space-y-2">
                <div class="flex flex-row  items-center space-x-2">
                  <svg class="flex-none w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <strong class="flex-grow mr-1 text-sm text-left">Primz</strong>
                  <span class="text-sm text-gray-400">3min</span>
                </div>
                <div class="flex flex-row items-center space-x-1">
                  <svg class="flex-none w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <div class="flex-grow truncate">Hi optimus, How are you </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="w-3/5 border-l border-r border-gray-400 flex flex-col">
          <div class="flex-none h-16 flex flex-row items-center justify-between p-2 border-b">
            <div class="flex flex-col space-y-1">
              <strong class="text-left">Kasthoori</strong>
              <input class="outline-none text-sm placeholder-gray-400 border-b border-dashed border-gray-500" type="text" placeholder="Add conversation title" />
            </div>
            <div class="flex flex-row items-center space-x-4">
              <svg class="flex-none w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
              <svg class="flex-none w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              <svg class="flex-none w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              <svg class="flex-none w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <svg class="flex-none w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
          </div>
          <div class="flex-none flex-auto overflow-y-auto"
          style="background-image: url(https://www.whatsappimages.in/wp-content/uploads/2022/03/Beautiful-White-Background-Images-pics-for-download-4.jpg)">
          <div v-for='index in 20' :key='index'>
          <div v-if="index%10 == 0" class="flex flex-row justify-center text-sm text-gray-400">You assigned this conversation 5days ago</div>
          <div class="flex flex-row space-x-2 p-2" :class="{'flex-row-reverse space-x-reverse' :index%2 == 0  }">
            <svg class="flex-none w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div class="flex flex-col items-start">
              <div class="rounded p-5" :class="`${index%2 == 0 ? 'bg-green-200': 'bg-red-200'}`">How are you</div>
              <div class="text-sm text-gray-400">3hr ago</div>
            </div>
          </div>
          </div>
          </div>
          <div class="flex-none h-24 p-2">
            <textarea class="outline-none border rounded p-2 shadow-lg focus:border-blue-600  hover:border-blue-600 w-full h-full">Message</textarea>
          </div>
        </div>
        <div class="w-1/5 bg-green-100 overflow-y-auto flex flex-col">
          <div class="flex-none h-64 border-b border-green-400"></div>
          <div class="flex flex-col space-y-3 p-2">
            <div class="flex flex-none items-center justify-center h-64 bg-red-200 p-2" v-for='index in 10' :key='index'>
            Content
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatView',
  components: {

  }
}
</script>
