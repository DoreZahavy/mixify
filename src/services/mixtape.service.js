"use strict";

import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";

const MIXTAPE_KEY = "mixtapeDB";

_createMixtapes();

export const mixtapeService = {
  query,
  get,
  remove,
  save,
  getEmptyMixtape,
};

async function query(filterBy = {}) {
  console.log("in service querying mixtapes");
  return await storageService.query(MIXTAPE_KEY);

  //  if (filterBy.txt) {
  //      const regex = new RegExp(filterBy.txt, 'i')
  //      mixtapes = mixtapes.filter(mixtape => regex.test(mixtape.vendor))
  //  }
  //  if (filterBy.minSpeed) {
  //      mixtapes = mixtapes.filter(mixtape => mixtape.maxSpeed >= filterBy.minSpeed)
  //  }
}

async function get(mixtapeId) {
  return await storageService.get(MIXTAPE_KEY, mixtapeId);
  //  .then(_setNextPrevMixtapeId)
}

async function remove(mixtapeId) {
  return await storageService.remove(MIXTAPE_KEY, mixtapeId);
}

async function save(mixtape) {
  if (mixtape._id) {
    console.log("putting in service");
    return await storageService.put(MIXTAPE_KEY, mixtape);
  } else {
    console.log("🚀 ~ save ~ mixtape:", mixtape);
    console.log("posting in service");
    return await storageService.post(MIXTAPE_KEY, mixtape);
  }
}

