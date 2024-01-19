<template>
  <q-page padding>
    <q-banner rounded v-if="mixtape" @click="isModalOpen = true">
      <template v-slot:avatar>

        <img :src="mixtape.imgUrl" alt="mixtape image" style="width: 250px; height: 250px">
      </template>
      <p>Mixtape</p>
      <h2 class="text-bold q-my-lg">{{ mixtape.name }}</h2>
      <small>{{ mixtape.desc }}</small>
      <p class=" q-mt-sm"><q-icon name="music_note" size="20px"></q-icon> Made By {{ mixtape.createdBy?.nickname }}</p>
    </q-banner>

    <q-list class="q-mb-lg">
      <q-item v-ripple v-for="song in mixtape.songs" :key="song.id">
        <q-item-section avatar>
          <q-icon @click="onPlaySong(song)" name="play_circle" class="cursor-pointer"></q-icon>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="song.imgUrl" alt="song image">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ song.title }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-icon name="remove_circle_outline" color="primary" size="20px" class="cursor-pointer" @click="onRemoveSong(song.id)"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>



    <q-label>Let's find something for your mixtape</q-label>
    <q-input  class="q-mb-md" outlined debounce="700" v-model="searchQuery" placeholder="Search for songs" dense />


    <q-list class="search-results">
      <q-item clickable v-ripple v-for="song in songs" :key="song.id">
        <q-item-section avatar>
          <q-avatar>

            <img :src="song.imgUrl" alt="song image">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ song.title }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-icon  size="20px" color="primary" name="add_circle_outline" @click="onAddSong(song)" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="isModalOpen" persistent>
      <q-card>
        <q-card-section style="min-width: 350px">

          <div class="text-h6">Edit details</div>
        </q-card-section>

        <q-card-section>
          <label @drop.prevent="handleFile" @dragover.prevent>
            <input type="file" @change="handleFile" hidden>
            <img :src="mixtape.imgUrl" alt="mixtape image" style="width: 250px; height: 250px">
          </label>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="mixtape.name" autofocus @keyup.enter="onSaveMixtape" />
          <q-input dense v-model="mixtape.desc" autogrow @keyup.enter="onSaveMixtape" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Delete" @click="onRemoveMixtape" v-close-popup />
          <q-btn flat label="Save" @click="onSaveMixtape" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { youtubeService } from 'src/services/youtube.service';
import { mixtapeService } from 'src/services/mixtape.service';
import { utilService } from 'src/services/util.service';
import { useMixtapeStore } from 'src/stores/mixtape-store';
import { usePlayerStore } from 'stores/player-store';
import { uploadImg } from 'src/services/upload.service';

export default {
  name: 'MixtapeDetails',
  setup() {
    const mixtape = ref({});
    const searchQuery = ref('');
    const songs = ref([])
    const isModalOpen = ref(false)

    const route = useRoute();
    const router = useRouter();

    const mixtapeStore = useMixtapeStore()
    const playerStore = usePlayerStore()
    console.log('mixtape:', mixtape)

    const mixtapeId = route.params.id

    watch(searchQuery, () => {
      searchSongs()
    })

    watch(() => route.params.id, (newMixtapeId) => {


      loadMixtape(newMixtapeId);

    });

    onMounted(() => {
      loadMixtape(mixtapeId)
      // try {
      //   mixtape.value = await mixtapeService.get(mixtapeId)
      // } catch (err) {
      //   console.error(err)
      // }
    })

    const loadMixtape = async (mixtapeId) => {
      try {
        mixtape.value = await mixtapeService.get(mixtapeId)
      } catch (err) {
        console.error(err)
      }
    }
    const onSaveMixtape = async () => {
      try {

        await mixtapeStore.saveMixtape(mixtape.value)
        isModalOpen.value = false
      } catch (err) {
        console.error(err)
      }
    }
    const onRemoveMixtape = async () => {
      try {

        await mixtapeStore.removeMixtape(mixtape.value._id)
        router.push('/')
      } catch (err) {
        console.error(err)
      }
    }

    const handleFile = async (ev) => {
      const { url } = await uploadImg(ev)
      mixtape.value.imgUrl = url
    }

    const onPlaySong = (song) => {

      playerStore.setCurrSong(song)
      // playerStore.setCurrVideoId(videoId)
    }

    const searchSongs = async () => {
      try {
        songs.value = await youtubeService.queryYT(searchQuery.value);
        console.log('songs:', songs)
      } catch (error) {
        console.error('Error searching songs:', error);
      }
    }

    // const debouncedSearchSongs = utilService.debounce(searchSongs);

    const onAddSong = async (song) => {
      try {

        const updatedMixtape = await mixtapeService.save({ ...mixtape.value, songs: mixtape.value.songs.length ? [song, ...mixtape.value.songs] : [song] })
        mixtape.value = updatedMixtape
        // const updatedMixtape = await mixtapeStore.saveMixtape({ ...mixtape.value, songs:songs.length? [song, ...mixtape.value.songs]:[song] })
        // mixtape.value = updatedMixtape
      } catch (err) {
        console.log('err:', err)
      }
    }
    const onRemoveSong = async (songId) => {
      try {

        const updatedMixtape = await mixtapeService.save({ ...mixtape.value, songs: mixtape.value.songs.filter(s => s.id !== songId) })
        mixtape.value = updatedMixtape

      } catch (err) {
        console.log('err:', err)
      }
    }
    return {
      searchQuery,
      // debouncedSearchSongs,
      mixtape,
      songs,
      onAddSong,
      onRemoveSong,
      onPlaySong,
      handleFile,
      isModalOpen,
      onSaveMixtape,
      onRemoveMixtape


    }
  }
}
</script>
