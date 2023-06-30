import axios from 'axios';

export const client = axios.create({
    baseURL:'https://course-api.com/react-tours-project'
})