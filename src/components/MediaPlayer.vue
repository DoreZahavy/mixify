<template>
    <div :id="playerId"></div>

    <q-btn @click="playPause">{{ isPlaying ? 'Pause' : 'Play' }}</q-btn>
    <q-linear-progress :value="progress" class="q-mt-md" @click.native="seekTo" />
    <q-linear-progress v-model="volume" class="q-mt-md" @input="setVolume" />


  </template>

<script>
import { defineComponent,  ref, onMounted, onBeforeUnmount} from 'vue'

export default defineComponent({
  name: 'MediaPlayer',
  components: {
    // QMediaPlayer
  },

  setup () {
    const playerId = 'youtube-player'; // you can customize the player ID
    const progress = ref(0);
    const isPlaying = ref(false);
    const volume = ref(50);
    let player;
    const playPause = () => {
      if (isPlaying.value) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      isPlaying.value = !isPlaying.value;
    };

    const setVolume = () => {
      player.setVolume(volume.value);
    };

    const seekTo = (event) => {
      const progressBar = event.target;
      const seekPosition = (event.offsetX / progressBar.offsetWidth) * player.getDuration();
      player.seekTo(seekPosition);
    };

    const onPlayerReady = (event) => {
      player = event.target;
    };

    const onPlayerStateChange = (event) => {
      // Handle player state changes
    };

    onMounted(() => {
      // Load the YouTube API script
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Setup a global callback for the YouTube API
      window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player(playerId, {
          height: '360',
          width: '640',
          videoId: 'A_MjCqQoLLA', // Replace with your YouTube video ID
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };
    });

    onBeforeUnmount(() => {
      // Cleanup and remove the global callback
      delete window.onYouTubeIframeAPIReady;
    });
  

    return {
      playerId,
      progress,
      isPlaying,
      volume,
      playPause,
      setVolume,
      seekTo
    }
  }
})
</script>