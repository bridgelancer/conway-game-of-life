import io from 'socket.io-client';

// Opens the socket.io client socket, specifying to use WebSocket transport protocol
const socket = io(process.env.REACT_APP_HOST_DOMAIN || 'https://conway-game-of-life-backend.herokuapp.com/test', {transports: ['websocket']})
export default socket;
