import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/watched">Watched</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
