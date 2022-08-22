import axios from "axios";
import React from "react";
import { useState } from "react";
import useInput from "../hooks/useInput";

const NewPlaylist = () => {
  // const [name, setName] = useState("");

  const name = useInput();
  const description = useInput();

  // const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name: name.value,
      description: description.value
    };
    axios
      .post("/api/playlists", body)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="layout m-5">
      <h3 className="title is-3">New Playlist</h3>
      <form onSubmit={handleSubmit}>
        <label className="label my-3">Name</label>
        <input
          className="input"
          type="text"
          placeholder="Playlist name"
          onChange={name.onChange}
          value={name.value}
        />
        <label className="label my-3">Description</label>
        <textarea
          className="textarea"
          placeholder="Description"
          onChange={description.onChange}
          value={description.value}
        ></textarea>
        <button className="button is-link my-5">Submit</button>
      </form>
    </div>
  );
};

export default NewPlaylist;
