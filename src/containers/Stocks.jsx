import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchStocks from '../api/stocks';
import loader from '../utils/loader';
import StocksList from '../components/StocksList';

class Stocks extends Component {
  componentWillMount() {
    loader(false);
  }

  async componentDidMount() {
    await fetchStocks();
  }

  render() {
    const { stocks } = this.props;
    return <StocksList stocks={stocks} />;
  }
}

Stocks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stocks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  stocks: state.stocks,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stocks);
