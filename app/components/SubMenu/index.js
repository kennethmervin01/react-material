import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Home from '@material-ui/icons/Ballot';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { withRouter } from 'react-router';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 1,
  },
  primaryAvatar: {
    backgroundColor: '#09519c',
    color: '#fff',
  },
  activeButton: {
    borderBottom: '2px solid #09519c ',
  },
  inactiveButton: {
    borderBottom: '2px solid #fff ',
  },
});

const SubMenu = ({ classes, menuItem }) => {
  const [activeItem, setActiveItem] = useState(menuItem[0]);
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={11}>
        <Paper className={classes.paper}>
          <div
            style={{
              width: '100%',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
            className="scroll-bar-hide"
          >
            <Chip
              label="Home"
              variant="outlined"
              avatar={
                <Avatar className={classes.primaryAvatar}>
                  <Home />
                </Avatar>
              }
            />
            &nbsp; &nbsp;| &nbsp;
            {menuItem.map(item => (
              <Button
                key={item}
                className={activeItem === item ? classes.activeButton : classes.inactiveButton}
                onClick={() => {
                  setActiveItem(item);
                  // history.push('/personal-information');
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SubMenu);
