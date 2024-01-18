import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    isPlaying: false,
    currVideoId: "A_MjCqQoLLA",
  }),
  getters: {
    getCurrVideoId: (state) => state.currVideoId,
    getIsPlaying: (state) => state.isPlaying,
  },
  actions: {
    setCurrVideoId(videoId) {
      this.currVideoId = videoId;
    },
    togglePlayPause() {
      this.isPlaying = !this.isPlaying;
    },
  },
});

