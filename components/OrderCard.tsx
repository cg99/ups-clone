import { View, Text } from 'react-native'
import React from 'react'

type OrderProps = {
    order: Order;
}

const OrderCard = ({ order }: OrderProps) => {
    return (
        <View>
            <Text>OrderCard</Text>
        </View>
    )
}

export default OrderCard