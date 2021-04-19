import React from 'react';
import Facilities from './Facilities/Facilities';

const facility = [
    {
        title: '24*7 Customer Services',
        image: <i className="bi bi-tools"></i>,
        price: 125

    },
    {
        title: 'Visit Our Location',
        image: <i className="bi bi-tools"></i>,
        price: 299

    },
    {
        title: 'Contact Us Now',
        image: <i className="bi bi-tools"></i>,
        price: 185

    }
]

const Facility = () => {
    return (
        <section>
            <div className="text-center mt-5">
               <h3 style={{fontSize: "2em"}}>Facilities We Provide</h3>
               <h4 style={{fontWeight:'800', fontSize:'2em'}}>We take care of our customer and always <br/> customer is right </h4>
            </div>
            <div className="container-fluid row m-0 mt-2 p-5">
                {
                      facility.map(facility => <Facilities facility={facility}></Facilities>)
                }
            </div>
            <div className="form-group text-center">
                           <button type="button" className="btn btn-success"> Explore </button>
            </div>
        </section>
    );
};

export default Facility;