import React from 'react'
import Header from './Header'
import '../Style/product_description.css'
import {UseStateValue} from './reducer'

const ProductDescription = () => {

    
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
        <>
        <Header/>
        <div className="product_description">

           <section>
            <div className="section_first"> 
            <img src="https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg" alt=""/>
            </div>   
               <div className="product_detail">
                   <h4> Product Name </h4> 
                    <p> rating </p><br/>
                    <hr/>
                  <p className="price">  price: INR 3000  </p>       
               <div className="product_manufactured_detail">   
                
                               
               <ul>
           <li> Brand</li>
           <li> Educational Objective</li>
           <li> items Dimensions</li>
           <li>No of Pieces </li>
               </ul>    
                    <ul>
                   <li> 
                    The first Years 
                   </li>
                   <li> Counting skills</li>   
                   <li> 3.3 * 3.25 * 2.4 inches </li>   
                   <li> 1 </li>   
                    </ul> 
               </div>

               <p> About this item
                <ul className="about_item">
                    <li>Some points Some pointsSome pointsSome points</li>
                    Some pointsSome pointsSome pointsSome pointsSome points
                    <li>Some points</li>
                    <li>Some points</li>
                    <li>Some points</li>
                </ul>
                  </p>
                    

               </div>
           </section>
           <section>
           <div className="feature_box">

               <p className='price'> INR 310.87 </p>
               <p style={{fontSize:"14px"}}> +INR 821.56 Shipping & Import Fees Deposit to India </p>
               <p> Arrives: <b> April 28 - May 21</b></p><br/><br/><br/>
               <button onClick={()=>{AddToCart()}}>Add to Cart</button> <br/>
               <button>Buy Now</button>
              
           </div>
           </section>
        </div>
   </> )
}

export default ProductDescription
