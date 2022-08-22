import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";
import { useParams, useNavigate } from "react-router-dom";

const Content = () => {
  const [data, setData] = useState({});

  const { type, id } = useParams();

  const navigate = useNavigate();

  console.log("ID: ", id);
  console.log("DATA: ", data);

  useEffect(() => {
    console.log("ENTRAMOS...");
    if (!id) return;
    axios
      .get(`/api/${type}/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch((err) => navigate("404"));
  }, [id]);

  if (!Object.keys(data).length) return <h3>No hay datos</h3>;

  return (
    <section className="layout">
      <Header {...data} type={type} />
      <TrackListItem tracks={data.tracks || []} />
    </section>
  );
};

export default Content;
