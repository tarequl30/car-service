import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';

const Header = () => {
    return (
        <div>
            <Navbar />
            <HeaderMain />
            <Service />
        </div>
    );
};

export default Header;