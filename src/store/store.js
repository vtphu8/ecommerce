import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./popupRedux";
const store = configureStore({
  reducer: { popup: popupReducer },
});

export default store;
