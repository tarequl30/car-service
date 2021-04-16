import React from 'react';
import serviceImg from '../../../images/engine.jpg'
import ServiceDetail from './ServiceDetail/ServiceDetail';
import carwash from '../../../images/carwash.jpg'
import interior from '../../../images/interior.jpg'

const infoData = [
    {
        title: 'Engine Work',

        image: serviceImg,

    },
    {
        title: 'Super Car Wash',

        image: carwash,

    },
    {
        title: 'Interior Design Makeover',

        image: interior,

    }
]


const Service = () => {
    return (
        <section className="mt-5">
            <div className="text-center mt-5">
                <h5 style={{fontSize:"3em"}} className="mt-5">Services We Provide</h5>
            </div>
            <div className="d-felx justify-content-center" >
                <div className="row mt-5">
                    {
                        infoData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;