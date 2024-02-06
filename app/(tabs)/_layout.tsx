import React from 'react';
import {Tabs} from 'expo-router';
import {AntDesign, Feather} from "@expo/vector-icons";


export default function TabLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor:'grey',
                tabBarStyle: {
                    backgroundColor: '#444',
                    borderWidth: 0,
                    borderColor: '#333',
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    tabBarIcon: ({color}) => <Feather name="home" size={24} color={color}/>,
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {fontSize: 12},
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color}/>,
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: {fontSize: 12},
                }}
            />
        </Tabs>
    );
}
