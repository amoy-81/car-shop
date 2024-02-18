import { Box, Container, Grid, Typography } from "@mui/material";
import OrderCard from "./components/OrderCard";
import { httpService } from "@/core/http-service";

const getOrders = async () => {
  const response = await httpService.get("/order");
  return response.data;
};

async function OrdersPage() {
  const orders = await getOrders();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6px",
        paddingTop: "58px",
      }}
    >
      <Typography marginTop={4} variant="h6" component={"h2"}>
        سفارش ها
      </Typography>
      <Typography variant="p" marginY={2} component={"p"} color={'text.secondary'}>
        در صورت تحویل وضعیت به تحویل شده تغییر می کند
      </Typography>
      <Container maxWidth={"lg"}>
        <Grid container>
          {orders?.map((order) => (
            <Grid
              item
              // key={product.id}
              xs={12}
              sm={6}
              md={4}
              padding={2}
              className=" flex justify-center"
            >
              <OrderCard {...order} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OrdersPage;
