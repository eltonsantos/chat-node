import { http } from './http';
import './websocket/client';
import './websocket/admin';

// HEROKU
const porta = process.env.PORT || 3333;

http.listen(porta, () => console.log('Server is running on port 3333'));