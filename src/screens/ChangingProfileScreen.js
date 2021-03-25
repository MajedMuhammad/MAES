import React, { useContext, useState, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { StyleSheet, View, ScrollView, LogBox } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, Divider, Button, Text } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
//import { DatePicker } from "react-native-common-date-picker";
import Spacer from '../components/Spacer';
//import ModalDatePicker from 'react-native-datepicker-modal';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ChangingProfileScreen = ({ navigation }) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [gender, setGender] = useState('');
    const [pNumber, setPNumber] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState(new Date());
    const { profile } = useContext(AuthContext);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        setDob(date);
        hideDatePicker();
    };
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                <Spacer />
                <Divider />

                <Input
                    label="First Name"
                    value={fName}
                    onChangeText={setFName}
                />

                <Divider />

                <Input
                    label="Last Name"
                    value={lName}
                    onChangeText={setLName}
                />

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
                        onPress={(value) => { setGender(value) }}
                    />
                </View>

                <Divider />

                <Input
                    label="Phone Number"
                    value={pNumber}
                    onChangeText={setPNumber}
                />

                <Divider />

                <Input
                    label="City"
                    value={city}
                    onChangeText={setCity}
                />

                <Divider />

                <View>
                    <Button title="Date of Birth" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                <Divider />
                <Spacer />

                <Spacer>
                    <Button title="Submit" onPress={() => profile({ fName, lName, gender, pNumber, city, dob })} />
                    <Spacer />
                    <Button title="Cancel" onPress={() => navigation.pop()} />
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
    }
});

export default ChangingProfileScreen;