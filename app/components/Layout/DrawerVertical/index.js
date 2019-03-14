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
    // flexShrink: 0,
    // whiteSpace: 'nowrap',
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
    backgroundColor: '#03396c',
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
    backgroundColor: '#03396c',
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
    borderRight: '2px solid #a5a2a2',
    display: 'block',
  },
  menuList: {
    fontSize: '12px',
    color: '#fff',
    textAlign: 'center'
  },

  menuListIcon: {
    fontSize: '11px',
    color: '#fff',
    display: 'block',
    textAlign: 'center',
    marginRight: '0px',
  },
  menuItem: {
    display: 'block',
    borderTop: '1px solid #a5a2a2',
    borderBottom: '1px solid #000000',
    //  borderRight: '1px solid #a5a2a2',
    paddingTop: '5px',
    paddingBottom: '5px',
  },

  avatarItem: {
    display: 'block',
    paddingTop: '0px',
    paddingBottom: '5px',
  },
  menuText: {
    padding: '0px',
  },

  menuContainer: {
    paddingTop: '0px',
    paddingBottom: '0px',
    marginTop: '10px',
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
  const [openMini, setOpen] = React.useState(false);

  function handleDrawerClose() {
    setOpen(!openMini);
  }

  return (
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, classes.drawerClose) }
          classes={{ paper: classes.drawerClose }}
          open={open}
          elevation={16}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <img src={`${cLogo}`} alt="cLogo" />
            </IconButton>
          </div>
          <List classes={{ root: classes.menuContainer }}>
            <ListItem button key="Home" classes={{ root: classes.menuItem }}>
              <ListItemIcon classes={{ root: classes.menuListIcon }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" classes={{ primary: classes.menuList, root: classes.menuText }} />
            </ListItem>
            <ListItem button key="Quotes" className={classes.activeMenu}>
              <ListItemIcon classes={{ root: classes.menuListIcon }}>
                <Ballot />
              </ListItemIcon>
              <ListItemText primary="Quotes" classes={{ primary: classes.menuList, root: classes.menuText }} />
            </ListItem>
            <ListItem button key="Trade" classes={{ root: classes.menuItem }}>
              <ListItemIcon classes={{ root: classes.menuListIcon }}>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Trade" classes={{ primary: classes.menuList, root: classes.menuText }} />
            </ListItem>
            <ListItem button key="Home" classes={{ root: classes.menuItem }}>
              <ListItemIcon classes={{ root: classes.menuListIcon }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" classes={{ primary: classes.menuList, root: classes.menuText }} />
            </ListItem>
            <ListItem button key="Trade" classes={{ root: classes.menuItem }}>
              <ListItemIcon classes={{ root: classes.menuListIcon }}>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Trade" classes={{ primary: classes.menuList, root: classes.menuText }} />
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
  );
};

export default withStyles(style)(AppDrawer);
