import Stack from "@mui/material/Stack/Stack";
import TzInput from "../tz-intut/TzInput.tsx";
import { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TzMain = () => {
  const [cities, setCities] = useState<String[]>([""]);
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
