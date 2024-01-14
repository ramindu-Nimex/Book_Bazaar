import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import About from './components/About'
import Blog from './components/Blog'
import NavBar from './components/NavBar'
import SingleBook from './pages/Shop/SingleBook'

function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/get_Book/:id' element={<SingleBook/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
