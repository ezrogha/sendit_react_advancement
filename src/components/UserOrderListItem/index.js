import React from 'react';

const UserOrderListItem = ({orderid, from, to, weight, price, status }) => {
  return (
    <div
      className="list-item item-delivered"
    >
      <div className="list-col">{orderid}</div>
      <div className="list-col">{from}</div>
      <div className="list-col">{to}</div>
      <div className="list-col">{weight}</div>
      <div className="list-col">{price}</div>
      <div className="list-col yeah">{status}</div>
    </div>
  );
};

export default UserOrderListItem;
