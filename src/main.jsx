import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// const initialState = [];

function userReducer(state = [], action) {
  switch (
    action.type // Action pertinente
  ) {
    case "SET_USER":
      return [...state, action.payload];
    // case "DELETE_USER":
    //   return [...state.filter((user) => user.id !== action.payload)];
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
