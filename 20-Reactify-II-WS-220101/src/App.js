import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import NotFound from "./components/NotFound";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((res) => res.data)
      .then((playlists) => setPlaylists(playlists.items));
    axios
      .get("/api/artists")
      .then((res) => res.data)
      .then((artists) => setArtists(artists.items));
    axios
      .get("/api/albums")
      .then((res) => res.data)
      .then((albums) => setAlbums(albums.items));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container is-fluid columns">
        <Sidebar playlists={playlists} artists={artists} albums={albums} />
        <Routes>
          <Route path="/" element={<p>¡Bienvenidos a Reactify!</p>} />
          <Route path="/single/:type/:id" element={<Content />} />
          <Route
            path="/collection/:type"
            element={
              <Grid playlists={playlists} artists={artists} albums={albums} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
