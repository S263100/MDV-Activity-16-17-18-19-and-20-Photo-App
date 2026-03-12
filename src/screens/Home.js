import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
        return (
            <View style={styles.HomeScreen}>
                <TouchableOpacity onPress={() => navigation.navigate('Photos')}>
                    <Image style={styles.Icon} source={require('./assets/photos.png')}/>
                    <Text>Browse Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Collections')}>
                    <Image style={styles.Icon} source={require('./assets/collection.png')}/>
                    <Text>Browse Collections</Text>
                </TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
    HomeScreen: {
        padding: 20,
        flexDirection: "row",
        columnGap: 30
    },
    Icon: {
        width: 100,
        height: 100
    }
});