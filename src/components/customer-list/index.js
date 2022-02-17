import React, { useState } from "react";
// Hooks
import "./index.css";

function CustomerList() {

  const [customer, setCustomer] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [listCustomers, setListCustomers] = useState([]);

  // Add a new customer to list of customers
  const handleAddCustomer = (event) => {

    // Event prevent default
    event.preventDefault();
    setDisabled(true);

    if (customer.length === 0) {
      setDisabled(false);
      return;
    }


    // Add new customer
    setListCustomers([...listCustomers, customer]);
    // Clean Customer
    setCustomer('');
    // Enable button
    setDisabled(false);

  }


  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" value={customer} onChange={event => setCustomer(event.target.value)} />
        <button type="submit" className="ml-30" data-testid="submit-button" disabled={disabled} onClick={handleAddCustomer}>Add Customer</button>
      </section>
      {
        listCustomers.length > 0 && (
          <ul className="styled mt-50" key={customer} data-testid="customer-list">
            {listCustomers.map((customer, index) => (
              <li className="slide-up-fade-in" data-testid={`list-item${index}`} key={`list-item${index}`} >{customer}</li>
            ))}
          </ul>

        )
      }
    </div>
  );
}

export default CustomerList