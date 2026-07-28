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
                            {/* grid head */}
                            <div className="grid grid-cols-[2fr_1fr_1fr] p-2 border-b">
                                <p>Item</p>
                                <p className="text-center">Quantity</p>
                                <p className="text-right">Total</p>
                            </div>
                            {/* grid body */}
                            <div className="showItems grid grid-cols-[2fr_1fr_1fr] items-center p-5">
                                {/* column 1: */}
                                <div className="flex gap-4 items-center">
                                    <img src={items.img} alt={items.title} className="w-55 h-35" />
                                    <span>
                                        <p>{items.title}</p>
                                    <p>{items.price}</p>
                                    </span>
                                     </div>
                                    {/* column 2: */}
                                    <div className="flex justify-center">
                                        <span className="border flex gap-4 items-center p-2">
                                            <FaMinus className="cursor-pointer" />
                                        <p className="cursor-none text-center">{items.quantity || 1}</p>
                                        <FaPlus className="cursor-pointer" />
                                        </span>
                                    </div>
                                    {/* column 3: */}
                                    <div className="text-right">
                                        <p>{items.price}</p>
                                    </div>
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