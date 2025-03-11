import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import StoryComponent from '../components/StoryComponent';
import PostComponent from '../components/PostComponent';

export default function HomeScreen() {

    const stories = [
        "Luiz Augusto",
        "Carlos Alberto",
        "Wesley",
        "Lucas",
        "Eduardo"
    ];

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
                        {stories.map((name, index) => (
                            <StoryComponent key={index} name={name} image={require('../assets/favicon.png')} />
                        ))}
                    </View>
                </ScrollView>
                
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
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
