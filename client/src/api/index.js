import axios from 'axios';

// http://localhost:8080

export default axios.create({
  baseURL: 'https://vra-ecommerce.onrender.com/',
});
