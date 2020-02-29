import io from 'socket.io-client';

const socket = io(process.env.APP_HOST_DOMAIN, {transports: ['websocket']})
export default socket;
