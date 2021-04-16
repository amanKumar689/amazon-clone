import React from 'react'
import Product from './Product'
const Products = () => {
    return (
        <div className="products">
        <Product imageUrl={"https://m.media-amazon.com/images/I/512wF3yP3FL._AC_SY200_.jpg"} name={"some_name"} classname="product_" addCart={true}/>
        <Product imageUrl={"https://m.media-amazon.com/images/I/512wF3yP3FL._AC_SY200_.jpg"} name={"some_name"} classname="product_" addCart={true}/>
        <Product imageUrl={"https://m.media-amazon.com/images/I/512wF3yP3FL._AC_SY200_.jpg"} name={"some_name"} classname="product_" addCart={true}/>
        </div>
    )
}

export default Products
