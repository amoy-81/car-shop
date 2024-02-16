"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NewComment from "./NewComment";

function CommentSection() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [fetchState, setFetchState] = useState("loading"); // enum(loading , response , error)
  const [up, setUp] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/comment/${id}`)
      .then(async (response) => {
        const result = await response.json();

        if (response.status == 200) {
          setComments(result.reverse());
          setFetchState("response");
        }
      })
      .catch(() => setFetchState("error"));
  }, [up]);

  return (
    <>
      <Box
        sx={{
          minWidth: "60dvw",
          p: 2,
          backgroundColor: "background.paper",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{ width: "100%", textAlign: "center", marginTop: "16px" }}
          role="presentation"
        >
          <Typography variant="h5" component={"h2"} padding={2}>
            نظرات
          </Typography>
        </Box>

        {fetchState === "loading" ? (
          <div className=" flex justify-center items-center p-6">
            <CircularProgress />
          </div>
        ) : (
          <>
            <NewComment setUp={setUp} />
            <div className=" w-3/4 mt-4">
              {comments?.map((comment) => (
                <Accordion key={comment.id} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <div className=" flex items-center gap-2">
                      <Avatar />
                      <Typography fontWeight={500}>{comment.name}</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails sx={{ minWidth: "80%" }}>
                    <Typography>{comment.comment}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
              {comments.length === 0 && (
                <Typography
                  variant="p"
                  component={"p"}
                  textAlign={"center"}
                  color={"text.secondary"}
                  padding={4}
                >
                  نظری برای این محصول ثبت نشده
                </Typography>
              )}
            </div>
          </>
        )}
      </Box>
    </>
  );
}

export default CommentSection;
