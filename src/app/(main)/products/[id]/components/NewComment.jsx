"use client";

import { newComment, whoAmI } from "@/app/actions";
import RTL from "@/mui/RTL";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function NewComment({ setUp }) {
  const { id } = useParams();
  const [commentsText, setCommentsText] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserDatas = async () => {
    const userRes = await whoAmI();
    setUser(userRes);
  };

  useEffect(() => {
    getUserDatas();
  }, []);

  const sendComment = async () => {
    if (commentsText.length == 0) return;

    setLoading(true);
    const response = await newComment(id, commentsText);
    setLoading(false);
    if (response.success) {
      setCommentsText("");
      setUp((prev) => prev + 1);
    } else {
      setError(response.message);
    }
  };

  return (
    <>
      {error && (
        <Alert variant="outlined" severity="success">
          {error?.message}
        </Alert>
      )}
      <Box
        sx={{
          padding: "8px",
          display: "flex",
          // alignItems: "center",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "center",
          gap: "16px",
          width: "100%",
        }}
      >
        {user ? (
          <RTL>
            <TextField
              variant="outlined"
              label="نظر خود را وارد نمایید"
              sx={{ width: { sm: "80%", xs: "100%" } }}
              value={commentsText}
              onChange={(e) => setCommentsText(e.target.value)}
            />
            <Button
              disabled={loading}
              onClick={sendComment}
              variant="outlined"
              padding={4}
            >
              ثبت نظر
            </Button>
          </RTL>
        ) : (
          <Typography
            variant="p"
            component={"p"}
            color={"text.secondary"}
            textAlign={"center"}
          >
            برای ثبت نظر ابتدا وارد حساب شوید
          </Typography>
        )}
      </Box>
    </>
  );
}

export default NewComment;
