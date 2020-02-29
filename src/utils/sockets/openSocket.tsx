import io from 'socket.io-client';

const socket = io(process.env.APP_HOST_DOMAIN || 'https://conway-game-of-life-backend.herokuapp.com', {transports: ['websocket']})
export default socket;
