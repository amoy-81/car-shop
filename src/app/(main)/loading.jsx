import React from "react";
import { BeatLoader } from "react-spinners";

function loading() {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <BeatLoader color="#1976d2" />
    </div>
  );
}

export default loading;
