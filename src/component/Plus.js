import React, { useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import HomeScreenHeader from '../Header/HomeScreenHeader';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HomeScreenHeader />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Uploading features added soon...</Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;