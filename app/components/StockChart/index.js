import React from 'react';
import { Grid, Divider, Hidden } from '@material-ui/core';
import { Chart, ValueAxis, LineSeries } from '@devexpress/dx-react-chart-material-ui';
import Card from '@material-ui/core/Card';
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
  customTh3: {
    backgroundColor: '#36716b',
    // border: 'solid 1px #000000',
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
  },

  customThLeft: {
    backgroundColor: '#09519c',
    border: 'solid 1px #000000',
    color: '#fff',
    padding: '3px',
    textAlign: 'left',
    fontSize: '12px',
  },

  customTd: {
    borderBottom: 'solid 1px #ccc',
    color: '#333',
    padding: '4px',
    textShadow: '1px 1px 1px #fff',
    textAlign: 'right',
    fontSize: '11px',
  },
  customTdC: {
    borderBottom: 'solid 1px #ccc',
    color: '#333',
    padding: '3px',
    textShadow: '1px 1px 1px #fff',
    textAlign: 'center',
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
    // border: 'solid 1px #09519c',
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
    padding: '10px 10px 0px 10px',
  },
  buy: {
    color: '#4aa27a',
  },
  sell: {
    color: '#c32456',
  },
});

const LineChart = () => (
  <Chart
    data={[
      { argument: 1, value: 6000 },
      { argument: 2, value: 6010 },
      { argument: 3, value: 6015 },
      { argument: 4, value: 6008 },
      { argument: 5, value: 6015 },
    ]}
    height={150}
  >
    <ValueAxis />
    <LineSeries valueField="value" argumentField="argument" />
  </Chart>
);

const StockInfo = ({ classes }) => (
  <Card className={classes.cardRoot}>
    <CardHeader
      title="COL"
      subheader="COL FINANCIAL GROUP"
      classes={{ root: classes.cardHeaderRoot }}
      action={
        <div>
          <Button className={classes.buy}>Buy</Button>
          <Button className={classes.sell}>Sell</Button>
        </div>
      }
    />
    <Divider />
    <CardContent>
      <LineChart />
      <br />
      <table className={classes.customTable}>
        <thead>
          <tr>
            <th className={classes.customTh} colSpan="3">
              Bid
            </th>
            <th className={classes.customTh2} colSpan="3">
              Ask
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.customTd}>1</td>
            <td className={classes.customTd}>100</td>
            <td className={classes.customTd}>22.7000</td>
            <td className={classes.customTd}>22.8000</td>
            <td className={classes.customTd}>48,800</td>
            <td className={classes.customTd}>5</td>
          </tr>
          <tr>
            <td className={classes.customTd}>3</td>
            <td className={classes.customTd}>5,700</td>
            <td className={classes.customTd}>22.5000</td>
            <td className={classes.customTd}>22.8500</td>
            <td className={classes.customTd}>20,000</td>
            <td className={classes.customTd}>2</td>
          </tr>
          <tr>
            <td className={classes.customTd}>4</td>
            <td className={classes.customTd}>6,500</td>
            <td className={classes.customTd}>22.4500</td>
            <td className={classes.customTd}>22.9000</td>
            <td className={classes.customTd}>20,000</td>
            <td className={classes.customTd}>2</td>
          </tr>
        </tbody>
      </table>
      <Hidden lgUp>
        <table className={classes.customTable}>
          <thead>
            <tr>
              <th className={classes.customTh3} colSpan="5">
                Last 5 Trades
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.customTd}>Time</td>
              <td className={classes.customTd}>Volume</td>
              <td className={classes.customTd}>Price</td>
              <td className={classes.customTd}>Buyer</td>
              <td className={classes.customTd}>Seller</td>
            </tr>
            <tr>
              <td className={classes.customTd}>15:20:00</td>
              <td className={classes.customTd}>1,900</td>
              <td className={classes.customTd}>22.8000</td>
              <td className={classes.customTd}>COL FINA</td>
              <td className={classes.customTd}>CITISECU</td>
            </tr>
            <tr>
              <td className={classes.customTd}>15:20:00</td>
              <td className={classes.customTd}>1,900</td>
              <td className={classes.customTd}>22.8000</td>
              <td className={classes.customTd}>COL FINA</td>
              <td className={classes.customTd}>CITISECU</td>
            </tr>
            <tr>
              <td className={classes.customTd}>15:20:00</td>
              <td className={classes.customTd}>1,900</td>
              <td className={classes.customTd}>22.8000</td>
              <td className={classes.customTd}>COL FINA</td>
              <td className={classes.customTd}>CITISECU</td>
            </tr>
            <tr>
              <td className={classes.customTd}>15:20:00</td>
              <td className={classes.customTd}>1,900</td>
              <td className={classes.customTd}>22.8000</td>
              <td className={classes.customTd}>COL FINA</td>
              <td className={classes.customTd}>CITISECU</td>
            </tr>
            <tr>
              <td className={classes.customTd}>15:20:00</td>
              <td className={classes.customTd}>1,900</td>
              <td className={classes.customTd}>22.8000</td>
              <td className={classes.customTd}>COL FINA</td>
              <td className={classes.customTd}>CITISECU</td>
            </tr>
          </tbody>
        </table>
      </Hidden>
    </CardContent>
  </Card>
);

export default withStyles(styles)(StockInfo);

// {
/* <Divider />
    <CardActions className={classes.actions} disableActionSpacing>
      <Button variant="contained" classes={{ root: classes.buy }}>
        BUY
      </Button>
      &nbsp;
      <Button variant="contained" classes={{ root: classes.sell }}>
        SELL
      </Button>
    </CardActions> */
// }

/* <br />
      <table className={classes.customTable}>
        <thead>
          <tr>
            <th className={classes.customTh} colSpan="3">
              Bid
            </th>
            <th className={classes.customTh} colSpan="3">
              Ask
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.customTdc} colSpan="2">
              Size
            </td>
            <td className={classes.customTdc}>Price</td>
            <td className={classes.customTdc}>Price</td>
            <td className={classes.customTdc} colSpan="2">
              Size
            </td>
          </tr>
          <tr>
            <td className={classes.customTd}>1</td>
            <td className={classes.customTd}>100</td>
            <td className={classes.customTd}>22.7000</td>
            <td className={classes.customTd}>22.8000</td>
            <td className={classes.customTd}>48,800</td>
            <td className={classes.customTd}>5</td>
          </tr>
          <tr>
            <td className={classes.customTd}>1</td>
            <td className={classes.customTd}>100</td>
            <td className={classes.customTd}>22.7000</td>
            <td className={classes.customTd}>22.8000</td>
            <td className={classes.customTd}>48,800</td>
            <td className={classes.customTd}>5</td>
          </tr>
          <tr>
            <td className={classes.customTd}>1</td>
            <td className={classes.customTd}>100</td>
            <td className={classes.customTd}>22.7000</td>
            <td className={classes.customTd}>22.8000</td>
            <td className={classes.customTd}>48,800</td>
            <td className={classes.customTd}>5</td>
          </tr>
          <tr>
            <td className={classes.customTd}>1</td>
            <td className={classes.customTd}>100</td>
            <td className={classes.customTd}>22.7000</td>
            <td className={classes.customTd}>22.8000</td>
            <td className={classes.customTd}>48,800</td>
            <td className={classes.customTd}>5</td>
          </tr>
        </tbody>
      </table> */
