import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import HttpsRedirect from 'react-https-redirect';
import Root from "./Root"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/Service';

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




const store = createStore(reducer);


function App() {
  return (
    <>
      <HttpsRedirect>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Root />
          </ThemeProvider>
        </Provider>
      </HttpsRedirect>
    </>
  );
}

export default App;
