import { BsCart } from "react-icons/bs";
import { useCart } from "../context/CartContext";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCart();
  const grandTotal=cart.reduce((total,item)=>{
    return total+(item.price*(item.quantity||1))
  },0)
  if (cart?.length < 1) {
    return (
      <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="h-full items-center border w-full justify-center flex flex-col gap-10">
          <BsCart className="w-20 h-20 text-primary" />
          <h2 className="text-primary text-lg">Your Cart is Empty</h2>
          <button className="border rounded py-3 px-5 bg-button text-background cursor-pointer">
            Shop Our Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12.5 px-30 bg-[#F3F5F6] min-h-[90vh]">
      <div className="w-full">
        <h1 className="text-primary text-xl mb-8">My Order</h1>
        <div className="flex xl:gap-40">
          <div className="flex flex-col gap-4">
            {cart.map((items, index) => {
            return (
              <div key={index} className="border border-[#8D6E6380] w-198 h-56.75 shadow-[6px_6px_8px_rgba(0,0,0,0.4)]">
                {/* grid head */}
                <div className="grid grid-cols-[2fr_1fr_1fr] p-2 border-b border-[#8D6E6380]">
                  <p>Item</p>
                  <p className="text-center">Quantity</p>
                  <p className="text-right">Total</p>
                </div>
                {/* grid body */}
                <div className="showItems grid grid-cols-[2fr_1fr_1fr] items-center p-5">
                  {/* column 1: */}
                  <div className="flex gap-4 items-center">
                    <img
                      src={items.img}
                      alt={items.title}
                      className="w-55 h-35"
                    />
                    <span>
                      <p>{items.title}</p>
                      <p>Rs {items.price}</p>
                    </span>
                  </div>
                  {/* column 2: */}
                  <div className="flex justify-center">
                    <span className="border flex gap-4 items-center p-2">
                      <FaMinus
                        onClick={()=>decrementQuantity(items.id)}
                        className="cursor-pointer"
                      />
                      <p className="cursor-none text-center">
                        {items.quantity || 1}
                      </p>
                      <FaPlus
                        onClick={() => incrementQuantity(items.id)}
                        className="cursor-pointer"
                      />
                    </span>
                  </div>
                  {/* column 3: */}
                  <div className="text-right">
                    <p>Rs {items.price*(items.quantity)}</p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
          <div className="flex flex-col border border-button w-100 h-90 shadow-[6px_6px_8px_rgba(0,0,0,0.4)]">
            <div className="flex justify-between h-[10%] items-center border-b border-button px-4 mb-25">
                <p>Total</p>
                <p>Rs {grandTotal}</p>
            </div>
            <div className="flex justify-center">
                <button className="border w-60 p-3 font-medium bg-button text-background cursor-pointer">Checkout</button>
            </div>
<div className="flex justify-center mt-9 mb-2">
<p>100% Safe Payment</p>
</div>
<div className="image flex items-center justify-center gap-5">
<img className="w-20" src="khalti.png" alt="" />
<img className="w-20" src="eSewa.png" alt="" />
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
