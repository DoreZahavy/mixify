<template>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar class="h-8">
        <MediaPlayer/>
      </q-toolbar>
     
      <q-toolbar class="lt-sm">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </template>

<script>
import { defineComponent } from 'vue'
import MediaPlayer from './MediaPlayer.vue';

export default defineComponent({
  name: 'MainFooter',
  components: {
    MediaPlayer
},

  setup () {
  

    return {
      
    }
  }
})
</script>