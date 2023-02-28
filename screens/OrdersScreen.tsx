import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTailwind } from 'tailwind-rn/dist';
import { Button, Image } from '@rneui/themed';
import useOrders from '../hooks/useOrders';
import OrderCard from '../components/OrderCard';

const OrdersScreen = () => {
    const navigation = useNavigation();
    const tw = useTailwind();

    const [ascending, setAscending] = useState<boolean>(false);

    const { orders, error, loading } = useOrders();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: '#eb6a7c' }}>
            <Image
                source={{ uri: "https://links.papareact.com/m51" }}
                containerStyle={tw("w-full h-64")}
                PlaceholderContent={<ActivityIndicator />}
            />

            <Button
                color='pink'
                titleStyle={{ color: 'gray', fontWeight: "400" }}
                style={tw('py-2 px-5')}
                onPress={() => setAscending(!ascending)}
            >
                {ascending ? 'Showing: Oldest First' : 'Showing: Most Recent First'}
            </Button>

            {orders?.sort((a, b) => {
                if (ascending) {
                    return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
                } else {
                    return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
                }
            }).map(order => (
                <OrderCard key={order.trackingId} order={order} />
            ))}
        </ScrollView>
    )
}

export default OrdersScreen