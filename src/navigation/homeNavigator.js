import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import InstructionScreen from '../screens/InstructionScreen';

const home = createStackNavigator();

const homeNavigator = () => {
    return (
        <home.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <home.Screen name="Home" component={HomeScreen} />
            <home.Screen name="About" component={AboutScreen} />
            <home.Screen name="Instruction" component={InstructionScreen} />
        </home.Navigator>
    );
};

export default homeNavigator;