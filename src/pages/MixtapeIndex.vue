<template>
  <q-page class="mixtape-index flex flex-center">
    <q-card class="card" v-for="mixtape in mixtapes" :key="mixtape._id">
      <img :src="mixtape.imgUrl" alt="mixtape image" style="width: 250px; height: 250px">




      <q-card-section class=" q-mb-md">
        <router-link  :to="`mixtape/${mixtape._id}`" class="card-title text-bold text-h5">{{ mixtape.name }}</router-link>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { useMixtapeStore } from 'src/stores/mixtape-store';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MixtapeIndex',

  setup() {
    const mixtapeStore = useMixtapeStore()
    const mixtapes = mixtapeStore.getMixtapes
    return {
      mixtapes
    }
  }
})
</script>

<style lang="scss" scoped>
.mixtape-index {
  padding-block: 2em;
  gap: 40px;
  .card{
  
    width: 100%;
    max-width: 250px;
    .card-title{
      white-space:normal ;
    }
  }
}
  
</style>
