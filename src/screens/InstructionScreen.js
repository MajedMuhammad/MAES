import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome5, MaterialIcons, AntDesign } from 'react-native-vector-icons';

const InstructionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.welcoming}>
                Instructions
            </Text>

            <Text style={styles.text}>
                To get appropriate result, you have to follow-up these steps:
            </Text>

            <Text style={styles.text}>
                1. After authentication process (login and sign up) you should be redirected to profile or home screen.
            </Text>

            <Text style={styles.text}>
                2. You should go to diagnosis screen either through home screen links or bottom tab bar navigator.
            </Text>

            <Text style={styles.text}>
                3. The system should be prepared to show up questions for you, and you have to precise answer correctly (most is yes-or-no answers).
            </Text>

            <Text style={styles.text}>
                4. If you followed-up all questions the system should show you the result of diagnosis process
            </Text>

            <View style={styles.separator} />

            <Text style={styles.text}>
                Note: The diagnosis processing is relying on every single answer i.e., when you answer, the system take this answer and process it and depending on this answer, the next question should selected.
            </Text>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    disclaimer: {
        color: 'red',
    },
    text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        margin: 20,
    },
    welcoming: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 20,
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20,
    },
});

export default InstructionScreen;