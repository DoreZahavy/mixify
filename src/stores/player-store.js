import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    isPlaying: false,
    currVideoId: "A_MjCqQoLLA",
    currSong: {
      imgUrl: "https://i.ytimg.com/vi/PNbBDrceCy8/mqdefault.jpg",
      title: "The Who - Who Are You",
      id: "PNbBDrceCy8",
    },
  }),
  getters: {
    getCurrVideoId: (state) => state.currVideoId,
    getCurrSong: (state) => state.currSong,
    getIsPlaying: (state) => state.isPlaying,
  },
  actions: {
    setCurrVideoId(videoId) {
      this.currVideoId = videoId;
      this.isPlaying = true;
    },
    setCurrSong(song) {
      this.currSong = song;
      this.isPlaying = true;
    },
    togglePlayPause() {
      this.isPlaying = !this.isPlaying;
    },
    // setPlay(){
    //   this.isPlaying = true
    // }
  },
});
