export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return /*html*/ `
    <div class="col-12 selectable" onclick="app.songsController.addSong('${this.id}')">
      <img src="${this.albumArt}" alt="${this.artist}">
      <p> ${this.artist} | ${this.title} </p>
    </div>
      `;
  }

  get mainTemplate(){
    return /*html*/`
    <div class="col-12 selectable" onclick="app.songsController.addSong()">
      <img src="${this.albumArt}" alt="${this.artist}">
      <p> ${this.artist} | ${this.title} </p>
      <<div class="d-grid gap-2">
        <button type="button" name="" id="" class="btn btn-primary" onclick="app.songsController.addSong(${this.id})"></button>
      </div>
   </div>

      

  `}

  get playlistTemplate() {
    return /*html*/ `
    <div class="col-12">
      <p> ${this.artist} | ${this.title} | ${this.album}</p>
    </div>
        `;
  }
}
