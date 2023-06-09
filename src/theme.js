export const colorTokens = {
    primary: {
        50: "#F6F2FF",
        100: "#EAD5FF",
        200: "#DEC0FF",
        300: "#D2AAFF",
        400: "#C694FF",
        500: "#BA7EFF",
        600: "#A164E5",
        700: "#854BCB",
        800: "#6832B2",
        900: "#4B1988",
    },
    secondary: {
        50: "#E5F7F6",
        100: "#BAEFEA",
        200: "#8BE7DE",
        300: "#5CEFD1",
        400: "#2EE7C5",
        500: "#00DFB9",
        600: "#00BFA3",
        700: "#009F8B",
        800: "#007F72",
        900: "#005F59",
    },
    background: {
        50: "#F4F6F8",
        100: "#E9EEF1",
        200: "#DDE6EA",
        300: "#D1DFE3",
        400: "#C6D8DC",
        500: "#BAD0D6",
        600: "#A0B3BB",
        700: "#85969F",
        800: "#6B7984",
        900: "#505A69",
    },
};

export const themeSettings = (mode) => {
    const isDarkMode = mode === 'dark';

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
                dark: isDarkMode
                    ? colorTokens.primary[900]
                    : colorTokens.primary[700],
                light: isDarkMode
                    ? colorTokens.primary[200]
                    : colorTokens.primary[100],
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
            fontFamily: 'Arial, sans-serif',
            fontSize: 16,
            h1: {
                fontSize: 48,
                fontWeight: 'bold',
                marginBottom: '1rem',
            },
            h2: {
                fontSize: 40,
                fontWeight: 'bold',
                marginBottom: '1rem',
            },
            h3: {
                fontSize: 32,
                fontWeight: 'bold',
                marginBottom: '0.75rem',
            },
            h4: {
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: '0.5rem',
            },
            h5: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: '0.25rem',
            },
            h6: {
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: '0.25rem',
            },
            body1: {
                fontSize: 16,
                lineHeight: 1.5,
            },
            button: {
                fontSize: 14,
                textTransform: 'uppercase',
                fontWeight: 'bold',
            },
        },
        shape: {
            borderRadius: 8,
        },
        shadows: isDarkMode
            ? [
                'none',
                '0px 2px 4px rgba(0, 0, 0, 0.1)',
                '0px 4px 8px rgba(0, 0, 0, 0.1)',
                '0px 8px 16px rgba(0, 0, 0, 0.1)',
                '0px 16px 24px rgba(0, 0, 0, 0.1)',
            ]
            : [
                'none',
                '0px 2px 4px rgba(0, 0, 0, 0.1)',
                '0px 4px 8px rgba(0, 0, 0, 0.1)',
                '0px 8px 16px rgba(0, 0, 0, 0.1)',
                '0px 16px 24px rgba(0, 0, 0, 0.1)',
            ],
    };
};
