<template>
  <q-page padding>
    <h1>DETAILS!!!</h1>
    <q-label>Let's find something for your playlist</q-label>
    <q-input outlined @input="debouncedSearchSongs" v-model="searchQuery" placeholder="Placeholder" dense />
    <q-list>
      <q-item clickable v-ripple v-for="song in songs" :key="song.id">
        <q-item-section avatar>
          <q-avatar>

            <img :src="song.imgUrl" alt="song image">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ song.title }}</q-item-label>
          <!-- <q-item-label caption>Playlist * {{ mixtape.createdBy.nickname }}</q-item-label> -->
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { youtubeService } from 'src/services/youtube.service';
import { mixtapeService } from 'src/services/mixtape.service';
import { utilService } from 'src/services/util.service';

export default {
  name: 'MixtapeDetails',
  setup() {
    const mixtape = reactive({});
    const searchQuery = ref('');
    const songs = ref([])

    const route = useRoute();
    // console.dir($q)

    const mixtapeId = route.params.id
    // const mixtapeId = ref($q.route.params.id);
    watch(searchQuery, () => {
      debouncedSearchSongs()
    })
    onMounted(async () => {
      try {
        mixtape.value = await mixtapeService.get(mixtapeId)
        console.log('mixtape:', mixtape)
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
    const debouncedSearchSongs = utilService.debounce(searchSongs);
    return {
      searchQuery,
      debouncedSearchSongs,
      mixtape,
      songs


    }
  }
}
</script>
