
import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./features/apiSlice";
import authSliceReducer from "./features/authSlice";
import cartSliceReducer from "./features/cartSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        cartSlice: cartSliceReducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;

