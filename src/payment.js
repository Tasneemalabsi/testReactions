import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Create a paymentMethod object to collect additional payment details
    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: event.target.name.value, // Cardholder's name
        email: event.target.email.value, // Cardholder's email
      },
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      // Send the paymentMethod object to your server for payment processing
      console.log('PaymentMethod:', token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Cardholder's Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Cardholder's Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="card">Card Details</label>
        <CardElement />
      </div>
      {paymentError && <div className="error">{paymentError}</div>}
      <button type="submit">Pay</button>
    </form>
  );
}
