import { useDispatch, useSelector } from "react-redux";
import { City } from "../tz-citySlice/TzCitySlice.tsx";
import { RootState } from "../app/store.tsx";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const StyledLabel = styled(InputLabel)`
  padding-left: 10px;
`;

const TzInput = () => {
  const [selectedCity, setCity] = useState<string>("");
  const cities = useSelector((state: RootState) => state.tzCity.cities);

  const handleChange = (value: SelectChangeEvent<string>) => {
    console.log({ value });
    setCity(value.target.value);
  };

  return (
    <Stack flex="1">
      <FormControl>
        <StyledLabel variant="standard" id="city-select">
          City
        </StyledLabel>
        <Select
          labelId="city-select"
          id="demo-simple-select"
          value={selectedCity}
          label="City"
          onChange={handleChange}
        >
          {cities.map((city: City) => (
            <MenuItem value={city.city} key={`key_${city.city}`}>
              {city.city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
export default TzInput;
