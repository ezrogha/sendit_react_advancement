import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import { loginAction } from '../../actions/loginRegisterActions';

import LoginForm from '../../components/LoginForm';
import Logo from '../../assets/images/nav_logo.png';
import '../../assets/css/Login.css';

export class Login extends Component {
  state = {
    email: '',
    password: '',
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

  onLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    const loginData = {
      email,
      password
    };
    if (email === '') {
      notify.show('Please provide an email', 'error', 4000);
      return;
    }
    if (password === '') {
      notify.show('Please provide a password', 'error', 4000);
      return;
    }
    login(loginData, history);
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
              <LoginForm
                loading={loading}
                onChange={this.onChange}
                onLogin={this.onLogin}
              />
            </div>
            <div>
              <p className="message">
                Not Registered?{' '}
                <Link to="/register" className="link">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      login: loginAction
    }
  )(Login)
);
