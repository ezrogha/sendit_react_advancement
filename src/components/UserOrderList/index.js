import React from 'react';

import UserOrderListItem from '../UserOrderListItem';

const UserOrderList = ({ userOrders }) => (
  <div>
    {userOrders.map(order => (
      <UserOrderListItem
        key={order.order_id}
        orderid={order.order_id}
        from={order.current_location}
        to={order.destination}
        weight={order.weight}
        price={order.price}
        status={order.status}
      />
    ))}
  </div>
);

export default UserOrderList;