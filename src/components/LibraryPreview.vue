<template>
    <!-- <router-link :to="`/mixtape/${mixtape._id}`"> -->

        <q-item clickable v-ripple :to="`/mixtape/${mixtape._id}`" >
            <q-item-section avatar>
                <q-avatar>
                    
                    <img src="https://res.cloudinary.com/dtaiyvzq5/image/upload/v1692020104/m2pslfiyjn8tgx9hs5pw.png" alt="">
                </q-avatar>
            </q-item-section>
            
            <q-item-section>
                <q-item-label>{{mixtape.name}}</q-item-label>
                <q-item-label caption>Playlist * {{ mixtape.createdBy?.nickname }}</q-item-label>
            </q-item-section>
        </q-item>
    <!-- </router-link> -->
   
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'LibraryPreview',
    props: {
        mixtape: {
            type: Object
        }
    },
    components: {

    },
    
    setup(props) {


        return {
        }
    }
})
</script>