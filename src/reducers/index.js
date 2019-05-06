import { combineReducers } from 'redux';
import loader from './loader';
import stocks from './stocks';

export default combineReducers({
  loader,
  stocks,
});
