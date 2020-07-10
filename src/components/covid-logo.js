import React from 'react';
import logo from '../images/covid-logo.jpg'

const CovidLogo = () => {
    return (
        <div className="logo">
            <img  src={logo} alt="logo" width="350" height="100" />
        </div>
    );
}

export default CovidLogo;