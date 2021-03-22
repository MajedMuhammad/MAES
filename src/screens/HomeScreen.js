import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome5, MaterialIcons, AntDesign } from 'react-native-vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.welcoming}>
                You are welcome
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
                        <FontAwesome5 name="diagnoses" color="#007ef5" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            Diagnosis
                    </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Updating")}>
                    <View style={styles.iconsBorder}>
                        <MaterialIcons name="update" color="#007ef5" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            Updates
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.justifyIcons}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <View style={styles.iconsBorder}>
                        <AntDesign name="profile" color="#007ef5" size={64} style={styles.icons} solid />
                        <Text style={styles.iconsText}>
                            Profile
                    </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.iconsBorder}>
                        <AntDesign name="exclamationcircleo" color="#007ef5" size={64} style={styles.icons} solid />
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
        borderColor: '#007ef5',
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