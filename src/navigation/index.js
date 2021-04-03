import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../navigationRef';
import RootNavigator from './RootNavigator';

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;

