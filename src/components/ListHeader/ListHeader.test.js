import React from 'react';
import renderer from 'react-test-renderer';
import ListHeader from './';

test('ListHeader snapshot test', () => {
  const wrapper = renderer.create(<ListHeader />);
  expect(wrapper).toMatchSnapshot();
});
