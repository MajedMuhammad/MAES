import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const ChangingProfileScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>ChangingProfile Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default ChangingProfileScreen;