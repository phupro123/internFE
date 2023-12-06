import axios from 'axios';

const baseURL = 'https://test-intern.onrender.com/api/v1';
const axiosClient = axios.create({
    baseURL,
    
});

axiosClient.interceptors.request.use(
    function (req) {
        return req;
    },

    function (error) {
        return Promise.reject(error);
    },
);
axiosClient.interceptors.response.use(
    function (res) {
        return res.data;
    },

    function (error) {
        return Promise.reject(error);
    },
);
export default axiosClient;
