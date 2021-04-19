import React, { useState } from 'react';
import SingleOrder from './SingleOrder';

const OrderList = () => {
    const [order, setOrder] = useState([])
    fetch("http://localhost:5000/orders")
    .then(res => res.json())
    .then(data =>setOrder(data))
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
       order.map(singleOrder => <SingleOrder singleOrder={singleOrder} />)
   }
    
  </tbody>
</table>
        </div>
    );
};

export default OrderList;