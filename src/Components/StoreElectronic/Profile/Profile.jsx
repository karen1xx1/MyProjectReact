import React from 'react'
import "./profile.style.scss"
import { useContext } from 'react'
import UserContext from '../../ctx/UserCTX'
import { useState } from 'react'

const Profile = () => {

  const {newUser, userStatus} = useContext(UserContext)
  const [userInfo, setUserInfo] = useState("-100")
  return <>
    {userStatus && <>
      <div className='profil-avatar' onClick={()=> setUserInfo("0")}>
      <span>{newUser?.nick[0]}</span>
      </div>
    </>}
  <article className='profile-box-active' style={{
    transform: "translateX(" + userInfo + "%)"
    }}>
      <span className='close-user-info' onClick={()=> setUserInfo("-100")}>X</span>
      <ul className='user-data'>
        <li>Name: {newUser?.nick}</li>
        <li>Age: {newUser?.age}</li>
        <li>Email: {newUser?.email}</li>
        <li>Gender: {newUser?.selected}</li> 
      </ul>
  </article>
  </>
}

export default Profile