import * as React from "react";

import { Button, PageHeader, Avatar, Image } from "antd";

import { FaPlane } from "react-icons/fa";

import s from "./style.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { sendLoginRequest } from "../../state/user";

export default function Header() {
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  return (
    <header>
      <PageHeader
        className={s.brand}
        avatar={{ icon: <FaPlane /> }}
        title="Aerostates"
        subTitle="Flights and state managment"
      />
      {user.id ? (
        <div className={s.user}>
          <p>Welcome {user.name}!</p>
          <Avatar src={<Image src={user.img} />} />
        </div>
      ) : (
        <Button type="primary" size="large" onClick={() => dispatch(sendLoginRequest())}>
          Login
        </Button>
      )}
    </header>
  );
}
