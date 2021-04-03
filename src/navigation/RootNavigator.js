import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';
import loginFlowNavigator from './loginFlowNavigator';
import mainFlowNavigator from './mainFlowNavigator';

const Root = createStackNavigator();

const RootNavigator = () => {
    return (
        <Root.Navigator initialRouteName='loginFlow' initialRouteName="ResolveAuth" screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Root.Screen name="ResolveAuth" component={ResolveAuthScreen} options={{ headerShown: false }} />
            <Root.Screen name="loginFlow" component={loginFlowNavigator} options={{ headerShown: false }} />
            <Root.Screen name="mainFlow" component={mainFlowNavigator} options={{ headerShown: false }} />
        </Root.Navigator>
    );
};

export default RootNavigator;