import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Item = ({ item }) => (
  <li>
    <FaArrowRight />
    <strong>{item.name}</strong>
    <small>{item.description}</small>
    <em>$ {item.price}</em>
  </li>
);

export default Item;
