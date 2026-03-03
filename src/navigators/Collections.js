import React from "react";
import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CollectionsScreen from '../screens/Collections';
import CollectionDetailsScreen from "../screens/CollectionDetails";
import PhotoDetailsScreen from "../screens/PhotoDetails";

export default function CollectionsNavigator() {
    const stack = createStackNavigator();

    return (
        <stack.Navigator style={styles.CollectionsScreen}>
            <stack.Screen name="Collections" component={CollectionsScreen} options={{ headerShown: false }}/>
            <stack.Screen name="Collection Details" component={CollectionDetailsScreen}/>
            <stack.Screen name="Photo Details" component={PhotoDetailsScreen}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    CollectionsNavigator: {
        /* styles here */
    },
});