import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorite } from "../../state/user";

import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import s from "./style.module.scss";

function Item({ flight }) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const { id, origin, destination } = flight;
  return (
    <div key={id} className={s.favorite}>
      <span>
        <FaStar />
        <p>
          {origin.value} &gt; {destination.value}
        </p>
      </span>
      <FaTrash
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(removeFromFavorite(user, flight))}
      />
    </div>
  );
}

Item.Empty = () => (
  <div className={s.favorite}>
    <p>Add flights to favorites to see them here!</p>
  </div>
);

export default Item;
