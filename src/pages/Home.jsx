import coffeeImg from "../assets/coffeeImg.jpg";
import Baristaimg from "../assets/Barista.png";
import { FaArrowRight } from "react-icons/fa6";
const data=[
  {id:1,title:"Vanilla Bean Latte", price:"Rs 560", desc:"smooth espresso blended with steamed milk and real Madagascar vanilla bean syrup.",img:Latte},
  {id:2,title:"Vanilla Bean Latte", price:"Rs 560", desc:"smooth espresso blended with steamed milk and real Madagascar vanilla bean syrup.",img:Latte},
  {id:3,title:"Vanilla Bean Latte", price:"Rs 560", desc:"smooth espresso blended with steamed milk and real Madagascar vanilla bean syrup.",img:Latte},
]
import Latte from '../assets/latte.png'
import Card from '../components/Card'
const Home = () => {
  return (
    <>
      <div
        className="Home_wrapper h-screen w-full bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${coffeeImg})` }}
      >
        <div className="overlay w-full h-screen bg-overlay/40 z-10 absolute inset-0"></div>
        <div className="content z-50 relative text-center justify-center flex flex-col h-full items-center gap-5 text-background font-[var(--font-sans)]">
          <h1 className="text-7xl">Brewed with Intention</h1>
          <p className="max-w-xl text-xl">
            Experience the warmth of carefully crafted coffee in a cozy, modern
            space designed just for you. Your daily ritual, elevated.
          </p>
        <div className="btns flex gap-5">
          <button className="bg-button border-2 border-button w-45 h-15 rounded-4xl cursor-pointer">View our Menu</button>
          <button className="bg-white/10 border-2 border-button rounded-4xl w-35 h-15 backdrop-blur cursor-pointer">Find Us</button>
        </div>
        </div>
      </div>
{/* featured */}
  <div className="menuWrapper px-8 py-20 w-full min-h-screen bg-(--color-background)">
        <div className="heading flex flex-col text-center mb-16 gap-3">
        <h1 className='text-3xl'>Featured Favorites</h1>
            <p>Hand-picked selections from our seasonal menu, crafted to perfection.</p>
        </div>
        <div className="cards flex justify-around">
         { data.map((e)=>(
            <Card key={e.id} {...e}/>
          ))}
        </div>
    </div>
{/* story */}
    <div>
      <div className="p-20 w-full h-screen bg-secondary flex">
        <div className="flex w-full items-center justify-center">
          <div className="w-[45%] mr-11">
            <img className="w-full rounded-2xl" src={Baristaimg} alt="Barista working image" />
          </div>
          <div className="w-[50%]">
            <h1 className="text-4xl mb-6">More Than Just Coffee</h1>
            <p className="text-lg mb-8 text-p">
              At Aura Cafe, we believe in the power of a pause. Our space is
              designed to be your third place—a warm, inviting environment where
              the aroma of fresh espresso meets the comfort of home. Whether
              you're catching up with friends or finding a quiet corner to work,
              you belong here.
            </p>
            <button className="text-button border-b-2 flex items-center gap-2">Read Our Story <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
