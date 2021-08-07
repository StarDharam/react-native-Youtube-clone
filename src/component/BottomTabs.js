import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import  HomeScreen from './HomeScreen'
import Short from './Short';
import Subscriptions from './Subscription';
import Library from './Library';
import Plus from './Plus';
import { Image,View,Text,TouchableOpacity,StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel:false,
      style:{
        position:'absolute',
        elevation:0,
        backgroundColor:'#ffffff',
        height:60,
        ...styles.shadow
        
      }
    }}
    >
      <Tab.Screen
      options={{ 
          tabBarIcon:({focused})=>(
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image
                resizeMode={'contain'}
                source={require('../images/home.png')}
                style={{height:25,width:25,tintColor:focused ?"black":'#748c94'}} />
                <Text style={{color:focused ?"black":'#748c94',fontSize:12}}>
                  Home
                </Text>
              </View>
          )
      }} name="Home" component={HomeScreen} />
      <Tab.Screen 
        options={{ 
          tabBarIcon:({focused})=>(
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image
                resizeMode={'contain'}
                source={require('../images/short.png')}
                style={{height:25,width:25,tintColor:focused ?"black":'#748c94'}} />
                <Text style={{color:focused ?"black":'#748c94',fontSize:12}}>
                Short
                </Text>
              </View>
          )
      }}
      name="Short" component={Short} />
        <Tab.Screen
      options={{ 
        tabBarIcon:({focused})=>(
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image
              resizeMode={'contain'}
              source={require('../images/plus.png')}
              style={{height:50,width:50,tintColor:focused ?"black":'#748c94',}} />
            
            </View>
        )
    }}
    name="plus" component={Plus} />
      <Tab.Screen
      options={{ 
        tabBarIcon:({focused})=>(
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image
              resizeMode={'contain'}
              source={require('../images/subscriptions.png')}
              style={{height:25,width:25,tintColor:focused ?"black":'#748c94'}} />
              <Text style={{color:focused ?"black":'#748c94',fontSize:12}}>
                Subscription
              </Text>
            </View>
        )
    }}
    name="Subscriptions" component={Subscriptions} />
      <Tab.Screen
       options={{ 
        tabBarIcon:({focused})=>(
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image
              resizeMode={'contain'}
              source={require('../images/library.png')}
              style={{height:25,width:25,tintColor:focused ?"black":'#748c94'}} />
              <Text style={{color:focused ?"black":'#748c94',fontSize:12}}>
               Libaray
              </Text>
            </View>
        )
    }}name="Library" component={Library} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.26,
    shadowRadius:2.5,
    elevation:5
  }
})

export default MyTabs;