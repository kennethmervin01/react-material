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

const useStyles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    marginTop: '10px',
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
  <Grid className={classes.root} container spacing="24" justify="center">
    <Grid item xs={12} sm={4} md={4} lg={3}>
      <Paper className={classes.paper}>
        <form>
          <Grid container justify="center">
            <Grid item xs={8} md={7}>
              <TextField
                label="Stock Code"
                type="search"
                className={classes.textField}
                margin="normal"
                value="COL"
              />
            </Grid>
            <Grid item xs={3}>
              <Button size="small" variant="contained" className={classes.button}>
                Quote
              </Button>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container justify="center" spacing={24}>
            <Grid item>
              <Button size="small" color="primary" variant="contained">
                Buy
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" color="secondary" secondary variant="contained">
                Sell
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" variant="contained">
                H-Chart
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={8} md={8} lg={9}>
      <Grid container justify="center" spacing={16}>
        <Grid xs={12} sm={12} md={4} item>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
              COL FINANCIAL GROUP INC.
            </Typography>
            <Divider />
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
                  <td className={classes.customTd} colSpan="2">
                    Size
                  </td>
                  <td className={classes.customTd}>Price</td>
                  <td className={classes.customTd}>Price</td>
                  <td className={classes.customTd} colSpan="2">
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
            </table>

            <table className={classes.customTable}>
              <thead>
                <tr>
                  <th className={classes.customTh} colSpan="5">
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
          </Paper>
        </Grid>
        <Grid xs={12} md={4} item>
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
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
              Related Headline News
            </Typography>
            <Divider />
            <div className={classes.demo}>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="COL Financial declaration of cash Dividends(PSE)"
                    secondary="04/02/2012"
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary="COL Financial changes in Share Holdings of Director(PSE)"
                    secondary="04/02/2012"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="COL clarification of news article: Listed brokage(PSE)"
                    secondary="04/02/2012"
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary="COL Financial changes in Share Holdings of Director(PSE)"
                    secondary="04/02/2012"
                  />
                </ListItem>
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(useStyles)(Stock);

/* <Grid item xs={3}>
              <Button size="small" variant="contained" color="primary" className={classes.button}>
                Buy
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size="small" variant="contained" color="secondary" className={classes.button}>
                Sell
              </Button>
            </Grid> */
