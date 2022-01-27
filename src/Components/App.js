import "../index.css";
import AllPages from "./AllPages";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import CalibreMed from "../Fonts/Calibre-Medium.ttf";
import RalewayReg from "../Fonts/Raleway-Medium.ttf";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      type: "light",
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
      fontFamily: "Raleway",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${RalewayReg}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/">
          <CssBaseline />
          <AllPages />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
