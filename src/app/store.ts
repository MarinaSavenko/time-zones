import { configureStore } from "@reduxjs/toolkit";
import tzCityReducer from "../tz-citySlice/TzCitySlice.tsx";

const store = configureStore({
    reducer: {
        tzCity: tzCityReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store ;