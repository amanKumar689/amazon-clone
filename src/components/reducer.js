import { useContext ,createContext } from "react";

const IntialState = {
     cart:[
         {
             id:1245459,
             name:"PS5 console 2TB with two controller",
             price:70000,
             rating:"5"
         },
         {
             id:211401,
             name:"PS5 console 2TB with two controller",
             price:70000,
             rating:"5"
         },
         {
             id:211101,
             name:"PS5 console 2TB with two controller",
             price:70000,
             rating:"5"
         },
         {
             id:298101,
             name:"PS5 console 2TB with two controller",
             price:70000,
             rating:"5"
         }
     ]
     
}


// Simply a function(reducer) run  when someOne dispatch or dispatch is nothing but a object too 

// action is nothing just a object that we have passed in dispatch function 
// state just intialState that we passed in useReducer function

function reducer(state,action)
{
 
   console.log("Dispatch",action);
   let result
     
 switch(action.type)
 {  
     case 'ADD' :
 
 result =state?.cart.findIndex(cartValue=> JSON.stringify(cartValue) === JSON.stringify(action.item)) 
        
      return ( result < 0 ? {...state,cart:[...state.cart,action.item]}: {...state} )
       
         case 'SUB':
         
             result =state?.cart.findIndex(cartValue=>cartValue.id === action.id) 
             const should_remove = [...state.cart].splice(result,1)
             const  FilteredOut =  state.cart.filter(val=>val.id!=should_remove[0].id &&val)
             console.log("After removed",FilteredOut);
             return {...state,cart:FilteredOut}
           break;
            default :
         console.log("I think you dispatched wrong term");

 }


}


const cartContext = createContext();
const UseStateValue = () => useContext(cartContext);

export {reducer,IntialState ,UseStateValue,cartContext}