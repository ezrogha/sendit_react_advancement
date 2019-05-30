import React from 'react';

const ListHeader = () => (
    <div className='header'>
      <div className='hdr-item'>OrderId</div>
      <div className='hdr-item'>From</div>
      <div className='hdr-item'>
        <span className='to'>To</span>
        <span className='dest'>Destination</span>
      </div>
      <div className='hdr-item'>
        Weight <span className='kg'>(in kg)</span>
      </div>
      <div className='hdr-item'>Price (USD)</div>
      <div className='hdr-item'>
        <div className='status'>
          <button>
            Status
            <i className='fa fa-caret-down' />
          </button>
          <ul className='dropdown'>
            <li className='all'>All Orders</li>
            <li className='delivered'>Delivered</li>
            <li className='not-delivered'>Not Delivered</li>
          </ul>
        </div>
      </div>
    </div>
  );

export default ListHeader;
