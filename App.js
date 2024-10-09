import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Thư viện icon

// HomeScreen Component
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Hello 👋, Christie Doe</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Your Insights</Text>
            {/* Thêm các thành phần giao diện khác theo yêu cầu */}
        </View>
    );
}

// ScanScreen Component
function ScanScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/orange_juice.png')} style={{ width: 200, height: 400 }} />
            <Text style={{ fontSize: 18, marginTop: 20 }}>Lauren's Orange Juice</Text>
        </View>
    );
}

// Tạo Stack Navigator cho Home
const Stack = createStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
    );
}

// Tạo Bottom Tabs Navigator
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Scan') {
                        iconName = 'qr-code-scanner';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Scan" component={ScanScreen} />
        </Tab.Navigator>
    );
}

// Root component
export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
