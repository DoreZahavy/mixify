import { defineStore } from "pinia";
import { mixtapeService } from "src/services/mixtape.service";

export const useMixtapeStore = defineStore("mixtape", {
  state: () => ({
    mixtapes: [],
  }),
  getters: {
    getMixtapes: (state) => state.mixtapes,
  },
  actions: {
    async loadMixtapes() {
      console.log('in store loading mixtapes' )
      try {
        const res = await mixtapeService.query();
        this.mixtapes = res;
        console.log('this.mixtapes:', this.mixtapes)
      } catch (err) {
        console.error(err);
        return Promise.reject(err);
      }
    },
    async removeMixtape(mixtapeId) {
      try {
        const res = await mixtapeService.remove(mixtapeId);
        const idx = this.mixtapes.findIndex(m => m._id === mixtapeId);
        this.mixtapes.splice(idx, 1);
        return Promise.resolve();
      } catch (err) {
        console.log(err);
        return Promise.reject();
      }
    },
    async saveMixtape(mixtapeToSave) {
      try {
        const savedMixtape = await mixtapeService.save(mixtapeToSave);
        if (mixtapeToSave._id) {
          console.log('putting in store');
          const idx = this.mixtapes.findIndex(m => m._id === savedMixtape._id);
          this.mixtapes[idx] = savedMixtape;
        } else {
          console.log('posting in store');
          this.mixtapes.push(savedMixtape);
        }
        return savedMixtape;
      } catch (err) {
        console.log(err);
        return Promise.reject();
      }
    },
  },
});
