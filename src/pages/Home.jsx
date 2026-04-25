import coffeeImg from "../assets/coffeeImg.jpg";

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
    </>
  );
};

export default Home;
