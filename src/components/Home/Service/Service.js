import React, { useState } from 'react';
import serviceImg from '../../../images/engine.jpg'
import ServiceDetail from './ServiceDetail/ServiceDetail';
import carwash from '../../../images/carwash.jpg'
import interior from '../../../images/interior.jpg'


const Service = () => {
    const [infoData, setInfoData] = useState([])
    fetch("http://localhost:5000/services")
    .then(res => res.json())
    .then(data =>setInfoData(data))
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