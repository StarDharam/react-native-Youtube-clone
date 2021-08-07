import React, { useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import HomeScreenHeader from '../Header/HomeScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react/cjs/react.development";
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeScreen = () => {
    const navigation = useNavigation();


    const VideoInformation = [
        { id: '1', name: "@VIZE x Alan Walker – Space Melody (Edward Artemyev) ft. Leony (Official Lyric Video)", channel: 'Alan Walker', view: "6M", year: '5 months ago', thublinImage: 'https://img.youtube.com/vi/h8aRtP7BI0A/maxresdefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "1StsoFtme-s" },
        { id: '2', name: "Baarish Ki Jaaye | B Praak Ft Nawazuddin Siddiqui & Sunanda Sharma | Jaani | Arvindr Khaira | DM", channel: 'DM - Desi Melodies', view: "252M", year: '1 month ago', thublinImage: 'https://img.youtube.com/vi/TYaNfLLOLNY/maxresdefault.jpg', logo: 'https://yt3.ggpht.com/ytc/AAUvwnhIFAFf6MGVmm6HrjJBUdvGlsFsKoswf60wz9MQ=s176-c-k-c0x00ffffff-no-rj', videoLink: "TYaNfLLOLNY" },
        { id: '6', name: "Aankhein Meri - Shrey Singhal | Official Music Video", channel: 'Shrey Singhal', view: "25M", year: '5 months ago', thublinImage: 'https://img.youtube.com/vi/ufJza9Ej2sQ/maxresdefault.jpg', logo: 'https://yt3.ggpht.com/BatsmC_xwm_aNBeCHBavFju1Cw4QV8GITnpz-cGJaYgwXAFh5FxPVt6Qfmx6rBoWT40Antie5c4=s176-c-k-c0x00ffffff-no-rj-mo', videoLink: 'ufJza9Ej2sQ' }
,
        { id: '3', name: "Alan Walker - Alone", channel: 'Alan Walker', view: "1.1B", year: '4 years ago', thublinImage: 'https://img.youtube.com/vi/1-xGerv5FOk/sddefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "1-xGerv5FOk" },
        { id: '4', name: "Alan Walker - Faded", channel: 'Alan Walker', view: "3B", year: '5 years ago', thublinImage: 'https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "60ItHLz5WEA" },
        { id: '5', name: "K-391 & Alan Walker - Ignite (Live Performance at VG-Lista 2018 with Julie Bergan and Vinni)", channel: 'Alan Walker', view: "73M", year: '2 years ago', thublinImage: 'https://img.youtube.com/vi/8PJ3_p7VqHw/sddefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "8PJ3_p7VqHw" },
        { id: '6', name: "Aankhein Meri - Shrey Singhal | Official Music Video", channel: 'Shrey Singhal', view: "25M", year: '5 months ago', thublinImage: 'https://img.youtube.com/vi/ufJza9Ej2sQ/maxresdefault.jpg', logo: 'https://yt3.ggpht.com/BatsmC_xwm_aNBeCHBavFju1Cw4QV8GITnpz-cGJaYgwXAFh5FxPVt6Qfmx6rBoWT40Antie5c4=s176-c-k-c0x00ffffff-no-rj-mo', videoLink: 'ufJza9Ej2sQ' }
    ]


    const VideoList = (item) => {
        return (
          
            <TouchableOpacity
                onPress={() => navigation.navigate('demo', { details: item })}
                style={{ height: 150, width: 100, justifyContent: 'center', alignItems: 'center' ,margin:7}}>
                <Image source={{ uri: item.thublinImage }}
                    resizeMode={'stretch'}
                    style={{ height: 150, width: 100,borderRadius:10 }} />
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'black'}}>
         
            <ScrollView>
            <View>
                <View
                    style={{ height: 250, width: '100%', alignSelf: 'center' }}>
                    <Image source={{ uri: VideoInformation[0].thublinImage }}
                        resizeMode={'stretch'}
                        style={{ height: '100%', width: '100%', }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black', }}>
                <View style={{ marginLeft: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="plus" color={"white"} size={20} />
                    <Text style={{ color: 'white', fontSize: 12 }}>
                        My Playlist
                    </Text>
                </View>
                <TouchableOpacity 
                 onPress={() => navigation.navigate('demo', { details: VideoInformation[0]})}
                style={{
                    marginVertical: 20, alignItems: 'center', height: 35, width: 120, backgroundColor: 'white',
                    flexDirection: 'row', borderRadius: 3,justifyContent:'center'
                }}>
                    <Icon name="play" color={"black"}  size={20} />
                    <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>
                        Play
                    </Text>
                </TouchableOpacity >
                <View style={{ marginRight: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="info-circle" color={"white"} size={20} />
                    <Text style={{ color: 'white' }}>info</Text>
                </View>
            </View>
          
           
            <View style={{marginLeft:7}}>
                <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }} >Trending Now</Text>
            </View>
            <FlatList
                data={VideoInformation}
                horizontal={true}

                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => VideoList(item)} />
                  <View style={{marginLeft:7}}>
                <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }} >TV Dramas</Text>
            </View>
            <FlatList
                data={VideoInformation}
                horizontal={true}

                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => VideoList(item)} />
                  <View style={{marginLeft:7}}>
                <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }} >Infinite Originals</Text>
            </View>
            <FlatList
                data={VideoInformation}
                horizontal={true}
                style={{marginBottom:60}}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => VideoList(item)} />
                </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;