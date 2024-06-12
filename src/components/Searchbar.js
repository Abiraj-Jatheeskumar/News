import React from 'react';
import { BiBell } from 'react-icons/bi'; // Importing the bell icon
import '../styles/Searchbar.css'; // Ensure you have this CSS file

const Searchbar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <BiBell className="bell-icon" />
    </div>
  );
}

export default Searchbar;
