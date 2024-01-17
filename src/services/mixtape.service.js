
'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const MIXTAPE_KEY = 'mixtapeDB'

_createMixtapes()

export const mixtapeService = {
   query,
   get,
   remove,
   save,
   getEmptyMixtape,
}

async function query(filterBy = {}) {
  console.log('in service querying mixtapes');
   return await storageService.query(MIXTAPE_KEY)
      
          //  if (filterBy.txt) {
          //      const regex = new RegExp(filterBy.txt, 'i')
          //      mixtapes = mixtapes.filter(mixtape => regex.test(mixtape.vendor))
          //  }
          //  if (filterBy.minSpeed) {
          //      mixtapes = mixtapes.filter(mixtape => mixtape.maxSpeed >= filterBy.minSpeed)
          //  }
      
}

async function get(mixtapeId) {
   return await storageService.get(MIXTAPE_KEY, mixtapeId)
      //  .then(_setNextPrevMixtapeId)
}

async function remove(mixtapeId) {
   return await storageService.remove(MIXTAPE_KEY, mixtapeId)
}

async function save(mixtape) {
  if (mixtape._id) {
    console.log('putting in service');
    return await storageService.put(MIXTAPE_KEY, mixtape)
  } else {
    console.log("🚀 ~ save ~ mixtape:", mixtape)
     console.log('posting in service');
       return await storageService.post(MIXTAPE_KEY, mixtape)
   }
}

function _createMixtapes() {
   let mixtapes = utilService.loadFromStorage(MIXTAPE_KEY)
   if (!mixtapes || !mixtapes.length) {
    mixtapes = [
      {
        "_id": "5cksxjas89dfhjdfhxjsa8jxs09",
        "name": "Rock & Roll Baby",
        "desc": "Rock & Roll is the best stuuf ever I tell you dat",
        "createdBy": {
          "_id": "u101",
          "nickname": "DoreZ",
        },
        "songs": []
      },
      {
        "_id": "5cksxjas8dfhjsa8jxs09",
        "name": "good old times",
        "desc": "If you wanna have a good ol time you MUST listen to this stuff it'll blow your hat right off",
        "createdBy": {
          "_id": "u101",
          "nickname": "DoreZ",
        },
        "songs": []
      },
      {
        "_id": "5cksxgfbrt89xjsa8xjsa8jxs09",
        "name": "Funky Monday",
        "desc": "That's are you ready for some funky times??",
        "createdBy": {
          "_id": "u101",
          "nickname": "DoreZ",
        },
        "songs": []
      },
      {
        "_id": "5cksxjasrnttrnmjsa8jxs09",
        "name": "Relaxin time",
        "desc": "Time to relax",
        "createdBy": {
          "_id": "u101",
          "nickname": "DoreZ",
        },
        "songs": []
      },
      {
        "_id": "5cksxjasrntxjsa8jxs09",
        "name": "Upbeat weekend",
        "desc": "Get your blood pumpin for the weekend",
        "createdBy": {
          "_id": "u101",
          "nickname": "DoreZ",
        },
        "songs": []
      }
    ]
  
       utilService.saveToStorage(MIXTAPE_KEY, mixtapes)
   }
}

function getEmptyMixtape(track) {
  var tracks = []
  if(track)tracks.push(track)
  return {
    name: track?.title || 'My Playlist',
    description: '',
    owner: 'user',
    image: track?.imgUrl || "https://res.cloudinary.com/dtaiyvzq5/image/upload/v1692020104/m2pslfiyjn8tgx9hs5pw.png",
    tracks,
    spotifyId:'1234s'
  }
}



var mixtape = {
    "_id": "5cksxjas89xjsa8xjsa8jxs09",
    "name": "Funky Monks",
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
    },
    "songs": []
  }

//   AIzaSyCqhq8Y4n72HaAbKOAeIdi5b27siFouIio // youtube API key