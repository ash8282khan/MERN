import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div>Amazon</div>
      <div>
        <a href="#home">Home</a>
        <a href="#deals">Today's Deals</a>
        <a href="#services">Customer Service</a>
        <a href="#cart">Cart</a>
      </div>
    </div>
  );
}

export default Navbar;
