import Introduction from "./components/home/Introduction";
import { Box, Typography, Grid, Container } from "@mui/material";
import { CardComponent } from "./components/card/Card";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Box sx={{ padding: "6px" }} id="new-products">
        <Typography
          variant="h6"
          component={"h2"}
          textAlign={"center"}
          marginY={4}
        >
          محصولات جدید
        </Typography>
        <Container maxWidth={"lg"}>
          <Grid container xs={12}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              padding={2}
              className=" flex justify-center"
            >
              <CardComponent />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              padding={2}
              className=" flex justify-center"
            >
              <CardComponent />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              padding={2}
              className=" flex justify-center"
            >
              <CardComponent />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
