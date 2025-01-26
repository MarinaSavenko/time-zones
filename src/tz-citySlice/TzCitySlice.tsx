import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface City {
        city: string;
        timeZone: string;
        utcOffset: string;
}
export interface TzCitySlice {
        cities: City[];
        selectedCity: string;

}

const initialState: TzCitySlice = {
     cities:[
         { "city": "New York", "timeZone": "America/New_York", "utcOffset": "-05:00" },
         { "city": "London", "timeZone": "Europe/London", "utcOffset": "+00:00" },
         { "city": "Tokyo", "timeZone": "Asia/Tokyo", "utcOffset": "+09:00" },
         { "city": "Paris", "timeZone": "Europe/Paris", "utcOffset": "+01:00" },
         { "city": "Berlin", "timeZone": "Europe/Berlin", "utcOffset": "+01:00" },
         { "city": "Kyiv", "timeZone": "Europe/Kiev", "utcOffset": "+02:00" },
         { "city": "Sydney", "timeZone": "Australia/Sydney", "utcOffset": "+11:00" },
         { "city": "Beijing", "timeZone": "Asia/Shanghai", "utcOffset": "+08:00" },
         { "city": "Rio de Janeiro", "timeZone": "America/Sao_Paulo", "utcOffset": "-03:00" },
         { "city": "Dubai", "timeZone": "Asia/Dubai", "utcOffset": "+04:00" },
         { "city": "Calgary", "timeZone": "America/Edmonton", "utcOffset": "-07:00" }
        ],
        selectedCity: "Kyiv",
};
const tzCitySlice = createSlice ({
        name: 'tzCity',
        initialState,
        reducers: {
                setCity: (state, action: PayloadAction<string>) => {
                        state.selectedCity = action.payload;
                }
        }
});
export const { setCity } = tzCitySlice.actions;
export default tzCitySlice.reducer;