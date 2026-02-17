import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PhotoDetailsScreen({ route, navigation }) {
    const {photoId} = route.params;
    console.log("show details for photo: " + photoId);
    return (
        <View style={styles.PhotoDetailsScreen}>
            <Text>Photo Details Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    PhotoDetailsScreen: {
        /* Styles here */
    },
});