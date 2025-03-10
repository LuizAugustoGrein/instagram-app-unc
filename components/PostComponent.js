import { View, Image, Text, useWindowDimensions } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function PostComponent() {

    const { width } = useWindowDimensions();

    return (
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
                        borderRadius: 35
                    }} source={require('../assets/favicon.png')} />
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
            }} source={require('../assets/favicon.png')} />
        </>
    )
}