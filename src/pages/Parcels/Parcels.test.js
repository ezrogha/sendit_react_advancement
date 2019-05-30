import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, Parcels as ParcelsContainer } from './';

jest.mock('react-notify-toast');

describe('Parcels container', () => {
	const props = {
		parcels: [{}],
		fetchOrders: jest.fn(),
		history: {
			push: jest.fn(),
		}
	};
	it('test mapStateToProps', () => {
    const state = {
			parcels: {
				orders: []
			}
		}
		expect(mapStateToProps(state)).toEqual({ parcels: [] })
	});
	
	it("should update next props", () => {
		const wrapper = shallow(<ParcelsContainer { ...props } />);
    const nextProps = { parcels: [] };
    wrapper.setProps({ history: { push: jest.fn() } });
		wrapper.instance().componentWillReceiveProps(nextProps);
	});

	it("test componentDidMount", () => {
		const wrapper = shallow(<ParcelsContainer { ...props } />);
		wrapper.setProps({ history: { push: jest.fn() } });
		localStorage.setItem('user_token', 'ctytuyi783wuq');
		wrapper.instance().componentDidMount();
		localStorage.removeItem('user_token');
	});
	
	it('signout test', () => {
    const wrapper = shallow(<ParcelsContainer { ...props } />);
    const instance = wrapper.instance();
    instance.onSignout();
  });
});
