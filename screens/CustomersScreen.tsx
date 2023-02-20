import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

const CustomersScreen = () => {
    const tw = useTailwind();

    return (
        <SafeAreaView>
            <Text style={tw("text-blue-500")}>React Native is King</Text>
        </SafeAreaView>
    )
}

export default CustomersScreen