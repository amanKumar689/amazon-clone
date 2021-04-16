import React ,{useContext} from 'react'
import '../Style/category.css'
import {Link} from 'react-router-dom'
import {UseStateValue} from './reducer'
const Category = ({imageSrc,title}) => {
   
    return (
        <div className="category">
           {title}<br/> <br/>
            <Link to='/products_by_category'> <img src={imageSrc} alt="image" style={{marginBottom:"10px"}}/></Link>           
            <Link to='/products_by_category' style={{color:"#007185",textDecoration:"none"}}> Explore now </Link>
        </div>
    )
}

export default Category
