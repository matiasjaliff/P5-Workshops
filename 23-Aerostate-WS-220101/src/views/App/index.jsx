import * as React from "react";
import axios from "axios";

import { message } from "antd";

import Header from "../Header";
import Content from "../Content";

export default function App() {
  const [user, setUser] = React.useState({});
  const [airports, setAirports] = React.useState([]);
  const [flights, setFlights] = React.useState([]);

  const sendLoginRequest = () => {
    // fetch fake user
    axios
      .post("/api/login")
      .then(({ data }) => {
        setUser(data);
        message.success(`Success login: welcome back ${data.name}`);
      })
      .catch((err) => {
        message.error(`Failed login: ${err.message}`, 5);
      });
  };

  React.useEffect(() => {
    // fetch airporst
    axios
      .get("/api/airports")
      .then(({ data }) => setAirports(data))
      .catch((err) => message.error(`Error: ${err.message}`, 5));
    // fetch flights
    axios
      .get("/api/flights")
      .then(({ data }) => setFlights(data))
      .catch((err) => message.error(`Error: ${err.message}`, 5)); // Oceanic Flight 815
  }, []);

  const addToFavorite = (flight) => {
    if (!user.id) {
      return message.error(`To add a favorite you need to be logged in.`);
    }

    axios
      .put(`/api/favorites?userId=${user.id}&flightId=${flight.id}`)
      .then((res) => res.data)
      .then(() => {
        setUser({ ...user, favorites: [...user.favorites, flight] });
        message.success(`Flight added to favorites`);
      })
      .catch(({ response }) => {
        message.error(`Error: ${response.data}`, 5);
      });
  };

  const removeFromFavorite = (flight) => {
    axios
      .delete(`/api/favorites?userId=${user.id}&flightId=${flight.id}`)
      .then((res) => res.data)
      .then(() => {
        setUser({
          ...user,
          favorites: user.favorites.filter((fav) => fav.id !== flight.id),
        });
        message.success(`Flight removed from favorites`);
      })
      .catch(({ response }) => {
        message.error(`Error: ${response.data}`, 5);
      });
  };

  return (
    <>
      <Header user={user} handleLoginClick={sendLoginRequest} />
      <Content
        user={user}
        flights={flights}
        airports={airports}
        addToFavorite={addToFavorite}
        removeFromFavorite={removeFromFavorite}
      />
    </>
  );
}
