import React from 'react';

const SingleOrder = ({singleOrder}) => {
    return (
        <tr>
      <td>{singleOrder.name}</td>
      <td>{singleOrder.serviceName}</td>
      <td>{singleOrder.price}</td>
      <td><button>Delete</button></td>
    </tr>
    );
};

export default SingleOrder;