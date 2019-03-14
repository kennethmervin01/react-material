import React from 'react';
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Ballot';
import DropDown from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles';
import clogo from 'assets/cLogo.png';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 230;
const style = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    backgroundColor: '#09519c',
    marginBottom: 5,
    marginTop: 5,
    padding: 0,
    color: '#fff',
  },
  menuButton1: {
    marginRight: 0,
    backgroundColor: '#09519c',
    marginBottom: 5,
    marginTop: 8,
    padding: 5,
    color: '#fff',
  },
  label: {
    fontSize: '12px',
    color: '#fff',
    // padding: '0px 24px',
  },
  labelFirst: {
    // fontSize: '10px',
    boxSizing: 'border-box',
    paddingLeft: '10px',
    height: '20px',
    minHeight: '40px',
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolBar: {
    minHeight: '20px',
    paddingLeft: '8px',
    paddingTop: '0px',
  },
  toolBarAppBar: {
    minHeight: '20px',
    paddingLeft: '10px',
  },
  link: {
    display: 'flex',
    fontSize: '13px',
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    width: 18,
    height: 18,
  },
  appBarMove: {
    // marginTop: '32px',
    backgroundColor: '#03396c',
  },
  tabs: {
    marginRight: '55px',
  },
  dropDown: {
    paddingTop: '5px',
  },
  labelContainer: {
    padding: '0px 24px 6px 24px',
  },
});

const TabMenu = ({ classes, onOpen }) => (
  <div className={classes.root}>
    <Hidden mdUp implementation="css">
      <AppBar position="fixed">
        <Toolbar className={classes.toolBarAppBar} disableGutters>
          <IconButton
            aria-label="Open drawer"
            className={classes.menuButton}
            onClick={() => {
              onOpen();
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" color="default" className={classes.appBarMove}>
        <Toolbar className={classes.toolBar} variant="dense" disableGutters>
          <Hidden mdUp implementation="css">
            <IconButton
              aria-label="Open drawer"
              className={classes.menuButton1}
              onClick={() => {
                onOpen();
              }}
            >
              <HomeIcon />
            </IconButton>
          </Hidden>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ root: classes.labelFirst }}
          >
            <Tab
              classes={{ label: classes.label, labelContainer: classes.labelContainer }}
              label="Stock Info"
            />
            <Tab
              classes={{ label: classes.label, labelContainer: classes.labelContainer }}
              label="Market Info"
            />
            <Tab
              classes={{ label: classes.label, labelContainer: classes.labelContainer }}
              label="Broker Info"
            />
            <Tab
              classes={{ label: classes.label, labelContainer: classes.labelContainer }}
              label="Calendar"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Hidden>
    <Hidden smDown>
      <AppBar position="static" color="default" className={classes.appBarMove}>
        <Toolbar className={classes.toolBar} variant="dense" disableGutters>
          <Hidden mdUp implementation="css">
            <IconButton
              aria-label="Open drawer"
              className={classes.menuButton1}
              onClick={() => {
                onOpen();
              }}
            >
              <HomeIcon />
            </IconButton>
          </Hidden>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ root: classes.labelFirst }}
          >
            <Tab
              classes={{ label: classes.label }}
              label={
                <Grid container direction="row" alignItems="center">
                  <Grid item>Stock Info</Grid>
                  <Grid item className={classes.dropDown}>
                    <DropDown />
                  </Grid>
                </Grid>
              }
            />
            <Tab classes={{ label: classes.label }} label="Market Info" />
            <Tab classes={{ label: classes.label }} label="Broker Info" />
            <Tab classes={{ label: classes.label }} label="Calendar" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Hidden>
  </div>
);

export default withStyles(style)(TabMenu);

/* <MenuIcon /> */

/* <img src={clogo} alt="C" style={{ width: 25, height: 25 }} />; */
