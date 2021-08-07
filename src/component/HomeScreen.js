import React, { useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import HomeScreenHeader from '../Header/HomeScreenHeader';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeScreen = () => {
    const navigation = useNavigation();

    const VideoInformation = [
        { id: '1', name: "@VIZE x Alan Walker – Space Melody (Edward Artemyev) ft. Leony (Official Lyric Video)", channel: 'Alan Walker', view: "6M", year: '5 months ago', thublinImage: 'https://img.youtube.com/vi/1StsoFtme-s/sddefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "1StsoFtme-s" },
        { id: '2', name: "Baarish Ki Jaaye | B Praak Ft Nawazuddin Siddiqui & Sunanda Sharma | Jaani | Arvindr Khaira | DM", channel: 'DM - Desi Melodies', view: "252M", year: '1 month ago', thublinImage: 'https://img.youtube.com/vi/TYaNfLLOLNY/maxresdefault.jpg', logo: 'https://yt3.ggpht.com/ytc/AAUvwnhIFAFf6MGVmm6HrjJBUdvGlsFsKoswf60wz9MQ=s176-c-k-c0x00ffffff-no-rj', videoLink: "TYaNfLLOLNY" },
        { id: '3', name: "Alan Walker - Alone", channel: 'Alan Walker', view: "1.1B", year: '4 years ago', thublinImage: 'https://img.youtube.com/vi/1-xGerv5FOk/sddefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "1-xGerv5FOk" },
        { id: '4', name: "Alan Walker - Faded", channel: 'Alan Walker', view: "3B", year: '5 years ago', thublinImage: 'https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg', logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png', videoLink: "60ItHLz5WEA" },
        { id: '5', name: "K-391 & Alan Walker - Ignite (Live Performance at VG-Lista 2018 with Julie Bergan and Vinni)", channel: 'Alan Walker', view: "73M", year: '2 years ago', thublinImage: 'https://img.youtube.com/vi/8PJ3_p7VqHw/sddefault.jpg',logo: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png' , videoLink:"8PJ3_p7VqHw" },
{id:'6',name:"Aankhein Meri - Shrey Singhal | Official Music Video",channel:'Shrey Singhal',view: "25M", year: '5 months ago',thublinImage:'https://img.youtube.com/vi/ufJza9Ej2sQ/maxresdefault.jpg', logo:'https://yt3.ggpht.com/BatsmC_xwm_aNBeCHBavFju1Cw4QV8GITnpz-cGJaYgwXAFh5FxPVt6Qfmx6rBoWT40Antie5c4=s176-c-k-c0x00ffffff-no-rj-mo',videoLink:'ufJza9Ej2sQ'}
    ]

    const VideoList = (item) => {
        return (
            <View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('video', { details: item })}
                    style={{ height: 200, width: '100%', alignSelf: 'center' }}>
                    <Image source={{ uri: item.thublinImage }}
                        resizeMode={'stretch'}
                        style={{ height: '100%', width: '100%', }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2.5%', marginVertical: '3%', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <View style={{ height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', }}>
                            <Image source={{ uri: item.logo }}
                                resizeMode={'contain'}
                                style={{ height: 30, width: 30,borderRadius:30 }} />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text
                                numberOfLines={2}
                                style={{ fontWeight: 'bold', width: '90%', fontSize: 14 }}>
                                {item.name}
                            </Text>
                           <View style={{flexDirection:'row',marginVertical:5}}>
                           <Text style={{ color: '#808080',fontSize: 12 }}>
                                {item.channel}
                            </Text>
                            <Text style={{ color: '#808080',fontSize: 12 ,marginLeft:10}}>
                                {item.view} views
                            </Text>
                            <Text style={{ color: '#808080' ,fontSize: 12,marginLeft:10}}>
                                {item.year}
                            </Text>
                           </View>
                        </View>
                    </View>
                    <Icon name="ellipsis-v" size={20} />
                </View>

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HomeScreenHeader />

            <FlatList
                data={VideoInformation}
                
                style={{marginBottom:60,}}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => VideoList(item)} />

        </SafeAreaView>
    );
}

export default HomeScreen;