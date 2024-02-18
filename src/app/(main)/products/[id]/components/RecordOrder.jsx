"use client";
import useRequest from "@/core/http-service-client";
import { Alert, Box, Button } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function RecordOrder() {
  const { id } = useParams();
  const { response, error, fetchRequest, loading } = useRequest(
    "/order",
    "post"
  );

  const [formStatus, setFormStatus] = useState({
    status: "off",
    message: null,
  });

  const sendReq = async () => {
    setFormStatus({ status: "loading", message: null });
    fetchRequest({ car_id: id });
  };

  useEffect(() => {
    if (response) {
      setFormStatus({ status: "success", message: "سفارش با موفقیت ثبت شد" });
    }
    if (error) {
      setFormStatus({
        status: "error",
        message: error?.message || "خطا رخ داده",
      });
    }
  }, [response, error]);

  return (
    <>
      {(formStatus.status === "success" || formStatus.status === "error") && (
        <Alert severity={formStatus.status}>{formStatus.message}</Alert>
      )}
      <Box
        sx={{ width: "100%" }}
        display={"flex"}
        justifyContent={"center"}
        padding={4}
        gap={2}
      >
        <Button disabled={loading} onClick={sendReq} variant="contained">
          سفارش
        </Button>
      </Box>
    </>
  );
}

export default RecordOrder;
