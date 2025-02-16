import './App.css'
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import { Footer, Header } from './components';
function App() {

  const [loading,setLoading] = React.useState(true);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const userData = authService.getCurrentUser();

    if(userData){
      dispatch(login({userData}));
    }else{
      dispatch(logout());
    }
    
    setLoading(false);
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>

        <main>
          {/* <Outlet/> */}
        </main>

        <Footer/>
      </div>
    </div>
  )
}

export default App
