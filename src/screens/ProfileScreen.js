import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
    const { logout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>Profile Screen</Text>

            <Spacer>
                <Button title="Log Out" onPress={logout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default ProfileScreen;