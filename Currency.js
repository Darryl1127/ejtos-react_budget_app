import React, { useState } from 'react';
import '.styles.css';

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div>
      <label htmlFor="currency">Select Currency:</label>
      <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="USD">$ Dollar</option>
        <option value="GBP">£ Pound</option>
        <option value="EUR">€ Euro</option>
        <option value="INR">₹ Ruppee</option>
        {/* Add more currency options as needed */}
      </select>
    </div>
  );
};

export default CurrencyDropdown;