import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './button.css';
import { useAuth0 } from '@auth0/auth0-react'; 

function CardComp(props) {
  let [show, setShow] = useState(false);
  let {isAuthenticated, user} = useAuth0()
  console.log(user)
  const [message, setMessage] = useState('');
  function handleShow() {
    setShow(!show)

  }


  function saveToLocalStorage() {
    if (localStorage.getItem("cart")) {
      let stringData = localStorage.getItem("cart")
      let arr = JSON.parse(stringData);
      arr.push({...props, email:user.email})

      // -----------------------------
      let stringedData = JSON.stringify(arr)
      localStorage.setItem("cart", stringedData)
    }
    else {
      let arr = [];
      arr.push({...props, email:user.email})
      let stringedData = JSON.stringify(arr)
      localStorage.setItem("cart", stringedData)
    }
  
  setMessage('Item added to the cart!');
  setTimeout(() => {
    setMessage('');
  }, 3000); // Clear the message after 3 seconds
}



  return (
    <>
      <Card id="cardd" style={{ width: '18rem', margin: '10px'  }}>
        <Card.Img variant="top" src={props.image} style={{ padding: '5px',height:'270px', }} />
        <Card.Body>
          <Card.Title>{props.model}</Card.Title>
          <Card.Text>
            {props.make} ,{props.year},{props.color}
          </Card.Text>
          <Card.Text>
            <b>price:</b> {props.price} <b>JD</b>
            <Card.Text>
              <b>   Transmission: </b>{props.transmission}
            </Card.Text>

          </Card.Text>
          <Button variant="dark" onClick={handleShow}>Description</Button>{' '}

          
          {isAuthenticated && props.CartView ? <button onClick={saveToLocalStorage} className="button">
            <img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" alt="add icon" />
          </button>
            : <button onClick={saveToLocalStorage} style={{ display: "none" }} ><img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" alt="add icon" /> </button>
          }

          {props.showDelete ? <button onClick={props.handleDelete} className="button">
            <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete-button" />
          </button>
            : <button onClick={props.handleDelete}  style={{ display: "none" }} className="button"  ><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete-button" /> </button>
          }
        </Card.Body>
        {message && <p style={{backgroundColor:'black', color:'white', border:' rgba(179, 24,24) solid 1px'}}>{message}</p>}
      </Card>


      <Modal show={show} onHide={handleShow} dialogClassName="modal-left">
        <Modal.Header closeButton>
          <Modal.Title>{props.model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  {props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default CardComp;
