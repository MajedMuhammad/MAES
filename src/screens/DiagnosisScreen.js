import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DiagnosisScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>Diagnosis Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default DiagnosisScreen;