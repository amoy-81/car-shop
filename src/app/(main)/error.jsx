"use client";

import { Alert, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

function Error({ error, reset }) {
  const router = useRouter();
  return (
    <div className=" mt-20 flex items-center flex-col">
      <div className=" w-3/4">
        <Alert severity="error">صفحه مورد نظر یافت نشد</Alert>
      </div>
      <Box component={"div"} padding={3} display={'flex'} gap={3}>
        <Button variant="contained" onClick={() => reset()}>
          امتحان دوباره
        </Button>
        <Button variant="outlined" onClick={() => router.replace("/")}>
          بازگشت به خانه
        </Button>
      </Box>
    </div>
  );
}

export default Error;
