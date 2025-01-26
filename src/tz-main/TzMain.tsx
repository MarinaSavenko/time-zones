import Stack from "@mui/material/Stack/Stack";

import { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TzInput from "../tz-input/TzInput.tsx";



const TzMain = () => {
  const [cities, setCities] = useState<string[]>([""]);
  return (
    <Stack direction="row" justifyContent="space-around" gap="20px">
      {cities.map(() => (
        <TzInput />
      ))}
      <IconButton
        color="primary"
        aria-label="add time zone"
        onClick={() => setCities([...cities, ""])}
      >
        <AddIcon />
      </IconButton>

    </Stack>
  );
};
export default TzMain;
