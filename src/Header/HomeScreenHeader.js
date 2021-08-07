import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreenHeader = () => {
    return (
        <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../images/app.png')}
                    style={{ height: 45, width: 45 }} />
                <Text style={{ fontSize: 23, fontWeight: 'bold', marginLeft: 6 }}>YouTube</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='bell-o' style={{ marginRight: 15, fontSize: 20 }} />
                <Icon name='search' style={{ marginRight: 15, fontSize: 20 }} />
                <View style={{
                    backgroundColor: '#4682B4', height: 25, width: 25, marginRight: 12.5, borderRadius: 15,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>D</Text>
                </View>
            </View>
        </View>
    )
}
export default HomeScreenHeader;