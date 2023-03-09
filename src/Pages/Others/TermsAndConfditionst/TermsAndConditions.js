import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Our Terms and Conditions please Acsepted this</h1>
            <p>Go Back <Link to='/signup'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;