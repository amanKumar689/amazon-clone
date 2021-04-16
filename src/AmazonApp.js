import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import ShoppingCart from './components/ShoppingCart'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ProductDescription from './components/ProductDescription'
import Products_by_cat from './components/Products_by_cat'
import React, { createContext , useReducer} from 'react'
import {reducer,IntialState,cartContext} from './components/reducer'

const AmazonApp = ()=> {
  return (
    
 
  <cartContext.Provider value={ useReducer(reducer,IntialState)}> 
    <div className="amazonApp">
    <Router> 
     
      <Switch>

<Route path='/' exact={true}>
  
 
     <Header/>
     <Body/> 
     <Footer/>
</Route>
<Route path='/login'>
  {/* <Login/> */}<h1> Login page</h1>
</Route>
<Route path='/shoppingcart'>
  <ShoppingCart/>
</Route>
<Route path='/product_desc'>
  <ProductDescription/>
</Route>
<Route path='/products_by_category'>
  <Products_by_cat/>
</Route>
      </Switch>
    </Router>
    </div>
    </cartContext.Provider>
  );
}

export default AmazonApp;
