import React, { useContext, useState, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { StyleSheet, View, ScrollView, LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Divider, Button, Text } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
//import { DatePicker } from "react-native-common-date-picker";
import Spacer from '../components/Spacer';
//import ModalDatePicker from 'react-native-datepicker-modal';
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangingProfileScreen = ({ navigation }) => {
    const [fName, setFName] = useState({ text: '' });
    const [lName, setLName] = useState({ text: '' });
    const [gender, setGender] = useState({ text: '' });
    const [pNumber, setPNumber] = useState({ text: '' });
    const [city, setCity] = useState({ text: '' });
    const [dob, setDob] = useState({ text: '' });
    const { state, profile } = useContext(AuthContext);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        setDob({ text: date });
        hideDatePicker();
    };


    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        if (!state.fName) {
            const parent = navigation.dangerouslyGetParent();
            parent.setOptions({
                tabBarVisible: false
            });
            const unsubscribe = navigation.addListener('blur', () => {
                parent.setOptions({
                    tabBarVisible: true
                });
                setFName({ text: '' });
                setLName({ text: '' });
                setGender({ text: '' });
                setPNumber({ text: '' });
                setCity({ text: '' });
                setDob({ text: '' });
            });
            return unsubscribe;
        }
    }, [navigation]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                <Spacer />
                <Divider />

                <Input
                    label="First Name"
                    value={fName.text}
                    onChangeText={text => setFName({ text })}
                />
                {!!fName.nameError && (
                    <Text style={styles.required}>{fName.nameError}</Text>
                )}

                <Divider />

                <Input
                    label="Last Name"
                    value={lName.text}
                    onChangeText={text => setLName({ text })}
                />
                {!!lName.nameError && (
                    <Text style={styles.required}>{lName.nameError}</Text>
                )}

                <Divider />

                <Text style={{ fontSize: 18, marginLeft: 10, color: 'gray' }}>Gender</Text>

                <View style={{ alignItems: 'center', margin: 10 }}>
                    <RadioForm
                        radio_props={[{ label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' }]}
                        initial={-1}
                        formHorizontal
                        animation
                        labelHorizontal={false}
                        onPress={(text) => setGender({ text })}
                    />
                </View>
                {!!gender.nameError && (
                    <Text style={styles.required}>{gender.nameError}</Text>
                )}

                <Divider />

                <Input
                    label="Phone Number"
                    value={pNumber.text}
                    onChangeText={(text) => setPNumber({ text })}
                />
                {!!pNumber.nameError && (
                    <Text style={styles.required}>{pNumber.nameError}</Text>
                )}

                <Divider />

                <Input
                    label="City"
                    value={city.text}
                    onChangeText={(text) => setCity({ text })}
                />
                {!!city.nameError && (
                    <Text style={styles.required}>{city.nameError}</Text>
                )}

                <Divider />
                <Spacer />

                <View style={{ width: '50%', alignSelf: 'center' }}>
                    <Button type='outline' raised title="Date of Birth" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <Spacer />
                {!!dob.nameError && (
                    <Text style={styles.required}>{dob.nameError}</Text>
                )}

                <Divider />
                <Spacer />

                <Spacer>
                    <Button title="Submit" onPress={() => {
                        if ((fName.text.trim() !== '') && (fName.text.trim() !== '') && (fName.text.trim() !== '') && (pNumber.text.trim() !== '') && (city.text.trim() !== '') && (dob.text.toString().trim() !== '')) {

                            setFName(() => ({ ...fName, nameError: '' }));
                            setLName(() => ({ ...lName, nameError: '' }));
                            setGender(() => ({ ...gender, nameError: '' }));
                            setPNumber(() => ({ ...pNumber, nameError: '' }));
                            setCity(() => ({ ...city, nameError: '' }));
                            setDob(() => ({ ...dob, nameError: '' }));
                            profile({ fName, lName, gender, pNumber, city, dob });

                        } else {

                            if (fName.text.trim() === '') {
                                setFName(() => ({ ...fName, nameError: "First name required." }));
                            }
                            if (lName.text.trim() === '') {
                                setLName(() => ({ ...lName, nameError: "Last name required." }));
                            }
                            if (gender.text.trim() === '') {
                                setGender(() => ({ ...gender, nameError: "Gender required." }));
                            }
                            if (pNumber.text.trim() === '') {
                                setPNumber(() => ({ ...pNumber, nameError: "Phone number required." }));
                            }
                            if (gender.text.trim() === '') {
                                setCity(() => ({ ...city, nameError: "City name required." }));
                            }
                            if (dob.text.toString().trim() === '') {
                                setDob(() => ({ ...dob, nameError: "Date of birth required." }));
                            }
                        }
                    }} />

                    <Spacer />

                    {state.fName != null ? <Button title="Cancel" onPress={() => navigation.navigate('Profile')} /> : null}
                </Spacer>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomColor: '#cdcdcd',
        borderBottomWidth: 1,
        marginVertical: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 2,
        height: 50
    },
    placeholderText: {
        color: '#d3d3d3'
    },
    text: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#a9a9a9'
    },
    required: {
        color: "red",
        marginTop: -22,
        marginLeft: 10,
        fontSize: 18,
    }
});

export default ChangingProfileScreen;