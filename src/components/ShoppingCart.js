import React, { useEffect ,useState } from 'react'
import Header from './Header'
import '../Style/shoppingCart.css'
import {UseStateValue} from './reducer'
const ShoppingCart = () => {

    
    const [state,dispatch] = UseStateValue();
    const [total,setTotal] =useState(null)
    
    console.log("State:::---",state);
    useEffect(()=>{
        let temp =0
         state?.cart.map(val=>{
             console.log(val.price);
             temp+= val.price;
         })
         setTotal(temp);

     

    },[state])
    const removeFromcart = (id)=>{

         
    dispatch({
        type:"SUB",
         id:id
    })
              
    }

    return (
        <>
        <Header/>
        <div className="shoopingCartBox">
            {/* Shooping cart  */}
            <hr/>
   <div className="shoppingCart">
   
    {   
      state?.cart.length!=0 ? ( state?.cart.map((EachProduct,index)=>(

            <div className="cartProduct" key={index}>
        <img src="https://m.media-amazon.com/images/I/41XMZLW8zbL._AC_SY200_.jpg" alt=""/>
        <p>  {EachProduct.id} </p> 
        <p>  INR {EachProduct.price}</p> 
         <button className="remove" onClick={()=>{removeFromcart(EachProduct.id)}}> remove from basket</button> 
        </div>
        )) ): <h2> Your Shopping Cart is empty</h2>
    }
       
   </div>


   <div className="checkoutBox">
   {
        state.cart.length!=0 &&(
   
   <div className="checkout">

       Subtotal(1 item) : <br/> INR { total } <br/>
       <button> Proceed to checkout</button>
   </div>
        )
   }
   </div>
        </div>
  </>  )
}

export default ShoppingCart
