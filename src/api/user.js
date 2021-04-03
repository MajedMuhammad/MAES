import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Default config options
const defaultOptions = {
    baseURL: 'http://a62f18a5f61c.ngrok.io',
    headers: {
        'Content-Type': 'application/json',
    },
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default instance;


{/* 
export default axios.create({
    baseURL: 'http://55857d367cc4.ngrok.io'
}); */}