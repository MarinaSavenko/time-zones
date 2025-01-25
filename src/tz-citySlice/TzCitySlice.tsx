import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface City {
        city: string;
        timeZone: string;
}
export interface TzCitySlice {
        cities: City[];
        selectedCity: string;
        timeZone: string;
}

const initialState: TzCitySlice = {
     cities:[
        { city: "New York", timeZone: "America/New_York" },
        { city: "London", timeZone: "Europe/London" },
        { city: "Tokyo", timeZone: "Asia/Tokyo" },
        { city: "Paris", timeZone: "Europe/Paris" },
        { city: "Berlin", timeZone: "Europe/Berlin" },
        { city: "Kyiv", timeZone: "Europe/Kiev" },
        { city: "Sydney", timeZone: "Australia/Sydney" },
        { city: "Beijing", timeZone: "Asia/Shanghai" },
        { city: "Rio de Janeiro", timeZone: "America/Sao_Paulo" },
        { city: "Dubai", timeZone: "Asia/Dubai" },
        { city: "Calgary", timeZone: "America/Calgary" }
     ],
    selectedCity: "Kyiv",
    timeZone: "Europe/Kiev",
};
const tzCitySlice = createSlice ({
        name: 'tzCity',
        initialState,
        reducers: {
                setCity: (state, action: PayloadAction<string>) => {
                    //console.log(action.payload);
                    state.selectedCity = action.payload;
                    const city = state.cities.find(city => city.city === action.payload);
                    if (city) {
                        state.timeZone = city.timeZone;
                    }
                },

        }
});
//console.log(initialState);
export const { setCity, } = tzCitySlice.actions;
export default tzCitySlice.reducer;