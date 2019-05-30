import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './';

test('NotFound snapshot test', () => {
  const wrapper = renderer.create(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
