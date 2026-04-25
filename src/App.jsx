
import './App.css'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Featured from './pages/Featured'
function App() {
  return (
    <>
      <div className="main w-full">
        <NavBar/>
          <Home/>
          <Featured/>
      </div>
    </>
  )
}

export default App
