import React from 'react';
import { shallow } from 'enzyme';
import { Login as LoginContainer } from './index';

jest.mock('react-notify-toast');

describe('Login container', () => {
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: 'email',
      value: 'rogha@gmail.com'
    }
  };
  const props = {
    loading: false,
    login: jest.fn(),
    history: {
      push: jest.fn()
    }
  }
  it('calls input handler', () => {
    const wrapper = shallow(<LoginContainer />);
    const instance = wrapper.instance();
    instance.onChange(event);
    expect(instance.state.email).toEqual('rogha@gmail.com')
  });

  it('calls submit handler', () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.onLogin(event);
    expect(instance.onLogin(event)).toEqual(undefined);
  });

  it('calls submit handler with no password', () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.setState({
			email: 'rt@gmail.com',
      password: '',
    });
    expect(instance.onLogin(event)).toEqual(undefined);
    
	});
	
	it('calls submit handler', () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.setState({
			email: 'rt@gmail.com',
      password: 'Pass@123',
		});
    instance.onLogin(event);
    expect(instance.props.login).toHaveBeenCalled();
  });

  it('test componentDidMount', () => {
    const wrapper = shallow(<LoginContainer { ...props } />);
    localStorage.setItem('user_token', 'ctytuyi783wuq');
    const instance = wrapper.instance()
    instance.componentDidMount();
    expect(instance.state.redirect).toEqual(true)
  })
});
