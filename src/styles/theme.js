import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#69E166",
    },
    secondary: {
      main: "#242A33",
    },
    white: {
      main: "#fff",
    },
    black: {
      main: "#1f1f1f",
    },
  },
  overrides: {
    MuiContainer: {},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 991,
    },
  },
});

export default theme;
