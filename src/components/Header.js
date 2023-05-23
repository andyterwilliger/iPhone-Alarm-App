import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div>
      <div className="header_edit_bar">
        <div>
          <p>Edit</p>
        </div>
        <div>+</div>
      </div>
      <div className="header_alarm">
        <h1>Alarm</h1>
      </div>
    </div>
  );
};

export default Header;
