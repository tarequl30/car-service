import React from 'react';
import frontImg from '../../../images/auto-mechanic-working-garage-repair-service.jpg'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main className="frontPart row mb-5">
            <div className="col-md-6 frontLine">
                <h1 className="mb-5 ms-5">We Provide <br/> Best Car Service</h1>
                <p className="mb- ms-5">Lorem ipsum dolor sit amet consectetur  bt elit. Error, molestiae!Lorem  <br/> ipsum dolor sit amet consectetur adipisicing elit. Error, molestiae!</p>
                <button className="btn btn-success ms-5">Booking</button>
            </div>
            <div className="col-md-6">
                {/* <img src={frontImg} alt="" width="80%"/> */}
            </div>
        </main>
    );
};

export default HeaderMain;