"use strict";
import { utilService } from "./util.service";
export const youtubeService = {
  queryYT,
};
const API_KEY = import.meta.env.VITE_YT_API_KEY
// const API_KEY = "AIzaSyCqhq8Y4n72HaAbKOAeIdi5b27siFouIio";
const YT_SEARCH_KEY = "ytSearchDB";
var gCacheSearches = _loadCacheSearches();

function queryYT(value) {
    console.log('gCacheSearches[value]:', gCacheSearches[value])
  if (gCacheSearches[value]) return Promise.resolve(gCacheSearches[value]);

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=${API_KEY}&q=${value}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log("YT Search results: ", res);
      var map = res.items.map((item) => {
        return {
          imgUrl: item.snippet.thumbnails.medium.url,
          title: item.snippet.title,
          id: item.id.videoId,
        };
      });

      gCacheSearches[value] = map;
      _saveCacheSearches();
      return map;
    });
}

function _loadCacheSearches() {
  var cache = utilService.loadFromStorage(YT_SEARCH_KEY);
  if (!cache) cache = {};
  return cache;
}

function _saveCacheSearches() {
  utilService.saveToStorage(YT_SEARCH_KEY, gCacheSearches);
}
