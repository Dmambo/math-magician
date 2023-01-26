import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => (
  <nav>
    <h1 className="navHead">Math Magicians</h1>
    <div className="list">
      <NavLink exact="true" to="/" className="link active">
        Home
      </NavLink>
      <span className="vr" />
      <NavLink to="/calculator" className="link active">
        Calculator
      </NavLink>
      <span className="vr" />
      <NavLink to="/quote" className="link active">
        Quote
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
