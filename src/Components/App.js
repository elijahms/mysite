import AllPages from "./AllPages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      type: "light",
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#0dec7c",
      },
      secondary: {
        main: "#e040fb",
      },
      background: {
        default: "#06a86d",
      },
      text: {
        primary: "#edf5e1",
      },
    },
    typography: {
      fontFamily: "Raleway, Arial",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AllPages />
    </ThemeProvider>
  );
}

export default App;
