import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])
    let [loading, setLoading] = useState(true)
    let [color, setColor] = useState("#2dffc6")
    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then((res) => res.json())
            .then((data) => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    return (
        <>
        {loading ? (
            <div
                style={{
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* <Barloader color={color} loading={loading} size={40} /> */}
            </div>
        ) : (
            <section className="my-5 row m-0 justify-content-center">
                <p className="h2 text-center text-white fw-bolder text-uppercase">
                    Delete Services{" "}
                    {/* <FontAwesomeIcon
                        style={{ color: "red" }}
                        icon={faTrash}
                    /> */}
                </p>
                {/* {services.map((service) => (
                    <ServiceCard
                        deleteService={true}
                        key={service._id}
                        service={service}
                    />
                ))} */}
            </section>
        )}
    </>
    );
};

export default ManageService;