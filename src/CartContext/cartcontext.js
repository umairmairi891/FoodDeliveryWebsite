import { createContext, useContext } from "react";

export const cartContext=createContext({
    addtocart:(product)=>{},
    removefromcart:(id)=>{},
    increaseQuantity:()=>{},
    decreaseQuantity:()=>{},
})

export const useCartContext=()=>{
    return useContext(cartContext)
}

export const CartProvider=cartContext.Provider