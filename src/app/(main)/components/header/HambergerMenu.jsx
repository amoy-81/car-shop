"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import RTL from "@/mui/RTL";

function HambergerMenu() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
          <MenuItem>خانه</MenuItem>
          <MenuItem>جدید</MenuItem>
          <MenuItem>محصولات</MenuItem>
          <MenuItem>درباره ما</MenuItem>
          <Divider />
          <MenuItem>
            <Button
              color="primary"
              variant="contained"
              component="a"
              href="/material-ui/getting-started/templates/sign-up/"
              target="_blank"
              sx={{ width: "100%" }}
            >
              ثبت نام
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              color="primary"
              variant="outlined"
              component="a"
              href="/material-ui/getting-started/templates/sign-in/"
              target="_blank"
              sx={{ width: "100%" }}
            >
              ورود
            </Button>
          </MenuItem>
        </Box>
      </Drawer>
    </Box>
  );
}

export default HambergerMenu;
