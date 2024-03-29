import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
  CircularProgress,
} from "@mui/material";

axios.defaults.baseURL = "https://leximind.onrender.com";

const CodeGenerator = () => {
  const theme = useTheme();

  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/v1/openai/code-generator", {
        text,
      });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("An error occurred");
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box sx={{ backgroundColor: "#90EE90", marginTop: 0, marginBottom: 0 }}>
      <Box
        width={isNotMobile ? "40%" : "80%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={5}
        sx={{ boxShadow: 5, marginTop: 0, marginBottom: 0 }}
        backgroundColor={theme.palette.background.alt}
      >
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3">Code Efficiently</Typography>

          <TextField
            placeholder="Enter Query"
            type="text"
            multiline={true}
            required
            margin="normal"
            fullWidth
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Generate
          </Button>
          <Typography mt={2}>
            Not This Tool ? <Link to="/">GO BACK</Link>
          </Typography>
        </form>
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="500px"
          >
            <CircularProgress
              size={24}
              style={{ color: "#B0B0B0", backgroundColor: "#B8860B" }}
            />
          </Box>
        ) : response ? (
          <Card
            sx={{
              mt: 4,
              border: 1,
              boxShadow: 0,
              height: "500px",
              borderRadius: 5,
              borderColor: "natural.medium",
              bgcolor: "background.default",
              overflow: "auto",
            }}
          >
            <Typography p={2}>{response}</Typography>
          </Card>
        ) : (
          <Card
            sx={{
              mt: 4,
              border: 1,
              boxShadow: 0,
              height: "500px",
              borderRadius: 5,
              borderColor: "natural.medium",
              bgcolor: "background.default",
            }}
          >
            <Typography
              variant="h5"
              color="natural.main"
              sx={{
                textAlign: "center",
                verticalAlign: "middel",
                lineHeight: "450px",
              }}
            >
              Generated Code
            </Typography>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default CodeGenerator;
