import data from "../model/songs.json";

const songs = data["songs"];

function generateSong() {
  const randomIndex = Math.floor(Math.random() * 500);
  return songs[randomIndex];
}

export default generateSong;
