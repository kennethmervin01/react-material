import React, { Fragment } from 'react';
import classNames from 'classnames';
import {
  Drawer, IconButton, Divider, Hidden, Typography, Avatar,
} from '@material-ui/core';
import {
  Home,
  Assessment,
  Ballot,
  LibraryBooks,
  AccountBalance,
  Event,
  QuestionAnswer,
  Settings,
} from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import fullLogo from 'assets/fullLogo.png';
import cLogo from 'assets/cLogo.png';
import profileAvatar from 'assets/jon_snow.jpg';

const drawerWidth = 230;
const style = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    backgroundColor: '#053a71',
  },
  drawerOpenMini: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#053a71',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
    backgroundColor: '#053a71',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  activeMenu: {
    backgroundColor: '#0E4D92',
    borderTop: '1px solid #a5a2a2',
    borderBottom: '1px solid #000000',
    // borderRight: '5px solid #f3f4f5',
    borderRight: '5px solid #57A0D3',
  },
  menuList: {
    fontSize: '12px',
    color: '#fff',
  },
  menuListCategory: {
    fontSize: '15px',
    color: '#fff',
    paddingLeft: '12px',
  },
  divider: {
    marginBottom: '5px',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  profileContainer: {
    backgroundColor: '#11365d',
  },
  profile: {
    color: '#fff',
  },
  logout: {
    color: '#ccc',
    fontSize: '11px',
  },
});

const AppDrawer = ({ classes, open, onClose }) => {
  const [openMini, setOpen] = React.useState(true);

  function handleDrawerClose() {
    setOpen(!openMini);
  }

  return (
    <div>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpenMini]: openMini,
            [classes.drawerClose]: !openMini,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpenMini]: openMini,
              [classes.drawerClose]: !openMini,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              { openMini && <img src={`${fullLogo}`} alt="fullLogo" /> }
              { !openMini && <img src={`${cLogo}`} alt="cLogo" /> }
            </IconButton>
          </div>
          <List className={classes.profileContainer}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="John Snow" src={profileAvatar} />
              </ListItemAvatar>
              {openMini && (<ListItemText
              secondary={
                <Fragment>
                  <Typography component="span" className={classes.profile}>
                   John Doe
                  </Typography>
                  <Typography component="span" className={classes.logout}>
                    Acct #: 0010-0022
                  </Typography>
                  <Typography component="span" className={classes.logout}>
                  Logout
                  </Typography>
                </Fragment>
              }
              />)}
            </ListItem>
          </List>
          <List>
            <ListItem button key="Home">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Quotes" className={classes.activeMenu}>
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Ballot />
              </ListItemIcon>
              <ListItemText primary="Quotes" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Trade">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Trade" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Research">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Research" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Mutual Funds">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary="Mutual Funds" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="EIP">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Event />
              </ListItemIcon>
              <ListItemText primary="EIP" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="FAQ">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="FAQ" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Settings">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" classes={{ primary: classes.menuList }} />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.menuListCategory}>
            Others
          </Typography>
          <List>
            <ListItem button key="Other1">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Other1" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Other2">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Other2" classes={{ primary: classes.menuList }} />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          className={classNames(classes.drawer, classes.drawerOpen)}
          classes={{
            paper: classNames(classes.drawerPaper, classes.drawerOpen),
          }}
          open={open}
          onClose={onClose}
        >
          <div className={classes.toolbar}>
            <IconButton>
              <img src={`${fullLogo}`} alt="fullLogo" />
            </IconButton>
          </div>
          <List className={classes.profileContainer}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="John Snow" src={profileAvatar} />
              </ListItemAvatar>
              <ListItemText
              secondary={
                <Fragment>
                  <Typography component="span" className={classes.profile}>
                   John Doe
                  </Typography>
                  <Typography component="span" className={classes.logout}>
                    Acct #: 0010-0022
                  </Typography>
                  <Typography component="span" className={classes.logout}>
                  Logout
                  </Typography>
                </Fragment>
              }
              />
            </ListItem>
          </List>
          <List>
            <ListItem button key="Home">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Quotes" className={classes.activeMenu}>
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Ballot />
              </ListItemIcon>
              <ListItemText primary="Quotes" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Trade">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Trade" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Research">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Research" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Mutual Funds">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary="Mutual Funds" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="EIP">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Event />
              </ListItemIcon>
              <ListItemText primary="EIP" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="FAQ">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="FAQ" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Settings">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" classes={{ primary: classes.menuList }} />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.menuListCategory}>
            Others
          </Typography>
          <List>
            <ListItem button key="Other1">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Other1" classes={{ primary: classes.menuList }} />
            </ListItem>
            <ListItem button key="Other2">
              <ListItemIcon classes={{ root: classes.menuList }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Other2" classes={{ primary: classes.menuList }} />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
};

export default withStyles(style)(AppDrawer);
