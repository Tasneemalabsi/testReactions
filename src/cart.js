
import { useState, useEffect } from "react";
import CardComp from "./card";
import EmptyCart from './Emptycart.png';
import './card.css';
import './payment.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Cart() {
  let stringedCart = localStorage.getItem("cart");
  let cart = JSON.parse(stringedCart);
  let [cartState, setCartState] = useState(cart)
  let [show, setShow] = useState(false);
  let [showSuccess, setShowSuccess] = useState(false);
  let [checkoutItems, setCheckoutItems] = useState([]);

  function handleShow() {
    setShow(!show)

  }

  let [cardNumber, setCardNumber] = useState('');
  let [expiryDate, setExpiryDate] = useState('');
  let [cvv, setCvv] = useState('');
  let [totalPrice, setTotalPrice] = useState(0);

  function handleDelete(index) {
    cart.splice(index, 1);
    let cartCopy = [...cart]
    setCartState(cartCopy)
    let storeData = JSON.stringify(cartCopy);
    localStorage.setItem("cart", storeData);
  }

  let handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  let handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  let handleCvvChange = (e) => {
    setCvv(e.target.value);
  };


  useEffect(() => {
    // Calculate the total price of items in the cart
    let totalPrice = cartState.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cartState]);

  const handlePayNow = () => {
    // Add any payment logic here
    setShowSuccess(true);
    setShow(false)
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  useEffect(() => {
    const items = cartState.map((item) => {
      return {
        make: item.make,
        price: item.price,
      };
    });
    setCheckoutItems(items);
  }, [cartState]);


  return (
    <>
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20xp", marginTop:"3%"}}>
        {cartState.length !== 0 ? (cartState.map(function (item, index) {
          return (
            <>
              <CardComp
                type={item.type}
                image={item.image}
                make={item.make}
                model={item.model}
                description={item.description}
                year={item.year}
                color={item.color}
                price={item.price}
                transmission={item.transmission}
                CartView={false} index={index}
                handleDelete={() => { handleDelete(index) }} />
            </>
          );
        })

        ) : (
          // <h1>Empty Cart!</h1>
          <img id="empty-cart" src={EmptyCart} alt="Logo" />

        )}
      </div>

      {/* checkout */}
      {cartState.length > 0 && (
        <section id="checkout-section">
          <div>
            <label>Items:</label> <br />
            {checkoutItems.map((item, index) => (
              <div key={index}>
                <p>{item.make}   -   {item.price} JD</p>
              </div>
            ))}
          </div>
          <div>
            <hr id="payment-hr"/>
            <label>Total Price:</label> <br />
            <input type="text" value={totalPrice + " JD"} readOnly />
          </div>
          <button type="submit" onClick={setShow}>Checkout</button>
        </section>
      )}

      {/* Payment  */}

        <Modal show={show} onHide={handleShow} >
          <Modal.Header closeButton>
            <Modal.Title>Card details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="payment-popup">
              <div>
                <label>Card Number</label> <br />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="Enter your card number"
                /> 
              </div> 
              <div>
                <label>Expiry Date</label> <br />
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label>CVV</label> <br />
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="Enter CVV"
                />
              </div> <br />
              <div id="total-price-popup">
                <label>Total Price</label> <br />
                <input
                  type="text"
                  value={totalPrice + " JD"}
                  readOnly
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={handlePayNow}>
              Pay Now
            </Button>
            <Button variant="secondary" onClick={() => { 
              handleShow(); 
              setCardNumber('');
              setExpiryDate('');
              setCvv('');
            }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your payment was successful <BsFillCheckCircleFill size={20} color="green" /></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
              handleCloseSuccess();
              setCardNumber('');
              setExpiryDate('');
              setCvv('');
            }} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>

  ) }
export default Cart;