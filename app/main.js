import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'components/Layout';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ColTheme from 'components/ColTheme';
import 'assets/main.css';
import Stock from 'containers/Quotes/StockInfo';

const App = () => (
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={ColTheme}>
      <Layout>
        <Stock />
      </Layout>
    </MuiThemeProvider>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
