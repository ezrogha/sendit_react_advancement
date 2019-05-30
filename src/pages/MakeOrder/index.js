import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeOrderAction } from '../../actions/parcelActions';

import Select from '../../components/Select';
import NavBar from '../../components/NavBar';
import ConfirmDialog from '../../components/ConfirmDialog';
import '../../assets/css/MakeOrder.css';

export class MakeOrder extends Component {
  state = {
    from: 'Kampala, Uganda',
    to: 'Kampala, Uganda',
    parcel: 'item',
    weight: 1,
    receiver: 'Daniel Sema',
    makeOrderDialog: false,
    price: "0",
    redirect: false
  };

  componentDidMount(){
    const user_token = localStorage.getItem('user_token');
    if (!user_token) {
      this.setState({
        redirect: true
      });
    }
  }

  onSignout = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('email');
  }


  showConfirmDialog = () => {
    this.setState({
      makeOrderDialog: true,
      price: `${(Math.floor(Math.random() * 60) + 20) * 1000}`
    });
  }

  makeOrder = () => {
    const { makeOrder, history } = this.props;
    const { from, to, parcel, weight, price, receiver } = this.state;
    const parcelData = {
      destination: to,
      parcel,
      pickup_location: from,
      price,
      receiver,
      weight
    };
    makeOrder(parcelData, history);
  };

  hideConfirmDialog = () => {
    this.setState({
      makeOrderDialog: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { from, to, weight, makeOrderDialog, price, redirect } = this.state;
    const { history, loading } = this.props;
    if (redirect) {
      history.push('/');
      location.reload();
      return;
    }
    return (
      <div>
        {makeOrderDialog ? (
          <ConfirmDialog
            hideConfirmDialog={this.hideConfirmDialog}
            makeOrder={this.makeOrder}
            price={price}
            loading={loading}
          />
        ) : (
          <div />
        )}
        <NavBar onSignout={this.onSignout} />
        <div className="contain">
          <h1>
            Send Your Parcel
            <span> Quick</span> & <span> Easy</span>
          </h1>
          <div className="form-box">
            <span className="from">From: </span>
            <Select
              selectedPlace={from}
              loc="from"
              handleChange={this.handleChange}
            />
            <span className="too">To: </span>
            <Select
              selectedPlace={to}
              loc="to"
              handleChange={this.handleChange}
            />
            <span className="weight">Weight (kg): </span>
            <input
              type="number"
              name="weight"
              value={weight}
              id="weight"
              min={1}
              step={1}
              onChange={this.handleChange}
            />
            <button
              className="order-btn"
              onClick={this.showConfirmDialog}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.parcels.makeOrderLoading
})

export default withRouter(connect(
  mapStateToProps,
  {
    makeOrder: makeOrderAction
  }
)(MakeOrder));
