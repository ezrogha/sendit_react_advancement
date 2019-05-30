import parcelsReducer from '../parcelsReducer';
import * as types from '../../actions/types';

describe('Parcels reducer', () => {
  
  it('should handle FETCH_ORDERS_START_LOADING', () => {
    const dispatchedAction = {
      type: types.FETCH_ORDERS_START_LOADING
    };

    const initialState = {
      loading: false,
      error: '',
      orders: []
    };

    const newState = {
      loading: true,
      error: '',
      orders: []
    };

    expect(parcelsReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it('should handle END_LOADING', () => {
    const dispatchedAction = {
      type: types.FETCH_ORDERS_END_LOADING
    };
    const initialState = {
      loading: true,
      error: '',
      orders: []
    };

    const newState = {
      loading: false,
      error: '',
      orders: []
    };

    expect(parcelsReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it('should handle FETCH_ORDERS', () => {
    const dispatchedAction = {
      type: types.FETCH_ORDERS,
      payload: []
    };
    const initialState = {
      loading: false,
      error: '',
      orders: []
    };

    const newState = {
      loading: false,
      error: '',
      orders: []
    };

    expect(parcelsReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it('should handle ORDER_START_LOADING', () => {
    const dispatchedAction = {
      type: types.ORDER_START_LOADING
    };

    const initialState = {
      loading: false,
      makeOrderLoading: false,
      error: '',
      orders: []
    };

    const newState = {
      loading: false,
      makeOrderLoading: true,
      error: '',
      orders: []
    };

    expect(parcelsReducer(initialState, dispatchedAction)).toEqual(newState)
  });

  it('should handle ORDER_END_LOADING', () => {
    const dispatchedAction = {
      type: types.ORDER_END_LOADING
    };

    const initialState = {
      loading: false,
      makeOrderLoading: true,
      error: '',
      orders: []
    };

    const newState = {
      loading: false,
      makeOrderLoading: false,
      error: '',
      orders: []
    };

    expect(parcelsReducer(initialState, dispatchedAction)).toEqual(newState)
  });
});
