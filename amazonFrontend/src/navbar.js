import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div><a href="https://www.amazon.in/ref=nav_logo">Amazon.in</a></div>
      <div>
        <a href="https://www.amazon.in/ref=nav_logo">Home</a>
        <a href="https://www.amazon.in/deals?ref_=nav_cs_gb">Today's Deals</a>
        <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help">Customer Service</a>
        <a href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart">Cart</a>
      </div>
    </div>
  );
}

export default Navbar;
