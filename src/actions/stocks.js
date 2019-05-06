import { ADD_STOCKS, REMOVE_STOCKS } from '../actionType';

export const addStocks = data => ({
  type: ADD_STOCKS,
  data,
});

export const removeStocks = () => ({
  type: REMOVE_STOCKS,
});
