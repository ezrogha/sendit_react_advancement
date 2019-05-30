import axios from 'axios';
import { notify } from 'react-notify-toast';
import jwt_decode from 'jwt-decode';
import { START_LOADING, END_LOADING } from './types';

const header = {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  }
};

export const loginAction = (data, history) => dispatch => {
  const url = 'https://sender-app.herokuapp.com/api/v1/auth/signin';
  dispatch({ type: START_LOADING });
  return axios
    .post(url, data, header)
    .then(response => {
      dispatch({ type: END_LOADING });
      const { message, user_token } = response.data;
      notify.show(message, 'success', 4000);
      const decoded = jwt_decode(user_token);
      const email = decoded.identity.email;
      localStorage.setItem('user_token', user_token);
      localStorage.setItem('email', email);
      history.push('/make-order');
    })
    .catch(error => {
			dispatch({ type: END_LOADING });
			const { message } = error.response["data"]
      notify.show(message, 'error', 2000);
    });
};

export const registerAction = (data, history) => dispatch => {
  const url = 'https://sender-app.herokuapp.com/api/v1/user';
  dispatch({ type: START_LOADING });
  return axios
    .post(url, data, header)
    .then(response => {
      dispatch({ type: END_LOADING });
      const { message } = response.data;
      notify.show(message, 'success', 4000);
      history.push('/');
    })
    .catch(error => {
      dispatch({ type: END_LOADING });
      const { message } = error.response.data;
      notify.show(message, 'error', 2000);
    });
};
