import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center container-fluid mt-5 mb-3">
            <img src={service.image} alt="" width="80%"/>
            <h5 className="mt-3">{service.title}</h5>
            <p className="text-secondary mt-5">Chittagong, Bangladesh</p>
        </div>
    );
};

export default ServiceDetail;