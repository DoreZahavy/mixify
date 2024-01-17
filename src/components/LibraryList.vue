<template>
    <q-list>
        <LibraryPreview v-for="mixtape in mixtapes" :key="mixtape._id" :mixtape="mixtape"/>
        <!-- <pre>{{ mixtapes }}</pre> -->
        
    </q-list>
</template>

<script>
import { defineComponent } from 'vue'
import LibraryPreview from 'components/LibraryPreview.vue';


export default defineComponent({
    name: 'LibraryList',
    props: {
        mixtapes:{
            type: Array
        }
    },
    components: {
    LibraryPreview
},

    setup(props) {


        return {
            
        }
    }
})
</script>