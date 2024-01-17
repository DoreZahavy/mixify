<template>
  <q-page padding>
    <q-banner rounded v-if="mixtape">
      <template v-slot:avatar>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 250px; height: 250px">
      </template>
      <p>Playlist</p>
      <h2>{{ mixtape.name }}</h2>
      <small>{{ mixtape.desc }}</small>
      <p ><q-icon name="sound"></q-icon> Made By {{ mixtape.createdBy?.nickname }}</p>
    </q-banner>
   
    <q-list>
      <q-item clickable v-ripple v-for="song in mixtape.songs" :key="song.id">
        <q-item-section avatar>
          <q-avatar>
            <img :src="song.imgUrl" alt="song image">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ song.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    
    <q-label>Let's find something for your playlist</q-label>
    <q-input outlined debounce="700" v-model="searchQuery" placeholder="Placeholder" dense />
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
          <q-btn outline rounded color="primary" label="Add" @click="onAddSong(song)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { youtubeService } from 'src/services/youtube.service';
import { mixtapeService } from 'src/services/mixtape.service';
import { utilService } from 'src/services/util.service';
import { useMixtapeStore } from 'src/stores/mixtape-store';

export default {
  name: 'MixtapeDetails',
  setup() {
    const mixtape = ref({});
    const searchQuery = ref('');
    const songs = ref([])

    const route = useRoute();
    const mixtapeStore = useMixtapeStore()
    console.log('mixtape:', mixtape)

    const mixtapeId = route.params.id

    watch(searchQuery, () => {
      searchSongs()
    })

    onMounted(async () => {
      try {
        mixtape.value = await mixtapeService.get(mixtapeId)
        console.log('mixtape:', mixtape.value)
      } catch (err) {
        console.error(err)
      }
    })

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
        
        const updatedMixtape = await mixtapeService.save({ ...mixtape.value, songs:songs.length? [song, ...mixtape.value.songs]:[song] })
        mixtape.value = updatedMixtape
        // const updatedMixtape = await mixtapeStore.saveMixtape({ ...mixtape.value, songs:songs.length? [song, ...mixtape.value.songs]:[song] })
        // mixtape.value = updatedMixtape
      } catch (err) {
        console.log('err:', err)
      }
    }
    return {
      searchQuery,
      // debouncedSearchSongs,
      mixtape,
      songs,
      onAddSong


    }
  }
}
</script>
