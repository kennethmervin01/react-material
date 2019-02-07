import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from 'components/AppBar';
import Drawer from 'components/Drawer';

const App = () => (
  <Fragment>
    <CssBaseline />
    <AppBar />
    <Drawer />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
