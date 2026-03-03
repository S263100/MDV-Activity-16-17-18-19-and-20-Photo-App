import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, Pressable} from 'react-native';
import { global } from '../config/global';



export default function CollectionDetailsScreen({ route, navigation }) {

    const [collectionData, setCollectionData] = useState();
    const { collectionId } = route.params;

    const getCollectionData = () => {
        fetch('https://api.unsplash.com/collections/'+collectionId+'?client_id='+global.unsplashAccessKey)
        .then ((response) => response.json())
        .then((json) => {
            setCollectionData(json);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getCollectionData();
    }, [collectionId]);

    return (
        collectionData ? (
            <View style={styles.detailsContainer}>
                {collectionData.preview_photos ? (
                    <View>
                        <FlatList
                            data={ collectionData.preview_photos }
                            renderItem={({item}) => (
                             <Pressable
                              style={styles.resultImagePressable}
                              onPress={() => {
                                navigation.navigate('Photo Details', {
                                  photoId: item.id,
                                });
                            }}
                        >
                            <Image
                              style={styles.resultImage}
                              source={{uri: item.urls.regular}}
                            />
                          </Pressable>
                        )}
                        numColumns="2"
                        style={{margin: 10, marginBottom: 100}}
                    />
                    </View>
                ) : (
                    <View>
                        <Text style={styles.noPhotos}>Collection Has No Photos!</Text>
                    </View>
                )}
            </View>
        ) : (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#000"/>
            </View>
        )
        );
    }
    const styles = StyleSheet.create({
     collectionDetailsScreen: {
        /* Styles here */
    },
    loadingContainer: {
        height: '100%',
        justifyContent: 'center'
    },
    noPhotos: {
        backgroundColor: '#000',
        color: '#FFF',
        margin: 10,
        padding: 10
    },
    resultImage: {
        flex: 1,
        height: 200
    },
    resultImagePressable: {
        flex: 1,
        margin: 10,
        height: 200
    }
});