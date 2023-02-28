import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ModalScreen from './ModalScreen';
import OrderScreen from './OrderScreen';
import TabNavigator from './TabNavigator';


export type RootNavigatorParamList = {
    Main: undefined;
    MyModal: { userId: string; name: string };
    Order: { order: any };
}

const RootStack = createNativeStackNavigator<RootNavigatorParamList>();


const RootNavigator = () => {


    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name='Main' component={TabNavigator} />
            </RootStack.Group>

            <RootStack.Group screenOptions={{
                presentation: 'modal'
            }}>
                <RootStack.Screen options={{ headerShown: false }} name='MyModal' component={ModalScreen} />
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name='Order' component={OrderScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    )
}

export default RootNavigator