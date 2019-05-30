import React from 'react';
import renderer from 'react-test-renderer';
import RegisterForm from './';

test('RegisterForm snapshot test', () => {
  const wrapper = renderer.create(<RegisterForm />);
  expect(wrapper).toMatchSnapshot();
});
