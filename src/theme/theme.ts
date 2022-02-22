import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    backgroundSecondary: {
      main: "#eceff1",
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif;",
    fontSize: 16,
    h1: {
      fontSize: 42,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 21,
      fontWeight: 600,
    },
    body1: {
      fontSize: 21,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    backgroundSecondary: Palette["primary"];
  }

  interface PaletteOptions {
    backgroundSecondary: PaletteOptions["primary"];
  }
}

export default theme;
