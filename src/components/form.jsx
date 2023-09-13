import React, { useState } from "react";
import generateSong from "../functions/generateSong";
import autocomplete from "../functions/autocomplete";

export default function Form() {
  const [songChoice, setSongChoice] = useState("");

  const checkSong = (event) => {
    event.preventDefault();
    setSongChoice(event.target.song.value);
    console.log(generateSong());
  };

  const onInputChange = (event) => {
    let characters = event.target.value;
    const relevantSongs = autocomplete(characters);
    const songElements = relevantSongs.forEach((song) => {
      return (
        <article className="song">
          <p>{song.title}</p>
        </article>
      );
    });
  };

  return (
    <form onSubmit={checkSong}>
      <label htmlFor="song-input">Type a song name:</label>
      <input
        id="song-input"
        name="song"
        aria-label="Song"
        onChange={onInputChange}
      />
      <button type="submit">Go</button>
    </form>
  );
}
