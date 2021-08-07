import React, { useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import HomeScreenHeader from '../Header/HomeScreenHeader';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
    const navigation = useNavigation();
    const profileData = [
        { id: '1', name: "Alan Walkler", img_list: 'https://yt3.ggpht.com/ytc/AAUvwniHvNvk7bWlMD_3EgpF1h6P51O3GZ2amnalzOWo6g=s176-c-k-c0x00ffffff-no-rj' },
        { id: '1', name: "DM - Desi Melodies", img_list: 'https://yt3.ggpht.com/ytc/AAUvwnhIFAFf6MGVmm6HrjJBUdvGlsFsKoswf60wz9MQ=s176-c-k-c0x00ffffff-no-rj' },
        { id: '1', name: "T-Series", img_list: 'https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s88-c-k-c0x00ffffff-no-rj' },
        { id: '1', name: "MARCELO SM", img_list: 'https://yt3.ggpht.com/ytc/AAUvwniWihJlmue5qgKFTgiLel5OxEqWQ0hf2FZpYYqVtg=s176-c-k-c0x00ffffff-no-rj' },
        { id: '1', name: "Alan Walkler", img_list: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png' },
        { id: '1', name: "Alan Walkler", img_list: 'https://seeklogo.com/images/A/alan-walker-logo-2D4D3CF3AE-seeklogo.com.png' },
    ]

    const ListProfile = ({ item }) => {
        return (
            <View >

                <Image source={{ uri: item.img_list }}
                    style={{ height: 70, width: 70,borderRadius:35, margin: 10, }} />
                <Text
                    numberOfLines={1} style={{ width:60, alignSelf: 'center', marginBottom: 10 }} >
                    {item.name}
                </Text>

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HomeScreenHeader />
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    data={profileData}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{ borderTopWidth: 0.6,borderColor: '#C0C0C0',borderBottomWidth: 0.6 }}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={(item, index) => ListProfile(item, index)} />
                <View style={{
                    width: 60, justifyContent: 'center', alignItems: 'center',
                    borderTopWidth: 0.6, borderColor: '#C0C0C0', borderBottomWidth: 0.6
                }}>
                    <Text style={{fontSize:25,color:'#4682B4'}}>All</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;