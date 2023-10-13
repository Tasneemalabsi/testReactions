import { useState} from  'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function CardComp( props){
  let [show, setShow] = useState(false);

    function handleShow(){
     setShow(!show)

    }
    return(
        <>
            <Card style={{ width: '18rem' , margin: '10px'  }}>
              <Card.Img variant="top" src={props.image} style={{padding:'5px'}}/>
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
                
                <Button variant="danger">Danger</Button>{' '}

              </Card.Body>
            </Card>
             <Modal show={show} onHide={handleShow}  dialogClassName="modal-left">
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
        )}
      
 


export default CardComp;

