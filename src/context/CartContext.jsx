import {createContext,useContext,useState} from 'react'

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [hasUnreadCard,sethasUnreadCard]=useState(false)

    const addToCart =(item)=>{
        setCart((prevCart)=>{
            const existingItem=prevCart.find((cartItem)=>cartItem.id===item.id);
            if(existingItem){
                return prevCart.map((cartItem)=>cartItem.id===item.id?{...cartItem,quantity:(cartItem.quantity||1)+1}:cartItem);
            }
            const newCart= [...prevCart,{...item,quantity:1}]
            return newCart
        })
        sethasUnreadCard(true)
    }

    return(
    <CartContext.Provider value={{cart,setCart,addToCart,hasUnreadCard,sethasUnreadCard}}>
        {children}
    </CartContext.Provider>
)
}

export const useCart=()=>useContext(CartContext)

