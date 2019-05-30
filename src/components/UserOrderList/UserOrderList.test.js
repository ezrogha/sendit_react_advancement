import React from 'react';
import renderer from 'react-test-renderer';
import UserOrderList from './';

const props = [{
    "created_at": "2019-05-30 05:49:54 AM",
    "current_location": "Kampala",
    "destination": "Mbarara",
    "email": "jpicel@gmail.com",
    "order_id": 9,
    "parcel": "laptop",
    "pickup_location": "Kampala",
    "price": 20000,
    "receiver": "James Kato",
    "status": "pending",
    "weight": 5
}]

test('UserOrderList snapshot test', () => {
  const wrapper = renderer.create(<UserOrderList userOrders={props} />);
  expect(wrapper).toMatchSnapshot();
});
