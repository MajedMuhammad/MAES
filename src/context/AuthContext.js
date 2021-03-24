import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import userApi from '../api/user';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'login':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'profile':
            return { ...state, email: action.payload.email, fName: action.payload.fName, lName: action.payload.lName, gender: action.payload.gender, pNumber: action.payload.pNumber, city: action.payload.city, dob: action.payload.dob };
        case 'logout':
            return { token: null, errorMessage: '', email: null, fName: null, lName: null, gender: null, pNumber: null, city: null, dob: null };
        default:
            return state;
    }
};

const tryLocalLogin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'login', payload: token });
        navigate('mainFlow');
    } else {
        navigate('loginFlow');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await userApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'login', payload: response.data.token });

        navigate('mainFlow');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};

const login = dispatch => async ({ email, password }) => {
    try {
        const response = await userApi.post('/login', { email, password });
        console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'login', payload: response.data.token });

        navigate('mainFlow');

    } catch (error) {
        console.log(error);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with log in'
        });
    };
};

const profile = dispatch => async ({ fName, lName, gender, pNumber, city, dob }) => {
    try {
        const response = await userApi.put('/profile', { fName, lName, gender, pNumber, city, dob }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        await AsyncStorage.setItem('email', response.data.email);
        await AsyncStorage.setItem('fName', response.data.fName);
        await AsyncStorage.setItem('lName', response.data.lName);
        await AsyncStorage.setItem('gender', response.data.gender);
        await AsyncStorage.setItem('pNumber', response.data.pNumber);
        await AsyncStorage.setItem('city', response.data.city);
        await AsyncStorage.setItem('dob', response.data.dob);
        dispatch({ type: 'profile', payload: response.data });

        navigate('mainFlow');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};

const logout = dispatch => async ({ email, password }) => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('fName');
    await AsyncStorage.removeItem('lName');
    await AsyncStorage.removeItem('gender');
    await AsyncStorage.removeItem('pNumber');
    await AsyncStorage.removeItem('city');
    await AsyncStorage.removeItem('dob');
    dispatch({ type: logout });

    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, login, profile, logout, clearErrorMessage, tryLocalLogin },
    { token: null, errorMessage: '', email: null, fName: null, lName: null, gender: null, pNumber: null, city: null, dob: null }
);