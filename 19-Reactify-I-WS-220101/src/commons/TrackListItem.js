import React from "react";
import TrackItem from "./TrackItem";

const TrackListItem = ({ list }) => {
  return !list.name ? (
    <div>No hay datos</div>
  ) : (
    <section className="pt-4">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Álbum</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {
            list.tracks.map((track, index) => (
              <TrackItem track={track} key={index} index={index} />
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default TrackListItem;
