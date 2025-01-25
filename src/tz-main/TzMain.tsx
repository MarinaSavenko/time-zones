import Stack from "@mui/material/Stack/Stack";
import TzInput from "../tz-intut/TzInput.tsx";

const TzMain = () => {
  return (
    <Stack direction="row" justifyContent="space-around" gap="20px">
      <TzInput />
      <TzInput />
    </Stack>
  );
};
export default TzMain;
