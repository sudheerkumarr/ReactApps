import React from 'react';
import { Link } from 'react-router-dom'

const Logout = () => {
    return (
        <div>
            <h1>Logged out successfully!!</h1>
            <small>click here to <Link to="/login">login</Link> once again!</small>
        </div>

    );
}

export default Logout;