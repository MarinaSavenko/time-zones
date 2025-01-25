import {useDispatch, useSelector} from "react-redux";
import {City, setCity, } from "../tz-citySlice/TzCitySlice.tsx";
import {RootState} from "../app/store.tsx";

const TzInput = () => {
   const selectedCity = useSelector((state: RootState) => state.tzCity.selectedCity);
    const cities = useSelector((state: RootState)=> state.tzCity.cities);
    const timeZone = useSelector((state: RootState) => state.tzCity.timeZone);

    // console.log(selectedCity, cities);
   const dispatch = useDispatch();


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cityName = e.target.value;
        dispatch(setCity(cityName));

    };
    return(
        <>
            <label>Select a city:</label>
            <select name="city" value={selectedCity} onChange={handleChange}>
                {cities.map((city: City) => (
                    <option key={city.city} value={city.city}>
                        {city.city}
                    </option>
                ))}
            </select>
            <div>
                <p>Current time: {new Date().toLocaleString("ru-RU", {timeZone})}</p>
            </div>
        </>


    );
}
export default TzInput


