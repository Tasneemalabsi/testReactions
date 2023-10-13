import { useState } from "react";
import CardComp from "./card"

function Cart (){
    let stringedCart = localStorage.getItem("cart");
    let cart = JSON.parse(stringedCart);
    let [cartState, setCartState] = useState(cart)


  
    function handleDelete(index) {
        cart.splice(index, 1);
        let cartCopy = [...cart]
        setCartState(cartCopy)
        let storeData = JSON.stringify(cartCopy);
        localStorage.setItem("cart", storeData);
      }

    return(
        <>
        <div style= {{display:"flex", gap:"20xp", marginTop:"3%"}}>
    {cartState.length !==0 ?( cartState.map(function(item, index){
            return(
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
                  handleDelete={()=>{handleDelete(index)}}/>
              </>
            );
          })
        ) : (
          <h1>Empty Cart!</h1>
        )}
    </div>
        </>
    )
}
export default Cart;