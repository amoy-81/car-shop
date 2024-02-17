import { Box, Container, Grid, Typography } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          border: "1px solid #e0e0e2",
          borderRadius: "16px",
          marginX: "16px",
        }}
      >
        <Box
          sx={{
            marginY: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Typography component="h1" variant="h5">
            ثبت نام
          </Typography>
          <Typography
            variant="p"
            component={"p"}
            color={"text.secondary"}
            padding={1}
          >
            لطفا اطلاعات را با دقت تکمیل نمایید
          </Typography>
          <Box sx={{ mt: 1 }}>
            <RegisterForm />
            <Grid container>
              <Grid item>
                <Link href="/auth/login" className=" text-[#2196f3]">
                  حساب کاربری دارید؟
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterPage;
