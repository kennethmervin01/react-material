import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ArrowLeft';
import ChevronRight from '@material-ui/icons/ArrowRight';
import ChevronUp from '@material-ui/icons/ChevronRightTwoTone';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const style = () => ({
  ticker: {
    padding: '5px 10px',
    textAlign: 'center',
    fontSize: '10px',
    maxWidth: '90px',
    backgroundColor: '#edeef0',
  },
  captionText1: {
    lineHeight: 1.3,
    fontSize: '12px',
    color: '#4aa27a',
    fontWeight: 'bold',
  },
  captionText: {
    lineHeight: 1.3,
    fontSize: '12px',
  },
  captionText2: {
    lineHeight: 1.3,
    fontSize: '12px',
    color: '#c32456',
  },
  stockCode: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
});

const Ticker = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function createCard() {
    const child = [];

    // Outer loop to create parent
    for (let i = 0; i < 100; i++) {
      // Create the parent and add the children
      child.push(
        <Paper className={classes.ticker} key={i} square>
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
            35%
          </Typography>
        </Paper>,
      );
    }
    return child;
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: '15px 10px ' }}>
        <Chip
          color="primary"
          icon={<ChevronUp />}
          label="All Stocks"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>All Stocks</MenuItem>
          <MenuItem onClick={handleClose}>Watchlist</MenuItem>
          <MenuItem onClick={handleClose}>Most Active</MenuItem>
          <MenuItem onClick={handleClose}>Top Gainers</MenuItem>
          <MenuItem onClick={handleClose}>Top Losers</MenuItem>
        </Menu>
      </div>
      <div
        style={{ paddingTop: '15px', borderRight: '1px solid gray', borderLeft: '1px solid gray' }}
      >
        <ChevronLeft />
      </div>
      <div style={{ width: '600px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', position: 'relative' }}>{createCard()}</div>
      </div>
      <div
        style={{ paddingTop: '15px', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default withStyles(style)(Ticker);
