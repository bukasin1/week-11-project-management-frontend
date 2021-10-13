import axios from 'axios';

const server = axios.create({
    baseURL: 'http://localhost:3002'
})

export default server;