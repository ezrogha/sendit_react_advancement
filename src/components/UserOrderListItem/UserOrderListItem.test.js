import React from 'react';
import renderer from 'react-test-renderer';
import UserOrderListItem from './';

test('UserOrderListItem snapshot test', () => {
  const wrapper = renderer.create(<UserOrderListItem />);
  expect(wrapper).toMatchSnapshot();
});
