import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import { fakePlaylists } from "./utils/fakeData";

const App = () => {
  const [user, setUser] = useState({});

  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});
  const [singlePlaylist, setSinglePlaylist] = useState({});

  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({});
  const [singleArtist, setSingleArtist] = useState({});

  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => res.data)
      .then((user) => setUser(user))
      .catch(() =>
        console.error(
          "Necesitas loguearte con Spotify para obtener tu usuario."
        )
      );
  }, []);

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((res) => res.data.items)
      .then((playlists) => setPlaylists(playlists))
      .then(() => axios.get("/api/artists"))
      .then((res) => res.data.items)
      .then((artists) => setArtists(artists))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedPlaylist.id) return;
    axios
      .get(`/api/playlists/${selectedPlaylist.id}`)
      .then((res) => res.data)
      .then((playlist) => setSinglePlaylist(playlist))
      .catch(() => console.error("No se encontró la playlist seleccionada."));
  }, [selectedPlaylist]);

  useEffect(() => {
    if (!selectedArtist.id) return;
    axios
      .get(`/api/artists/${selectedArtist.id}`)
      .then((res) => res.data)
      .then((artist) => setSingleArtist(artist))
      .catch(() => console.error("No se encontró le artiste seleccionade."));
  }, [selectedArtist]);

  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    setType("playlist");
  };

  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
    setType("artist");
  };

  return (
    <div>
      <Navbar user={user} />
      <div className="container is-fluid columns">
        <Sidebar
          playlists={playlists}
          handleSelectPlaylist={handleSelectPlaylist}
          artists={artists}
          handleSelectArtist={handleSelectArtist}
        />
        <Content
          playlist={selectedPlaylist}
          singlePlaylist={singlePlaylist}
          artist={selectedArtist}
          singleArtist={singleArtist}
          type={type}
        />
      </div>
    </div>
  );
};

export default App;
