import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const UpdatingScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>Updating Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default UpdatingScreen;