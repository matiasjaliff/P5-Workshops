import React from "react";

import Item from "./Item";

const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <Item item={item} key={index} />
    ))}
  </ul>
);

export default List;
