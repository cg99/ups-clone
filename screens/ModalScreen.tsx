import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from './TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigatorParamList } from './RootNavigator';
import { useTailwind } from 'tailwind-rn/dist';
import { Icon } from '@rneui/themed';
import useCustomerOrders from '../hooks/useCustomerOrders';
import DeliveryCard from '../components/DeliveryCard';

type ModalScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabNavigatorParamList>, NativeStackNavigationProp<RootNavigatorParamList, "MyModal">>;

type ModalScreenRouteProp = RouteProp<RootNavigatorParamList, "MyModal">;

const ModalScreen = () => {
    const navigation = useNavigation<ModalScreenNavigationProp>();
    const tw = useTailwind();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const { params: { name, userId } } = useRoute<ModalScreenRouteProp>();

    const { orders, loading, error } = useCustomerOrders(userId);

    return (
        <View>
            <TouchableOpacity
                onPress={navigation.goBack}
                style={tw('absolute top-5 right-5 z-10')}
            >
                <Icon
                    name='closecircle'
                    type='antdesign'
                />
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
                <View style={[tw('py-5 border-b'), { borderColor: '#59c1cc' }]}>
                    <Text style={[tw('text-center text-xl font-bold'), { color: '#59c1cc' }]}>{name}</Text>
                    <Text style={tw('text-center text-sm italic')}>Deliveries</Text>
                </View>
            </View>

            <FlatList
                contentContainerStyle={{ paddingBottom: 200 }}
                data={orders}
                keyExtractor={order => order.trackingId}
                renderItem={({ item: order }) => (
                    <DeliveryCard order={order} />
                )}
            />
        </View>
    )
}

export default ModalScreen