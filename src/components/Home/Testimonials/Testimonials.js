import React, { useState } from 'react';
import './Testimonials.css'
import reviewer from '../../../images/reviewer.jpg'
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])
    fetch("https://polar-bayou-98466.herokuapp.com/reviews")
    .then(res => res.json())
    .then(data =>setTestimonialData(data))
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Client <br/> Says </h1>
               </div>
               <div className="d-flex row m-0 mt-2 p-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;