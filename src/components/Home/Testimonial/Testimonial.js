import React from 'react';

const Testimonial = (props) => {
    const {review,name,imgURL} = props.testimonial;
    return (
        <div className="card shadow-sm col-md-4">
            <div className="card-body">
                <p className="card-text text-center">{review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center col-md-4">
                <img className="mx-3 ms-5" src={imgURL} alt="" width="100%"/>
                <h6 className="text-primary">{name}</h6>
                <div className="col-md-4">
                </div>
            </div>
       </div>
    );
};

export default Testimonial;