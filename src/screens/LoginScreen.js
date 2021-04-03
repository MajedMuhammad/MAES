import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';

const LoginScreen = ({ navigation }) => {
    const { state, login, clearErrorMessage } = useContext(AuthContext);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', clearErrorMessage);
        return unsubscribe;
    }, [navigation]);
    return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default LoginScreen;