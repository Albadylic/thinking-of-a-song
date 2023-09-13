import data from "../model/songs.json";

const songs = data["songs"];

function autocomplete(input) {
  if (input !== "") {
    input = input.toUpperCase();
    let relevantSongs = songs.filter((song, index) => {
      const title = song.title.toUpperCase();
      return title.substring(0, input.length) === input;
    });

    return relevantSongs;
  }
}

export default autocomplete;
