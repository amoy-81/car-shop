import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import HambergerMenu from "./HambergerMenu";
import Link from "next/link";
import { whoAmI } from "@/app/actions";

async function Header() {
  const user = await whoAmI();
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "#fff",
          backgroundImage: "none",
        }}
      >
        <Container maxWidth="lg" sx={{ padding: 0 }}>
          <Toolbar
            variant="regular"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                fontWeight={700}
                color={"primary"}
              >
                فروشگاه ماشین
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link href={"/"}>
                  <Typography
                    variant="h7"
                    color="text.primary"
                    fontWeight={500}
                  >
                    خانه
                  </Typography>
                </Link>
              </MenuItem>
              {!user ? (
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link href={"/#new-products"}>
                    <Typography
                      variant="h7"
                      color="text.primary"
                      fontWeight={500}
                    >
                      جدید
                    </Typography>
                  </Link>
                </MenuItem>
              ) : (
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link href={"/orders"}>
                    <Typography
                      variant="h7"
                      color="text.primary"
                      fontWeight={500}
                    >
                      سفارش ها
                    </Typography>
                  </Link>
                </MenuItem>
              )}

              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link href={"/products"}>
                  <Typography
                    variant="h7"
                    color="text.primary"
                    fontWeight={500}
                  >
                    محصولات
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link href={"/about"}>
                  <Typography
                    variant="h7"
                    color="text.primary"
                    fontWeight={500}
                  >
                    درباره ما
                  </Typography>
                </Link>
              </MenuItem>
            </Box>

            {user && (
              <Typography
                variant="h7"
                component={"h3"}
                fontWeight={600}
                color="text.primary"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                کاربر گرامی {user?.name}
              </Typography>
            )}

            {!user && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                <Link href={"/login"} passHref>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component="button"
                  >
                    ورود
                  </Button>
                </Link>
                <Link href={"/register"} passHref>
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
            )}
            <HambergerMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
