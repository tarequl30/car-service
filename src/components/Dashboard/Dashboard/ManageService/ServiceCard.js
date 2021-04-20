import React from 'react';

const ServiceCard = ({service}) => {
    const handleClick = () => {
        fetch(`https://polar-bayou-98466.herokuapp.com/delete-a-service/${service._id}`)
        .then(res => res.json())
        .then(result => console.log(result))
    }
    return (
        <div>
            <table className="table">
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