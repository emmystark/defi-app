import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>My DeFi App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stake">Stake</Link></li>
                <li><Link to="/lend">Lend</Link></li>
                <li><Link to="/borrow">Borrow</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;