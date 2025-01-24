import {useDispatch, useSelector} from "react-redux";
import {City, setCity} from "../tz-citySlice/TzCitySlice.tsx";
import {RootState} from "../app/store.tsx";

const TzInput = () => {
    const selectedCity = useSelector((state: RootState) => state.tzCity.selectedCity);
    const cities = useSelector((state: RootState)=> state.tzCity.cities);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCity(e.target.value));
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
        </>


    );
}
export default TzInput


