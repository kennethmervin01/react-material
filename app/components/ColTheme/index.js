import { createMuiTheme } from '@material-ui/core/styles';

const ColTheme = createMuiTheme({
  palette: {
    primary: { main: '#09519c' }, // header bg-color of colfinancial.com
    secondary: { main: '#42a5f5' }, // light blue
  },
  typography: { useNextVariants: true },
});

export default ColTheme;
