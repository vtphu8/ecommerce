import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./popupRedux";
import categoryRedux from "./categoryRedux";
const store = configureStore({
  reducer: { popup: popupReducer, category: categoryRedux },
});

export default store;
