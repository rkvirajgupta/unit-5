import { createContext ,useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
   
    const [cart,setCart]=useState(0);

    const handleChange = (inc) =>{
        setCart(cart+inc);
    }

    return (
        <CartContext.Provider value={{cart, handleChange}}>  
         {/* you can stor any value here in value box like function arr obj etc. but only once  */}
               
             {/*you can store like this also {{a:{},b:{}}} */}
             {children}
        </CartContext.Provider>
    )
}