import * as React from "react";
import { useSelector } from "react-redux";

import Item from "../../components/Item";

export default function Sidebar() {
  const user = useSelector((state) => state.user.value);

  const { favorites } = user;
  if (!favorites || !favorites.length) return <Item.Empty />;

  return (
    <>
      {favorites.map((fav) => (
        <Item
          key={fav.id}
          flight={fav}
        />
      ))}
    </>
  );
}
