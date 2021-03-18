import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import DiagnosisScreen from './src/screens/DiagnosisScreen';
import UpdatingScreen from './src/screens/UpdatingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Ionicons, FontAwesome5, MaterialIcons, AntDesign } from 'react-native-vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';






const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createSwitchNavigator({
    Signup: SignupScreen,
    Login: LoginScreen,
  }, {
    initialRouteName: 'Login'
  }),
  mainFlow: createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={25} />
        )
      }
    },
    Diagnosis: {
      screen: DiagnosisScreen,
      navigationOptions: {
        tabBarLabel: 'Diagnosis',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="diagnoses" color={tintColor} size={25} />
        )
      }
    },
    Updating: {
      screen: UpdatingScreen,
      navigationOptions: {
        tabBarLabel: 'Updates',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="update" color={tintColor} size={25} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="profile" color={tintColor} size={25} />
        )
      }
    },
  }, {
    tabBarOptions: {
      safeAreaInset: { bottom: 'always' },
    },
  })
}, {
  initialRouteName: 'mainFlow'
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </SafeAreaProvider>
    </AuthProvider>
  );
};