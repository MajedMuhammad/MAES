import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DiagnosisScreen from '../screens/DiagnosisScreen';
import profileNavigator from './profileNavigator';
import { Ionicons, FontAwesome5, AntDesign } from 'react-native-vector-icons';

const mainFlow = createBottomTabNavigator();

const mainFlowNavigator = () => {
    return (
        <mainFlow.Navigator initialRouteName="Diagnosis" >

            <mainFlow.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: (tintColor) => (
                    <Ionicons name="ios-home" color={tintColor.color} size={25} />
                )
            }} />

            <mainFlow.Screen name="Diagnosis" component={DiagnosisScreen} options={{
                tabBarLabel: 'Diagnosis',
                tabBarIcon: (tintColor) => (
                    <FontAwesome5 name="diagnoses" color={tintColor.color} size={25} />
                )
            }} />

            <mainFlow.Screen name="profiling" component={profileNavigator} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: (tintColor) => (
                    <AntDesign name="profile" color={tintColor.color} size={25} />
                )
            }} />

        </mainFlow.Navigator >
    );
};

export default mainFlowNavigator;