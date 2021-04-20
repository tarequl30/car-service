import React from 'react';
import Contact from './Contact/Contact';
import Facility from './Facilitis/Facility';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Teams from './Teams/Teams';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Facility />
            <Testimonials />
            <Teams />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;