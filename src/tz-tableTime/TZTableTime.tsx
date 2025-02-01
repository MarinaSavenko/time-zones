import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import styled from "styled-components";

import { useState } from "react";

interface TZTableTimeProps {
  selectedCity: string;
}

const StyledTableHead = styled(TableHead)`
  &&& {
    background-color: lightyellow;
  }
`;

const TZTableTime: React.FC<TZTableTimeProps> = ({ selectedCity }) => {
  const cities = useSelector((state: RootState) => state.tzCity.cities);
  const selectedCityData = cities.find((city) => city.city === selectedCity);
  //console.log(selectedCityData);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
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
      <Table sx={{ minWidth: 650 }} aria-label="time table">
        <StyledTableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.number}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor:
                  hoveredRow === row.number ? "lightpink" : "white",
              }}
              onMouseEnter={() => setHoveredRow(row.number)}
              onMouseLeave={() => setHoveredRow(null)}
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
