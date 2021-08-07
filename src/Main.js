import React, { useEffect } from "react";
import HomeScreen from './component/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import VideoPlayer from './component/VideoPlayerScreen';
import Video from './component/VideoPlay';
const Stack = createStackNavigator();


const Main = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" headerMode='none'>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="video" component={VideoPlayer} />
        <Stack.Screen name="demo" component={Video}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main;