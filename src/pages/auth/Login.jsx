import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userLogin } from '../../redux/action/auth'

const Login = () => {
  const [formInfo, setFormInfo] = useState({email: "", password: ""})
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const {isLogged} = useSelector(state => state.auth)
  const {response} = useSelector(state => state.auth)
  const navigation = useNavigate()
  const dispatch = useDispatch()

    const handleSubmit = async (e)=> {
      e.preventDefault()
        dispatch(userLogin(formInfo))

    }
      useEffect(()=>{
        // console.log(isLogged)
   
      
    // login()
  
    },[])
    if (isLogged) {
      navigation('/dashboard/account')

    }
  return (
    <section className="h-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10 m-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full h-full">
            <div className="block h-full rounded-lg  shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap h-full">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <NavLink to={'/'} className={"text-2xl font-medium text-green-800"}>
                      {/* <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      /> */}
                      Tcointech

                      </NavLink>
                 
                      <h4 className="mb-12 mt-1 pb-1 text-lg font-semibold text-gray-600">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>

                      <p className="mb-4 font-medium">Please login to your account</p>
                      {/* <!--Username input--> */}

                      <div className='w-full text-left'>
                        <label htmlFor="email" className=''>Email</label>
                        <input
                        name='email'
                        type="text"
                        label="Username"
                        onChange={(e) => {setFormInfo({...formInfo, [e.target.name]: e.target.value})}}
                        className="mb-4 border border-gray-200 w-full py-3 px-2"
                      />

                      </div>
                      <div className='text-left'>
                        <label htmlFor="password">Password</label>
                        <input
                        name='password'
                        type="password"
                        onChange={(e) => {setFormInfo({...formInfo, [e.target.name]: e.target.value})}}

                        label="Password"
                        className="mb-4 border w-full py-3 px-2"
                      />
                      </div>
                      {/* <!--Password input--> */}
                   
                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            {loading ? "Loading" : "log In"}
                          </button>

                        {/* <!--Forgot password link--> */}
                        {/* <NavLink to="/auth/password_reset">Forgot password?</NavLink> */}
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        {/* <p className="mb-0 mr-2">Don't have an account?</p> */}
                          {/* <NavLink to={'/auth/login'}
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </NavLink> */}
                        {/* </TERipple> */}
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-purple-700 via-purple-600 to-purple-900"
                  
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just an Investment 
                    </h4>
                    <p className="text-sm text-gray-100 font-medium">
                    transportcointech  is a leading crypto investment platform focused on providing access to diverse digital assets. We're committed to making cryptocurrency investment accessible and transparent for everyone..

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login