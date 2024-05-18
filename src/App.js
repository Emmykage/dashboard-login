import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Investment from './pages/Investment';
import Resouces from './pages/Resouces';
import Contact from './pages/Contact';
import ABOUT_US from './pages/AboutUs';
import ComplianceRegulation from './pages/ComplianceRegulation';
import AccessInvestment from './pages/AccessInvestment';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordRecover from './pages/auth/PasswordRecover';
import UserLayout from './layout/UserLayout';
import Portfolio from './pages/dashboard/Portfolio';
import Account from './pages/dashboard/Account';
import Document from './pages/dashboard/Document';
import Offering from './pages/dashboard/Offering';
import AccountInvestment from './components/user/Investment';
import History from './components/user/History';
import Pending from './components/user/Pending';
import Identity from './components/user/Identity';
import Profile from './components/user/Profile';
import PaymentMethods from './components/user/PaymentMethods';
import Loader from './components/loader/Loader';
import TransitionsModal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAccount from './components/user/Account';
import Screen from './pages/Screen';
import { useEffect } from 'react';
import { loadOut } from './redux/auth/auth';

function App() {
  const dispatch = useDispatch()
  const {isLogged, loading} = useSelector(state => state.auth)

  const {loader} = useSelector(state => state.app)

  useEffect(()=> {
    dispatch(loadOut())
  }, [])
  return (
    <div className='App relative h-screen font-poppins overflow-y-auto'>

      <Routes>      
        <Route path='/' element={ <><Screen/> </>}/>
      <Route path='/dashboard/portfolio' element={<UserLayout><Portfolio/> </UserLayout>}>
      <Route path='' element={<AccountInvestment/>}/>
      <Route path='investments' element={<AccountInvestment/>}/>
        <Route path='history' element={<History/>}/>
        <Route path='pending' element={<Pending/>}/>
        
      </Route>
      <Route path='/dashboard/account' element={<UserLayout><Account/> </UserLayout>}> 
      <Route path='identity' element={<Identity/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='' index element={<ProfileAccount/>}/>
      <Route path='payment-method' element={<PaymentMethods/>}/>
      </Route>
      <Route path='/dashboard/document' element={<UserLayout><Document/> </UserLayout>}> </Route>
      <Route path='/dashboard/offering' element={<UserLayout><Offering/> </UserLayout>}> </Route>
      <Route path='/auth'>
      <Route path='login' element={ <Login/> }/>
      <Route path='register' element={ <Register/> }/>
      <Route path='password_reset' element={ <PasswordRecover/> }/>

      </Route>


    </Routes>

    {loading &&  <Loader/> }
      {/* <TransitionsModal/> */}
    
    </div>
     );
}

export default App;
