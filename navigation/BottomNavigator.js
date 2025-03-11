import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CreateScreen from "../screens/CreateScreen";
import ReelsScreen from "../screens/ReelsScreen";
import AccountScreen from "../screens/AccountScreen";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function BottomNavigator () {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                title: '',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" color={color} size={30} />
                ),
            }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
            options={{
                title: '',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="search" size={30} color={color} />
                ),
            }}
            />
            <Tab.Screen name="Create" component={CreateScreen} />
            <Tab.Screen name="Rells" component={ReelsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}