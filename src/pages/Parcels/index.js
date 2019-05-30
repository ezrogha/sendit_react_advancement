import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchOrdersAction } from '../../actions/parcelActions';

import SearchBox from '../../components/SearchBox';
import ListHeader from '../../components/ListHeader';
import UserOrderList from '../../components/UserOrderList';
import '../../assets/css/Parcels.css';
import NavBar from '../../components/NavBar';

export class Parcels extends Component {
  state = {
    parcels: [],
    redirect: false
  };

  componentDidMount() {
    const user_token = localStorage.getItem('user_token');
    if (!user_token) {
      this.setState({
        redirect: true
      });
    } else {
      const { fetchOrders } = this.props;
      fetchOrders();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.parcels.length > 0) {
      this.setState({
        parcels: nextProps.parcels
      });
    }
  }

  onSignout = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('email');
  };

  render() {
    const { parcels, redirect } = this.state;
    const { history } = this.props;
    const userEmail = localStorage.getItem('email');
    const userParcels = parcels.filter(({ email }) => email === userEmail);
    if (redirect) {
      history.push('/');
      location.reload();
      return;
    }
    return (
      <div>
        <NavBar onSignout={this.onSignout} />
        <div className="order-list">
          <SearchBox placeholder="Search by Order Id" />
          <ListHeader />
          {userParcels.length > 0 ? (
            <UserOrderList userOrders={parcels} />
          ) : (
            <div>
              <h1 className="noParcels">NO PARCELS</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  parcels: state.parcels.orders
});

export default withRouter(connect(
  mapStateToProps,
  {
    fetchOrders: fetchOrdersAction
  }
)(Parcels));
