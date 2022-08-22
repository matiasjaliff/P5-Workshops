import { Link } from "react-router-dom";

const Sidebar = ({ playlists, artists, albums }) => {
  return (
    <aside className="menu column is-one-quarter">
      <p className="menu-label">Playlists</p>
      <ul className="menu-list">
        {playlists.map((playlist, i) => (
          <li key={i}>
            <Link to={`/single/playlists/${playlist.id}`}>
              <a>{playlist.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p className="menu-label">Artists</p>
      <ul className="menu-list">
        {artists.map((artist, i) => (
          <li key={i}>
            <Link to={`/single/artists/${artist.id}`}>
              <a>{artist.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p className="menu-label">Albums</p>
      <ul className="menu-list">
        {albums.map((album, i) => (
          <li key={i}>
            <Link to={`/single/albums/${album.id}`}>
              <a>{album.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
