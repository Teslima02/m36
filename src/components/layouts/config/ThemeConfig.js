import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const themeStyles = {
  palette: {
    type: 'light',
    primary: {
      main: '#A8BF54',
    },
    secondary: {
      light: '#5C6E7D',
      main: '#1F70C1',
      dark: '#344655',
    },
    error: {
      main: '#FF1C1C',
    },
    text: {
      primary: '#217907',
      secondary: '#8B9CAA',
    },
  },
  status: {
    danger: 'orange',
  },
};

const themesConfig = createMuiTheme(themeStyles);

export default themesConfig;
