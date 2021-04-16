import React from 'react';
import  '../Style/Body.css'
import Banner from './Banner'
import Category from './Category'
import ProductCarousel from './ProductCarousel'
const image_1 = 'https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
const image_2 ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
const image_3 = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
const image_4 ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
const image_5 ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg'
const image_6 ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg'


const Body = () => {

  {/*  useReducer have some magic first intialState after that updated version */}
    return (
    

        <div className="Body">

        <Banner/>
        <div className="categoryBox">

         <Category  cat="category_name" title="some_title" imageSrc={image_1}/> 
         <Category  cat="category_name" title="some_title" imageSrc={image_2}/> 
         <Category  cat="category_name" title="some_title" imageSrc={image_3}/> 
         <Category  cat="category_name" title="some_title" imageSrc={image_4}/> 
         <Category  cat="category_name" title="some_title" imageSrc={image_5}/> 
         <Category  cat="category_name" title="some_title" imageSrc={image_6}/> 
        </div>
        <div className="productCarouselBox">

        <ProductCarousel imageUrl={'https://m.media-amazon.com/images/I/512wF3yP3FL._AC_SY200_.jpg'}/>
        <ProductCarousel imageUrl={'https://m.media-amazon.com/images/I/41XMZLW8zbL._AC_SY200_.jpg'}/>
        <ProductCarousel imageUrl={'https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg'}/>
       
        </div>
        </div>
    )
}

export default Body
