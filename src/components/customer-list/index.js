import React, { useState } from "react";
// Hooks
import "./index.css";

function CustomerList() {

  const [customer, setCustomer] = useState('');
  const [listCustomers, setListCustomers] = useState([]);

  // Add a new customer to list of customers
  const handleAddCustomer = (event) => {

    // Event prevent default
    event.preventDefault();

    if (customer.length === 0) {
      return;
    }


    // Add new customer
    setListCustomers([...listCustomers, customer]);
    // Clean Customer
    setCustomer('');

  }


  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" value={customer} onChange={event => setCustomer(event.target.value)} />
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={handleAddCustomer}>Add Customer</button>
      </section>

      {listCustomers.length > 0 && listCustomers.map(customer => (
        <ul className="styled mt-50" data-testid="customer-list">
          <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >{customer}</li>
        </ul>
      ))}
    </div>
  );
}

export default CustomerList