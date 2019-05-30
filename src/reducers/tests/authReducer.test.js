import authReducer from '../authReducer';
import * as types from '../../actions/types';

describe('Auth reducer', () => {

  const initialState = {
    loading: false,
    error: ''
  };

  it('should handle START_LOADING', () => {
    const dispatchedAction = {
      type: types.START_LOADING
    };

    const newState = {
      loading: true,
      error: ''
    };

    expect(authReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it('should handle END_LOADING', () => {
    const dispatchedAction = {
      type: types.END_LOADING
    };
    
    const newState = {
      loading: false,
      error: ''
    };

    expect(authReducer({ ...initialState, loading: true }, dispatchedAction)).toEqual(newState);
  });
});
