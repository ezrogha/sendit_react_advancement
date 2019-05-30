import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import { registerAction } from '../../actions/loginRegisterActions';

import Logo from '../../assets/images/nav_logo.png';
import '../../assets/css/Login.css';
import RegisterForm from '../../components/RegisterForm';

export class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    redirect: false
  };

  componentDidMount() {
    const user_token = localStorage.getItem('user_token');
    if (user_token) {
      this.setState({
        redirect: true
      });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onRegister = event => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      confirm_password
    } = this.state;
    const { history, register } = this.props;
    const registerData = {
      name: firstname,
      email,
      password
    };
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      confirm_password === ''
    ) {
      notify.show('Kindly populate all fields', 'error', 4000);
      return;
    }
    if(password !== confirm_password){
      notify.show('Your passwords do not match', 'error', 4000);
      return;
    }
    register(registerData, history);
  };

  render() {
    const { loading, history } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      history.push('/make-order');
      location.reload();
      return;
    }
    return (
      <div className="contain">
        <div className="login-page">
          <div className="form">
            <img src={Logo} className="logo" alt="Logo" />
            <div>
              <RegisterForm
                onRegister={this.onRegister}
                onChange={this.onChange}
                loading={loading}
              />
            </div>
            <p className="message">
              Already Registered?{' '}
              <Link to="/" className="link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.auth.loading
})

export default withRouter(
  connect(
    mapStateToProps,
    {
      register: registerAction
    }
  )(Register)
);
