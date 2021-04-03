import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const loginFlow = createStackNavigator();

const loginFlowNavigator = () => {
    return (
        <loginFlow.Navigator initialRouteName='login' screenOptions={{ animationEnabled: false }}>
            <loginFlow.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <loginFlow.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        </loginFlow.Navigator>
    );
};

export default loginFlowNavigator;