function _createMixtapes() {
  let mixtapes = utilService.loadFromStorage(MIXTAPE_KEY);
  if (!mixtapes || !mixtapes.length) {
   
   mixtapes = [
      {
          "_id": "5cksxjas89dfhjdfhxjsa8jxs09",
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg",
          "name": "Rock & Roll Baby!",
          "desc": "Rock & Roll is the best stuuf ever I tell you dat!!!",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/PNbBDrceCy8/mqdefault.jpg",
                  "title": "The Who - Who Are You",
                  "id": "PNbBDrceCy8"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/iv8GW1GaoIc/mqdefault.jpg",
                  "title": "The Doors - Riders On The Storm",
                  "id": "iv8GW1GaoIc"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/mbj1RFaoyLk/mqdefault.jpg",
                  "title": "The Doors - Light My Fire",
                  "id": "mbj1RFaoyLk"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/I47floRRAFs/mqdefault.jpg",
                  "title": "Ted Nugent - Cat Scratch Fever",
                  "id": "I47floRRAFs"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/eUDcTLaWJuo/mqdefault.jpg",
                  "title": "ZZ Top - Legs",
                  "id": "eUDcTLaWJuo"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/Gg9cNGHl-bg/mqdefault.jpg",
                  "title": "ZZ Top - La Grange",
                  "id": "Gg9cNGHl-bg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/gEPmA3USJdI/mqdefault.jpg",
                  "title": "AC/DC - Highway to Hell (Live At River Plate, December 2009)",
                  "id": "gEPmA3USJdI"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/pAgnJDJN4VA/mqdefault.jpg",
                  "title": "AC/DC - Back In Black",
                  "id": "pAgnJDJN4VA"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/v2AC41dglnM/mqdefault.jpg",
                  "title": "AC/DC - Thunderstruck",
                  "id": "v2AC41dglnM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/HQmmM_qwG4k/mqdefault.jpg",
                  "title": "Led Zeppelin - Whole Lotta Love",
                  "id": "HQmmM_qwG4k"
              }
          ]
      },
      {
          "_id": "5cksxjas8dfhjsa8jxs09",
          "name": "Good old times",
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694863/sinatra_ipxfob.jpg",
          "desc": "for a good noslagia",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/GJTA9Ng7xYY/mqdefault.jpg",
                  "title": "Paul Anka - You Are My Destiny (Live)",
                  "id": "GJTA9Ng7xYY"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/4gXShOJVwaM/mqdefault.jpg",
                  "title": "Bessie Smith-Back Water Blues",
                  "id": "4gXShOJVwaM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/5Bo3f_9hLkQ/mqdefault.jpg",
                  "title": "Bessie Smith - St.Louis Blues (1929)",
                  "id": "5Bo3f_9hLkQ"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/GKPMk5_gStk/mqdefault.jpg",
                  "title": "Fred Astaire. Put it on the Ritz.",
                  "id": "GKPMk5_gStk"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/0QYdcHQXwdM/mqdefault.jpg",
                  "title": "Fred Astaire - Cheek to Cheek",
                  "id": "0QYdcHQXwdM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/8tbP3f3i03E/mqdefault.jpg",
                  "title": "Frank Sinatra-Killing me softly",
                  "id": "8tbP3f3i03E"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/ZEcqHA7dbwM/mqdefault.jpg",
                  "title": "Fly Me To The Moon (2008 Remastered)",
                  "id": "ZEcqHA7dbwM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/qQzdAsjWGPg/mqdefault.jpg",
                  "title": "My Way (2008 Remastered)",
                  "id": "qQzdAsjWGPg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/AyZAJQgrXKk/mqdefault.jpg",
                  "title": "Ricky Nelson - I Will Follow You  (1963)",
                  "id": "AyZAJQgrXKk"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/zLkCWT2neuI/mqdefault.jpg",
                  "title": "Ricky Nelson - Hello Mary-Lou",
                  "id": "zLkCWT2neuI"
              }
          ]
      },
      {
          "_id": "5cksxgfbrt89xjsa8xjsa8jxs09",
          "name": "Scotish / Irish",
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694811/bodhran_fjgo8a.jpg",
          "desc": "Sounds from the old country",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/BCkcYYQv3so/mqdefault.jpg",
                  "title": "Old Blind Dogs - Edward (Scottish Folk Ballad)",
                  "id": "BCkcYYQv3so"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/c_XFy3K7AqQ/mqdefault.jpg",
                  "title": "Old Blind Dogs - MacPhersons Rant (California WorldFest 2009)",
                  "id": "c_XFy3K7AqQ"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/KsaQPobUZiM/mqdefault.jpg",
                  "title": "Tommy Makem  - Four Green Fields",
                  "id": "KsaQPobUZiM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/Slu23kGEw48/mqdefault.jpg",
                  "title": "Tommy Makem - Roddy McCorley",
                  "id": "Slu23kGEw48"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/WW7Rz6XxnvE/mqdefault.jpg",
                  "title": "Tommy Makem ~ Will You Go Lassie, Go",
                  "id": "WW7Rz6XxnvE"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/rh7bAPi2ty4/mqdefault.jpg",
                  "title": "Tommy Makem - The Cobbler",
                  "id": "rh7bAPi2ty4"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/r6tGpyay0D4/mqdefault.jpg",
                  "title": "Dick Gaughan - Handful of Earth",
                  "id": "r6tGpyay0D4"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/vZ7oYCx6tBw/mqdefault.jpg",
                  "title": "Dick Gaughan - Now Westlin Winds",
                  "id": "vZ7oYCx6tBw"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/F9h20aDBLLU/mqdefault.jpg",
                  "title": "Hamish Imlach - Cod Liver Oil and Orange Juice",
                  "id": "F9h20aDBLLU"
              }
          ]
      },
      {
          "_id": "5cksxjasrnttrnmjsa8jxs09",
          "name": "Roadtrip",
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694738/roadtrip_jtxnoj.jpg",
          "desc": "great for offroadin'",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/dq-1G6Wif8s/mqdefault.jpg",
                  "title": "Doc Watson - Tennessee Stud",
                  "id": "dq-1G6Wif8s"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/6VAbrnjdtYw/mqdefault.jpg",
                  "title": "Doc Watson-Deep River Blues",
                  "id": "6VAbrnjdtYw"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/yhI-4Agmax4/mqdefault.jpg",
                  "title": "The Tony Rice Unit - Blue Railroad Train",
                  "id": "yhI-4Agmax4"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/9JFgC3Ub10E/mqdefault.jpg",
                  "title": "Tony Rice - Church Street Blues",
                  "id": "9JFgC3Ub10E"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/FJqd58_WgGo/mqdefault.jpg",
                  "title": "Zach Bryan - Oklahoma Smokeshow",
                  "id": "FJqd58_WgGo"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/B3iORE_4eao/mqdefault.jpg",
                  "title": "Zach Bryan - Burn, Burn, Burn",
                  "id": "B3iORE_4eao"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/PAK5blgfKWM/mqdefault.jpg",
                  "title": "The Doors - Alabama Song (Whiskey Bar)",
                  "id": "PAK5blgfKWM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/Xqgr7R4zUMg/mqdefault.jpg",
                  "title": "Alabama - Dixieland Delight",
                  "id": "Xqgr7R4zUMg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/-35W_FWCT9Q/mqdefault.jpg",
                  "title": "Lynyrd Skynyrd - Sweet Home Alabama (Audio)",
                  "id": "-35W_FWCT9Q"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/bpZvg_FjL3Q/mqdefault.jpg",
                  "title": "Bob Dylan - Hurricane (Official Audio)",
                  "id": "bpZvg_FjL3Q"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/ow-Cx9IX4So/mqdefault.jpg",
                  "title": "Willie Nelson - Just Breathe",
                  "id": "ow-Cx9IX4So"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/x8A9Y1Dq_cQ/mqdefault.jpg",
                  "title": "Willie Nelson - Seven Spanish Angels",
                  "id": "x8A9Y1Dq_cQ"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/dBN86y30Ufc/mqdefault.jpg",
                  "title": "Willie Nelson - On The Road Again (Official Audio)",
                  "id": "dBN86y30Ufc"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/R7f189Z0v0Y/mqdefault.jpg",
                  "title": "Willie Nelson - Always On My Mind",
                  "id": "R7f189Z0v0Y"
              }
          ]
      },
      {
          "name": "Jazz for the night",
          "desc": "soooooo smooth (or not)",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694697/jazz_kgzatu.avif",
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/GoFFzB91eD0/mqdefault.jpg",
                  "title": "Paul Desmond × Easy Living",
                  "id": "GoFFzB91eD0"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/TZaUByp-AX4/mqdefault.jpg",
                  "title": "Paul Desmond   Feeling Blue 1996",
                  "id": "TZaUByp-AX4"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/AGd0JNKTXwE/mqdefault.jpg",
                  "title": "Hank M̲o̲b̲l̲e̲y̲ – W̲o̲r̲k̲o̲u̲t̲ (1̲9̲6̲1̲)̲",
                  "id": "AGd0JNKTXwE"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/r594pxUjcz4/mqdefault.jpg",
                  "title": "John Coltrane - In A Sentimental Mood",
                  "id": "r594pxUjcz4"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/b_Fp4znXvOg/mqdefault.jpg",
                  "title": "Thelonious Monk - Underground (1968) (Full Album)",
                  "id": "b_Fp4znXvOg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/NuaCviiAUSk/mqdefault.jpg",
                  "title": "Benny Carter   Further Definitions",
                  "id": "NuaCviiAUSk"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/wbgsd-Y1mHA/mqdefault.jpg",
                  "title": "Wayne̲ S̲h̲o̲r̲t̲e̲r̲ – S̲p̲e̲a̲k̲ N̲o̲ ̲Ev̲i̲l (̲1̲9̲6̲4̲)̲̲",
                  "id": "wbgsd-Y1mHA"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/3XvJFW0DHbU/mqdefault.jpg",
                  "title": "Wayne Shorter - Footprints",
                  "id": "3XvJFW0DHbU"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/r0vhqDCy9eQ/mqdefault.jpg",
                  "title": "Dexter Gordon -Lady Bird  (Belgium, 1964) [1/2]",
                  "id": "r0vhqDCy9eQ"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/6sr7BXinJMw/mqdefault.jpg",
                  "title": "Blue Bossa -Dexter Gordon",
                  "id": "6sr7BXinJMw"
              }
          ],
          "_id": "KlpTA"
      },
      {
          "name": "Pop",
          "desc": "guilty pleasure",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694595/pop_lruad0.png",
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/tg00YEETFzg/mqdefault.jpg",
                  "title": "Rihanna - We Found Love ft. Calvin Harris",
                  "id": "tg00YEETFzg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/lWA2pjMjpBs/mqdefault.jpg",
                  "title": "Rihanna - Diamonds",
                  "id": "lWA2pjMjpBs"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/gQlMMD8auMs/mqdefault.jpg",
                  "title": "BLACKPINK - ‘Pink Venom’ M/V",
                  "id": "gQlMMD8auMs"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/gset79KMmt0/mqdefault.jpg",
                  "title": "Sia - Snowman [Official Video]",
                  "id": "gset79KMmt0"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/2vjPBrBU-TM/mqdefault.jpg",
                  "title": "Sia - Chandelier",
                  "id": "2vjPBrBU-TM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/3tmd-ClpJxA/mqdefault.jpg",
                  "title": "Taylor Swift - Look What You Made Me Do",
                  "id": "3tmd-ClpJxA"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/b1kbLwvqugk/mqdefault.jpg",
                  "title": "Taylor Swift - Anti-Hero (Official Music Video)",
                  "id": "b1kbLwvqugk"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/nfWlot6h_JM/mqdefault.jpg",
                  "title": "Taylor Swift - Shake It Off",
                  "id": "nfWlot6h_JM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/VuNIsY6JdUw/mqdefault.jpg",
                  "title": "Taylor Swift - You Belong With Me",
                  "id": "VuNIsY6JdUw"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/e-ORhEE9VVg/mqdefault.jpg",
                  "title": "Taylor Swift - Blank Space",
                  "id": "e-ORhEE9VVg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/PEOwqZoDEGI/mqdefault.jpg",
                  "title": "Laufey - Letter To My 13 Year Old Self (Official Audio)",
                  "id": "PEOwqZoDEGI"
              }
          ],
          "_id": "T3d3d"
      },
      {
          "name": "India",
          "desc": "Gulab jamun",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694661/india_pollkw.jpg",
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/fGuDn0S8sC0/mqdefault.jpg",
                  "title": "D Voice - Chori Chori (Official Lyric Audio)",
                  "id": "fGuDn0S8sC0"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/6lCbe2iKgF0/mqdefault.jpg",
                  "title": "Panjabi MC-  Morni [Official Music Video] | HQ",
                  "id": "6lCbe2iKgF0"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/wke0-lj2wzw/mqdefault.jpg",
                  "title": "Panjabi MC feat. Jay-Z - Beware",
                  "id": "wke0-lj2wzw"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/-4AhRFOH-z4/mqdefault.jpg",
                  "title": "1. PANJABI MC - Mundian To Bach Ke",
                  "id": "-4AhRFOH-z4"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/3IXwmslIA9I/mqdefault.jpg",
                  "title": "Panjabi MC - Jogi",
                  "id": "3IXwmslIA9I"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/Udkynn70wXg/mqdefault.jpg",
                  "title": "Hara Hara Mahadev by Deobrat Mishra",
                  "id": "Udkynn70wXg"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/6-n_szx2XRE/mqdefault.jpg",
                  "title": "Rahat Fateh Ali Khan - Zaroori Tha",
                  "id": "6-n_szx2XRE"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/n91Vhdrrkss/mqdefault.jpg",
                  "title": "Ravi Shankar - Morning Raga-",
                  "id": "n91Vhdrrkss"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/1h4dI2pW8vg/mqdefault.jpg",
                  "title": "Anoushka Shankar - Love Letters (Live from Purcell Room, Southbank Center)",
                  "id": "1h4dI2pW8vg"
              }
          ],
          "_id": "tgJnM"
      },
      {
          "name": "Best of woody",
          "desc": "best singer songwriter ever existed",
          "createdBy": {
              "_id": "u101",
              "nickname": "DoreZ"
          },
          "imgUrl": "http://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694566/woody_od8zgz.jpg",
          "songs": [
              {
                  "imgUrl": "https://i.ytimg.com/vi/ORP5-017gKM/mqdefault.jpg",
                  "title": "Jarama Valley - Woody Guthrie",
                  "id": "ORP5-017gKM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/_DYJK9pCwPE/mqdefault.jpg",
                  "title": "Howdjadoo - Woody Guthrie",
                  "id": "_DYJK9pCwPE"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/waQOS3hKIa8/mqdefault.jpg",
                  "title": "Talking Hard Work - Woody Guthrie",
                  "id": "waQOS3hKIa8"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/dkAxuqrVNBM/mqdefault.jpg",
                  "title": "Woody Guthrie - Talking Dustbowl Blues",
                  "id": "dkAxuqrVNBM"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/z58V-NxJcEI/mqdefault.jpg",
                  "title": "Talking Columbia - Woody Guthrie",
                  "id": "z58V-NxJcEI"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/EER_ATs8hjk/mqdefault.jpg",
                  "title": "Woody Guthrie - Vigilante Man - Country Music Experience",
                  "id": "EER_ATs8hjk"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/-3xUPpkxAco/mqdefault.jpg",
                  "title": "Tear The Facists Down",
                  "id": "-3xUPpkxAco"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/GTnVMulDTYA/mqdefault.jpg",
                  "title": "I Ain&#39;t Got No Home In This World Anymore - Woody Guthrie",
                  "id": "GTnVMulDTYA"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/wxiMrvDbq3s/mqdefault.jpg",
                  "title": "Woody Guthrie- This Land Is Your Land",
                  "id": "wxiMrvDbq3s"
              },
              {
                  "imgUrl": "https://i.ytimg.com/vi/VwcKwGS7OSQ/mqdefault.jpg",
                  "title": "Woody Guthrie~ All You Fascists Bound To Lose",
                  "id": "VwcKwGS7OSQ"
              }
          ],
          "_id": "jrvBx"
      }
  ]
    utilService.saveToStorage(MIXTAPE_KEY, mixtapes);
  }
}

function getEmptyMixtape() {
  return {
    name: "My Playlist",
    desc: "",
    createdBy: {
      _id: "u101",
      nickname: "DoreZ",
    },
    imgUrl:
      "https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705676257/peay7zts9eskkkcbqawp.png",
    songs: [],
  };
}

var mixtape = {
  _id: "5cksxjas89xjsa8xjsa8jxs09",
  name: "Funky Monks",
  createdBy: {
    _id: "u101",
    fullname: "Puki Ben David",
  },
  songs: [],
};

//   AIzaSyCqhq8Y4n72HaAbKOAeIdi5b27siFouIio // youtube API key
