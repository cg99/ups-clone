import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn/dist';
import { OrdersScreenNavigationProp } from './OrdersScreen';
import { RootNavigatorParamList } from './RootNavigator';
import DeliveryCard from '../components/DeliveryCard';

type OrderProps = {
    order: Order;
}

type OrderScreenRouteProps = RouteProp<RootNavigatorParamList, "Order">

const OrderScreen = () => {
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const tw = useTailwind();

    const { params: { order } } = useRoute<OrderScreenRouteProps>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: '#eb6a7c',
            headerTitleStyle: { color: "black" },
            headerBackTitle: "Deliveries",
        })
    }, [order])

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            </TouchableOpacity>
            <DeliveryCard order={order} fullWidth={true} />
        </View>
    )
}

export default OrderScreen