import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_ORDERS } from '../queries'

const useOrders = () => {
    const { data, error, loading } = useQuery(GET_ORDERS)

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (!data) return;

        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            Address: value.Address,
            City: value.City,
            Lat: value.Lat,
            Lng: value.Lng,
        }))

        setOrders(orders);
    }, [data])


    return { error, loading, orders }
}

export default useOrders