import { httpService } from "@/core/http-service";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { CardComponent } from "../components/card/Card";
import BackButton from "../products/[id]/components/BackButton";

const getSearchResult = async (searchText) => {
  const response = await httpService.post("/search", { string: searchText });

  return response.data;
};

async function SearchPage({ searchParams }) {
  const searchResult = await getSearchResult(searchParams?.name);
  console.log(searchResult);

  return (
    <Container maxWidth={"lg"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "6px",
          paddingTop: "58px",
        }}
      >
        <Box
          padding={4}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component={"h2"}>
            محصول
          </Typography>
          <BackButton />
        </Box>
        <Typography
          marginBottom={1}
          variant="p"
          component={"p"}
          color={"text.secondary"}
        >
          نتیجه محصولاتی که درنام آن ها ({searchParams?.name}) وجود دارد
        </Typography>
      </Box>
      <Grid container>
        {searchResult?.map((product) => (
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
  );
}

export default SearchPage;
