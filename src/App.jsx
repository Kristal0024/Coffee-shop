
import './App.css'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Featured from './pages/Featured'
import Story from './pages/Story'
function App() {
  return (
    <>
      <div className="main w-full">
        <NavBar/>
          <Home/>
          <Featured/>
          <Story/>
      </div>
    </>
  )
}

export default App
