import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', clearErrorMessage);

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText="Sign Up"
            />
            <NavLink
                routeName="Login"
                text="Already have an account? Log in"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;