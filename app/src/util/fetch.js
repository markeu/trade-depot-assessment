import axios from 'axios';

const publicFetch = axios.create({
    baseURL: "http://localhost:340"
});

export { publicFetch }