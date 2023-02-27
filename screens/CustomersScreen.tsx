import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { RootNavigatorParamList } from './RootNavigator';
import { TabNavigatorParamList } from './TabNavigator';

import { Image, Input } from '@rneui/themed';
import useOrders from '../hooks/useOrders';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../queries';
import CustomerCard from '../components/CustomerCard';

export type CustomersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabNavigatorParamList, "Customers">, NativeStackNavigationProp<RootNavigatorParamList>>;

const CustomersScreen = () => {
    const tw = useTailwind();

    const navigation = useNavigation<CustomersScreenNavigationProp>();

    const [input, setInput] = useState<string>("");

    const { data, error, loading } = useQuery(GET_CUSTOMERS);

    console.debug(data, loading, error)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: "#59c1cc" }}>
            <Image
                source={{ uri: "https://links.papareact.com/3jc" }}
                containerStyle={tw("w-full h-64")}
                PlaceholderContent={< ActivityIndicator />}
            />

            <Input
                placeholder='Search by Customer'
                value={input}
                onChangeText={text => setInput(text)}
                containerStyle={tw('bg-white pt-5 pb-0 px-10')}
            />
            <Text>len: {data?.getCustomers.length == null ? 'true' : 'false'}</Text>
            {!loading && data?.getCustomers.map(({ name: ID, value: { email, name } }: CustomerResponse) => (
                <CustomerCard key={ID} name={name} email={email} userId={ID} />
            ))}
        </ScrollView>
    )
}

export default CustomersScreen