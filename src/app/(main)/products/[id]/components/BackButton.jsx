'use client'
import { ArrowBackIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <IconButton onClick={() => router.back()}>
      <ArrowBackIos />
    </IconButton>
  );
}

export default BackButton;
