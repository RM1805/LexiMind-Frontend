export const colorTokens = {
  primary: {
    50: "#F8F4FC",
    100: "#E1D2F8",
    200: "#C7A7F3",
    300: "#AD7CF0",
    400: "#9454EB",
    500: "#7C2EE6",
    600: "#6C1FD1",
    700: "#5B1AAE",
    800: "#4A1589",
    900: "#390F66",
  },
  secondary: {
    50: "#F2F9F7",
    100: "#C5EBE2",
    200: "#97DCCB",
    300: "#69CEB4",
    400: "#3DCFA0",
    500: "#12C08B",
    600: "#0FAF7A",
    700: "#0D9E68",
    800: "#0A8E57",
    900: "#087E46",
  },
  background: {
    50: "#F5F8FA",
    100: "#EBF1F5",
    200: "#D4DEE8",
    300: "#BCC8D9",
    400: "#A5B2CA",
    500: "#8E9BBB",
    600: "#7783AB",
    700: "#606C9C",
    800: "#49568D",
    900: "#323F7E",
  },
};

export const themeSettings = (mode) => {
  const isDarkMode = mode === "dark";

  const primaryColor = isDarkMode
    ? colorTokens.primary[800]
    : colorTokens.primary[500];

  const secondaryColor = isDarkMode
    ? colorTokens.secondary[600]
    : colorTokens.secondary[500];

  const backgroundColor = isDarkMode
    ? colorTokens.background[900]
    : colorTokens.background[50];

  return {
    palette: {
      primary: {
        main: primaryColor,
        dark: isDarkMode ? colorTokens.primary[900] : colorTokens.primary[700],
        light: isDarkMode ? colorTokens.primary[200] : colorTokens.primary[100],
      },
      secondary: {
        main: secondaryColor,
        dark: isDarkMode
          ? colorTokens.secondary[900]
          : colorTokens.secondary[700],
        light: isDarkMode
          ? colorTokens.secondary[200]
          : colorTokens.secondary[100],
      },
      background: {
        default: backgroundColor,
        paper: isDarkMode
          ? colorTokens.background[700]
          : colorTokens.background[100],
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 16,
      h1: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: "1rem",
        color: primaryColor,
      },
      h2: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: "1rem",
        color: primaryColor,
      },
      h3: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: "0.75rem",
        color: primaryColor,
      },
      // ... (other heading styles)
      body1: {
        fontSize: 16,
        lineHeight: 1.5,
        color: isDarkMode ? "#ffffff" : "#333333",
      },
      button: {
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: "bold",
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: isDarkMode
      ? [
          "none",
          "0px 2px 4px rgba(0, 0, 0, 0.1)",
          "0px 4px 8px rgba(0, 0, 0, 0.1)",
          "0px 8px 16px rgba(0, 0, 0, 0.1)",
          "0px 16px 24px rgba(0, 0, 0, 0.1)",
        ]
      : [
          "none",
          "0px 2px 4px rgba(0, 0, 0, 0.1)",
          "0px 4px 8px rgba(0, 0, 0, 0.1)",
          "0px 8px 16px rgba(0, 0, 0, 0.1)",
          "0px 16px 24px rgba(0, 0, 0, 0.1)",
        ],
  };
};
