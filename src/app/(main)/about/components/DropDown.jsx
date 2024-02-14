"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Link from "next/link";

function DropDown() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography component="h3" variant="subtitle2">
            چگونه میتوانم سفارش بدهم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: "100%", md: "70%" } }}
          >
            برای سفارش خودرو ابتدا وارد <Link href={"/login"} className=" text-[#1976d2]">حساب کاربری</Link>{" "}
            خود شوید پس از ورود پنل برای شما فعال خواهد شد و میتوانید سفارش خود
            را ثبت کنید.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="h3" variant="subtitle2">
            این وب سایت با چه ابزاری ساخته شده؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: "100%", md: "70%" } }}
          >
            این وب سایت به صورت فول استک با استفاده از فریمورک نکست (ورژن ۱۴)
            ساخته شده و برای دیتابیس در آن از mysql استفاده شده. هم چنین برای
            پیاده سازی رابط کاربری از mui استفاده کردم.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography component="h3" variant="subtitle2">
            امکانات وبسایت
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: "100%", md: "70%" } }}
          >
            ثبت نام و ورود با استفاده از توکن ، دیدن محصولات ، سفارش در صورت
            لاگین کردن، امکان گذاشتن نظر برای یک محصول و ...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default DropDown;
