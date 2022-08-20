import React from "react";

const Header = ({ list, type }) => {
  return !list.name ? (
    <div>No hay datos</div>
  ) : (
    <section className="layout">
      <header className="has-background-primary-dark p-5 has-text-white">
        <p className="is-size-5">
          {type === "playlist" ? "Playlist" : "Artist"}
        </p>
        <div className="is-flex">
          <img
            src={list !== {} ? list.images[0].url : console.log("No hay datos")}
            alt=""
            style={{ width: "256px", height: "256px" }}
          />
          <div className="p-4 is-flex is-flex-direction-column is-justify-content-space-around">
            <p className="is-size-1">{list.name}</p>
            <p>{list.description}</p>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
