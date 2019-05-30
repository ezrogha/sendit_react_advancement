import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axiosInstance from '../../helpers/axiosInstance';
import { makeOrderAction, fetchOrdersAction } from '../parcelActions';

jest.mock('react-notify-toast');

describe('Parcel actions tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    moxios.install(axiosInstance);
  });
  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('User MakeOrder success test', () => {
    const mockData = {
      data: {
        message: 'parcel delivery order successfully created'
      }
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData
      });
    });
    const expectedActions = [
      { type: 'ORDER_START_LOADING' },
      { type: 'ORDER_END_LOADING' }
    ];
    const history = {
      push: jest.fn()
    };
    return store
      .dispatch(
        makeOrderAction(
          {
            destination: 'Kampala, Uganda',
            parcel: 'item',
            pickup_location: 'Mbale, Uganda',
            price: '56000',
            receiver: 'Daniel Sema',
            weight: '5'
          },
          history
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('User MakeOrder fail test', () => {
    const mockData = {
      data: {
        message: 'value of price is not valid'
      }
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockData
      });
    });
    const expectedActions = [
      { type: 'ORDER_START_LOADING' },
      { type: 'ORDER_END_LOADING' }
    ];
    const history = {
      push: jest.fn()
    };
    return store
      .dispatch(
        makeOrderAction(
          {
            destination: 'Kampala, Uganda',
            parcel: 'item',
            pickup_location: 'Mbale, Uganda',
            price: '',
            receiver: 'Daniel Sema',
            weight: '5'
          },
          history
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('User FetchParcels fail', () => {
    const mockData = {
      data: {
        data: []
      }
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockData
      });
    });
    const expectedActions = [
      { type: 'FETCH_ORDERS_START_LOADING' },
      { type: 'FETCH_ORDERS_END_LOADING' },
    ];
    return store
      .dispatch(
        fetchOrdersAction()
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('User FetchParcels success', () => {
    const mockData = {
      data: []
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData
      });
    });
    const expectedActions = [
      { type: 'FETCH_ORDERS_START_LOADING' },
      { type: 'FETCH_ORDERS_END_LOADING' },
      { type: 'FETCH_ORDERS', payload: [] },
    ];
    return store
      .dispatch(
        fetchOrdersAction()
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
