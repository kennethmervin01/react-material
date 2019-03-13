import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import StockChart from 'components/StockChart';
import StockInfo from 'components/StockInfo';

const useStyles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    // marginTop: '5px',
    // padding:
    padding: '10px 10px 10px 15px',
  },
  button: {
    marginTop: theme.spacing.unit + 20,
    padding: '1px',
  },
  paper: {
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    borderTop: '5px solid #09519c',
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  typo: {
    padding: '5px',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    padding: '5px',
  },
  listItem: {
    backgroundColor: '#eee',
  },

  customTh: {
    backgroundColor: '#09519c',
    border: 'solid 1px #000000',
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
  },

  customThLeft: {
    backgroundColor: '#09519c',
    border: 'solid 1px #000000',
    color: '#fff',
    padding: '5px',
    textAlign: 'left',
  },

  customTd: {
    border: 'solid 1px #09519c',
    color: '#333',
    padding: '5px',
    textShadow: '1px 1px 1px #fff',
  },
  customTdRight: {
    border: 'solid 1px #09519c',
    color: '#333',
    padding: '5px',
    textShadow: '1px 1px 1px #fff',
    textAlign: 'right',
    backgroundColor: '#fff',
  },
  customTable: {
    border: 'solid 1px #09519c',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    font: 'normal 13px Arial, sans-serif',
    width: '100%',
  },
});

const Stock = ({ classes }) => (
  <Grid className={classes.root} container spacing={16} justify="center">
    <Grid item xs={12} sm={11} md={4} lg={4}>
      <StockChart />
    </Grid>
    <Grid item xs={12} sm={11} md={4} lg={4}>
      <StockChart />
    </Grid>
    <Grid item xs={12} sm={11} md={4} lg={4}>
      <StockChart />
    </Grid>

    <Grid item xs={12} sm={11} md={4} lg={4}>
      <StockChart />
    </Grid>
    <Grid item xs={12} sm={11} md={4} lg={4}>
      <StockChart />
    </Grid>
    <Grid item xs={12} sm={11} md={4} lg={4}>
      <StockChart />
    </Grid>
  </Grid>
);

export default withStyles(useStyles)(Stock);
/* <Grid item xs={12} sm={11} md={5} lg={7}>
      <StockInfo />
    </Grid> */
