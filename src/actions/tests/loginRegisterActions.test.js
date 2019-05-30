import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import { loginAction, registerAction } from '../loginRegisterActions';

jest.mock('react-notify-toast');
jest.mock('jwt-decode');

describe('signupSignin actions tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('User Login fail test', () => {
    const mockData = {
      data: {
        message: 'attribute password or its value is missing'
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
      { type: 'START_LOADING' },
      { type: 'END_LOADING' }
    ];
    const history = {
      push: jest.fn()
    };
    return store
      .dispatch(
        loginAction(
          {
            email: 'prime@gmail.com',
            password: ''
          },
          history
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('User register success test', () => {
    const mockData = {
      data: {
        message: 'successfully created a new account'
      }
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: mockData
      });
    });
    const expectedActions = [
      { type: 'START_LOADING' },
      { type: 'END_LOADING' }
    ];
    const history = {
      push: jest.fn()
    };
    return store
      .dispatch(
        registerAction(
          {
            email: 'shema@gmail.com',
            name: 'shema',
            password: '07864@My'
          },
          history
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('User register fail test', () => {
    const mockData = {
      data: {
        message: 'attribute name or its value is missing'
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
      { type: 'START_LOADING' },
      { type: 'END_LOADING' }
    ];
    const history = {
      push: jest.fn()
    };
    return store
      .dispatch(
        registerAction(
          {
            email: 'shema@gmail.com',
            name: '',
            password: '07864@My'
          },
          history
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
