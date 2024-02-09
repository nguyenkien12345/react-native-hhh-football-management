import React from 'react';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import ChangePassword from '../ChangePassword';
import ForgotPassword from '../ForgotPassword';
import ConfirmEmail from '../ConfirmEmail';
import Home from '../Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='ChangePassword' component={ChangePassword} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Root;
