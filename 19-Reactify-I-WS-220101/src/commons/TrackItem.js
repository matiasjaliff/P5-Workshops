import React from "react";

import { millisToMinutesAndSeconds } from "../utils/functions";

const TrackItem = ({ track, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <span>{track.name}</span>
        <p className="has-text-grey">{track.artists[0].name}</p>
      </td>
      <td>{track.album.name}</td>
      <td>{millisToMinutesAndSeconds(track.duration_ms)}</td>
    </tr>
  );
};

export default TrackItem;
