import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { Chart, ValueAxis, LineSeries } from '@devexpress/dx-react-chart-material-ui';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = () => ({
  customTh: {
    backgroundColor: '#4aa27a',
    // border: 'solid 1px #000000',
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
  },
  customTh2: {
    backgroundColor: '#c32456',
    // border: 'solid 1px #000000',
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
  },

  customThLeft: {
    backgroundColor: '#eee',
    borderBottom: 'solid 1px #ccc',
    color: '#000000',
    padding: '4px',
    textAlign: 'left',
    fontSize: '11px',
  },

  customTd: {
    borderBottom: 'solid 1px #09519c',
    color: '#333',
    padding: '3px',
    textShadow: '1px 1px 1px #fff',
    textAlign: 'right',
    fontSize: '11px',
  },
  customTdc: {
    // border: 'solid 1px #09519c',
    color: '#333',
    padding: '3px',
    textShadow: '1px 1px 1px #fff',
    textAlign: 'center',
  },
  customTdRight: {
    borderBottom: 'solid 1px #ccc',
    color: '#333',
    padding: '3px',
    textShadow: '1px 1px 1px #fff',
    textAlign: 'right',
    backgroundColor: '#fff',
    fontSize: '11px',
  },
  customTable: {
    // border: 'solid 1px #09519c',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    font: 'normal 12px Arial, sans-serif',
    width: '100%',
  },

  cardHeaderRoot: {
    padding: '0px 0px 0px 0px',
  },
  buy: {
    backgroundColor: 'green',
    color: '#fff',
  },
  sell: {
    backgroundColor: 'red',
    color: '#fff',
  },
  paperRoot: {
    padding: '10px',
    // borderTop: '5px solid #09519c',
  },
});

const StockInfo = ({ classes }) => (
  <Grid container spacing={8}>
    <Grid item xs={12} md={10} lg={5}>
      <Paper className={classes.paperRoot}>
        <table className={classes.customTable}>
          <tbody>
            <tr>
              <td className={classes.customThLeft}>Previous</td>
              <td className={classes.customTdRight}>22.7500</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Last</td>
              <td className={classes.customTdRight}>22.8000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Change</td>
              <td className={classes.customTdRight}>0.0500</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>%Change</td>
              <td className={classes.customTdRight}>0.22</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Open</td>
              <td className={classes.customTdRight}>22.8000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>High</td>
              <td className={classes.customTdRight}>22.8000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Value</td>
              <td className={classes.customTdRight}>13,893,475</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Trades</td>
              <td className={classes.customTdRight}>40</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Volume</td>
              <td className={classes.customTdRight}>617,800</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Outstanding</td>
              <td className={classes.customTdRight}>466,850,000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Market Capitalization</td>
              <td className={classes.customTdRight}>466,850,000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Inst Status</td>
              <td className={classes.customTdRight}>Survailance Intervention</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>BoardLot</td>
              <td className={classes.customTdRight}>100</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Fluctuation</td>
              <td className={classes.customTdRight}>0.0500</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Floor Price</td>
              <td className={classes.customTdRight}>11.3800</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Ceiling Price</td>
              <td className={classes.customTdRight}>34.1000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Dyn T Low</td>
              <td className={classes.customTdRight}>20.1000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Dyn T High</td>
              <td className={classes.customTdRight}>25.1000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Par Value</td>
              <td className={classes.customTdRight}> 10000</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Margin Rate %</td>
              <td className={classes.customTdRight}>100</td>
            </tr>
            <tr>
              <td className={classes.customThLeft}>Open to Foreigners</td>
              <td className={classes.customTdRight}>Yes</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </Grid>
    <Grid item xs={12} md={4} lg={3} />
  </Grid>
);

export default withStyles(styles)(StockInfo);
