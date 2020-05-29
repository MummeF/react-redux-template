import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import HttpsRedirect from 'react-https-redirect';
import Root from "./Root"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a5d6a7",
    },
    secondary: {
      main: "#757575",
    },
    background: {
      paper: grey[100]
    }
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        color: grey[800]
      },
      textSecondary: {
        color: grey[600]
      },
    },
  }
});
function App() {
  return (
    <>
      <HttpsRedirect>
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </HttpsRedirect>
    </>
  );
}

export default App;
