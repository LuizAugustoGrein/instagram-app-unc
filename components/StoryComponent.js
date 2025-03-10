import { View, Image, Text } from 'react-native';

export default function StoryComponent ({ name, image }) {
    return (
        <View>
            <Image style={{
                backgroundColor: '#ccc',
                width: 70,
                height: 70,
                borderRadius: 35
            }} source={image} />
            <Text numberOfLines={1} ellipsizeMode='tail' style={{
                width: 70,
                textAlign: 'center'
            }}>{name}</Text>
        </View>
    )
}