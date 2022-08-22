import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../commons/Card";

const Grid = ({ playlists, artists, albums }) => {
  const { type } = useParams();

  const list =
    type === "playlists" ? playlists : type === "artists" ? artists : albums;

  return (
    <div className="columns is-multiline layout">
      <div className="column is-4">
        {list.map((item, index) => (
          <div className="column" key={index}>
            <Link to={`/single/${type}/${item.id}`}>
              <Card item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
