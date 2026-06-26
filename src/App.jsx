
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
function App() {
  return (
    <>
      <div className="main w-full">
        <BrowserRouter>
<Routes>
<Route element={<Layout/>}>
<Route path="/" element={<Home/>}/>
<Route path="/menu" element={<Menu/>}/>
</Route>
</Routes>
</BrowserRouter>
      </div>
    </>
  )
}

export default App
