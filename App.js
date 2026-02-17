import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import HomeScreen from './src/screens/Home';
import HomeNavigator from './src/navigators/Home';
//import CollectionsScreen from './src/screens/Collections';
import PhotosNavigator from './src/navigators/Photos';
//import PhotosScreen from './src/screens/Photos';
import CollectionsNavigator from './src/navigators/Collections';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator} options={{ title: 'Photo Lens' }} />
        <Drawer.Screen name="Photos" component={PhotosNavigator} options={{ title: 'Photos' }} />
        <Drawer.Screen name="Collections" component={CollectionsNavigator} options={{ title: 'Photo Collections' }} />
      </Drawer.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
