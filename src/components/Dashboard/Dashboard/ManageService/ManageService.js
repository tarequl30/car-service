import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => {
                setServices(data)
            })
    }, [])
    return (
        
            <section className="my-5 row m-0 justify-content-center">
                <p className="h2 text-center text-white fw-bolder text-uppercase">
                  
                </p>
                {services.map((service) => (
                    <ServiceCard
                        deleteService={true}
                        key={service._id}
                        service={service}
                    />
                ))}
            </section>
                )}

export default ManageService;