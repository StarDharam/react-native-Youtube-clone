import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    PixelRatio,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './HomeScreen';



import YouTube from 'react-native-youtube';

const App = ({ route }) => {
    const youtubePlayerRef = useRef();


    const singleVideoId = route.params.details

    const [isReady, setIsReady] = useState(false);
    const [status, setStatus] = useState(null);
    const [quality, setQuality] = useState(null);
    const [error, setError] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLooping, setIsLooping] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [containerMounted, setContainerMounted] = useState(false);
    const [containerWidth, setContainerWidth] = useState(null);
    const [isData, setData] = useState([]);
    const [isSub, setSub] = useState(true);

    useEffect(() => {
        setData(singleVideoId)
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={styles.container}
                onLayout={({
                    nativeEvent: {
                        layout: { width },
                    },
                }) => {
                    if (!containerMounted) setContainerMounted(true);
                    if (containerWidth !== width) setContainerWidth(width);
                }}>
                {containerMounted && (
                    <YouTube
                        ref={youtubePlayerRef}
                        apiKey="AIzaSyBwTO3ivg77QoqynPMPs_hC6aNtyqIYLLc"
                        videoId={isData.videoLink}
                        play={isPlaying}
                        loop={isLooping}
                        fullscreen={fullscreen}
                        controls={1}
                        style={[
                            {
                                height: PixelRatio.roundToNearestPixel(
                                    containerWidth / (16 / 9),
                                ),
                            },
                            styles.player,
                        ]}
                        onError={(e) => setError(e.error)}
                        onReady={(e) => setIsReady(true)}
                        onChangeState={(e) => setStatus(e.state)}
                        onChangeQuality={(e) => setQuality(e.quality)}
                        onChangeFullscreen={(e) => setFullscreen(e.isFullscreen)}
                        onProgress={(e) => {
                            setDuration(e.duration);
                            setCurrentTime(e.currentTime);
                        }}
                    />
                )}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2.5%', marginVertical: '3%', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>

                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text
                                numberOfLines={2}
                                style={{ fontWeight: 'bold', width: '90%', fontSize: 14 }}>
                                {isData.name}
                            </Text>
                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                {/* <Text style={{ color: '#808080', fontSize: 12 }}>
                                    {isData.channel}
                                </Text> */}
                                <Text style={{ color: '#808080', fontSize: 12, }}>
                                    {isData.view} views
                                </Text>
                                <Text style={{ color: '#808080', fontSize: 12, marginLeft: 10 }}>
                                    {isData.year}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Icon name="angle-down" size={25} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2.5%', marginVertical: '3%', }}>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon name='thumbs-o-up' size={25} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: 10 }}> {isData.view}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon name='thumbs-o-down' size={20} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: 10 }}>200k</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon name='comment-o' size={20} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: 10 }}> Live Chat</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>

                        <TouchableOpacity>
                            <Icon name='share' size={20} />
                        </TouchableOpacity>
                        <Text style={{ marginVertical: 10 }}>Share</Text>
                    </View>

                </View>

                <View style={{flex:1, height: 80, borderWidth: 1, borderColor: '#D0D0D0', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, alignItems: 'center', backgroundColor: '#ffffff', marginLeft: 20, flexDirection: 'row', flex: 1 }}>
                        <Image source={{ uri: isData.logo }}
                            resizeMode={'contain'}
                            style={{ height: 30, width: 30,borderRadius:15  }} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                                {isData.channel}
                            </Text>
                            <Text style={{ color: '#808080', fontSize: 13, }}>
                                9.2M Subscriber
                                </Text>

                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setSub(!isSub)}
                        style={{ marginRight: 20 }}>
                        <Text style={{ fontSize: 20, color: isSub ? "red" : "#888888", fontWeight: 'bold' }}>
                            {isSub ? "SUBSCRIBE" : "SUBSCRIBED"}</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    buttonGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    button: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'blue',
    },
    buttonTextSmall: {
        fontSize: 15,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    player: {
        alignSelf: 'stretch',
        marginVertical: 0,
    },
});