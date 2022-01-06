import { ProxyState } from "../AppState.js";
import  songService  from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() { 
  let template = ''
  ProxyState.songs.forEach(s => template += s.Template)
  document.getElementById('songs').innerHTML = template
  console.log('Printing out songs')
}

/**Draws the Users saved songs to the page */
function _drawPlaylist() { 
  let template = ''
  ProxyState.playlist.forEach(p => template += p.Template)
  document.getElementById('playlist').innerHTML = template
  console.log(ProxyState.playlist)
}


//Public
export default class SongsController {
  constructor() {
    ProxyState.on('songs', _drawResults)
    //TODO Don't forget to register your listeners and get your data
    _drawPlaylist()
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
      
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
   addSong(id) {
    songService.addSong(id)
    document.getElementById
   }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) { }
}
