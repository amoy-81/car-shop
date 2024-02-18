import { Box, Button, Container, Typography } from "@mui/material";
import BackButton from "./components/BackButton";
import Image from "next/image";
import { priceSeparator } from "@/helpers/separator";
import CommentSection from "./components/CommentSection";
import RecordOrder from "./components/RecordOrder";

const getProduct = async (id) => {
  const res = await fetch(`${process.env.LOCAL_API_URL}/product/${id}`);
  return res.json();
};

async function Product({ params }) {
  const productValues = await getProduct(params.id);
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: "80px" }}>
      <Box
        padding={4}
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h5" component={"h2"}>
          محصول
        </Typography>
        <BackButton />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        padding={4}
      >
        <Image
          src={productValues[0].image}
          width={1000}
          height={400}
          priority={true}
          alt={productValues[0].name}
          className=" rounded-lg"
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "4px",
            justifyContent: "space-between",
          }}
          padding={4}
        >
          <Typography variant="h5" component={"h2"} fontWeight={600}>
            {productValues[0].name}
          </Typography>
          <Typography
            variant="h7"
            component={"h2"}
            sx={{ display: "flex", alignItems: "center" }}
            color={"text.secondary"}
          >
            قیمت : {priceSeparator(productValues[0].price)}
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }} padding={4}>
          <Typography
            variant="p"
            component={"p"}
            fontWeight={400}
            color={"text.secondary"}
          >
            {productValues[0].description}
          </Typography>
        </Box>
      </Box>
      <RecordOrder />
      <CommentSection />
    </Container>
  );
}

export default Product;
