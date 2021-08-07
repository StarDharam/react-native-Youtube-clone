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
import VideoListing from './videoListing';


import YouTube from 'react-native-youtube';

const App = ({ route }) => {
    const youtubePlayerRef = useRef();


    const singleVideoId = route.params.details

    const [status, setStatus] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);
    const [containerMounted, setContainerMounted] = useState(false);
    const [containerWidth, setContainerWidth] = useState(null);
    const [isData, setData] = useState([]);
    const [isType, setType] =useState([
        {id:1,name:'Episode'},
        {id:2,name:'Trailers & More'},
        {id:3,name:'More Like This'},
    ])
const [isSeleted, setSeleted] = useState(1);


    useEffect(() => {
        setData(singleVideoId)
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View
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
                        controls={1}
                        style={[
                            {
                                height: PixelRatio.roundToNearestPixel(
                                    containerWidth / (16 / 9),
                                ),
                            },
                            styles.player,
                        ]}

                    />
                )}
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 7, marginVertical: '3%', backgroundColor: 'black' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>

                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text
                                    numberOfLines={2}
                                    style={{ fontWeight: 'bold', width: '90%', fontSize: 14, color: 'white' }}>
                                    {isData.name}
                                </Text>
                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>

                                    {/* <Text style={{ color: '#808080', fontSize: 12, }}>
                                    {isData.view} views
                                </Text>
                                <Text style={{ color: '#808080', fontSize: 12, marginLeft: 10 }}>
                                    {isData.year}
                                </Text> */}
                                </View>
                            </View>
                        </View>
                        {/* <Icon name="angle-down" size={25} /> */}
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <View style={{ height: 30, width: 30, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 3, marginLeft: 9 }}>
                            <Text style={{ fontSize: 10, color: 'white', marginTop: 2 }}>Top</Text>
                            <Text style={{ fontSize: 15, color: 'white', marginTop: -2 }}>10</Text>
                        </View>
                        <Text style={{ color: 'white', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>#10 in india Toady</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => setIsPlaying(!isPlaying)}
                        style={{
                            marginVertical: 10, marginTop: 2, alignItems: 'center', height: 35, width: '95%', backgroundColor: 'white',
                            flexDirection: 'row', borderRadius: 3, justifyContent: 'center', alignSelf: 'center'
                        }}>
                        <Icon name="play" color={"black"} size={20} />
                        <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity
                        style={{
                            marginBottom: 20, alignItems: 'center', height: 35, width: '95%', backgroundColor: '#808080',
                            flexDirection: 'row', borderRadius: 3, justifyContent: 'center', alignSelf: 'center'
                        }}>
                        <Icon name="download" color={"white"} size={20} />
                        <Text style={{ color: 'white', marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
                            Download
                    </Text>
                    </TouchableOpacity >

                    <Text style={{color:'white',marginHorizontal:10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black', width: '70%' }}>
                        <View style={{ marginLeft: 7, marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus" color={"white"} size={20} />
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                My Playlist
                    </Text>
                        </View>
                        <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='thumbs-o-up' color={"white"} size={20} />
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                Rate
                    </Text>
                        </View>

                        <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="send" color={"white"} size={20} />
                            <Text style={{ color: 'white' }}>Share</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginVertical:5}}>
                        {
                            isType.map((response)=>{
                                return(
                                    <TouchableOpacity 
                                     key={response.id}
                                     onPress={()=>setSeleted(response.id)}>
                                    <Text style={{ color:response.id==isSeleted ? 'white':'#D3D3D3', marginLeft: 7 ,fontWeight:'bold' }}>{response.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                       
                    </View>
                    <VideoListing />
                </ScrollView>

            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
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