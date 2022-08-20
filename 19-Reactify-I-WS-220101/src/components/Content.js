import React, { useEffect } from "react";

import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";

const Content = ({ playlist, singlePlaylist, artist, singleArtist, type }) => {
  return (
    <div className="menu column is-three-quarter">
      <Header list={type === "playlist" ? playlist : artist} type={type} />
      <TrackListItem
        list={type === "playlist" ? singlePlaylist : singleArtist}
        type={type}
      />
    </div>
  );
};

export default Content;
