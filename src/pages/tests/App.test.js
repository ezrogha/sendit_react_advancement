import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import renderer from 'react-test-renderer';
import App from '../';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
