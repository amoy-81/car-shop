import { Box, Container, Grid, Typography } from "@mui/material";
import { CardComponent } from "../components/card/Card";

const getProducts = async () => {
  const res = await fetch(`${process.env.LOCAL_API_URL}/product`);
  return res.json();
};

async function ProductsPage() {
  const newProducts = await getProducts();
  return (
    <Box sx={{ padding: "6px", paddingTop: "58px" }} id="new-products">
      <Typography
        variant="h6"
        component={"h2"}
        textAlign={"center"}
        marginY={4}
      >
        محصولات نمایشگاه
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

export default ProductsPage;
