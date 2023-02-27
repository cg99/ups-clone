type Customer = {
    name: string;
    email: string;
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type Items = {
    item_id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  type TrackingItems = {
    customer_id: string;
    items: Items[];
    customer: Customer;
  }
  
  type TrackingItemsList = {
    name: ID;
    value: TrackingItems;
  }

  type Order = {
    carrier: string;
    createdAt: Date;
    shippingCost: number;
    trackingId: string;
    Address: string;
    City: string;
    Lat: number;
    Lng: number;
    trackingItems: TrackingItems;
     
  }
  
  type OrderList = {
    name: ID;
    value: Order;
  }

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type OrderResponse = {
    // name: ID;
    value: Order;
}