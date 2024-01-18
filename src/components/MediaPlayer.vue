<template>
  <section class="player-bar ">
    <div class="left-side ">prev</div>

    <div class="media-player ">
      <div :id="playerId"></div>
      <div class="controls flex">
        <q-icon name="chevron_left"></q-icon>
        <q-icon @click="playPause" :name="isPlaying ? 'pause_circle' : 'play_circle'"></q-icon>
        <q-icon name="chevron_right"></q-icon>
      </div>
      <div class="progress-container flex">
        <span class="time-label">{{ formatTime(currTime) }}</span>
        <q-slider v-model="progress" @click.native="seekTo" :min="0" :max="100" color="green" />
        <span class="time-label">{{ formatTime(totalDuration) }}</span>
      </div>
    </div>
    <div class="right-side ">

      <q-slider v-model="volume" class="q-mt-md" @change.native="setVolume" />
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { usePlayerStore } from 'stores/player-store.js'

export default defineComponent({
  name: 'MediaPlayer',
  components: {
    // QMediaPlayer
  },

  setup() {
    const playerId = 'youtube-player'; 

    const playerStore = usePlayerStore()
    const currVideoId = computed(() => playerStore.getCurrVideoId);
    const isPlaying = computed(() => playerStore.getIsPlaying);


    const progress = ref(0);
    
    const volume = ref(50);
    const currTime = ref(0);
    const totalDuration = ref(0);
    let player;

    const playPause = () => {
      if (isPlaying.value) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      playerStore.togglePlayPause()

    };

    const setVolume = () => {
      player.setVolume(volume.value);
    };

    const seekTo = (event) => {
      const slider = event.target
      const seekPosition = (event.offsetX / slider.offsetWidth) * player.getDuration()
      player.seekTo(seekPosition)
    };

    const onPlayerReady = (event) => {
      console.log("🚀 ~ onPlayerReady ~ event:", event)
      player = event.target
      totalDuration.value = player.getDuration()
    };

    const onPlayerStateChange = (event) => {

      if (event.data === YT.PlayerState.PLAYING) {
        console.log('playing')
        updateProgress();
      } else if (event.data === YT.PlayerState.BUFFERING) {
        console.log('updating totalDuration old stateChange')
        totalDuration.value = player.getDuration()
      }
    };

    const updateProgress = () => {
      currTime.value = player.getCurrentTime();
      progress.value = (currTime.value / totalDuration.value) * 100;

      if (isPlaying.value) {
        requestAnimationFrame(updateProgress);
      }
    };

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };


  

    onMounted(() => {
     
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
      window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player(playerId, {
          height: '0',
          width: '0',
          videoId: currVideoId.value,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };
    });

   
    watch(currVideoId, (newVideoId) => {
      if (player) {

        player.loadVideoById(newVideoId)
      }
    })

    onBeforeUnmount(() => {
      delete window.onYouTubeIframeAPIReady;
    });


    return {
      playerId,
      progress,
      isPlaying,
      volume,
      playPause,
      setVolume,
      seekTo,
      formatTime,
      totalDuration,
      currTime
    }
  }
})
</script>

<style scoped lang="scss">

.player-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .progress-container {
    display: flex;
   
    align-items: center;

    .q-slider {
      width: 240px;
    }
  }
}

.time-label {
  // margin: 0 8px;
}
</style>