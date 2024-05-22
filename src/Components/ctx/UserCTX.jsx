import React from 'react'
import { createContext, useState } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [newUser, setNewUser] = useState()
    const [userStatus, SetUserStatus] = useState(false)

    return <UserContext.Provider value={{newUser, userStatus, setNewUser, SetUserStatus}}>
        {children}
    </UserContext.Provider>
}

export default UserContext