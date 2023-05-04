import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import thunkMiddleware from "redux-thunk";
import addManufacturerReducer from "../features/addManufacturersSlice";
import getManufacturerReducer from "../features/getManufacturerSlice";
import editManufacturerReducer from "../features/editManufacturerSlice";
import deleteManufacturerReducer from "../features/deleteManufacturerSlice";
import getManufacturerDataReducer from "../features/getManufacturerDataSlice";

export const store = configureStore({
  // Here we will have our different slices
  reducer: {
    // user: authReducer,
    user: authReducer,
    add: addManufacturerReducer,
    get: getManufacturerReducer,
    edit: editManufacturerReducer,
    delete: deleteManufacturerReducer,
    getManufacturerDetails: getManufacturerDataReducer,
  },
  middleware: [thunkMiddleware],
});

// Dynamic return of store state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
