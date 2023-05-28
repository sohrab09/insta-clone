import { StyleSheet } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import NewPostScreens from './screens/NewPostScreens'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


const Stack = createNativeStackNavigator();


const screenOption = {
    headerShown: false
}

export const SignInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="SignupScreen"
            screenOptions={screenOption}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPostScreens" component={NewPostScreens} />
        </Stack.Navigator>
    </NavigationContainer>
);

export const SignOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={screenOption}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)


const styles = StyleSheet.create({})