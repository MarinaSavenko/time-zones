import Stack from "@mui/material/Stack/Stack";

import { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TzInput from "../tz-input/TzInput.tsx";
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
  &&&  {
      background-color: pink;
      border-radius: 5px;
    }
`;
const StyledAddIcon = styled(AddIcon)`
  &&&  {
     color: darkslategray;
      
    }
`;
const StyledRemoveIcon = styled(RemoveIcon)`
  &&&  {
     color: darkslategray;  
      
    }
`;

const TzMain = () => {
  const [cities, setCities] = useState<string[]>([""]);
  return (
    <Stack direction="row" justifyContent="space-around" gap="20px">
      {cities.map(() => (
        <TzInput />
      ))}
        <Stack gap="20px">
          <StyledIconButton
            color="primary"
            aria-label="add time zone"
            onClick={() => setCities([...cities, ""])}
          >
            <StyledAddIcon />
          </StyledIconButton>
          <StyledIconButton
              color="primary"
              aria-label="add time zone"
              onClick={() => setCities(cities.slice(0, -1))}
            >
              <StyledRemoveIcon />
          </StyledIconButton>
       </Stack>
    </Stack>
  );
};
export default TzMain;
