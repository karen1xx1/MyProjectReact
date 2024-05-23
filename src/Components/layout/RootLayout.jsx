import React, { useState , useEffect} from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import "./layout.style.scss"
import Profile from '../StoreElectronic/Profile/Profile.jsx'

const RootLayout = ()  => {

  const [activeLink, setActiveLink] = useState("/")
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
        <Link to="/" className={activeLink == "/" ? 'active-page' : ""} id='/' onClick={()=> setActiveLink("/")}>Electonic Store</Link>
        <Link to="/cards" className={activeLink == "/cards" ? 'active-page' : ""} id='cards' onClick={()=> setActiveLink("cards")}>Game Cards</Link>
        <Link to="/calc" className={activeLink == "/calc" ? 'active-page' : ""} id='calc' onClick={()=> setActiveLink("calc")}>Calc</Link>
        <Link to="/XOgame" className={activeLink == "/XOgame" ? 'active-page' : ""} id='XOgame' onClick={()=> setActiveLink("XOgame")}>X-O</Link>
        <Link to="/test" className={activeLink == "/test" ? 'active-page' : ""} id='test' onClick={()=> setActiveLink("test")}>JS Test</Link>
        <Link to="/reg" className={activeLink == "/reg" ? 'active-page' : ""} id='reg' onClick={()=> setActiveLink("reg")}>Registation</Link>
      </header>
        <details className='small-menu'>
          <summary>Menu</summary>
          <ul>
            <li><Link to="/" className={activeLink == "/" ? 'active-page' : ""} id='/' onClick={()=> setActiveLink("/")}>Electonic Store</Link></li>
            <li><Link to="/cards" className={activeLink == "/cards" ? 'active-page' : ""} id='cards' onClick={()=> setActiveLink("cards")}>Game Cards</Link></li>
            <li><Link to="/calc" className={activeLink == "/calc" ? 'active-page' : ""} id='calc' onClick={()=> setActiveLink("calc")}>Calc</Link></li>
            <li><Link to="/XOgame" className={activeLink == "/XOgame" ? 'active-page' : ""} id='XOgame' onClick={()=> setActiveLink("XOgame")}>X-O</Link></li>
            <li><Link to="/test" className={activeLink == "/test" ? 'active-page' : ""} id='test' onClick={()=> setActiveLink("test")}>JS Test</Link></li>
            <li><Link to="/reg" className={activeLink == "/reg" ? 'active-page' : ""} id='reg' onClick={()=> setActiveLink("reg")}>Registation</Link></li>
          </ul>
        </details>
      <main>
        <Profile/>
        <Outlet/>
      </main>
  </>
}

export default RootLayout