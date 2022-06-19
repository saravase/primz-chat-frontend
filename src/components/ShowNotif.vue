<template>
    <div class="fixed bottom-10 left-10 rounded-lg z-50 flex items-center space-x-1"
    :class="[
        {'bg-green-400': notiication.type === 'success'},
        {'bg-red-500': notification.type === 'error'}
    ]"
    >
    <p class="text-gray-100 font-semibold p-4">
        {{ notification.message}}
    </p>
    <span @click="hide" class="-ml-8 cursor-pointer text-white font-semibold">clear</span>
    </div>
</template>

<script>
export default {
  props: { notification: Object },
  setup (props) {},
  data () {
    return {}
  },
  methods: {
    hide () {
      this.$store.dispatch('notification/setNotification', {
        message: '',
        type: '',
        show: false
      })
    }
  }
}
</script>
