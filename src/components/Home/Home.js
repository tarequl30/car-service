import React from 'react';
import Contact from './Contact/Contact';
import Facility from './Facilitis/Facility';
import Header from './Header/Header';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Facility />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;