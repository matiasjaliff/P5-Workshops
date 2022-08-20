import React from "react";

const Sidebar = ({ playlists, handleSelectPlaylist, artists, handleSelectArtist }) => (
  <aside className="menu column is-one-quarter">
    <p className="menu-label">Playlists</p>
    <ul className="menu-list">
      {playlists.map((playlist) => {
        return (
          <li key={playlist.id}>
            <a onClick={() => handleSelectPlaylist(playlist)}>
              {playlist.name}
            </a>
          </li>
        );
      })}
    </ul>
    <p className="menu-label">Artists</p>
    <ul className="menu-list">
      {artists.map((artist) => {
        return (
          <li key={artist.id}>
            <a onClick={() => handleSelectArtist(artist)}>{artist.name}</a>
          </li>
        );
      })}
    </ul>
  </aside>
);

export default Sidebar;
