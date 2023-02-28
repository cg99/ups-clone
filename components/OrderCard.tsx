import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { OrdersScreenNavigationProp } from '../screens/OrdersScreen';

type OrderProps = {
    order: Order;
}

const OrderCard = ({ order }: OrderProps) => {
    const tw = useTailwind();

    const navigation = useNavigation<OrdersScreenNavigationProp>();

    // console.debug(order.trackingItems)

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Order', { order })}>
            <Card containerStyle={tw('px-5 rounded-lg')}>
                <View style={tw('flex-row justify-between items-center')}>
                    <View>
                        <Icon name='truck-delivery' type='material-community' color='#eb6a7c' />
                        <Text style={{ fontSize: 10 }}>{new Date(order.createdAt).toLocaleDateString()}</Text>
                    </View>

                    <View>
                        <Text style={[tw('text-gray-400'), { fontSize: 10 }]}>{order.carrier}-{order.trackingId}</Text>
                        <Text style={tw('text-gray-500 text-xl')}>{order?.trackingItems?.customer?.name}</Text>
                    </View>

                    <View style={tw('flex-row items-center')}>
                        <Text style={[tw('text-sm'), { color: '#eb6a7c' }]}>{order?.trackingItems?.items.length} x </Text>
                        <Icon name='box' type='feather' color='#eb6a7c' />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default OrderCard