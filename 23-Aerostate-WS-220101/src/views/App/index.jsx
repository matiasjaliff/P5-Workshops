import * as React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setAirports } from "../../state/airports";
import { setFlights } from "../../state/flights";

import { message } from "antd";

import Header from "../Header";
import Content from "../Content";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // fetch airporst
    axios
      .get("/api/airports")
      .then(({ data }) => dispatch(setAirports(data)))
      .catch((err) => message.error(`Error: ${err.message}`, 5));
    // fetch flights
    axios
      .get("/api/flights")
      .then(({ data }) => dispatch(setFlights(data)))
      .catch((err) => message.error(`Error: ${err.message}`, 5));
  }, []);

  return (
    <>
      <Header />
      <Content />
    </>
  );
}
