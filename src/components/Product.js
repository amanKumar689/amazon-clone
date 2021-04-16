import React, { createContext } from 'react'
import  '../Style/product.css'
import { Link,Redirect} from 'react-router-dom'
import {UseStateValue} from './reducer'
const Product = ({imageUrl,name,classname,addCart}) => {

    const [state,dispatch] = UseStateValue();

   const AddToCart =() =>{
    
   console.log("clicked");

    dispatch({
        type:"ADD",
         item: {
             id:12389,
             name:"PS5 console 2TB with two controller",
             price:"70,000",
             rating:"5"
         }
    })
   

   } 
    return (
        <div className={classname}>
           <Link to='/product_desc'><img src={imageUrl} alt=""/></Link>
           { name && <p> this is full name of product</p> }
           { addCart && <button onClick={()=>{ AddToCart()}}> Add to cart </button>}
        </div>
    )
}

export default Product
