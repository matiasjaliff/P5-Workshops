import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

const Buttons = () => {
  const match = useMatch("single/playlists/:id/add");
  return !match ? (
    <Link to="add">
      <button className="button is-link is-small">Add tracks</button>
    </Link>
  ) : (
    <Link to="">
      <button className="button is-warning is-small">Stop adding</button>
    </Link>
  );
};

const Header = ({ images, name, description, type }) => {
  return (
    <header className="has-background-primary-dark p-5 has-text-white">
      <div className="is-flex is-justify-content-space-between">
        <p className="is-size-5">{type}</p>
        <Buttons />
      </div>
      <div className="is-flex">
        <img
          src={images[0] ? images[0].url : "https://i.imgur.com/M1wbKOT.jpg"}
          alt=""
          style={{ width: "256px", height: "256px" }}
        />
        <div className="p-4 is-flex is-flex-direction-column is-justify-content-space-around">
          <p className="is-size-1">{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
