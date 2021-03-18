import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';

const LoginScreen = ({ navigation }) => {
    const { state, login, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Login"
                errorMessage={state.errorMessage}
                submitButtonText="Login"
                onSubmit={login}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up"
            />
        </View>
    );
};

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default LoginScreen;