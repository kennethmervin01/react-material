import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({
  ticker: {
    padding: '0px 5px',
    textAlign: 'center',
    fontSize: '10px',
    maxWidth: '90px',
    float: 'left',
  },
  captionText1: {
    lineHeight: 1.3,
    fontSize: '10px',
    color: '#4aa27a',
  },
  captionText: {
    lineHeight: 1.3,
    fontSize: '10px',
  },
  captionText2: {
    lineHeight: 1.3,
    fontSize: '10px',
    color: '#c32456',
  },
  stockCode: {
    fontSize: '11px',
  },
});

const Ticker = ({ classes }) => {
  function createCard() {
    const child = [];

    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
      // Create the parent and add the children
      child.push(
        <Paper className={classes.ticker} key={i}>
          <Typography color="textPrimary" className={classes.stockCode}>
            MPI
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            classes={{ caption: classes.captionText1 }}
          >
            4.2500
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            classes={{ caption: classes.captionText2 }}
          >
            35,000
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            classes={{ caption: classes.captionText }}
          >
            DBP-DALMA
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            classes={{ caption: classes.captionText }}
          >
            ATR KIM
          </Typography>
        </Paper>,
      );
    }
    return child;
  }

  return <div>{createCard()}</div>;
};

export default withStyles(style)(Ticker);
