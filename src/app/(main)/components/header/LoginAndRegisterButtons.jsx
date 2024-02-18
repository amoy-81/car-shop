"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function LoginAndRegisterButtons() {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 0.5,
        alignItems: "center",
      }}
    >
      <Link href={`/auth/login?backUrl=${pathname}`} passHref>
        <Button color="primary" variant="text" size="small" component="button">
          ورود
        </Button>
      </Link>
      <Link href={`/auth/register?backUrl=${pathname}`} passHref>
        <Button
          color="primary"
          variant="contained"
          size="small"
          component="button"
        >
          ثبت نام
        </Button>
      </Link>
    </Box>
  );
}

export default LoginAndRegisterButtons;
