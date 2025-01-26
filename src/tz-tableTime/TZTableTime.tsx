import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import React, { useMemo } from "react";

interface TZTableTimeProps {
  selectedCity: string;
}

const TZTableTime: React.FC<TZTableTimeProps> = ({ selectedCity }) => {
  const cities = useSelector((state: RootState) => state.tzCity.cities);
  const selectedCityData = useMemo(
    () => cities.find((city) => city.city === selectedCity),
    [cities, selectedCity]
  );
  console.log(selectedCityData);
  const rows = Array.from({ length: 24 }, (_, index) => ({
    number: index + 1,
    time: selectedCityData
      ? new Date(new Date().setHours(index, 0, 0, 0)).toLocaleString("ru-RU", {
          timeZone: selectedCityData.timeZone,
        })
      : "",
  }));
  return (
    <TableContainer component={Paper}>
      <Table aria-label="time table">
        <TableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TZTableTime;
