import socket from './socket';
import store from '../store';
import { addStocks } from '../actions';

const fetchStocks = async () => {
  try {
    // Connection opened
    socket.addEventListener('open', () => {
      socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', event => {
      store.dispatch(addStocks(JSON.parse(event.data || '')));
    });
    return [];
  } catch (error) {
    console.log(error);
  }
};

export default fetchStocks;
