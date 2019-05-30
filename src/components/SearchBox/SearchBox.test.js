import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './';

test('SearchBox snapshot test', () => {
  const wrapper = renderer.create(<SearchBox />);
  expect(wrapper).toMatchSnapshot();
});
