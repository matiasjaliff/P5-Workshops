import React from "react";

const Navbar = ({ user }) => (
  <nav className="navbar has-background-black-ter mb-4">
    <h3 className="navbar-item has-text-white">REACTIFY</h3>
    <div className="navbar-item navbar-end">
      {user.id ? (
        <p className="has-text-white">{user.display_name}</p>
      ) : (
        <a href="http://localhost:3001/api/login" className="button is-primary">
          <strong>Log in</strong>
        </a>
      )}
    </div>
  </nav>
);

export default Navbar;
