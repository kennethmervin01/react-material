import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from 'components/Tabs';
import Ticker from 'components/TickerLight';
import Hidden from '@material-ui/core/Hidden';
import Drawer from './Drawer';

const style = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 1,
    // marginTop: theme.spacing.unit * 8,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,

    [theme.breakpoints.down('sm')]: {
      marginTop: '79px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '79px',
    },
  },
});

const Layout = ({ classes, children }) => {
  const [drawerOpen, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Drawer open={drawerOpen} onClose={handleDrawerClose} />
      <main className={classes.content}>
        <Hidden smDown>
          <Ticker />
        </Hidden>
        <Tabs onOpen={handleDrawerOpen} />
        <div className={classes.toolbar}>{children}</div>
      </main>
    </div>
  );
};

export default withStyles(style)(Layout);
