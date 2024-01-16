import { Link } from "react-router-dom"
import OAuthProvider from "../context/OAuthProvider"
import MyFooter from "./MyFooter"
import NavBar from "./NavBar"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


const LogIn = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [formData, setFormData] = useState({
      email: '',
      password: ''
    })
    const { email, password } = formData
    const navigate = useNavigate()

    function onChange(e) {
      setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
    }

      async function onSubmit(e) {
         e.preventDefault()
         try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if(userCredential.user) {
               navigate('/')
            }
            toast.success("Successfully logged in")
         } catch (error) {
            toast.error("Something went wrong with the login");
         }
      }
  return (
    <>
    <NavBar/>
    <section className="mt-28 px-4 lg:px-24">
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D" alt="key" className='w-full rounded-2xl'/>
        </div>
        <div  className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="email" id='email' value={email} onChange={onChange} placeholder='E-Mail Address'  className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'/>
            <div className='relative mb-6'>
              <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Password'   className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition  ease-in-out'/>
              {showPassword ? (<BsFillEyeSlashFill className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)}/>) : (<BsFillEyeFill className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)}/>)}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Don't Have an account? 
                <Link to='/sign-up' className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'> SignUp</Link>
              </p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot Password?</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded  shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg  active:bg-blue-800'>Sign In</button>
            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300   after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuthProvider/>
          </form>
        </div>
      </div>
    </section>
    <MyFooter/>
    </>
  )
}

export default LogIn