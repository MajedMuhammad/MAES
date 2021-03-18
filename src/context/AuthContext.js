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
        case 'logout':
            return { token: null, errorMessage: '' };
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

const logout = dispatch => async ({ email, password }) => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: logout });

    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, login, logout, clearErrorMessage, tryLocalLogin },
    { token: null, errorMessage: '' }
);