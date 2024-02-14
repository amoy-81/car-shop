import { Box, Typography, Grid, Container } from "@mui/material";
import { CardComponent } from "../card/Card";

const getNewProducts = async () => {
  const res = await fetch(`${process.env.LOCAL_API_URL}/product/new`);
  return res.json();
};

async function NewProducts() {
  const newProducts = await getNewProducts();
  return (
    <Box sx={{ padding: "6px", paddingTop: "58px" }} id="new-products">
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
          {newProducts?.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              padding={2}
              className=" flex justify-center"
            >
              <CardComponent {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default NewProducts;
