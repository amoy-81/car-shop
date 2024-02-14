import { Container, Typography } from "@mui/material";
import React from "react";
import DropDown from "./components/DropDown";

function About() {
  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        marginTop: "48px",
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        امکانات و ویژگی ها
      </Typography>
      <DropDown />
    </Container>
  );
}

export default About;
