import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, Pressable } from 'react-native';
import { global } from '../config/global';
import SearchForm from '../components/SearchForm'
import CollectionDetailsScreen from '../screens/CollectionDetails';

export default function CollectionsScreen({ navigation }) {
        const [searchQuery, setSearchQuery] = useState('Cars');

        const [collections, setCollections] = useState();

        const searchCollections = () => {
            fetch('https://api.unsplash.com/search/collections?client_id='+global.unsplashAccessKey+'&query='+searchQuery)
            .then((response) => response.json())
            .then((json) => {
            setCollections(json["results"]);
            })
            .catch((error) => {
            console.error(error);
            });
        }

        useEffect(() => {
            searchCollections();
        }, [searchQuery]);

        return (
            <View style={styles.CollectionsScreen}>
                <SearchForm setSearchQuery={setSearchQuery} type=" Collections"/>
                {collections ? (<View style={styles.resultsContainer}>
                        <FlatList
                        data={collections}
                        numColumns={2}
                        style={{margin: 10}}
                        renderItem={({item}) => (
                            <Pressable style={styles.resultImagePressable} onPress={() => {
                                navigation.navigate('Collection Details', {
                                    collectionId: item.id,
                                });
                            }}>
                                {item.cover_photo ? (
                            <Image style={styles.resultImage} source={{uri: item.cover_photo.urls.regular}}/>
                            ) : (
                            <View style={styles.noImage}>
                                <Text>No Preview</Text>
                            </View>
                            )}
                            </Pressable>)}
                        />
                </View>) : (<View style={styles.loadingContainer}>
                     <ActivityIndicator size="large" color="#000"/>
                     </View>
                     )}
            </View>
        );
}

const styles = StyleSheet.create({
    CollectionsScreen: {
        /* styles here */
    },
    loadingContainer: {
        height: '100%',
        justifyContent: 'center'
    },
    resultImage: {
        flex: 1,
        height: 200
    },
    resultImagePressable: {
        flex: 1,
        margin: 10,
        height: 200
    },
    noImage: {
        backgroundColor: '#b2bec3',
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});