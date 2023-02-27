import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useCustomerOrders from '../hooks/useCustomerOrders';
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import { CustomersScreenNavigationProp } from '../screens/CustomersScreen';

type CustomerProps = {
    email: string;
    name: string;
    userId: string;
}

const CustomerCard = ({ email, name, userId }: CustomerProps) => {
    const navigation = useNavigation<CustomersScreenNavigationProp>();

    const tw = useTailwind();

    const { orders, error, loading } = useCustomerOrders(userId);

    return (
        <TouchableOpacity>
            <Card containerStyle={tw('p-5 rounded-lg')}>
                <View style={tw('flex-row justify-between')}>
                    <View>
                        <Text>{name}</Text>
                        <Text>ID: {userId}</Text>
                    </View>
                    <View>
                        <Text>{loading ? 'loading...' : orders.length}</Text>
                        <Icon
                            name='box'
                            type="entypo"
                            color="#59c1cc"
                        />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default CustomerCard