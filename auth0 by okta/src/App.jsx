import { useState } from 'react'
import {useAuth0}  from "@auth0/auth0-react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {user,loginWithRedirect,isAuthenticated,logout} =useAuth0();

  console.log("Current User", user);
  return (
    <>
    <div>
      {isAuthenticated && <h3>{user.name}</h3>}
      {
        isAuthenticated? <button onClick={(e)=>logout()}>Log Out</button> :
        <button onClick={(e)=>loginWithRedirect()}>Hello</button>
      }
    </div>
    </>
  )
}

export default App
