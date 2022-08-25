import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const sendLoginRequest = () => (dispatch) => {
  axios
    .post("/api/login")
    .then(({ data }) => {
      dispatch(setUser(data));
      message.success(`Success login: welcome back ${data.name}`);
    })
    .catch((err) => {
      message.error(`Failed login: ${err.message}`, 5);
    });
};

export const addToFavorite = (user, flight) => (dispatch) => {
  if (!user.id) {
    return message.error(`To add a favorite you need to be logged in.`);
  }
  axios
    .put(`/api/favorites?userId=${user.id}&flightId=${flight.id}`)
    .then((res) => res.data)
    .then(() => {
      dispatch(setUser({ ...user, favorites: [...user.favorites, flight] }));
      message.success(`Flight added to favorites`);
    })
    .catch(({ response }) => {
      message.error(`Error: ${response.data}`, 5);
    });
};

export const removeFromFavorite = (user, flight) => (dispatch) => {
  axios
    .delete(`/api/favorites?userId=${user.id}&flightId=${flight.id}`)
    .then((res) => res.data)
    .then(() => {
      dispatch(
        setUser({
          ...user,
          favorites: user.favorites.filter((fav) => fav.id !== flight.id),
        })
      );
      message.success(`Flight removed from favorites`);
    })
    .catch(({ response }) => {
      message.error(`Error: ${response.data}`, 5);
    });
};

export default userSlice.reducer;
