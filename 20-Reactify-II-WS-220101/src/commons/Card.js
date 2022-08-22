import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={item.images[0].url} alt={item.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-6">{item.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
