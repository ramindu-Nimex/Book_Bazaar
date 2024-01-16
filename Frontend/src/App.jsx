import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import About from './components/About'
import Blog from './components/Blog'
// import NavBar from './components/NavBar'
import SingleBook from './pages/Shop/SingleBook'
// import MyFooter from './components/MyFooter'
import DashboardLayout from './dashboard/DashboardLayout'
import Dashboard from './dashboard/Dashboard'
import UploadBook from './dashboard/UploadBook'
import ManageBook from './dashboard/ManageBook'
import EditBook from './dashboard/EditBook'
import SignUp from './components/SignUp'
// import OAuthProvider from './context/OAuthProvider'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './components/LogIn'

function App() {

  return (
    <>
      <Router>
        {/* <NavBar/> */}
        <div className='min-h-screen'>
          {/* <OAuthProvider> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/get_Book/:id' element={<SingleBook/>}/>
          <Route path='/admin/dashboard' element={<DashboardLayout/>}>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            <Route path='/admin/dashboard/upload' element={<UploadBook/>}/>
            <Route path='/admin/dashboard/manage' element={<ManageBook/>}/>
            <Route path='/admin/dashboard/edit_book/:id' element={<EditBook/>}/>
          </Route>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<LogIn/>} />
        </Routes>
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
          {/* </OAuthProvider> */}
        </div>
        {/* <MyFooter/> */}
      </Router>
    </>
  )
}

export default App
