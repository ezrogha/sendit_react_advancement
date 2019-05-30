import {
  FETCH_ORDERS_START_LOADING,
  FETCH_ORDERS_END_LOADING,
  FETCH_ORDERS,
	ORDER_START_LOADING,
	ORDER_END_LOADING
} from '../actions/types';

const initialState = {
	loading: false,
	makeOrderLoading: false,
  error: '',
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_START_LOADING:
      return { ...state, loading: true };

    case FETCH_ORDERS_END_LOADING:
      return { ...state, loading: false };

    case FETCH_ORDERS:
			return { ...state, orders: action.payload };
			
		case ORDER_START_LOADING:
			return { ...state, makeOrderLoading: true };
			
		case ORDER_END_LOADING:
		  return { ...state, makeOrderLoading: false };

    default:
      return state;
  }
};
