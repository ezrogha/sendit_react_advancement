import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './';

test('LoginForm snapshot test', () => {
  const wrapper = renderer.create(<LoginForm />);
  expect(wrapper).toMatchSnapshot();
});
