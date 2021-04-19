import React from 'react';
import './Contact.css'
import contact from '../../../images/undraw_contact_us_15o2 (1).png'
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="section-header text-center text-white mb-5">
                    <h5 className="text-success">Contact</h5>
               </div>
           <div className="row py-5 px-5 d-flex m-0 mb-5">
               <div className=" col-md-6 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-success"> Submit </button>
                       </div>
                   </form>
               </div>
               <div className="col-md-6">
                   <img src={contact} alt="" width="100%" />
               </div>
           </div>
       </section>
    );
};

export default Contact;