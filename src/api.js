import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/people?q='
});

export default api;