import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, Register as RegisterContainer } from './';

jest.mock('react-notify-toast');

describe('Register container', () => {

  const props = {
    register: jest.fn(),
    loading: false,
    history: {
      push: jest.fn()
    }
  }

  const event = {
    target: {
      name: 'rogha'
    }
  };

it('test mapStateToProps', () => {
  const state = {
    auth: {
      loading: false,
    }
  }
  expect(mapStateToProps(state)).toEqual({ loading: false })
})

  it('calls input handler', () => {
    const wrapper = shallow(<RegisterContainer />);
    const instance = wrapper.instance();
    instance.onChange(event);
  });

  it('tests registering', () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    const instance = wrapper.instance();
    
    event.preventDefault = jest.fn();
    instance.setState({
        firstname: 'Rogha',
        lastname: 'Timbi',
        email: 'rt@gmail.com',
        phone: '077823232',
        password: 'User@#12',
        confirm_password: 'User@#122'
    });
    instance.onRegister(event);
  });

  it('tests registering with empty field', () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    const instance = wrapper.instance();
    event.preventDefault = jest.fn();
    instance.setState({
        firstname: '',
        lastname: 'Timbi',
        email: 'rt@gmail.com',
        phone: '077823232',
        password: 'User@#12',
        confirm_password: 'User@#12'
    });
    instance.onRegister(event);
  });

  it('tests registering success', () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    const instance = wrapper.instance();
    event.preventDefault = jest.fn();
    instance.setState({
        firstname: 'Rogha',
        lastname: 'Timbi',
        email: 'rt@gmail.com',
        phone: '077823232',
        password: 'User@#12',
        confirm_password: 'User@#12'
    });
    instance.onRegister(event);
  });

  it('test componentDidMount', () => {
    const wrapper = shallow(<RegisterContainer { ...props } />);
    localStorage.setItem('user_token', 'ctytuyi783wuq');
    wrapper.instance().componentDidMount();
  })
});
