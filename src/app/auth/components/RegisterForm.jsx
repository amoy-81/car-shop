"use client";
import { setCookieAction } from "@/app/actions";
import RTL from "@/mui/RTL";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const backUrl = searchParams.get("backUrl");

  const [formSendState, setFormSendState] = useState({
    state: "off", // enum ('loading' , 'off' , 'error')
    value: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data;

    setFormSendState({ state: "loading", value: "" });

    fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/register`, {
      method: "post",
      body: JSON.stringify(userData),
    }).then(async (res) => {
      const responseData = await res.json();
      if (res?.status === 201) {
        setCookieAction("accessToken", responseData.token);
        setFormSendState({ state: "off", value: "" });
        if (backUrl) {
          router.replace(backUrl);
        } else {
          router.replace("/");
        }
      } else {
        setFormSendState({
          state: "error",
          value: responseData?.message || "خطا در برقراری ارتباط",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formSendState.state === "loading" && (
        <div className=" w-full h-full flex justify-center items-center absolute top-0 left-0 backdrop-blur-[1px] z-50 ">
          <CircularProgress />
        </div>
      )}

      <RTL>
        {formSendState.state === "error" && (
          <Alert severity="error">{formSendState.value}</Alert>
        )}
        <TextField
          margin="normal"
          {...register("name", { required: "این فیلد الزامیست" })}
          fullWidth
          label={errors.name ? `نام * ${errors.name.message}` : "نام"}
          error={errors.name ? true : false}
          name="name"
          autoFocus
        />
        <TextField
          margin="normal"
          {...register("username", { required: "این فیلد الزامیست" })}
          label={
            errors.username
              ? `نام کاربری * ${errors.username.message}`
              : "نام کاربری"
          }
          error={errors.username ? true : false}
          fullWidth
          name="username"
          autoFocus
        />
        <TextField
          margin="normal"
          {...register("password", { required: "این فیلد الزامیست" })}
          label={
            errors.password
              ? `رمز عبور * ${errors.password.message}`
              : "رمز عبور"
          }
          error={errors.password ? true : false}
          fullWidth
          name="password"
          type="password"
        />
        <TextField
          margin="normal"
          {...register("confirmPassword", {
            required: "این فیلد الزامیست",
            validate: (value) => {
              if (value !== watch("password")) {
                return "با مقدار رمزعبور منطبق نیست";
              }
            },
          })}
          label={
            errors.confirmPassword
              ? `تکرار رمزعبور * ${errors.confirmPassword.message}`
              : "تکرار رمزعبور"
          }
          error={errors.confirmPassword ? true : false}
          fullWidth
          name="confirmPassword"
          type="password"
        />
      </RTL>
      <Button
        type="submit"
        disabled={formSendState.state === "loading"}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        ثبت اطلاعات
      </Button>
    </form>
  );
}

export default RegisterForm;
