import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CollectionsScreen from '../screens/Collections';

export default function CollectionsNavigator() {
    const stack = createStackNavigator();

    return (
        <stack.Navigator style={styles.CollectionsScreen}>
            <stack.Screen name="Collections" component={CollectionsScreen}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    CollectionsNavigator: {
        /* styles here */
    },
});