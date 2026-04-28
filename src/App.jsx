
import './App.css'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Featured from './pages/Featured'
import Story from './pages/Story'
import Footer from './pages/Footer'
function App() {
  return (
    <>
      <div className="main w-full">
        <NavBar/>
          <Home/>
          <Featured/>
          <Story/>
          <Footer/>
      </div>
    </>
  )
}

export default App
