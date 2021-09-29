import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa'
    },
    secondary: {
      main: '#110011'
    }
  },
  spacing: 2
});

const CustomThemeProvider = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
