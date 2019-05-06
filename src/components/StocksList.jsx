import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import since from '../utils/since';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    display: 'flex',
    padding: '20px',
    borderRadius: '4px',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  paper: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes, stocks } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Ticker</CustomTableCell>
              <CustomTableCell align="center">Price</CustomTableCell>
              <CustomTableCell align="center">Last Updated</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map(row => (
              <TableRow className={classes.row} key={row[0]}>
                <CustomTableCell align="center">{row[0]}</CustomTableCell>
                <CustomTableCell align="center">{row[1]}</CustomTableCell>
                <CustomTableCell align="center">
                  {since(row[2])}
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

CustomizedTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  stocks: PropTypes.array.isRequired,
};

export default withStyles(styles)(CustomizedTable);
