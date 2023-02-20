import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './TabNavigator';


export type RootNavigatorParamList = {
    Main: undefined;
    MyModal: { userId: string; title: string };
    Order: { order: any };
}

const RootStack = createNativeStackNavigator<RootNavigatorParamList>();


const RootNavigator = () => {


    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name='Main' component={TabNavigator} />
            </RootStack.Group>
        </RootStack.Navigator>
    )
}

export default RootNavigator