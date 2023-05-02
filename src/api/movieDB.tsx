import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b1f906004cbf18e66d3800839d660336',
        language: 'es-ES'
    }
})

export default movieDB;