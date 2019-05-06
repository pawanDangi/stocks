import { uniqBy } from 'lodash';
import { ADD_STOCKS } from '../actionType';

const stocks = (state = [], action) => {
  switch (action.type) {
    case ADD_STOCKS:
      return uniqBy([...state, ...action.data], value => value[0]).map(d => {
        let isOld = false;
        action.data.forEach(s => {
          if (d[2] && d[0] === s[0]) {
            isOld = true;
          }
        });
        if (isOld || !d[2]) {
          return [d[0], d[1], new Date()];
        }
        return d;
      });
    default:
      return state;
  }
};

export default stocks;
