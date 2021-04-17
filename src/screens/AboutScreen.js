import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome5, MaterialIcons, AntDesign } from 'react-native-vector-icons';

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.welcoming}>
                About
            </Text>

            <Text style={styles.text}>
                This application is part of the Expert System connected to few backend nodes to prove the ability to actually operationalize the idea. (See project report).
            </Text>

            <Text style={styles.text}>
                Expert System that's being developed is part of capstone project (final year project) for:
            </Text>

            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Majed Althagafi</Text>
                <Text style={styles.discriptionStyle}>Team Leader</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Abdulrahman Aljuaid</Text>
                <Text style={styles.discriptionStyle}>Team Member</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Thamer Aljuaid</Text>
                <Text style={styles.discriptionStyle}>Team Member</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Sultan Alsaadi</Text>
                <Text style={styles.discriptionStyle}>Team Member</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Rayan Alomari</Text>
                <Text style={styles.discriptionStyle}>Team Member</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameStyle}>Feras Aljuaid</Text>
                <Text style={styles.discriptionStyle}>Team Member</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.nameContainer}>
                <Text>Team leader email:</Text>
                <Text>s43704819@students.tu.edu.sa</Text>
            </View>


            <View style={styles.nameContainer}>
                <Text>Supervised by</Text>
                <Text>Dr. Abdulrahman Alqahtani</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 15. }}>
                <Text style={styles.trailerStyle}>Computer Science Department</Text>
                <Text style={styles.trailerStyle}>College of Computer and Information Technology</Text>
                <Text style={styles.trailerStyle}>Taif University @2021</Text>
            </View>



        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50,
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
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 7,
    },
    nameStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    discriptionStyle: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'silver',
    },
    trailerStyle: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'black',
    },
});

export default AboutScreen;