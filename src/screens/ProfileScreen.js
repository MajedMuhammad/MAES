import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Input, Divider } from 'react-native-elements';

function RenderElement({ email, fName, lName, gender, pNumber, city, dob, navigate }) {
    return (
        <>
            <Divider />

            <Input
                label="Email"
                placeholder={email}
                disabled
            />

            <Divider />

            <Input
                label="First Name"
                placeholder={fName}
                disabled
            />

            <Divider />

            <Input
                label="Last Name"
                placeholder={lName}
                disabled
            />

            <Divider />

            <Input
                label="Gender"
                placeholder={gender}
                disabled
            />

            <Divider />

            <Input
                label="Phone Number"
                placeholder={pNumber}
                disabled
            />

            <Divider />

            <Input
                label="City"
                placeholder={city}
                disabled
            />

            <Divider />

            <Input
                label="DoB"
                placeholder={dob}
                disabled
            />

            <Divider />

            <Spacer>
                <Button title="Edit your profile" onPress={() => navigate("ChangingProfile")} />
            </Spacer>
        </>);
}

const ProfileScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);
    const [fName, setFName] = useState('`');
    return (
        <View>
            { fName != '' ? <RenderElement email="test@test.com" fName="Majed" lName="Althaqafi" gender="Male" pNumber="0560000" city="Taif" dob="01/01/1990" navigate={navigation.navigate} /> : <Spacer>
                <Button title="Initialize your profile" onPress={() => navigation.navigate("ChangingProfile")} />
            </Spacer>}

            <Spacer>
                <Button title="Log Out" onPress={logout} />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProfileScreen;