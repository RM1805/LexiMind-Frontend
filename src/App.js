import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { themeSettings } from './theme';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from "react-hot-toast"
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import Chatbot from './pages/Chatbot';
import CodeGenerator from './pages/Generatecodes';
import ImageGenerator from './pages/Imagegenerator';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          {authenticated ? (
            <>
              <Route path="/summary" element={<Summary />} />
              <Route path="/paragraph" element={<Paragraph />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/code-generator" element={<CodeGenerator />} />
              <Route path="/image-generator" element={<ImageGenerator />} />
            </>
          ) : (
            <Route
              path="*"
              element={<Navigate to="/login" replace />}
            />
          )}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
