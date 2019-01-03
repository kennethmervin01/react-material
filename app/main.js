import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'Components/AppBar';
import Drawer from 'Components/Drawer';

const App = () => (
  <Fragment>
    <AppBar />
    <Drawer />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
