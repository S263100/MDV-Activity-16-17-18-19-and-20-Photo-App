import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';

export default function HomeNavigator() {
    const stack = createStackNavigator();

    return (
        <stack.Navigator style={styles.HomeNavigator}>
            <stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    HomeNavigator: {
        /* styles here */
    },
});