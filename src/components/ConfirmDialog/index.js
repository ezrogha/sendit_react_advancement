import React from 'react';

import '../../assets/css/Dialog.css';
import '../LoginForm/LoginForm.css';


const ConfirmDialog = ({ hideConfirmDialog, makeOrder, price, loading }) => (
  <div id='dlg-wrapper'>
    <div id='dlg-box'>
      <div id='dlg-header'>
        Delivery Cost
        {loading ? 
          <div style={{ float: 'right' }} className='loader' /> 
          : 
          <div />}
      </div>
      <div id='dlg-body'>
        Your Order Will Cost:
        <span>{' '}
          UGX <span id='price'>{price}</span>
        </span>
      </div>
      <div id='dlg-footer'>
        
        <button className='btn_n' onClick={hideConfirmDialog}>
          Cancel
        </button>
        <button className='btn_n' onClick={makeOrder}>
          Proceed
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmDialog;
