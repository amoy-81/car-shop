import { CircularProgress } from "@mui/material";

function loading() {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <CircularProgress />
    </div>
  );
}

export default loading;
