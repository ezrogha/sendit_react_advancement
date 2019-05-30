import React from 'react';
import { shallow } from 'enzyme';
import { MakeOrder as MakeOrderContainer, mapStateToProps } from './';

jest.mock('react-notify-toast');

describe('MakeOrder container', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    makeOrder: jest.fn(),
    loading: false
  }

  const event = {
    target: {
      name: 'name',
      value: 'rogha'
    }
  };

  it('calls input handler', () => {
    const wrapper = shallow(<MakeOrderContainer { ...props } />);
    const instance = wrapper.instance();
    
    instance.handleChange(event);
    expect(instance.state.name).toEqual('rogha')
  });

  it('display confirmation dialog', () => {
    const wrapper = shallow(<MakeOrderContainer { ...props } />);
    const instance = wrapper.instance();
    instance.showConfirmDialog();
    expect(instance.state.makeOrderDialog).toEqual(true)
  });

  it('hide confirmation dialog', () => {
    const wrapper = shallow(<MakeOrderContainer { ...props } />);
    const instance = wrapper.instance();
    instance.hideConfirmDialog();
    expect(instance.state.makeOrderDialog).toEqual(false)
  });

  it('signout test', () => {
    const wrapper = shallow(<MakeOrderContainer { ...props } />);
    const instance = wrapper.instance();
    instance.onSignout();
    expect(localStorage.getItem('email')).toEqual(null)
  });

  it('make order test', () => {
    
    const wrapper = shallow(<MakeOrderContainer  { ...props } />);
    const instance = wrapper.instance();
    instance.makeOrder(event);
    expect(instance.props.makeOrder).toHaveBeenCalled()
  });

  it('test mapStateToProps', () => {
    const state = {
			parcels: {
				makeOrderLoading: false
			}
		}
		expect(mapStateToProps(state)).toEqual({ loading: false })
  });
});
