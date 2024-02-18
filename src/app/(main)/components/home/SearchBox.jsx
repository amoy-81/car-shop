"use client";
import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  return (
    <form className=" w-full flex justify-center">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
      >
        <TextField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          variant="outlined"
          placeholder="نام خودرو"
        />
        <Button
          onClick={() => router.push(`/search?name=${searchText}`)}
          variant="contained"
          color="primary"
        >
          جست وجو
        </Button>
      </Stack>
    </form>
  );
}

export default SearchBox;
