import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

function RenderElement({ email, fName, lName, gender, pNumber, city, dob, navigate }) {
    return (
        <>
            <Spacer />
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
                label="Date of Birth"
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
    const { state, logout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 50 }}>
            { state.fName != null ? <RenderElement email={state.email} fName={state.fName} lName={state.lName} gender={state.gender} pNumber={state.pNumber} city={state.city} dob={state.dob} navigate={navigation.navigate} /> : <Spacer>
                <Button title="Initialize your profile" onPress={() => navigation.navigate("ChangingProfile")} />
            </Spacer>}

            <Spacer>
                <Button title="Log Out" onPress={logout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default ProfileScreen;