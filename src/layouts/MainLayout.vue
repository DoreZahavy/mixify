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
            <q-icon name="menu" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My library</q-item-label>
            <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
          </q-item-section>
        </q-item>
        <LibraryList :mixtapes="mixtapes" />
      </section>

    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <MainFooter />

  </q-layout>
</template>

<script>
import { defineComponent, ref,onMounted ,computed } from 'vue'
import NavLink from 'components/NavLink.vue'
import MediaPlayer from 'components/MediaPlayer.vue'
import MainFooter from 'components/MainFooter.vue'
import LibraryList from 'components/LibraryList.vue'
import { useMixtapeStore } from 'src/stores/mixtape-store'

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

    const mixtapeStore = useMixtapeStore()
    onMounted( () => {
      mixtapeStore.loadMixtapes()
    });
    const mixtapes = computed(()=> mixtapeStore.getMixtapes )
    const drawerMini = ref(true)
    const drawerOpen = ref(true);

    return {
      links,
      drawerMini,
      drawerOpen,
      mixtapes,

      toggleDrawerSize() {
        drawerMini.value = !drawerMini.value
      }
    }
  }
})
</script>
