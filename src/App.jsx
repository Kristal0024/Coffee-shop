
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <div className="main w-full">
<CartProvider>
          <BrowserRouter>
<Routes>
<Route element={<Layout/>}>
<Route path="/" element={<Home/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path='/cart' element={<Cart/>} />
</Route>
</Routes>
</BrowserRouter>
</CartProvider>
      </div>
    </>
  )
}

export default App
