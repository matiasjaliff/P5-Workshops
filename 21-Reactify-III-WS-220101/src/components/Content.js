import { useEffect, useState } from "react";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";
import { useParams, useNavigate, Route, Routes } from "react-router";
import useInput from "../hooks/useInput";

const Content = () => {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const [data, setData] = useState({});
  const [searchResult, setSearchResult] = useState([]);

  const search = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`/api/tracks/search?q=${search.value}`)
      .then((res) => res.data.items)
      .then((tracks) => setSearchResult(tracks))
      .catch((err) => console.error(err));
  };

  const addToPlaylist = (track) => {
    axios
      .post(`/api/playlists/${id}/tracks`, { uri: track.uri })
      .then(() => Notify.success("Se agregó el track a la playlist"))
      .then(() => axios.get(`/api/${type}/${id}`))
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get(`/api/${type}/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  }, [id]);

  if (!data.id) return <h3>No hay datos</h3>;

  return (
    <section className="layout">
      <Header {...data} type={type} />
      <Routes>
        <Route
          path="/add"
          element={
            <div>
              <form onSubmit={handleSubmit}>
                <label className="label my-3">Search</label>
                <input
                  {...search}
                  className="input my-3"
                  type="text"
                  placeholder="Search tracks"
                />
              </form>
              <TrackListItem
                tracks={searchResult || []}
                addToPlaylist={addToPlaylist}
              />
            </div>
          }
        />
        <Route
          path={""}
          element={<TrackListItem tracks={data.tracks || []} />}
        />
      </Routes>
    </section>
  );
};

export default Content;
