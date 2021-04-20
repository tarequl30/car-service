import React from 'react';

const ServiceCard = ({service}) => {
    const handleClick = () => {
        fetch(`http://localhost:5000/delete-a-service/${service._id}`)
        .then(res => res.json())
        .then(result => console.log(result))
    }
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Service Name</th>
      <th scope="col">LPrice</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{service.name}</td>
      <td>{service.price}</td>
      <td><button onClick={handleClick}>Delete</button> </td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default ServiceCard;