import React from 'react';
import classNames from 'classnames';
import { AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import cLogo from 'assets/cLogo.png';

const drawerWidth = 230;
const style = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#eee',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    backgroundColor: '#09519c',
  },
});

const AppBarPrimary = ({ classes, drawerOpen, onDrawerOpen }) => (
  <div>
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <Toolbar disableGutters={!drawerOpen}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          className={classNames(classes.menuButton, {
            [classes.hide]: drawerOpen,
          })}
          onClick={() => {
            onDrawerOpen();
          }}
        >
          <img src={cLogo} alt="menu" />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(style)(AppBarPrimary);
