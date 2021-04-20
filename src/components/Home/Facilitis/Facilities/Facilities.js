import React from 'react';

const Facilities = ({facility}) => {
    return (
        <div  className=" shadow-lg p-3 mb-5 bg-body rounded col-md-4 text-center container-fluid mt-5 mb-3">
            <img src={facility.image} alt="" width="80%"/>
            <h5 className="mt-3">{facility.title}</h5>
            <p>{facility.desc}</p>
            <p className="text-secondary mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit mollitia velit nulla. Obcaecati suscipit laboriosam enim? Facilis corporis quibusdam, ut maiores recusandae aperiam corrupti debitis.</p>
        </div>
      
       
    );
};

export default Facilities;