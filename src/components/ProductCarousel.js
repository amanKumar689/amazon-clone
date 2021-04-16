import React from 'react'
import '../Style/productCarousel.css'
import Product from './Product'

const ProductCarousel = ({imageUrl}) => {
    return (
        <>
        
           <p style={{border:"2px solid white"}}>  Title </p>

       
        <div className="productCarousel">
            
                

            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
            <Product imageUrl={imageUrl} classname="product"/>
          
        </div>
          </> 
    )
}

export default ProductCarousel
