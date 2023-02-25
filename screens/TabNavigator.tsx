import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from './CustomersScreen';
import OrdersScreen from './OrdersScreen';
import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/Entypo';
import { Icon } from '@rneui/themed';



export type TabNavigatorParamList = {
    Customers: undefined;
    Orders: undefined;
}

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'lightblue',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Customers') {
                    return (
                        <Icon
                            name='users'
                            type="entypo"
                            color={focused ? 'lightblue' : 'gray'}
                        />)
                } else if (route.name === 'Orders') {
                    return (
                        <Icon
                            name='box'
                            type="entypo"
                            color={focused ? 'orange' : 'gray'}
                        />)
                }
            },
        })}>
            <Tab.Screen name='Customers' component={CustomersScreen} />
            <Tab.Screen name='Orders' component={OrdersScreen} />
        </Tab.Navigator >
    )
}

export default TabNavigator