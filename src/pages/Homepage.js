import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import "../styles.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box p={2} minWidth={200}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Text Summarization
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Text Summary
              </Typography>
              <Typography variant="h6">Summarize long text</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2} minWidth={200}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Paragraph
              </Typography>
              <Typography variant="h6">Generate Paragraph</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2} minWidth={200}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            AI Chatbot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat with AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2} minWidth={200}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Code Generator
          </Typography>
          <Card
            onClick={() => navigate("/code-generator")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <CodeOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Code Generator
              </Typography>
              <Typography variant="h6">
                Ask to write codes and logics efficiently
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2} minWidth={200}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Image Generator
          </Typography>
          <Card
            onClick={() => navigate("/image-generator")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ImageOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Sci-Fi Images
              </Typography>
              <Typography variant="h6">Generate Images as You Want</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 2,
        }}
      >
        <Box
          width="100%"
          backgroundColor="aliceblue"
          p="2rem 6%"
          textAlign="center"
          sx={{
            boxShadow: 3,
            position: "relative",
            bottom: 0,
            top: "2vh",
            height: "calc(20vh + 100%)",
          }}
        >
          <Typography variant="subtitle1">
            Copyright &copy; 2023 || All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
