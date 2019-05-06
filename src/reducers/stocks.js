import { uniqBy } from 'lodash';
import { ADD_STOCKS } from '../actionType';

const stocks = (state = [], action) => {
  switch (action.type) {
    case ADD_STOCKS:
      return uniqBy([...state, ...action.data], value => value[0]).map(d => {
        let isOld = false;
        let status = 'const';
        action.data.forEach(s => {
          status = d[1] > s[1] ? 'in' : d[1] < s[1] ? 'de' : 'const';
          if (d[2] && d[0] === s[0]) {
            isOld = true;
          }
        });
        console.log(`${d[0]}: ${d[1]}`);
        if (isOld || !d[2]) {
          return [d[0], d[1], new Date(), status];
        }
        return [d[0], d[1], d[2], status];
      });
    default:
      return state;
  }
};

export default stocks;
