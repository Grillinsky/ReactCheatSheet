import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// // const initialState = [];

// function userReducer(state = [], action) {
//   switch (action.type) {
//     case "SET_USER":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// } // TODO:
// // case "DELETE_USER":
// //   return [...state.filter((user) => user.id !== action.payload)];
import usersReducer from "./redux/userSlice.js";
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
