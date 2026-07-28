import { BsCart } from "react-icons/bs";
import {useCart} from '../context/CartContext'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";



const Cart=()=>{
    const {cart}=useCart()
    if(cart?.length < 1){
        return(
            <div className="w-[100%] h-[90vh] flex justify-center items-center">
                <div className="h-full items-center border w-full justify-center flex flex-col gap-10">
                    <BsCart className="w-20 h-20 text-[#3E2723]" />
                    <h2 className="text-primary text-lg">Your Cart is Empty</h2>
                    <button className="border rounded py-3 px-5 bg-button text-background cursor-pointer">Shop Our Products</button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-[100%] py-[50px] px-[120px] bg-[#F3F5F6] min-h-[90vh]">
           <div className="w-full">
            <h1 className="text-primary text-xl mb-8">My Order</h1>
            <div className="flex flex-col gap-4">
                {cart.map((items,index)=>{
                    return (
                        <div key={index} className="border w-[792px] h-[227px]">
                            <span className="flex justify-between p-2 border-b">
                                <p>Item</p>
                                <p className="ml-60">Quantity</p>
                                <p>Total</p>
                            </span>
                            <div className="showItems p-5">
                                <span className="flex gap-3 items-center">
                                    <img src={items.img} alt={items.title} className="w-55 h-35" />
                                    <span>
                                        <p>{items.title}</p>
                                    <p>{items.price}</p>
                                    </span>
                                    <span className="border flex gap-3 items-center p-1 ml-21">
                                        <FaMinus className="cursor-pointer" />
                                        <p className="cursor-none">{items.quantity || 1}</p>
                                        <FaPlus className="cursor-pointer" />
                                    </span>
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div className=""></div>
            </div>
            </div>

        </div>
    )
}

export default Cart