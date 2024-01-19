<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-drawer show-if-above bordered :mini="drawerMini" :breakpoint="616">

      <q-list>
        <NavLink v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
      <section class="library-container">

        <q-item clickable tag="div" @click="toggleDrawerSize">
          <q-item-section avatar>
            <q-icon name="album" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My library</q-item-label>
            <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
          </q-item-section>
          <q-item-section>
            <q-icon name="add" size="24px" @click.prevent="onAddMixtape"></q-icon>
          </q-item-section>
        </q-item>
        <LibraryList v-if="mixtapes" :mixtapes="mixtapes" />
      </section>

    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <MainFooter />
    <!-- <q-footer elevated class="bg-grey-8 text-white">
    

    <q-toolbar class="lt-sm">
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        <div>Title</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer> -->

  </q-layout>
</template>

<script>
import { defineComponent, ref,onMounted ,computed } from 'vue'
import NavLink from 'components/NavLink.vue'
import MediaPlayer from 'components/MediaPlayer.vue'
import MainFooter from 'components/MainFooter.vue'
import LibraryList from 'components/LibraryList.vue'
import { useMixtapeStore } from 'stores/mixtape-store'
// import { usePlayerStore } from 'stores/player-store'
import { mixtapeService } from 'src/services/mixtape.service'
import { useRouter } from 'vue-router'

const links = [
  {
    title: 'Home',
    // caption: 'home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Search',
    // caption: 'search',
    icon: 'search',
    link: '/search'
  },
]





export default defineComponent({
  name: 'MainLayout',

  components: {
    NavLink,
    MediaPlayer,
    MainFooter,
    LibraryList
  },
  
  setup() {
    const router = useRouter();
    // const playerStore = usePlayerStore()
    // const currSong = computed(()=>playerStore.getCurrSong)

    const mixtapeStore = useMixtapeStore()
    onMounted( () => {
      mixtapeStore.loadMixtapes()
    });
    
    const onAddMixtape = async()=>{
   
      const newMixtape = await mixtapeStore.saveMixtape(mixtapeService.getEmptyMixtape())
      router.push(`/mixtape/${newMixtape._id}`)

    }
    
    const mixtapes = computed(()=> mixtapeStore.getMixtapes )
    const drawerMini = ref(true)
    const drawerOpen = ref(true);

    return {
      links,
      drawerMini,
      drawerOpen,
      mixtapes,
      onAddMixtape,
      // currSong,
      toggleDrawerSize() {
        drawerMini.value = !drawerMini.value
      }
    }
  }
})
</script>
