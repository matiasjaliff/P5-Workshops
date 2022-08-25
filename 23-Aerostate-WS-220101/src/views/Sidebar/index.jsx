import * as React from "react";
import { useSelector } from "react-redux";

import Bookmark from "./Bookmark";

import s from "./style.module.scss";

export default function Sidebar() {
  const user = useSelector((state) => state.user.value);

  return (
    <aside className={s.sidebar}>
      <h2>Save flights and keep them in track!</h2>
      <Bookmark />
    </aside>
  );
}
