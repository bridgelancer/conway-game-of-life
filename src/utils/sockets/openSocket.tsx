import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_HOST_DOMAIN || 'https://conway-game-of-life-backend.herokuapp.com/test', {transports: ['websocket']})
export default socket;
