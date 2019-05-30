import axios from "../helpers/axiosInstance";
import { notify } from 'react-notify-toast';
import { ORDER_START_LOADING, ORDER_END_LOADING, FETCH_ORDERS_START_LOADING, FETCH_ORDERS_END_LOADING, FETCH_ORDERS } from './types';

const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('user_token')}`
  }
};

export const makeOrderAction = (data, history) => dispatch => {
	const url = 'https://sender-app.herokuapp.com/api/v1/parcels';
	dispatch({ type: ORDER_START_LOADING })
	return axios
		.post(url, data, header)
		.then(response => {
			dispatch({ type: ORDER_END_LOADING })
			const { message } = response.data;
			notify.show(message, 'success', 4000);
			history.push('/orders');
		})
		.catch(error => {
			dispatch({ type: ORDER_END_LOADING })
			// const { message } = error.response.data;
			notify.show('Error making parcel', 'error', 2000);
		})
}

export const fetchOrdersAction = () => dispatch => {
	const url = 'https://sender-app.herokuapp.com/api/v1/parcels';
	dispatch({ type: FETCH_ORDERS_START_LOADING })
	return axios
		.get(url, header)
		.then(response => {
			dispatch({ type: FETCH_ORDERS_END_LOADING })
			dispatch({ type: FETCH_ORDERS, payload: response.data.data })
		})
		.catch(error => {
			dispatch({ type: FETCH_ORDERS_END_LOADING })
			const { message } = error.response.data;
			notify.show(message, 'error', 2000);
		})
}

