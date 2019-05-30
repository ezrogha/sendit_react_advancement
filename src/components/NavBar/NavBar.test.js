import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './';

test('NavBar snapshot test', () => {
  const wrapper = renderer.create(<Router><NavBar /></Router>);
  expect(wrapper).toMatchSnapshot();
});
