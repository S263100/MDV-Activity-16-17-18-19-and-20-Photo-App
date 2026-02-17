import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotosScreen from '../screens/Photos';
import PhotoDetailsScreen from '../screens/PhotoDetails';

export default function PhotosNavigator() {
    const stack = createStackNavigator();

    return (
        <stack.Navigator style={styles.PhotosNavigator}>
            <stack.Screen name="Photos" component={PhotosScreen}/>
            <stack.Screen name="Photo Details" component={PhotoDetailsScreen}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    PhotosNavigator: {
        /* styles here */
    },
});