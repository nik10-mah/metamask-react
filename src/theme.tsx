import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
    palette: {
    //   primary: {
    //     main: '#556cd6',
    //   },
    //   secondary: {
    //     main: '#19857b',
    //   },
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
      error: {
        main: red.A400,
      },
    },
  });
  
  export default theme;