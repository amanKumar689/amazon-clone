import React, { useState ,useEffect } from 'react'
import amazonLogo from '../amazon.png'
import '../Style/Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom' 
import {UseStateValue} from './reducer'
const Header = () => {

    const [state,dispatch] = UseStateValue();
    const [count,setCount] =useState(0)
 
    
    useEffect(() => {
        
       
        setCount(state?.cart.length)
    }, [state])

    return (
        <div className="Header">
         {/* logo  +  searchBar +  Auth + Order + cart  */}
    
     <section className="logo">
        <Link to='/'>  <img src={amazonLogo} alt="amzonLogo"/></Link>
     </section>
     <section className="searchBar">
         <input type="text" id="searchBar"/>
         <button> <SearchIcon/></button>
     </section>
     <section className="Nav">
         <nav>   <b> <Link to="/login" style={{color:"white",textDecoration:"none"}}> Hello, Sign in</Link> </b> </nav>
         <nav> Return & <br/> <b>  Orders </b> </nav>
         <nav> <Link to='/shoppingcart' style={{color:"white",textDecoration:"none"}}> <ShoppingCartIcon  style={{color:"white"}} fontSize={"large"}/> <sub>cart </sub> {count}</Link>  </nav> 
     </section> 
                                                                   
        </div>                       
    )
}

export default Header
