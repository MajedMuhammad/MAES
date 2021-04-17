import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome5, Entypo, AntDesign } from 'react-native-vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext);
    return (
        <View style={styles.container}>

            <Text style={styles.welcoming}>
                {state.lName}, you are welcome!
            </Text>

            <Text style={styles.text}>
                <Text style={styles.disclaimer}>
                    Disclaimer: </Text>
                This app is in implementation & testing phases and is <Text style={styles.disclaimer}>not</Text> serviceable yet.
            </Text>

            <View style={styles.separator} />

            <View style={styles.justifyIcons}>
                <TouchableOpacity onPress={() => navigation.navigate("Diagnosis")}>
                    <View style={styles.iconsBorder}>
                        <FontAwesome5 name="diagnoses" color="rgb(0, 122, 255)" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            Diagnosis
                    </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('Instruction')}>
                    <View style={styles.iconsBorder}>
                        <Entypo name="open-book" color="rgb(0, 122, 255)" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            Instructions
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.justifyIcons}>
                <TouchableOpacity onPress={() => navigation.navigate("profiling", { screen: 'Profile' })}>
                    <View style={styles.iconsBorder}>
                        <AntDesign name="profile" color="rgb(0, 122, 255)" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            Profile
                    </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('About')}>
                    <View style={styles.iconsBorder}>
                        <AntDesign name="exclamationcircleo" color="rgb(0, 122, 255)" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            About
                    </Text>
                    </View>
                </TouchableOpacity>
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
    icons: {
        alignSelf: 'center',
    },
    iconsText: {
        fontSize: 24,
        alignSelf: 'center',
    },
    iconsBorder: {
        width: 140,
        height: 140,
        borderWidth: 2,
        borderColor: 'rgb(0, 122, 255)',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderEndWidth: 10,
    },
    justifyIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        marginVertical: 10,
    },
});

export default HomeScreen;