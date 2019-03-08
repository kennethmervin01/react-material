import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';

const styles = () => ({
  title: {
    fontSize: 14,
  },
  yellow: {
    borderLeft: '5px solid #ffa726', // #ffa726 #43a047 #ef5350 #00acc1
  },
  green: {
    borderLeft: '5px solid #43a047', // #ffa726 #43a047 #ef5350 #00acc1
  },
  red: {
    borderLeft: '5px solid #ef5350', // #ffa726 #43a047 #ef5350 #00acc1
  },
  blue: {
    borderLeft: '5px solid #00acc1', // #ffa726 #43a047 #ef5350 #00acc1
  },
  colorGreen: {
    color: '#43a047',
  },
});

const StatCard = ({
  classes, title, value, icon, color,
}) => (
  <Grid item xs={6} sm={3} md={3}>
    <Card className={classes[color]}>
      <CardContent>
        <Grid container alignItems="center">
          <Hidden only={['xs', 'sm']}>
            <Grid item md={4} align="center">
              {icon}
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={8} align="right">
            <Typography className={classes.title} color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h5">{value}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
);

export default withStyles(styles)(StatCard);

/* <NoteIcon color="primary" fontSize="large" /> */
