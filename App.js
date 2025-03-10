import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, useWindowDimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {

    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontSize: 30 }}>Instagram</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15
                    }}>
                        <AntDesign name="plussquareo" size={30} color="black" />
                        <Feather name="heart" size={30} color="black" />
                        <FontAwesome6 name="facebook-messenger" size={30} color="black" />
                    </View>
                </View>

                <ScrollView horizontal={true} indicatorStyle={'white'}>
                    <View style={{
                        flexDirection: 'row',
                        padding: 15,
                        gap: 15,
                        borderBottomWidth: 1,
                        borderColor: '#ccc'
                    }}>
                        <View>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 70,
                                height: 70,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                                width: 70,
                                textAlign: 'center'
                            }}>Lorem Ipsum</Text>
                        </View>
                        <View>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 70,
                                height: 70,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                                width: 70,
                                textAlign: 'center'
                            }}>Lorem Ipsum</Text>
                        </View>
                        <View>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 70,
                                height: 70,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                                width: 70,
                                textAlign: 'center'
                            }}>Lorem Ipsum</Text>
                        </View>
                        <View>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 70,
                                height: 70,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                                width: 70,
                                textAlign: 'center'
                            }}>Lorem Ipsum</Text>
                        </View>
                        <View>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 70,
                                height: 70,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                                width: 70,
                                textAlign: 'center'
                            }}>Lorem Ipsum</Text>
                        </View>
                        <View>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 70,
                                height: 70,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                                width: 70,
                                textAlign: 'center'
                            }}>Lorem Ipsum</Text>
                        </View>
                    </View>
                </ScrollView>
                
                <>
                    <View style={{
                        padding: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 45,
                                height: 45,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 10
                            }}>Fulano da Silva</Text>
                        </View>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </View>
                    <Image style={{
                        backgroundColor: '#ccc',
                        width: width,
                        height: width,
                    }} source={require('./assets/favicon.png')} />
                </>
                <>
                    <View style={{
                        padding: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={{
                                backgroundColor: '#ccc',
                                width: 45,
                                height: 45,
                                borderRadius: '50%'
                            }} source={require('./assets/favicon.png')} />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 10
                            }}>Fulano da Silva</Text>
                        </View>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </View>
                    <Image style={{
                        backgroundColor: '#ccc',
                        width: width,
                        height: width,
                    }} source={require('./assets/favicon.png')} />
                </>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
});
