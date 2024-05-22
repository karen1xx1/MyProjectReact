import React from 'react'
import "./pagelog.style.scss"
import Registr from './Registr'
import { useContext } from 'react'
import UserContext from '../ctx/UserCTX'
import "./pagelog.style.scss"

const PageLog = () => {

  const {newUser, userStatus, setNewUser, SetUserStatus} = useContext(UserContext)

  function handleLogOut(){
    SetUserStatus(false)
  }

  
  return (
    <main className='page-for-log'>
           <section>
              {userStatus == false ? <>
              <h2>Registration</h2>
              <Registr setNewUser={setNewUser} SetUserStatus={SetUserStatus}/>
              </> : <>
              <span className='welcome-text'>Welcome {newUser.nick}!!</span>
              <span className='log-out' onClick={handleLogOut}>Log Out</span>
              </>
              }
           </section>
      <div className='formik-image'>
         <img src="../../../public/formik&yup.jpg" alt="" />
      </div>
    </main>
  )
}

export default PageLog