"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { whoAmI } from "@/app/actions";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function HambergerMenu() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const getUserDatas = async () => {
    const userRes = await whoAmI();
    setUser(userRes);
  };

  useEffect(() => {
    getUserDatas();
  }, [pathname]);

  return (
    <Box sx={{ display: { sm: "", md: "none" } }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ minWidth: "30px", p: "4px" }}
      >
        <MenuIcon />
      </Button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            minWidth: "60dvw",
            p: 2,
            backgroundColor: "background.paper",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              flexGrow: 1,
            }}
          ></Box>
          <Link href={"/"} passHref>
            <MenuItem>خانه</MenuItem>
          </Link>
          <Link href={"/#new-products"} passHref>
            <MenuItem>جدید</MenuItem>
          </Link>
          <Link href={"/products"} passHref>
            <MenuItem>محصولات</MenuItem>
          </Link>
          <Link href={"/about"} passHref>
            <MenuItem>درباره ما</MenuItem>
          </Link>
          <Divider sx={{ margin: 1 }} />

          {user && (
            <Link href={"/orders"} passHref>
              <MenuItem>سفارش ها</MenuItem>
            </Link>
          )}

          {!user && (
            <div className=" w-full">
              <MenuItem>
                <Link href={`/auth/register?backUrl=${pathname}`} passHref className=" w-full">
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    ثبت نام
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={`/auth/login?backUrl=${pathname}`} passHref className=" w-full">
                  <Button
                    color="primary"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    ورود
                  </Button>
                </Link>
              </MenuItem>
            </div>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}

export default HambergerMenu;
