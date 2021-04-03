import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import ChangingProfileScreen from '../screens/ChangingProfileScreen';

const profiling = createStackNavigator();

const profileNavigator = () => {
    return (
        <profiling.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
            <profiling.Screen name="Profile" component={ProfileScreen} />
            <profiling.Screen name="ChangingProfile" component={ChangingProfileScreen} />
        </profiling.Navigator>
    );
};

export default profileNavigator;