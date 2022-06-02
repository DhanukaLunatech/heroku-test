import axios from 'axios';

export const client = axios.create({
    baseURL: "https://service.myfxmarkets.com/mt4Price",
    timeout: 5000,
    timeoutErrorMessage: "timeout error!"
});