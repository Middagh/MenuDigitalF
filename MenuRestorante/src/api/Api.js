import axios from 'axios';

const pruebaApi = axios.create({
	baseURL: 'http://localhost:3002',
});


export default pruebaApi;