import { configureStore } from "@reduxjs/toolkit";
import { pdDriverApi } from "./services/pdDriverService";
const store = configureStore({
  reducer: {
    [pdDriverApi.reducerPath]: pdDriverApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pdDriverApi.middleware),
});
export default store;
