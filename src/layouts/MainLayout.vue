<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>


        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered :mini="drawerMini" :breakpoint="616" width="290" mini-width="72">

      <q-list>
        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>

      <q-list>
        <q-item clickable tag="div" @click="toggleDrawerSize">
          <q-item-section  avatar>
            <q-icon name="menu" />
          </q-item-section>

          <q-item-section>
            <q-item-label>My library</q-item-label>
            <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white lt-sm">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavLink from 'components/NavLink.vue'

const linksList = [
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
    NavLink
  },

  setup() {
    const drawerMini = ref(true)
    const drawerOpen = ref(true);

    return {
      navLinks: linksList,
      drawerMini,
      drawerOpen,
      toggleDrawerSize() {
        drawerMini.value = !drawerMini.value
      }
    }
  }
})
</script>
