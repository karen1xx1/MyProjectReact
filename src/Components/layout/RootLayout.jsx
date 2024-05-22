import React, { useState , useEffect} from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import "./layout.style.scss"
import Profile from '../StoreElectronic/Profile/Profile.jsx'

const RootLayout = ()  => {

  const [activeLink, setActiveLink] = useState("/store")
  const location = useLocation()

  useEffect(()=>{
    setActiveLink(location.pathname)
    localStorage.setItem("activeLink", location.pathname)
  }, [location])

  useEffect(()=>{
   const storedActiveLink = localStorage.getItem("activeLink")
   if(storedActiveLink){
    setActiveLink(storedActiveLink)
   }
  }, [])
 
  

  return <>
      <header className='header-menu'>
        <Link to="/store" className={activeLink == "/store" ? 'active-page' : ""} id='store' onClick={()=> setActiveLink("store")}>Electonic Store</Link>
        <Link to="/cards" className={activeLink == "/cards" ? 'active-page' : ""} id='cards' onClick={()=> setActiveLink("cards")}>Game Cards</Link>
        <Link to="/calc" className={activeLink == "/calc" ? 'active-page' : ""} id='calc' onClick={()=> setActiveLink("calc")}>Calc</Link>
        <Link to="/XOgame" className={activeLink == "/XOgame" ? 'active-page' : ""} id='XOgame' onClick={()=> setActiveLink("XOgame")}>X-O</Link>
        <Link to="/test" className={activeLink == "/test" ? 'active-page' : ""} id='test' onClick={()=> setActiveLink("test")}>JS Test</Link>
        <Link to="/reg" className={activeLink == "/reg" ? 'active-page' : ""} id='reg' onClick={()=> setActiveLink("reg")}>Registation</Link>
      </header>
      <main>
        <Profile/>
        <Outlet/>
      </main>
  </>
}

export default RootLayout