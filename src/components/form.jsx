import React, { useState } from "react";

export default function Form() {
  const [songChoice, setSongChoice] = useState("");

  const checkSong = (event) => {
    event.preventDefault();
    setSongChoice(event.target.song.value);
  };

  return (
    <form onSubmit={checkSong}>
      <label htmlFor="song-input">Type a song name:</label>
      <input id="song-input" name="song" aria-label="Song" />
      <button type="submit">Go</button>
      <output>{songChoice}</output>
    </form>
  );
}
