import { View, Text } from 'react-native'
import React from 'react'
import { Card, Divider, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import MapView, { Marker } from 'react-native-maps';

type Props = {
    order: Order;
    fullWidth?: boolean;
}

const DeliveryCard = ({ order, fullWidth }: Props) => {
    const tw = useTailwind();

    return (
        <Card containerStyle={[tw(`${fullWidth ? 'rounded-none m-0' : 'rounded-lg my-2'}`), {
            padding: 0,
            paddingTop: 16,
            backgroundColor: fullWidth ? '#eb6a7c' : '#59c1cc',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        }]}>
            <View style={fullWidth && { height: "100%" }}>
                <Icon
                    name="box"
                    type='entypo'
                    size={50}
                    color="white"
                />
                <View>
                    <Text style={tw('text-xs text-white font-bold uppercase text-center')}
                    >{order.carrier} - {order.trackingId}</Text>
                </View>
                <View>
                    <Text style={tw('text-lg text-white font-bold text-center underline')}
                    >Expected Delivery Date: {new Date(order.createdAt).toLocaleDateString()}</Text>
                    {/* <Divider color='white' /> */}
                </View>
                <View style={tw('my-6')}>
                    <Text style={tw('text-base text-white text-center font-bold')}>Address</Text>
                    <Text style={tw('text-sm text-white text-center')}>{order.Address}, {order.City}</Text>
                    <Text style={tw('text-sm italic text-white text-center')}>Shipping Cost: ${order.shippingCost}</Text>
                </View>

                <Divider color='white' />

                <View style={tw('p-5')}>
                    {order.trackingItems.items.map((item) => (
                        <View key={item.item_id} style={tw('flex-row justify-between')}>
                            <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
                            <Text style={tw('text-sm text-white')}>x {item.quantity}</Text>
                        </View>
                    ))}
                </View>

                <MapView
                    initialRegion={{
                        latitude: order.Lat,
                        longitude: order.Lng,
                        longitudeDelta: 0.005,
                        latitudeDelta: 0.005,
                    }}

                    style={[tw('w-full'), { flexGrow: 1 }, !fullWidth && { height: 200 }]}
                >
                    {order.Lat && order.Lng && (
                        <Marker
                            coordinate={{
                                latitude: order.Lat,
                                longitude: order.Lng,
                            }}
                            title="Delivery Location"
                            description={order.Address}
                            identifier="destination"
                        />
                    )}
                </MapView>
            </View>
        </Card>
    )
}

export default DeliveryCard