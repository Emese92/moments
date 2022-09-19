import axios from "axios";

axios.defaults.baseURL = 'https://moments-drf-api-eg.herokuapp.com/';
axios.defaults.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;