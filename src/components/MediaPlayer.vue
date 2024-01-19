<template>
  <section class="player-bar q-my-md">
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar rounded>

          <img :src="currSong.imgUrl" alt="song image">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ currSong.title }}</q-item-label>
        <!-- <q-item-label caption>Mixtape * {{ mixtape.createdBy?.nickname }}</q-item-label> -->
      </q-item-section>
    </q-item>

    <div class="media-player ">
      <div :id="playerId"></div>
      <!-- <div class="controls flex"> -->
        <!-- <q-icon name="chevron_left"></q-icon> -->
        <!-- <q-icon name="chevron_right"></q-icon> -->
      <!-- </div> -->
      <q-icon @click="playPause" size="32px" :name="isPlaying ? 'pause_circle' : 'play_circle'"></q-icon>
      <div class="progress-container">
        <span class="time-label">{{ formatTime(currTime) }}</span>
        <q-slider v-model="progress" class="time-slider q-mx-md" @click.native="seekTo" :min="0" :max="100"
          color="green" />
        <span class="time-label">{{ formatTime(totalDuration) }}</span>
      </div>
    </div>
    <div class="right-side">
      <q-icon name="volume_off"></q-icon>
      <q-slider v-model="volume" class="volume-slider q-mx-sm" @change.native="setVolume" />
      <q-icon name="volume_up"></q-icon>
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
    const currSong = computed(() => playerStore.getCurrSong);
    // const currVideoId = computed(() => playerStore.getCurrVideoId);
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

    const seekTo = (ev) => {
      const slider = ev.target
      const seekPosition = (ev.offsetX / slider.offsetWidth) * player.getDuration()
      player.seekTo(seekPosition)
    };

    const onPlayerReady = (ev) => {
      player = ev.target
      totalDuration.value = player.getDuration()
    };

    const onPlayerStateChange = (ev) => {

      if (ev.data === YT.PlayerState.PLAYING) {
        console.log('playing')
        updateProgress();
      } else if (ev.data === YT.PlayerState.BUFFERING) {
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

    const formatTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const remainingSeconds = Math.floor(secs % 60);
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
          videoId: currSong.value.id,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };
    });


    watch(currSong, (newSong) => {
      if (player) {
        // player.loadVideoById(newVideoId)
        player.loadVideoById(newSong.id)

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
      currTime,
      currSong
    }
  }
})
</script>

<style scoped lang="scss">
.player-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  .media-player{
    display: flex;
    flex-direction: column;
    align-items: center;

    
    .progress-container {
      display: flex;
      
      align-items: center;
      
      .time-slider {
        width: 240px;
      }
    }
  }

  .right-side {
    display: flex;
    align-items: center;

    .volume-slider {
      width: 100px;
    }

  }
}

.time-label {
  // margin: 0 8px;
}</style>