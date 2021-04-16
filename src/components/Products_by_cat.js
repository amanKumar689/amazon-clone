import React from 'react'
import Products from './Products'
import Header from './Header'
import '../Style/product_by_cat.css'
const Products_by_cat = () => {
    return (
        <> 
        <Header/>
        <div className="product_by_cat">
         <h3> Shop by category (Title ) </h3>
                   
         <Products/>
         <Products/>
         

        </div>
    </>)
}

export default Products_by_cat
