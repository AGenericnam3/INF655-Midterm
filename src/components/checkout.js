import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Checkout = ({ cartItems, total }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    // Add any additional shipping fields here
  });

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();// Handle the form submission
    clearCart(); // Clear cart after successful submission
    history.push('/thank_you'); // Redirect to the thank you page
  };

  const clearCart = () => {cartItems=[]};

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={shippingInfo.name}
          onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
          required
        />
        {/* Add other shipping input fields here */}
        <button type="submit">Place Order</button>
      </form>
      <div>
        <h3>Order Review</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default Checkout;